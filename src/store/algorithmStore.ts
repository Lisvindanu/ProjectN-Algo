import { create } from 'zustand';
import { AlgorithmState, AlgorithmStep, AlgorithmMetadata } from '@/lib/types';

export const useAlgorithmStore = create<AlgorithmState<string>>((set, get) => ({
  // Initial state
  currentStep: 0,
  totalSteps: 0,
  isPlaying: false,
  speed: 600, // normal speed (600ms per step)

  input: '',
  steps: [],
  output: null,
  metadata: null,

  // Actions
  play: () => {
    const { currentStep, totalSteps } = get();
    if (currentStep >= totalSteps - 1) {
      // Reset to beginning if at end
      set({ currentStep: 0, isPlaying: true });
    } else {
      set({ isPlaying: true });
    }
  },

  pause: () => set({ isPlaying: false }),

  reset: () => set({ currentStep: 0, isPlaying: false }),

  nextStep: () => {
    const { currentStep, totalSteps } = get();
    if (currentStep < totalSteps - 1) {
      set({ currentStep: currentStep + 1 });
    }
  },

  prevStep: () => {
    const { currentStep } = get();
    if (currentStep > 0) {
      set({ currentStep: currentStep - 1 });
    }
  },

  setSpeed: (speed: number) => set({ speed }),

  setInput: (input: string) => set({ input }),

  setSteps: (steps: AlgorithmStep[]) =>
    set({
      steps,
      totalSteps: steps.length,
      currentStep: 0
    }),

  setMetadata: (metadata: AlgorithmMetadata) => set({ metadata }),
}));
