import { Clock, HardDrive } from 'lucide-react';
import { useAlgorithmStore } from '@/store/algorithmStore';

export function ComplexityMetrics() {
  const { metadata } = useAlgorithmStore();

  if (!metadata) return null;

  const { complexity } = metadata;

  return (
    <div className="w-full bg-card border border-border rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4">Complexity Analysis</h3>

      <div className="space-y-6">
        {/* Time Complexity */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <div className="flex items-center gap-2">
              <span className="font-medium">Time Complexity:</span>
              <code className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono">
                {complexity.time}
              </code>
            </div>
          </div>
          <p className="text-sm text-muted-foreground pl-7">
            {complexity.timeExplanation}
          </p>
        </div>

        {/* Space Complexity */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <HardDrive className="h-5 w-5 text-primary" />
            <div className="flex items-center gap-2">
              <span className="font-medium">Space Complexity:</span>
              <code className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono">
                {complexity.space}
              </code>
            </div>
          </div>
          <p className="text-sm text-muted-foreground pl-7">
            {complexity.spaceExplanation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComplexityMetrics;
