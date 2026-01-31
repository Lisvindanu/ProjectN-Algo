export interface PalindromeStep {
  step: number;
  description: string;
  left: number;
  right: number;
  comparing: boolean;
  result?: boolean;
  highlights: number[];
}

export function* generatePalindromeSteps(text: string): Generator<PalindromeStep> {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (cleaned.length === 0) {
    yield {
      step: 0,
      description: "Empty string - considered a palindrome",
      left: 0,
      right: 0,
      comparing: false,
      result: true,
      highlights: []
    };
    return;
  }

  let left = 0;
  let right = cleaned.length - 1;
  let step = 0;

  yield {
    step: step++,
    description: "Initialize pointers at both ends",
    left,
    right,
    comparing: false,
    highlights: [left, right]
  };

  while (left < right) {
    yield {
      step: step++,
      description: `Compare '${cleaned[left]}' and '${cleaned[right]}'`,
      left,
      right,
      comparing: true,
      highlights: [left, right]
    };

    if (cleaned[left] !== cleaned[right]) {
      yield {
        step: step++,
        description: "Characters don't match - not a palindrome!",
        left,
        right,
        comparing: false,
        result: false,
        highlights: [left, right]
      };
      return;
    }

    left++;
    right--;

    if (left < right) {
      yield {
        step: step++,
        description: "Characters match - move pointers inward",
        left,
        right,
        comparing: false,
        highlights: [left, right]
      };
    }
  }

  yield {
    step: step++,
    description: "All characters matched - it's a palindrome!",
    left,
    right,
    comparing: false,
    result: true,
    highlights: []
  };
}

export function isPalindrome(text: string): boolean {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
