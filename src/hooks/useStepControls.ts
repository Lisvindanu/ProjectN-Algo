import { useAlgorithmStore } from '@/store/algorithmStore';

/**
 * Custom hook to handle step navigation controls
 * Provides actions and state for controlling algorithm execution
 */
export function useStepControls() {
  const {
    currentStep,
    totalSteps,
    isPlaying,
    speed,
    play,
    pause,
    reset,
    nextStep,
    prevStep,
    setSpeed,
  } = useAlgorithmStore();

  const canPlayOrPause = totalSteps > 0;
  const canGoBack = currentStep > 0;
  const canGoForward = currentStep < totalSteps - 1;
  const isAtStart = currentStep === 0;
  const isAtEnd = currentStep === totalSteps - 1;

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < totalSteps) {
      const store = useAlgorithmStore.getState();
      store.pause();
      // Set the step directly by calculating difference and calling next/prev
      const diff = stepIndex - currentStep;
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          store.nextStep();
        }
      } else if (diff < 0) {
        for (let i = 0; i < Math.abs(diff); i++) {
          store.prevStep();
        }
      }
    }
  };

  return {
    // State
    currentStep,
    totalSteps,
    isPlaying,
    speed,
    canPlayOrPause,
    canGoBack,
    canGoForward,
    isAtStart,
    isAtEnd,

    // Actions
    play,
    pause,
    reset,
    nextStep,
    prevStep,
    setSpeed,
    togglePlayPause,
    goToStep,
  };
}

export default useStepControls;
