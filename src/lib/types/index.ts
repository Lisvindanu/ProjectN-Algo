// Core algorithm types

export interface AlgorithmStep {
  step: number;
  description: string;
  highlights: number[];
  [key: string]: any; // Allow for algorithm-specific properties
}

export interface Complexity {
  time: string;
  space: string;
  timeExplanation: string;
  spaceExplanation: string;
}

export interface AlgorithmMetadata {
  id: string;
  name: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  keyIdeas: string[];
  complexity: Complexity;
  realWorldUses: string[];
  relatedAlgorithms: string[];
}

export interface AlgorithmImplementation {
  language: string;
  code: string;
}

export interface AlgorithmState<T = any> {
  // Execution state
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  speed: number; // ms per step

  // Algorithm data
  input: T;
  steps: AlgorithmStep[];

  // Results
  output: any;
  metadata: AlgorithmMetadata | null;

  // Actions
  play: () => void;
  pause: () => void;
  reset: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setSpeed: (speed: number) => void;
  setInput: (input: T) => void;
  setSteps: (steps: AlgorithmStep[]) => void;
  setMetadata: (metadata: AlgorithmMetadata) => void;
}
