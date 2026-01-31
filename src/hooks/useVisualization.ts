import { useAlgorithmStore } from '@/store/algorithmStore';
import { AlgorithmStep } from '@/lib/types';

/**
 * Custom hook to access visualization data
 * Provides the current step data and related information
 */
export function useVisualization<T extends AlgorithmStep = AlgorithmStep>() {
  const { steps, currentStep, input } = useAlgorithmStore();

  const currentStepData = steps[currentStep] as T | undefined;
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;
  const progress = steps.length > 0 ? ((currentStep + 1) / steps.length) * 100 : 0;

  return {
    currentStepData,
    steps: steps as T[],
    currentStep,
    input,
    isFirstStep,
    isLastStep,
    progress,
  };
}

export default useVisualization;
