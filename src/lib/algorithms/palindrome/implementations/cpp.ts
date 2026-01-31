export const cppImplementation = `#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>

/**
 * Check if a string is a palindrome using two-pointer technique.
 * @param s Input string to check
 * @return true if palindrome, false otherwise
 */
bool isPalindrome(const std::string& s) {
    // Remove non-alphanumeric characters and convert to lowercase
    std::string cleaned;
    for (char c : s) {
        if (std::isalnum(c)) {
            cleaned += std::tolower(c);
        }
    }

    // Initialize pointers at both ends
    int left = 0;
    int right = cleaned.length() - 1;

    // Move pointers inward, comparing characters
    while (left < right) {
        if (cleaned[left] != cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

int main() {
    std::string testStrings[] = {
        "A man, a plan, a canal: Panama",
        "race a car",
        "Was it a car or a cat I saw?",
        "Madam"
    };

    for (const auto& test : testStrings) {
        bool result = isPalindrome(test);
        std::cout << "'" << test << "' -> "
                  << (result ? "true" : "false") << std::endl;
    }

    return 0;
}`;

export default cppImplementation;
