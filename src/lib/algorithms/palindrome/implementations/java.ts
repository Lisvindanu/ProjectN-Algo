export const javaImplementation = `public class PalindromeChecker {
    /**
     * Check if a string is a palindrome using two-pointer technique.
     * @param s Input string to check
     * @return true if palindrome, false otherwise
     */
    public static boolean isPalindrome(String s) {
        // Remove non-alphanumeric characters and convert to lowercase
        String cleaned = s.toLowerCase().replaceAll("[^a-z0-9]", "");

        // Initialize pointers at both ends
        int left = 0;
        int right = cleaned.length() - 1;

        // Move pointers inward, comparing characters
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    public static void main(String[] args) {
        String[] testStrings = {
            "A man, a plan, a canal: Panama",
            "race a car",
            "Was it a car or a cat I saw?",
            "Madam"
        };

        for (String test : testStrings) {
            boolean result = isPalindrome(test);
            System.out.println("'" + test + "' -> " + result);
        }
    }
}`;

export default javaImplementation;
