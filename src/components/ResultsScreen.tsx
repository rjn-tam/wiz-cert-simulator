import React, { useMemo, useEffect, useRef } from 'react';
import { QuizState, QuizResult } from '../types';
import { motion } from 'motion/react';
import { RotateCcw, Award, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  state: QuizState;
  onRestart: () => void;
}

export function ResultsScreen({ state, onRestart }: Props) {
  const savedRef = useRef(false);

  const { score, rawPercentage, isPass, domainStats, detailedResults } = useMemo(() => {
    let correctCount = 0;
    const domainMap: Record<string, { total: number; correct: number }> = {};
    const details: any[] = [];

    state.questions.forEach(q => {
      if (!domainMap[q.domain]) {
        domainMap[q.domain] = { total: 0, correct: 0 };
      }
      domainMap[q.domain].total += 1;

      const userAns = state.userAnswers[q.id] || [];
      const isCorrect = 
        userAns.length === q.correctAnswers.length && 
        userAns.every(a => q.correctAnswers.includes(a));

      if (isCorrect) {
        correctCount += 1;
        domainMap[q.domain].correct += 1;
      }

      details.push({
        question: q,
        userAns,
        isCorrect
      });
    });

    const rawPercentage = correctCount / state.questions.length;
    const scaledScore = Math.round(300 + (rawPercentage * 700));
    const isPass = scaledScore >= 700;

    return {
      score: scaledScore,
      rawPercentage,
      isPass,
      domainStats: domainMap,
      detailedResults: details
    };
  }, [state]);

  useEffect(() => {
    if (savedRef.current) return;
    savedRef.current = true;

    const result: QuizResult = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      mode: state.mode,
      score,
      rawPercentage,
      domainStats
    };

    try {
      const saved = localStorage.getItem('wiz_cert_results');
      const history = saved ? JSON.parse(saved) : [];
      history.push(result);
      localStorage.setItem('wiz_cert_results', JSON.stringify(history));
    } catch (e) {
      console.error('Failed to save result', e);
    }
  }, [score, rawPercentage, state.mode, domainStats]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="bg-white dark:bg-slate-850 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center relative overflow-hidden transition-colors duration-200">
        <div className={`absolute top-0 left-0 w-full h-2 ${isPass ? 'bg-emerald-500' : 'bg-rose-500'}`} />
        
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 dark:bg-slate-800 mb-6">
          {isPass ? (
            <Award className="w-10 h-10 text-emerald-500 dark:text-emerald-400" />
          ) : (
            <AlertTriangle className="w-10 h-10 text-rose-500 dark:text-rose-400" />
          )}
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          {isPass ? 'Congratulations! You Passed.' : 'Exam Failed. Keep Studying!'}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Passing score is 700. Your estimated scaled score is:
        </p>
        
        <div className="flex items-baseline justify-center gap-2">
          <span className={`text-6xl font-black tracking-tighter ${isPass ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>
            {score}
          </span>
          <span className="text-xl text-slate-400 dark:text-slate-500 font-medium">/ 1000</span>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Domain Performance</h3>
        <div className="space-y-6">
          {Object.entries(domainStats).map(([domain, stats]: [string, any]) => {
            const percentage = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={domain}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{domain}</span>
                  <span className="text-slate-500 dark:text-slate-400">{stats.correct} / {stats.total} ({percentage}%)</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${percentage >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 transition-colors duration-200">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Detailed Review</h3>
        <div className="space-y-6">
          {detailedResults.map((res, idx) => (
            <div key={res.question.id} className="border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0 last:pb-0">
              <div className="flex items-start gap-3 mb-3">
                <div className="mt-1">
                  {res.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-slate-200">
                    <span className="text-slate-400 dark:text-slate-500 mr-2">{idx + 1}.</span>
                    {res.question.text}
                  </p>
                  <div className="mt-3 space-y-2">
                    {res.question.options.map((opt: string, oIdx: number) => {
                      const isUserAns = res.userAns.includes(oIdx);
                      const isCorrectAns = res.question.correctAnswers.includes(oIdx);
                      
                      let badge = null;
                      if (isUserAns && isCorrectAns) badge = <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">Your Answer (Correct)</span>;
                      else if (isUserAns && !isCorrectAns) badge = <span className="text-xs font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-2 py-0.5 rounded">Your Answer (Incorrect)</span>;
                      else if (!isUserAns && isCorrectAns) badge = <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded">Correct Answer</span>;

                      return (
                        <div key={oIdx} className={`text-sm flex items-center gap-2 ${isCorrectAns ? 'text-slate-900 dark:text-slate-200 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${isCorrectAns ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-slate-300 dark:bg-slate-600'}`} />
                          {opt}
                          {badge}
                        </div>
                      );
                    })}
                  </div>
                  {!res.isCorrect && (
                    <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-semibold block mb-1">Explanation:</span>
                      {res.question.explanation}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white rounded-xl font-semibold transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-5 h-5" />
          Start New Simulation
        </button>
      </div>
    </motion.div>
  );
}
