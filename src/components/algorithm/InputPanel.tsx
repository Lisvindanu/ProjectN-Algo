import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useAlgorithmStore } from '@/store/algorithmStore';
import { generatePalindromeSteps } from '@/lib/algorithms/palindrome';

const EXAMPLE_STRINGS = [
  'A man, a plan, a canal: Panama',
  'race a car',
  'Was it a car or a cat I saw?',
  'Madam',
  'racecar',
  'hello',
];

export function InputPanel() {
  const [inputValue, setInputValue] = useState('');
  const { setInput, setSteps, reset } = useAlgorithmStore();

  const handleVisualize = () => {
    if (!inputValue.trim()) return;

    // Reset the algorithm state
    reset();

    // Set the input
    setInput(inputValue);

    // Generate steps
    const steps = Array.from(generatePalindromeSteps(inputValue));
    setSteps(steps);
  };

  const handleExample = (example: string) => {
    setInputValue(example);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVisualize();
    }
  };

  return (
    <div className="w-full bg-card border border-border rounded-lg p-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a string to check (e.g., 'A man, a plan, a canal: Panama')"
            className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          />
          <button
            onClick={handleVisualize}
            disabled={!inputValue.trim()}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Visualize
          </button>
        </div>

        {/* Example strings */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">Quick examples:</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_STRINGS.map((example, index) => (
              <button
                key={index}
                onClick={() => handleExample(example)}
                className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputPanel;
