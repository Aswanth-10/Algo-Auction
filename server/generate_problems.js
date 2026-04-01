const fs = require('fs');
const path = require('path');

const titleMap = {
  "prime": "Check whether a number is Prime",
  "reverse_string": "Reverse a string",
  "array_max": "Find the largest element in an array",
  "fibonacci": "Print Fibonacci series up to N terms",
  "anagram": "Check if two strings are anagrams",
  "longest_substring": "Find the longest substring without repeating characters",
  "count_digits": "Count the number of digits in an integer",
  "palindrome_string": "Check if a string is a palindrome",
  "sum_array": "Calculate the sum of all elements in an array",
  "armstrong": "Check if a number is an Armstrong number",
  "reverse_words": "Reverse the words in a sentence",
  "max_sum_subarray": "Find the maximum sum of a contiguous subarray",
  "factorial": "Calculate the factorial of a number",
  "uppercase_to_lowercase": "Convert uppercase characters to lowercase",
  "array_min": "Find the smallest element in an array",
  "gcd": "Find the Greatest Common Divisor (GCD) of two numbers",
  "remove_duplicates": "Remove duplicate characters from a string",
  "next_palindrome": "Find the smallest palindrome larger than N",
  "even_odd": "Check if a number is even or odd",
  "count_vowels": "Count the number of vowels in a string",
  "reverse_array": "Reverse the elements of an array",
  "leap_year": "Check if a year is a leap year",
  "second_largest": "Find the second largest element in an array",
  "max_product_subarray": "Find the maximum product of a contiguous subarray",
  "sum_of_digits": "Calculate the sum of digits of a number",
  "ascii_value": "Find the ASCII value of a character",
  "multiplication_table": "Print the multiplication table of a number",
  "lcm": "Find the Least Common Multiple (LCM) of two numbers",
  "toggle_case": "Toggle the case of each character in a string",
  "longest_palindromic_substring": "Find the length of the longest palindromic substring",
  "palindrome_number": "Check if a number is a palindrome",
  "string_length": "Calculate the length of a string",
  "average_array": "Calculate the average of all elements in an array",
  "count_primes_range": "Count prime numbers within a given range",
  "first_non_repeating": "Find the first non-repeating character in a string",
  "smallest_number_digit_sum": "Find the smallest number with a given sum of digits",
  "largest_digit": "Find the largest digit in a number",
  "remove_spaces": "Remove all spaces from a string",
  "count_even": "Count the number of even elements in an array",
  "perfect_number": "Check if a number is a perfect number",
  "array_sorted": "Check if an array is sorted in non-decreasing order",
  "trapping_rain_water": "Calculate the amount of water trapped between bars",
  "perfect_square": "Check if a number is a perfect square",
  "concatenate_strings": "Concatenate two strings",
  "count_odd": "Count the number of odd elements in an array",
  "armstrong_range": "Find all Armstrong numbers in a given range",
  "char_frequency": "Calculate the frequency of each character in a string",
  "max_difference": "Find the maximum difference between two elements in an array",
  "sum_natural": "Calculate the sum of the first N natural numbers",
  "vowel_consonant": "Check if a character is a vowel or a consonant",
  "print_reverse": "Print the elements of an array in reverse order",
  "strong_number": "Check if a number is a strong number",
  "string_rotation": "Check if one string is a rotation of another",
  "max_product_two": "Find the maximum product of two elements in an array",
  "sign_check": "Check if a number is positive, negative, or zero",
  "count_words": "Count the number of words in a sentence",
  "print_factors": "Print all factors of a number",
  "reverse_each_word": "Reverse each word in a sentence",
  "digital_root": "Find the digital root of a number",
  "smallest_digit": "Find the smallest digit in a number",
  "ascii_string": "Find the ASCII values of all characters in a string",
  "copy_array": "Copy all elements from one array to another",
  "count_divisors": "Count the number of divisors of a number",
  "palindrome_ignore_case_space": "Check if a string is a palindrome, ignoring case and spaces",
  "three_divisors": "Find all numbers up to N that have exactly three divisors",
  "divisible_by_3_and_5": "Check if a number is divisible by both 3 and 5",
  "chars_per_line": "Print each character of a string on a new line",
  "max_min_diff": "Find the difference between the largest and smallest elements",
  "primes_in_range": "Print all prime numbers in a given range",
  "remove_vowels": "Remove all vowels from a string",
  "next_greater_element": "Find the next greater element for each element in an array",
  "digit_sum_single": "Find the sum of digits until it becomes a single digit",
  "reverse_sentence": "Reverse the order of words in a sentence",
  "count_occurrences": "Count the occurrences of a specific element",
  "automorphic": "Check if a number is an automorphic number",
  "only_digits": "Check if a string contains only digits",
  "max_len_subarray_sum_k": "Find the length of the longest subarray with sum K",
  "area_circle": "Calculate the area of a circle",
  "count_consonants": "Count the number of consonants in a string",
  "find_index": "Find the index of the first occurrence of an element",
  "all_divisors": "Print all divisors of a number in ascending order",
  "differ_one_char": "Check if two strings differ by exactly one character",
  "rotate_array": "Rotate an array to the right by K positions",
  "fibonacci_series": "Generate the first N terms of the Fibonacci series",
  "remove_digits": "Remove all digits from a string",
  "sum_odd_array": "Calculate the sum of all odd integers in an array",
  "happy_number": "Check if a number is a happy number",
  "array_palindrome": "Check if an array is a palindrome",
  "longest_substring_k_distinct": "Find length of longest substring with at most K distinct chars"
};

const jsonFiles = [
  'sets_1_5.json',
  'sets_6_10.json',
  'sets_11_15.json',
  'sets_16_20.json',
  'sets_21_24.json'
];

let allSets = [];
jsonFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    allSets = allSets.concat(content.algo_auction_sets);
  } else {
    // console.warn(`Warning: ${file} not found.`);
  }
});

const problemsBySet = {};

allSets.forEach(set => {
  problemsBySet[set.set_number] = set.questions.map((q, index) => {
    const difficulty = index < 2 ? 'Easy' : index < 4 ? 'Medium' : 'Hard';
    const pointsPerTest = index < 2 ? 1 : index < 4 ? 2 : 3;

    return {
      id: q.question_id,
      title: titleMap[q.type] || q.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      difficulty: difficulty,
      description: q.description || `Implement a solution for: ${titleMap[q.type] || q.type}. Ensure your code handles all test cases correctly.`,
      formula: q.formula || null,
      constraints: "Time Limit: 2.0s\nMemory Limit: 256MB",
      visibleTests: q.visible_tests.map(t => ({
        ...t,
        points: pointsPerTest
      })),
      hiddenTests: q.hidden_tests.map(t => ({
        ...t,
        points: pointsPerTest
      }))
    };
  });
});

const output = `const express = require('express');
const router = express.Router();

const problemSets = ${JSON.stringify(problemsBySet, null, 2)};

// Get all problems across all sets
router.get('/', (req, res) => {
    const allProblems = Object.values(problemSets).flat();
    res.json({ success: true, problems: allProblems });
});

// Get all sets for the admin dropdown
router.get('/sets', (req, res) => {
    const sets = Object.keys(problemSets).map(setId => ({
        setId: setId,
        title: "Set " + setId,
        problems: problemSets[setId]
    }));
    res.json({ success: true, sets });
});

// Get all problems for a specific set
router.get('/sets/:setId', (req, res) => {
    const { setId } = req.params;
    const problems = problemSets[setId];
    
    if (!problems) {
        return res.status(404).json({ error: 'Problem set not found' });
    }
    
    res.json(problems);
});

// Get a specific problem by ID from a set
router.get('/:problemId', (req, res) => {
    const { problemId } = req.params;
    let foundProblem = null;
    
    for (const setId in problemSets) {
        foundProblem = problemSets[setId].find(p => p.id === problemId);
        if (foundProblem) break;
    }
    
    if (!foundProblem) {
        return res.status(404).json({ error: 'Problem not found' });
    }
    
    res.json(foundProblem);
});

module.exports = { router, problemSets, allProblems: Object.values(problemSets).flat() };
`;

const routesDir = path.join(__dirname, 'routes');
if (!fs.existsSync(routesDir)) {
  fs.mkdirSync(routesDir);
}

fs.writeFileSync(path.join(routesDir, 'problems.js'), output);
console.log('Successfully generated routes/problems.js with ' + allSets.length + ' sets and authentic problems!');
