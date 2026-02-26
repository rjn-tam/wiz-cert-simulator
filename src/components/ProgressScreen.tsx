import React, { useEffect, useState } from 'react';
import { QuizResult } from '../types';
import { motion } from 'motion/react';
import { format } from 'date-fns';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, Trash2 } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export function ProgressScreen({ onBack }: Props) {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('wiz_cert_results');
    if (saved) {
      try {
        setResults(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse results', e);
      }
    }
  }, []);

  const clearHistory = () => {
    if (confirm('Are you sure you want to clear all progress history?')) {
      localStorage.removeItem('wiz_cert_results');
      setResults([]);
    }
  };

  // Calculate overall domain performance and length metrics
  const domainAverages: Record<string, { total: number; correct: number }> = {};
  const lengthMetrics: Record<number, number> = {};

  results.forEach(r => {
    let quizLength = 0;
    Object.entries(r.domainStats).forEach(([domain, stats]: [string, any]) => {
      if (!domainAverages[domain]) {
        domainAverages[domain] = { total: 0, correct: 0 };
      }
      domainAverages[domain].total += stats.total;
      domainAverages[domain].correct += stats.correct;
      quizLength += stats.total;
    });

    if (quizLength > 0) {
      lengthMetrics[quizLength] = (lengthMetrics[quizLength] || 0) + 1;
    }
  });

  const chartData = results.map((r, i) => ({
    name: `Attempt ${i + 1}`,
    score: r.score,
    date: format(new Date(r.date), 'MMM d, yyyy')
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
        {results.length > 0 && (
          <button
            onClick={clearHistory}
            className="flex items-center gap-2 text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors font-medium text-sm"
          >
            <Trash2 className="w-4 h-4" />
            Clear History
          </button>
        )}
      </div>

      <div className="bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 transition-colors duration-200">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Progress Tracker</h2>
        
        {results.length === 0 ? (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No quiz history found. Complete a quiz to see your progress!
          </div>
        ) : (
          <div className="space-y-10">
            {/* Chart */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Score History</h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-slate-200 dark:text-slate-700" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 12 }} className="text-slate-500 dark:text-slate-400" />
                    <YAxis domain={[300, 1000]} axisLine={false} tickLine={false} tick={{ fill: 'currentColor', fontSize: 12 }} className="text-slate-500 dark:text-slate-400" />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', backgroundColor: 'var(--color-slate-850, white)' }}
                      labelStyle={{ fontWeight: 'bold' }}
                    />
                    <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4, fill: '#4f46e5' }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Domain Performance */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Overall Domain Performance</h3>
              <div className="space-y-4">
                {Object.entries(domainAverages).map(([domain, stats]) => {
                  const percentage = Math.round((stats.correct / stats.total) * 100);
                  return (
                    <div key={domain}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-slate-700 dark:text-slate-300">{domain}</span>
                        <span className="text-slate-500 dark:text-slate-400">{percentage}%</span>
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

            {/* Quiz Length Metrics */}
            {Object.keys(lengthMetrics).length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quiz Length Preferences</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(lengthMetrics).sort((a, b) => Number(a[0]) - Number(b[0])).map(([length, count]) => (
                    <div key={length} className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">{count}</div>
                      <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {length} Questions
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                        {count === 1 ? 'attempt' : 'attempts'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* History List */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Attempts</h3>
              <div className="space-y-3">
                {[...results].reverse().map((r) => (
                  <div key={r.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-200 flex items-center gap-2">
                        {format(new Date(r.date), 'MMM d, yyyy - h:mm a')}
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 uppercase tracking-wider font-semibold">
                          {r.mode}
                        </span>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Raw Score: {Math.round(r.rawPercentage * 100)}%
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-bold ${r.score >= 700 ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>
                        {r.score}
                      </div>
                      <div className={`text-xs font-semibold uppercase tracking-wider ${r.score >= 700 ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}`}>
                        {r.score >= 700 ? 'Pass' : 'Fail'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
