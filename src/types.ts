export type Domain = 
  | 'Wiz Platform Overview'
  | 'Wiz Implementation'
  | 'Wiz Management'
  | 'Wiz Portal Administration'
  | 'Risk Domains'
  | 'Policies Management';

export interface Question {
  id: number;
  domain: Domain;
  subtopic?: string;
  text: string;
  type: 'single' | 'multiple';
  options: string[];
  correctAnswers: number[];
  explanation: string;
}

export type Mode = 'study' | 'exam';

export interface QuizState {
  status: 'welcome' | 'quiz' | 'results' | 'progress';
  mode: Mode;
  length: number;
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, number[]>;
  showExplanation: boolean;
}

export interface QuizResult {
  id: string;
  date: string;
  mode: Mode;
  score: number;
  rawPercentage: number;
  domainStats: Record<string, { total: number; correct: number }>;
}


