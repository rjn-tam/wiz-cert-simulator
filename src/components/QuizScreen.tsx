import React, { useState, useEffect } from 'react';
import { QuizState } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, AlertCircle } from 'lucide-react';

interface Props {
  state: QuizState;
  onAnswer: (questionId: number, answerIndices: number[]) => void;
  onNext: () => void;
}

export function QuizScreen({ state, onAnswer, onNext }: Props) {
  const question = state.questions[state.currentIndex];
  const [selected, setSelected] = useState<number[]>([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showExamToast, setShowExamToast] = useState(false);

  useEffect(() => {
    setSelected([]);
    setHasSubmitted(false);
    setShowExamToast(false);
  }, [state.currentIndex]);

  const toggleSelection = (index: number) => {
    if (hasSubmitted) return;
    
    if (question.type === 'single') {
      setSelected([index]);
    } else {
      setSelected(prev => 
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      );
    }
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;
    
    onAnswer(question.id, selected);
    setHasSubmitted(true);

    if (state.mode === 'exam') {
      setShowExamToast(true);
      setTimeout(() => {
        onNext();
      }, 1000);
    }
  };

  const isCorrect = (index: number) => question.correctAnswers.includes(index);
  const isSelected = (index: number) => selected.includes(index);

  const getOptionClass = (index: number) => {
    if (!hasSubmitted || state.mode === 'exam') {
      return isSelected(index)
        ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30'
        : 'border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-slate-50 dark:hover:bg-slate-800/50';
    }

    if (isCorrect(index)) {
      return 'border-emerald-500 dark:border-emerald-600 bg-emerald-50 dark:bg-emerald-900/20';
    }
    if (isSelected(index) && !isCorrect(index)) {
      return 'border-rose-500 dark:border-rose-600 bg-rose-50 dark:bg-rose-900/20';
    }
    return 'border-slate-200 dark:border-slate-700 opacity-50';
  };

  const requiredCount = question.type === 'multiple' ? question.correctAnswers.length : 1;
  const canSubmit = selected.length > 0 && (question.type === 'single' || selected.length === requiredCount);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10 dark:ring-indigo-400/20">
            {question.domain}
          </span>
          {question.subtopic && (
            <span className="inline-flex items-center rounded-full bg-slate-50 dark:bg-slate-800 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 ring-1 ring-inset ring-slate-700/10 dark:ring-slate-400/20">
              {question.subtopic}
            </span>
          )}
        </div>
        <span className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
          {state.mode} Mode
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200"
        >
          <div className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              {question.text}
            </h2>
            {question.type === 'multiple' && (
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-6">
                Choose {requiredCount} options.
              </p>
            )}
            {question.type === 'single' && <div className="mb-6"></div>}

            <div className="space-y-3">
              {question.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => toggleSelection(idx)}
                  disabled={hasSubmitted}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 ${getOptionClass(idx)}`}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    {hasSubmitted && state.mode === 'study' ? (
                      isCorrect(idx) ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                      ) : isSelected(idx) ? (
                        <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
                      )
                    ) : (
                      <div className={`w-5 h-5 border-2 flex items-center justify-center ${question.type === 'single' ? 'rounded-full' : 'rounded'} ${isSelected(idx) ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-600 dark:bg-indigo-500' : 'border-slate-300 dark:border-slate-600'}`}>
                        {isSelected(idx) && (
                          <div className={`bg-white ${question.type === 'single' ? 'w-2 h-2 rounded-full' : 'w-2.5 h-2.5 rounded-sm'}`} />
                        )}
                      </div>
                    )}
                  </div>
                  <span className={`text-base ${hasSubmitted && state.mode === 'study' && isCorrect(idx) ? 'text-emerald-900 dark:text-emerald-100 font-medium' : 'text-slate-700 dark:text-slate-300'}`}>
                    {opt}
                  </span>
                </button>
              ))}
            </div>

            {!hasSubmitted && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="px-6 py-3 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:text-slate-500 dark:disabled:text-slate-400 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                >
                  Submit Answer
                </button>
              </div>
            )}

            {showExamToast && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300 font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                Answer recorded. Moving to next question...
              </motion.div>
            )}

            {state.showExplanation && state.mode === 'study' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-8"
              >
                <div className="p-5 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800/50 rounded-xl">
                  <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Explanation
                  </h4>
                  <p className="text-indigo-800 dark:text-indigo-200/80 text-sm leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={onNext}
                    className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
                  >
                    {state.currentIndex === state.questions.length - 1 ? 'View Results' : 'Next Question'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
