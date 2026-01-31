import { useEffect } from 'react';
import { useAlgorithmStore } from '@/store/algorithmStore';

/**
 * Custom hook to handle automatic algorithm execution
 * Advances to the next step when playing
 */
export function useAlgorithmExecution() {
  const { isPlaying, currentStep, totalSteps, speed, nextStep, pause } = useAlgorithmStore();

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        nextStep();
      } else {
        pause();
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, totalSteps, speed, nextStep, pause]);

  return { isPlaying, currentStep, totalSteps };
}

export default useAlgorithmExecution;
