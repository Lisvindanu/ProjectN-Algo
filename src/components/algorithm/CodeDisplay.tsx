import { useState, useEffect } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-cpp';
import { AlgorithmImplementation } from '@/lib/types';

interface CodeDisplayProps {
  implementations: AlgorithmImplementation[];
}

const languageMap: Record<string, string> = {
  Python: 'python',
  JavaScript: 'javascript',
  Java: 'java',
  'C++': 'cpp',
};

export function CodeDisplay({ implementations }: CodeDisplayProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    implementations[0]?.language || 'Python'
  );

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedLanguage]);

  const currentImplementation = implementations.find(
    (impl) => impl.language === selectedLanguage
  );

  const prismLanguage = languageMap[selectedLanguage] || 'javascript';

  return (
    <div className="w-full bg-card border border-border rounded-lg overflow-hidden">
      <Tabs.Root value={selectedLanguage} onValueChange={setSelectedLanguage}>
        {/* Tab List */}
        <Tabs.List className="flex border-b border-border bg-muted/50">
          {implementations.map((impl) => (
            <Tabs.Trigger
              key={impl.language}
              value={impl.language}
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary transition-colors"
            >
              {impl.language}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Tab Content */}
        {implementations.map((impl) => (
          <Tabs.Content
            key={impl.language}
            value={impl.language}
            className="p-4 focus:outline-none"
          >
            {currentImplementation && (
              <pre className="!bg-transparent !p-0 !m-0 overflow-x-auto">
                <code className={`language-${prismLanguage} !text-sm`}>
                  {currentImplementation.code}
                </code>
              </pre>
            )}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}

export default CodeDisplay;
