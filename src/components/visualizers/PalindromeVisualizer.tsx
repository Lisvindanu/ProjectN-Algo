import { motion } from 'framer-motion';
import { useAlgorithmStore } from '@/store/algorithmStore';
import { PalindromeStep } from '@/lib/algorithms/palindrome';

export function PalindromeVisualizer() {
  const { steps, currentStep, input } = useAlgorithmStore();

  if (steps.length === 0 || !input) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        Enter a string to visualize the palindrome check
      </div>
    );
  }

  const stepData = steps[currentStep] as PalindromeStep;
  if (!stepData) return null;

  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, '');
  const chars = cleaned.split('');
  const { left, right, comparing, result } = stepData;

  // Calculate box size and gap dynamically
  const boxSize = 56; // 14 * 4 = 56px (w-14 h-14)
  const gap = 8; // gap-2 = 8px
  const totalWidth = chars.length * boxSize + (chars.length - 1) * gap;

  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-[400px]">
      {/* Character boxes */}
      <div className="flex gap-2 justify-center mb-16 flex-wrap">
        {chars.map((char, index) => {
          const isLeft = index === left;
          const isRight = index === right;
          const isHighlighted = stepData.highlights.includes(index);

          let bgColor = 'bg-gray-200 dark:bg-gray-700';
          if (isLeft || isRight) {
            bgColor = 'bg-blue-500 text-white';
          }
          if (comparing && isHighlighted) {
            bgColor = 'bg-yellow-400 text-black';
          }
          if (result === false && isHighlighted) {
            bgColor = 'bg-red-500 text-white';
          }
          if (result === true && index <= right && index >= left) {
            bgColor = 'bg-green-500 text-white';
          }

          return (
            <motion.div
              key={`${index}-${char}`}
              className={`
                w-14 h-14
                flex items-center justify-center
                text-2xl font-mono font-bold rounded-lg
                ${bgColor}
                ${comparing && isHighlighted ? 'ring-4 ring-yellow-400' : ''}
              `}
              animate={{
                scale: isHighlighted ? 1.2 : 1,
                rotate:
                  comparing && isLeft
                    ? -10
                    : comparing && isRight
                    ? 10
                    : 0,
                y: isHighlighted ? -10 : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              {char}
            </motion.div>
          );
        })}
      </div>

      {/* Pointer indicators */}
      <div
        className="relative h-12 flex justify-center"
        style={{ width: `${totalWidth}px` }}
      >
        {left <= right && (
          <>
            <motion.div
              className="absolute flex flex-col items-center"
              style={{ width: `${boxSize}px` }}
              animate={{
                left: `${left * (boxSize + gap)}px`,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                ↑
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                Left
              </div>
            </motion.div>

            <motion.div
              className="absolute flex flex-col items-center"
              style={{ width: `${boxSize}px` }}
              animate={{
                left: `${right * (boxSize + gap)}px`,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              <div className="text-sm font-semibold text-pink-600 dark:text-pink-400">
                ↑
              </div>
              <div className="text-xs text-pink-600 dark:text-pink-400">
                Right
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Result display */}
      {result !== undefined && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`
            mt-8 px-6 py-3 rounded-lg font-semibold text-lg
            ${
              result
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
            }
          `}
        >
          {result ? '✓ Is a Palindrome!' : '✗ Not a Palindrome'}
        </motion.div>
      )}
    </div>
  );
}

export default PalindromeVisualizer;
