import { useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import * as Slider from '@radix-ui/react-slider';
import { useAlgorithmStore } from '@/store/algorithmStore';

export function ControlPanel() {
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

  // Auto-advance when playing
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

  const canPlayOrPause = totalSteps > 0;
  const canGoBack = currentStep > 0;
  const canGoForward = currentStep < totalSteps - 1;

  // Speed labels
  const speedLabel =
    speed <= 300 ? 'Fast' : speed <= 600 ? 'Normal' : 'Slow';

  return (
    <div className="w-full bg-card border border-border rounded-lg p-6">
      <div className="flex flex-col gap-6">
        {/* Main Controls */}
        <div className="flex items-center justify-center gap-2">
          {/* Previous Step */}
          <button
            onClick={prevStep}
            disabled={!canGoBack}
            className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
            aria-label="Previous step"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Play/Pause */}
          <button
            onClick={isPlaying ? pause : play}
            disabled={!canPlayOrPause}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <>
                <Pause className="h-5 w-5 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-5 w-5 mr-2" />
                Play
              </>
            )}
          </button>

          {/* Next Step */}
          <button
            onClick={nextStep}
            disabled={!canGoForward}
            className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
            aria-label="Next step"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Reset */}
          <button
            onClick={reset}
            disabled={!canPlayOrPause}
            className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
            aria-label="Reset"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {totalSteps > 0 && (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Step {currentStep + 1} / {totalSteps}
            </span>
            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${((currentStep + 1) / totalSteps) * 100}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Speed Control */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            Speed: {speedLabel}
          </span>
          <Slider.Root
            className="relative flex items-center select-none touch-none flex-1 h-5"
            value={[speed]}
            onValueChange={(values) => setSpeed(values[0])}
            min={300}
            max={1000}
            step={100}
            inverted
          >
            <Slider.Track className="bg-secondary relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-primary rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-5 h-5 bg-primary shadow-lg rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Speed"
            />
          </Slider.Root>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
