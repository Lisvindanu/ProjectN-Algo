export const javascriptImplementation = `/**
 * Check if a string is a palindrome using two-pointer technique.
 * @param {string} s - Input string to check
 * @returns {boolean} - True if palindrome, false otherwise
 */
function isPalindrome(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Initialize pointers at both ends
    let left = 0;
    let right = cleaned.length - 1;

    // Move pointers inward, comparing characters
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// Example usage
const testStrings = [
    "A man, a plan, a canal: Panama",
    "race a car",
    "Was it a car or a cat I saw?",
    "Madam"
];

testStrings.forEach(test => {
    const result = isPalindrome(test);
    console.log(\`'\${test}' -> \${result}\`);
});`;

export default javascriptImplementation;
