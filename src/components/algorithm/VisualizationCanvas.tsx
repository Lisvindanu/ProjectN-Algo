import { ReactNode } from 'react';

interface VisualizationCanvasProps {
  children: ReactNode;
}

export function VisualizationCanvas({ children }: VisualizationCanvasProps) {
  return (
    <div className="w-full bg-card border border-border rounded-lg min-h-[500px] flex items-center justify-center">
      {children}
    </div>
  );
}

export default VisualizationCanvas;
