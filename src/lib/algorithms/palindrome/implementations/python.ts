export const pythonImplementation = `def is_palindrome(s: str) -> bool:
    """
    Check if a string is a palindrome using two-pointer technique.

    Args:
        s: Input string to check

    Returns:
        True if palindrome, False otherwise
    """
    # Remove non-alphanumeric and convert to lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())

    # Initialize pointers at both ends
    left, right = 0, len(cleaned) - 1

    # Move pointers inward, comparing characters
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1

    return True


# Example usage
if __name__ == "__main__":
    test_strings = [
        "A man, a plan, a canal: Panama",
        "race a car",
        "Was it a car or a cat I saw?",
        "Madam"
    ]

    for test in test_strings:
        result = is_palindrome(test)
        print(f"'{test}' -> {result}")`;

export default pythonImplementation;
