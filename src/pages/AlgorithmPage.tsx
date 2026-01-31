import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import VisualizationCanvas from '@/components/algorithm/VisualizationCanvas';
import InputPanel from '@/components/algorithm/InputPanel';
import ControlPanel from '@/components/algorithm/ControlPanel';
import CodeDisplay from '@/components/algorithm/CodeDisplay';
import PseudocodeDisplay from '@/components/algorithm/PseudocodeDisplay';
import ComplexityMetrics from '@/components/algorithm/ComplexityMetrics';
import PalindromeVisualizer from '@/components/visualizers/PalindromeVisualizer';
import { useAlgorithmStore } from '@/store/algorithmStore';
import { palindromeMetadata, palindromeImplementations } from '@/lib/algorithms/palindrome';

export function AlgorithmPage() {
  const { algorithmId } = useParams();
  const { setMetadata } = useAlgorithmStore();

  useEffect(() => {
    // For MVP, we only have palindrome
    if (algorithmId === 'palindrome') {
      setMetadata(palindromeMetadata);
    }
  }, [algorithmId, setMetadata]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <div className="flex-1 flex">
        <Sidebar />

        <main className="flex-1 p-6 space-y-6 overflow-y-auto">
          {/* Input Section */}
          <InputPanel />

          {/* Visualization Section */}
          <VisualizationCanvas>
            {algorithmId === 'palindrome' && <PalindromeVisualizer />}
          </VisualizationCanvas>

          {/* Control Panel */}
          <ControlPanel />

          {/* Code Display */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Implementation</h2>
            <CodeDisplay implementations={palindromeImplementations} />
          </div>

          {/* Pseudocode */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Pseudocode</h2>
            <PseudocodeDisplay />
          </div>

          {/* Complexity Metrics */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Performance</h2>
            <ComplexityMetrics />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default AlgorithmPage;
