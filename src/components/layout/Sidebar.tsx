import { useAlgorithmStore } from '@/store/algorithmStore';
import { useUIStore } from '@/store/uiStore';
import { X } from 'lucide-react';

export function Sidebar() {
  const { steps, currentStep, metadata } = useAlgorithmStore();
  const { sidebarOpen, toggleSidebar } = useUIStore();

  if (!sidebarOpen) return null;

  const currentStepData = steps[currentStep];

  return (
    <aside className="w-80 border-r border-border bg-card p-6 overflow-y-auto">
      {/* Close button for mobile */}
      <div className="flex items-center justify-between mb-4 lg:hidden">
        <h2 className="font-semibold text-lg">Algorithm Info</h2>
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-md hover:bg-accent"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Algorithm Metadata */}
      {metadata && (
        <div className="mb-6">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">
            Algorithm
          </h3>
          <h2 className="font-bold text-xl mb-2">{metadata.name}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {metadata.description}
          </p>

          {/* Complexity */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Time:</span>
              <code className="px-2 py-1 bg-muted rounded text-xs">
                {metadata.complexity.time}
              </code>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Space:</span>
              <code className="px-2 py-1 bg-muted rounded text-xs">
                {metadata.complexity.space}
              </code>
            </div>
          </div>
        </div>
      )}

      {/* Current Step */}
      {currentStepData && (
        <div className="mb-6">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">
            Current Step
          </h3>
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-sm font-medium">
              Step {currentStep + 1} of {steps.length}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {currentStepData.description}
            </p>
          </div>
        </div>
      )}

      {/* Key Ideas */}
      {metadata?.keyIdeas && (
        <div>
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">
            Key Ideas
          </h3>
          <ul className="space-y-2">
            {metadata.keyIdeas.map((idea, index) => (
              <li
                key={index}
                className="text-sm flex items-start gap-2"
              >
                <span className="text-primary mt-0.5">•</span>
                <span>{idea}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
