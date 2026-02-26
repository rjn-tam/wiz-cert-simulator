/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { ProgressScreen } from './components/ProgressScreen';
import { questions as allQuestions } from './data/questions';
import { QuizState, Mode, Question } from './types';
import { BarChart2, Moon, Sun } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const [state, setState] = useState<QuizState>({
    status: 'welcome',
    mode: 'study',
    length: 10,
    questions: [],
    currentIndex: 0,
    userAnswers: {},
    showExplanation: false,
  });

  const startQuiz = (mode: Mode, length: number, selectedDomain?: string) => {
    let selected: Question[] = [];

    if (mode === 'exam') {
      // Exam mode: sample questions based on domain weights
      const domainWeights: Record<string, number> = {
        'Wiz Platform Overview': 0.10,
        'Wiz Implementation': 0.2167,
        'Wiz Management': 0.1167,
        'Wiz Portal Administration': 0.1667,
        'Risk Domains': 0.25,
        'Policies Management': 0.15
      };

      // Group all questions by domain
      const questionsByDomain: Record<string, Question[]> = {};
      allQuestions.forEach(q => {
        if (!questionsByDomain[q.domain]) {
          questionsByDomain[q.domain] = [];
        }
        questionsByDomain[q.domain].push(q);
      });

      // Shuffle each domain's questions
      Object.keys(questionsByDomain).forEach(domain => {
        const domainQs = questionsByDomain[domain];
        for (let i = domainQs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [domainQs[i], domainQs[j]] = [domainQs[j], domainQs[i]];
        }
      });

      // Select questions based on weights
      let remainingLength = length;
      const domains = Object.keys(domainWeights);
      
      // First pass: allocate exact numbers based on percentages
      domains.forEach(domain => {
        const targetCount = Math.floor(length * domainWeights[domain]);
        const availableQs = questionsByDomain[domain] || [];
        const selectCount = Math.min(targetCount, availableQs.length);
        
        selected.push(...availableQs.slice(0, selectCount));
        questionsByDomain[domain] = availableQs.slice(selectCount);
        remainingLength -= selectCount;
      });

      // Second pass: fill any remaining slots due to rounding
      if (remainingLength > 0) {
        // Flatten remaining questions and shuffle
        const remainingQs = Object.values(questionsByDomain).flat();
        for (let i = remainingQs.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [remainingQs[i], remainingQs[j]] = [remainingQs[j], remainingQs[i]];
        }
        selected.push(...remainingQs.slice(0, remainingLength));
      }

      // Final shuffle of the selected exam questions
      for (let i = selected.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selected[i], selected[j]] = [selected[j], selected[i]];
      }

    } else {
      // Study mode: standard filtering and shuffling
      let filteredQuestions = allQuestions;
      if (selectedDomain && selectedDomain !== 'All Domains') {
        filteredQuestions = filteredQuestions.filter(q => q.domain === selectedDomain);
      }

      // Fisher-Yates shuffle for true randomization
      const shuffled = [...filteredQuestions];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      
      const actualLength = Math.min(length, shuffled.length);
      selected = shuffled.slice(0, actualLength);
    }
    
    setState({
      status: 'quiz',
      mode,
      length: selected.length,
      questions: selected,
      currentIndex: 0,
      userAnswers: {},
      showExplanation: false,
    });
  };

  const handleAnswer = (questionId: number, answerIndices: number[]) => {
    setState(prev => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [questionId]: answerIndices
      },
      showExplanation: prev.mode === 'study'
    }));
  };

  const nextQuestion = () => {
    setState(prev => {
      if (prev.currentIndex >= prev.questions.length - 1) {
        return { ...prev, status: 'results' };
      }
      return {
        ...prev,
        currentIndex: prev.currentIndex + 1,
        showExplanation: false
      };
    });
  };

  const restart = () => {
    setState({
      status: 'welcome',
      mode: 'study',
      length: 10,
      questions: [],
      currentIndex: 0,
      userAnswers: {},
      showExplanation: false,
    });
  };

  const viewProgress = () => {
    setState(prev => ({ ...prev, status: 'progress' }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-900/30 transition-colors duration-200">
      <header className="bg-white dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10 transition-colors duration-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0b58ff] rounded-lg flex items-center justify-center relative shadow-sm">
              <span className="text-white font-black text-xl tracking-tighter" style={{ fontFamily: 'system-ui, sans-serif', transform: 'scaleY(1.1) scaleX(1.05)' }}>WIZ</span>
              <svg className="absolute top-1.5 right-1 w-2.5 h-2.5" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5 Q5 5 5 0 Q5 5 10 5 Q5 5 5 10 Q5 5 0 5 Z" fill="white"/>
              </svg>
            </div>
            <h1 className="font-semibold text-lg tracking-tight dark:text-white">Wiz Cert Simulator</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {state.status === 'quiz' && (
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Question {state.currentIndex + 1} of {state.questions.length}
              </div>
            )}
            {(state.status === 'welcome' || state.status === 'results') && (
              <button
                onClick={viewProgress}
                className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-300 dark:hover:border-indigo-700 px-4 py-2 rounded-xl"
              >
                <BarChart2 className="w-4 h-4" />
                View Progress
              </button>
            )}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        {state.status === 'welcome' && <WelcomeScreen onStart={startQuiz} />}
        {state.status === 'quiz' && (
          <QuizScreen 
            state={state} 
            onAnswer={handleAnswer} 
            onNext={nextQuestion} 
          />
        )}
        {state.status === 'results' && (
          <ResultsScreen state={state} onRestart={restart} />
        )}
        {state.status === 'progress' && (
          <ProgressScreen onBack={restart} />
        )}
      </main>
    </div>
  );
}
