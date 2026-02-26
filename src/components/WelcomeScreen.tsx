import React, { useState } from 'react';
import { Mode, Domain } from '../types';
import { BookOpen, GraduationCap, Play, Settings, Target } from 'lucide-react';
import { motion } from 'motion/react';

const DOMAINS: (Domain | 'All Domains')[] = [
  'All Domains',
  'Wiz Platform Overview',
  'Wiz Implementation',
  'Wiz Management',
  'Wiz Portal Administration',
  'Risk Domains',
  'Policies Management'
];

const DOMAIN_LABELS: Record<string, string> = {
  'All Domains': 'All Domains',
  'Wiz Platform Overview': 'Wiz Platform Overview (10%)',
  'Wiz Implementation': 'Wiz Implementation (21.67%)',
  'Wiz Management': 'Wiz Management (11.67%)',
  'Wiz Portal Administration': 'Wiz Portal Administration (16.67%)',
  'Risk Domains': 'Risk Domains (25%)',
  'Policies Management': 'Policies Management (15%)'
};

interface Props {
  onStart: (mode: Mode, length: number, selectedDomain?: string) => void;
}

export function WelcomeScreen({ onStart }: Props) {
  const [mode, setMode] = useState<Mode>('study');
  const [length, setLength] = useState<number>(10);
  const [selectedDomain, setSelectedDomain] = useState<string>('All Domains');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-4">
          Wiz Certified Cloud Fundamentals
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Master the Wiz platform. Practice with scenario-based questions covering all exam domains.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-850 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 transition-colors duration-200">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Select Mode
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <button
                onClick={() => setMode('study')}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  mode === 'study' 
                    ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20' 
                    : 'border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className={`w-5 h-5 ${mode === 'study' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span className={`font-semibold ${mode === 'study' ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-700 dark:text-slate-300'}`}>Study Mode</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Immediate feedback and detailed explanations after every question.</p>
              </button>

              <button
                onClick={() => setMode('exam')}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  mode === 'exam' 
                    ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/20' 
                    : 'border-slate-200 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className={`w-5 h-5 ${mode === 'exam' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`} />
                  <span className={`font-semibold ${mode === 'exam' ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-700 dark:text-slate-300'}`}>Exam Mode</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Simulated environment. Silent tracking with final score at the end.</p>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Select Length
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[10, 20, 30, 60].map(num => (
                <button
                  key={num}
                  onClick={() => setLength(num)}
                  className={`py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                    length === num
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-600 dark:bg-indigo-500 text-white'
                      : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {num} Questions
                </button>
              ))}
            </div>
          </div>

          {mode === 'study' && (
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Target className="w-4 h-4" />
                Select Domain Focus
              </h3>
              <select 
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-200 font-medium focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-0 outline-none transition-colors appearance-none cursor-pointer"
              >
                {DOMAINS.map(d => (
                  <option key={d} value={d}>{DOMAIN_LABELS[d]}</option>
                ))}
              </select>
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={() => onStart(mode, length, selectedDomain)}
              className="w-full py-4 px-6 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Play className="w-5 h-5 fill-current" />
              Start Simulator
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
