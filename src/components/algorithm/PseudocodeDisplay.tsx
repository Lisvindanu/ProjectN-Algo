export function PseudocodeDisplay() {
  const pseudocode = [
    '1. FUNCTION isPalindrome(string):',
    '2.   cleaned ← remove non-alphanumeric chars and lowercase',
    '3.   left ← 0',
    '4.   right ← length(cleaned) - 1',
    '5.',
    '6.   WHILE left < right:',
    '7.     IF cleaned[left] ≠ cleaned[right]:',
    '8.       RETURN false',
    '9.     left ← left + 1',
    '10.    right ← right - 1',
    '11.',
    '12.  RETURN true',
  ];

  return (
    <div className="w-full bg-card border border-border rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4">Pseudocode</h3>
      <div className="font-mono text-sm space-y-1">
        {pseudocode.map((line, index) => (
          <div
            key={index}
            className={`${
              line.trim() === ''
                ? 'h-2'
                : 'text-foreground/90 hover:bg-accent/50 px-2 py-1 rounded transition-colors'
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PseudocodeDisplay;
