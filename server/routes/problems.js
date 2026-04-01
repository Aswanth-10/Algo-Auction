const express = require('express');
const router = express.Router();

const problemSets = {
  "1": [
    {
      "id": "S1Q1",
      "title": "Prime Check",
      "difficulty": "Easy",
      "description": "Implement a solution for: prime_check. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "7",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "10",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "2",
          "output": "Prime",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "97",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "49",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "100",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "7919",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "99991",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "25",
          "output": "Not Prime",
          "points": 1
        }
      ]
    },
    {
      "id": "S1Q2",
      "title": "Reverse a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Reverse a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello",
          "output": "olleh",
          "points": 1
        },
        {
          "input": "algo",
          "output": "ogla",
          "points": 1
        },
        {
          "input": "auction",
          "output": "noitcua",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a",
          "points": 1
        },
        {
          "input": "abcde",
          "output": "edcba",
          "points": 1
        },
        {
          "input": "racecar",
          "output": "racecar",
          "points": 1
        },
        {
          "input": "OpenAI",
          "output": "IAnepO",
          "points": 1
        },
        {
          "input": "12345",
          "output": "54321",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "dlroW olleH",
          "points": 1
        },
        {
          "input": "madam",
          "output": "madam",
          "points": 1
        }
      ]
    },
    {
      "id": "S1Q3",
      "title": "Largest Element",
      "difficulty": "Medium",
      "description": "Implement a solution for: largest_element. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "3 1 4 1 5 9 2 6",
          "output": "9",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "30",
          "points": 2
        },
        {
          "input": "5",
          "output": "5",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2 3 4 5",
          "output": "5",
          "points": 2
        },
        {
          "input": "100 200 150 50",
          "output": "200",
          "points": 2
        },
        {
          "input": "-1 -5 -3",
          "output": "-1",
          "points": 2
        },
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        },
        {
          "input": "999 1000 998",
          "output": "1000",
          "points": 2
        },
        {
          "input": "7 7 7",
          "output": "7",
          "points": 2
        },
        {
          "input": "42",
          "output": "42",
          "points": 2
        }
      ]
    },
    {
      "id": "S1Q4",
      "title": "Generate the first N terms of the Fibonacci series",
      "difficulty": "Medium",
      "description": "Implement a solution for: Generate the first N terms of the Fibonacci series. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5",
          "output": "0 1 1 2 3",
          "points": 2
        },
        {
          "input": "1",
          "output": "0",
          "points": 2
        },
        {
          "input": "7",
          "output": "0 1 1 2 3 5 8",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "2",
          "output": "0 1",
          "points": 2
        },
        {
          "input": "3",
          "output": "0 1 1",
          "points": 2
        },
        {
          "input": "10",
          "output": "0 1 1 2 3 5 8 13 21 34",
          "points": 2
        },
        {
          "input": "6",
          "output": "0 1 1 2 3 5",
          "points": 2
        },
        {
          "input": "8",
          "output": "0 1 1 2 3 5 8 13",
          "points": 2
        },
        {
          "input": "4",
          "output": "0 1 1 2",
          "points": 2
        },
        {
          "input": "12",
          "output": "0 1 1 2 3 5 8 13 21 34 55 89",
          "points": 2
        }
      ]
    },
    {
      "id": "S1Q5",
      "title": "Anagram Check",
      "difficulty": "Hard",
      "description": "Implement a solution for: anagram_check. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "listen silent",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "Not Anagram",
          "points": 3
        },
        {
          "input": "triangle integral",
          "output": "Anagram",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "abc cba",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "abc def",
          "output": "Not Anagram",
          "points": 3
        },
        {
          "input": "dust stud",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "rat car",
          "output": "Not Anagram",
          "points": 3
        },
        {
          "input": "aab baa",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "evil vile",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "hello bye",
          "output": "Not Anagram",
          "points": 3
        }
      ]
    },
    {
      "id": "S1Q6",
      "title": "Duplicate Characters In Order",
      "difficulty": "Hard",
      "description": "Implement a solution for: duplicate_characters_in_order. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "programming",
          "output": "r g m",
          "points": 3
        },
        {
          "input": "hello",
          "output": "l",
          "points": 3
        },
        {
          "input": "aabbcc",
          "output": "a b c",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "abcabc",
          "output": "a b c",
          "points": 3
        },
        {
          "input": "abcd",
          "output": "",
          "points": 3
        },
        {
          "input": "mississippi",
          "output": "s i p",
          "points": 3
        },
        {
          "input": "aaa",
          "output": "a",
          "points": 3
        },
        {
          "input": "success",
          "output": "s c",
          "points": 3
        },
        {
          "input": "elephant",
          "output": "e",
          "points": 3
        },
        {
          "input": "interview",
          "output": "i e",
          "points": 3
        }
      ]
    }
  ],
  "2": [
    {
      "id": "S2Q1",
      "title": "Count the number of digits in an integer",
      "difficulty": "Easy",
      "description": "Implement a solution for: Count the number of digits in an integer. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "12345",
          "output": "5",
          "points": 1
        },
        {
          "input": "7",
          "output": "1",
          "points": 1
        },
        {
          "input": "100",
          "output": "3",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "1",
          "points": 1
        },
        {
          "input": "9999",
          "output": "4",
          "points": 1
        },
        {
          "input": "1000000",
          "output": "7",
          "points": 1
        },
        {
          "input": "99",
          "output": "2",
          "points": 1
        },
        {
          "input": "123456789",
          "output": "9",
          "points": 1
        },
        {
          "input": "1",
          "output": "1",
          "points": 1
        },
        {
          "input": "10000",
          "output": "5",
          "points": 1
        }
      ]
    },
    {
      "id": "S2Q2",
      "title": "Check if a string is a palindrome",
      "difficulty": "Easy",
      "description": "Implement a solution for: Check if a string is a palindrome. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "madam",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "hello",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "racecar",
          "output": "Palindrome",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "ab",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "abcba",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "noon",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "level",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "world",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "civic",
          "output": "Palindrome",
          "points": 1
        }
      ]
    },
    {
      "id": "S2Q3",
      "title": "Sum Of Array",
      "difficulty": "Medium",
      "description": "Implement a solution for: sum_of_array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "15",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "60",
          "points": 2
        },
        {
          "input": "7",
          "output": "7",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        },
        {
          "input": "100 200 300",
          "output": "600",
          "points": 2
        },
        {
          "input": "-1 -2 -3",
          "output": "-6",
          "points": 2
        },
        {
          "input": "5 5 5 5",
          "output": "20",
          "points": 2
        },
        {
          "input": "1 1 1 1 1 1 1 1 1 1",
          "output": "10",
          "points": 2
        },
        {
          "input": "50",
          "output": "50",
          "points": 2
        },
        {
          "input": "3 6 9 12",
          "output": "30",
          "points": 2
        }
      ]
    },
    {
      "id": "S2Q4",
      "title": "Armstrong Number",
      "difficulty": "Medium",
      "description": "An Armstrong number (narcissistic number) is a number equal to the sum of its digits each raised to the power of the number of digits.",
      "formula": "Let d = number of digits. Armstrong if: n = sum(digit^d for each digit of n)",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "153",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "10",
          "output": "Not Armstrong",
          "points": 2
        },
        {
          "input": "370",
          "output": "Armstrong",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "371",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "100",
          "output": "Not Armstrong",
          "points": 2
        },
        {
          "input": "407",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "123",
          "output": "Not Armstrong",
          "points": 2
        },
        {
          "input": "9474",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "999",
          "output": "Not Armstrong",
          "points": 2
        }
      ]
    },
    {
      "id": "S2Q5",
      "title": "Reverse the words in a sentence",
      "difficulty": "Hard",
      "description": "Implement a solution for: Reverse the words in a sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "Hello World",
          "output": "World Hello",
          "points": 3
        },
        {
          "input": "the sky is blue",
          "output": "blue is sky the",
          "points": 3
        },
        {
          "input": "I love coding",
          "output": "coding love I",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "one",
          "output": "one",
          "points": 3
        },
        {
          "input": "a b c",
          "output": "c b a",
          "points": 3
        },
        {
          "input": "good morning",
          "output": "morning good",
          "points": 3
        },
        {
          "input": "keep calm and code",
          "output": "code and calm keep",
          "points": 3
        },
        {
          "input": "algo auction",
          "output": "auction algo",
          "points": 3
        },
        {
          "input": "reverse this sentence",
          "output": "sentence this reverse",
          "points": 3
        },
        {
          "input": "a b c d e",
          "output": "e d c b a",
          "points": 3
        }
      ]
    },
    {
      "id": "S2Q6",
      "title": "Leaders In Array",
      "difficulty": "Hard",
      "description": "Implement a solution for: leaders_in_array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "16 17 4 3 5 2",
          "output": "17 5 2",
          "points": 3
        },
        {
          "input": "1 2 3 4 5",
          "output": "5",
          "points": 3
        },
        {
          "input": "5 4 3 2 1",
          "output": "5 4 3 2 1",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "7",
          "output": "7",
          "points": 3
        },
        {
          "input": "10 9 8 7",
          "output": "10 9 8 7",
          "points": 3
        },
        {
          "input": "1 1 1 1",
          "output": "1",
          "points": 3
        },
        {
          "input": "3 7 2 8 1",
          "output": "8 1",
          "points": 3
        },
        {
          "input": "6 5 6 5",
          "output": "6 5",
          "points": 3
        },
        {
          "input": "100 50 25",
          "output": "100 50 25",
          "points": 3
        },
        {
          "input": "2 5 1 8 4",
          "output": "8 4",
          "points": 3
        }
      ]
    }
  ],
  "3": [
    {
      "id": "S3Q1",
      "title": "Calculate the factorial of a number",
      "difficulty": "Easy",
      "description": "Implement a solution for: Calculate the factorial of a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5",
          "output": "120",
          "points": 1
        },
        {
          "input": "0",
          "output": "1",
          "points": 1
        },
        {
          "input": "7",
          "output": "5040",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "1",
          "points": 1
        },
        {
          "input": "3",
          "output": "6",
          "points": 1
        },
        {
          "input": "4",
          "output": "24",
          "points": 1
        },
        {
          "input": "6",
          "output": "720",
          "points": 1
        },
        {
          "input": "10",
          "output": "3628800",
          "points": 1
        },
        {
          "input": "2",
          "output": "2",
          "points": 1
        },
        {
          "input": "8",
          "output": "40320",
          "points": 1
        }
      ]
    },
    {
      "id": "S3Q2",
      "title": "Convert uppercase characters to lowercase",
      "difficulty": "Easy",
      "description": "Implement a solution for: Convert uppercase characters to lowercase. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "HELLO",
          "output": "hello",
          "points": 1
        },
        {
          "input": "WORLD",
          "output": "world",
          "points": 1
        },
        {
          "input": "AlGo",
          "output": "algo",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "A",
          "output": "a",
          "points": 1
        },
        {
          "input": "ABC",
          "output": "abc",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "hello world",
          "points": 1
        },
        {
          "input": "PYTHON",
          "output": "python",
          "points": 1
        },
        {
          "input": "Java",
          "output": "java",
          "points": 1
        },
        {
          "input": "CoDiNg",
          "output": "coding",
          "points": 1
        },
        {
          "input": "XYZ123",
          "output": "xyz123",
          "points": 1
        }
      ]
    },
    {
      "id": "S3Q3",
      "title": "Minimum Element",
      "difficulty": "Medium",
      "description": "Implement a solution for: minimum_element. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "3 1 4 1 5 9",
          "output": "1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "10",
          "points": 2
        },
        {
          "input": "5",
          "output": "5",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2 3 4 5",
          "output": "1",
          "points": 2
        },
        {
          "input": "100 200 50",
          "output": "50",
          "points": 2
        },
        {
          "input": "-1 -5 -3",
          "output": "-5",
          "points": 2
        },
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        },
        {
          "input": "7 7 7",
          "output": "7",
          "points": 2
        },
        {
          "input": "999 1 500",
          "output": "1",
          "points": 2
        },
        {
          "input": "42",
          "output": "42",
          "points": 2
        }
      ]
    },
    {
      "id": "S3Q4",
      "title": "Find the Greatest Common Divisor (GCD) of two numbers",
      "difficulty": "Medium",
      "description": "Find the Greatest Common Divisor of two numbers.",
      "formula": "Euclidean Algorithm: GCD(a, b) = GCD(b, a mod b). Base case: GCD(a, 0) = a",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "12 8",
          "output": "4",
          "points": 2
        },
        {
          "input": "100 75",
          "output": "25",
          "points": 2
        },
        {
          "input": "7 5",
          "output": "1",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1",
          "output": "1",
          "points": 2
        },
        {
          "input": "36 24",
          "output": "12",
          "points": 2
        },
        {
          "input": "17 13",
          "output": "1",
          "points": 2
        },
        {
          "input": "100 10",
          "output": "10",
          "points": 2
        },
        {
          "input": "48 18",
          "output": "6",
          "points": 2
        },
        {
          "input": "56 98",
          "output": "14",
          "points": 2
        },
        {
          "input": "81 27",
          "output": "27",
          "points": 2
        }
      ]
    },
    {
      "id": "S3Q5",
      "title": "Remove duplicate characters from a string",
      "difficulty": "Hard",
      "description": "Implement a solution for: Remove duplicate characters from a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "programming",
          "output": "progamin",
          "points": 3
        },
        {
          "input": "hello",
          "output": "helo",
          "points": 3
        },
        {
          "input": "abcd",
          "output": "abcd",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "aaa",
          "output": "a",
          "points": 3
        },
        {
          "input": "aabbcc",
          "output": "abc",
          "points": 3
        },
        {
          "input": "banana",
          "output": "ban",
          "points": 3
        },
        {
          "input": "mississippi",
          "output": "misp",
          "points": 3
        },
        {
          "input": "abcabc",
          "output": "abc",
          "points": 3
        },
        {
          "input": "success",
          "output": "suce",
          "points": 3
        },
        {
          "input": "a",
          "output": "a",
          "points": 3
        }
      ]
    },
    {
      "id": "S3Q6",
      "title": "Common Elements Ordered",
      "difficulty": "Hard",
      "description": "Implement a solution for: common_elements_ordered. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5\n3 4 5 6 7",
          "output": "3 4 5",
          "points": 3
        },
        {
          "input": "10 20 30\n20 40 30",
          "output": "20 30",
          "points": 3
        },
        {
          "input": "1 2 3\n4 5 6",
          "output": "",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2 3\n1 2 3",
          "output": "1 2 3",
          "points": 3
        },
        {
          "input": "5 3 1\n1 2 3",
          "output": "5 3 1",
          "points": 3
        },
        {
          "input": "7 8 9\n9 8 7",
          "output": "7 8 9",
          "points": 3
        },
        {
          "input": "1 1 2 3\n1 2",
          "output": "1 1 2",
          "points": 3
        },
        {
          "input": "10 20\n30 40",
          "output": "",
          "points": 3
        },
        {
          "input": "2 4 6 8\n4 8",
          "output": "4 8",
          "points": 3
        },
        {
          "input": "100\n100",
          "output": "100",
          "points": 3
        }
      ]
    }
  ],
  "4": [
    {
      "id": "S4Q1",
      "title": "Even Or Odd",
      "difficulty": "Easy",
      "description": "Implement a solution for: even_or_odd. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "4",
          "output": "Even",
          "points": 1
        },
        {
          "input": "7",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "0",
          "output": "Even",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "100",
          "output": "Even",
          "points": 1
        },
        {
          "input": "999",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "2",
          "output": "Even",
          "points": 1
        },
        {
          "input": "13",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "1000000",
          "output": "Even",
          "points": 1
        },
        {
          "input": "11",
          "output": "Odd",
          "points": 1
        }
      ]
    },
    {
      "id": "S4Q2",
      "title": "Count the number of vowels in a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Count the number of vowels in a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello",
          "output": "2",
          "points": 1
        },
        {
          "input": "programming",
          "output": "3",
          "points": 1
        },
        {
          "input": "aeiou",
          "output": "5",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "1",
          "points": 1
        },
        {
          "input": "rhythm",
          "output": "0",
          "points": 1
        },
        {
          "input": "AEIOU",
          "output": "5",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "3",
          "points": 1
        },
        {
          "input": "xyz",
          "output": "0",
          "points": 1
        },
        {
          "input": "beautiful",
          "output": "5",
          "points": 1
        },
        {
          "input": "bcdfg",
          "output": "0",
          "points": 1
        }
      ]
    },
    {
      "id": "S4Q3",
      "title": "Reverse the elements of an array",
      "difficulty": "Medium",
      "description": "Implement a solution for: Reverse the elements of an array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "5 4 3 2 1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "30 20 10",
          "points": 2
        },
        {
          "input": "7",
          "output": "7",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2",
          "output": "2 1",
          "points": 2
        },
        {
          "input": "5 5 5",
          "output": "5 5 5",
          "points": 2
        },
        {
          "input": "1 3 5 7 9",
          "output": "9 7 5 3 1",
          "points": 2
        },
        {
          "input": "100 200 300 400",
          "output": "400 300 200 100",
          "points": 2
        },
        {
          "input": "0",
          "output": "0",
          "points": 2
        },
        {
          "input": "6 4 2",
          "output": "2 4 6",
          "points": 2
        },
        {
          "input": "9 8 7 6 5 4 3 2 1",
          "output": "1 2 3 4 5 6 7 8 9",
          "points": 2
        }
      ]
    },
    {
      "id": "S4Q4",
      "title": "Check if a year is a leap year",
      "difficulty": "Medium",
      "description": "Implement a solution for: Check if a year is a leap year. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "2000",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "1900",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "2024",
          "output": "Leap Year",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "2020",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "2019",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "1600",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "2100",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "2004",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "2023",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "1800",
          "output": "Not Leap Year",
          "points": 2
        }
      ]
    },
    {
      "id": "S4Q5",
      "title": "Find the second largest element in an array",
      "difficulty": "Hard",
      "description": "Implement a solution for: Find the second largest element in an array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "4",
          "points": 3
        },
        {
          "input": "10 20 30",
          "output": "20",
          "points": 3
        },
        {
          "input": "5 5 3",
          "output": "3",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2",
          "output": "1",
          "points": 3
        },
        {
          "input": "100 200 150",
          "output": "150",
          "points": 3
        },
        {
          "input": "7 7 7 7",
          "output": "No second largest",
          "points": 3
        },
        {
          "input": "99 100 1",
          "output": "99",
          "points": 3
        },
        {
          "input": "3 1 4 1 5 9 2 6",
          "output": "6",
          "points": 3
        },
        {
          "input": "50 50 49",
          "output": "49",
          "points": 3
        },
        {
          "input": "1000 999 998",
          "output": "999",
          "points": 3
        }
      ]
    },
    {
      "id": "S4Q6",
      "title": "Balanced Parentheses",
      "difficulty": "Hard",
      "description": "Implement a solution for: balanced_parentheses. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "(())",
          "output": "Balanced",
          "points": 3
        },
        {
          "input": "([{}])",
          "output": "Balanced",
          "points": 3
        },
        {
          "input": "(]",
          "output": "Not Balanced",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "",
          "output": "Balanced",
          "points": 3
        },
        {
          "input": "(",
          "output": "Not Balanced",
          "points": 3
        },
        {
          "input": "((()))",
          "output": "Balanced",
          "points": 3
        },
        {
          "input": "{[}",
          "output": "Not Balanced",
          "points": 3
        },
        {
          "input": "()[]{}",
          "output": "Balanced",
          "points": 3
        },
        {
          "input": "(()",
          "output": "Not Balanced",
          "points": 3
        },
        {
          "input": "{[(())]}",
          "output": "Balanced",
          "points": 3
        }
      ]
    }
  ],
  "5": [
    {
      "id": "S5Q1",
      "title": "Calculate the sum of digits of a number",
      "difficulty": "Easy",
      "description": "Implement a solution for: Calculate the sum of digits of a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "123",
          "output": "6",
          "points": 1
        },
        {
          "input": "9999",
          "output": "36",
          "points": 1
        },
        {
          "input": "100",
          "output": "1",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "5",
          "output": "5",
          "points": 1
        },
        {
          "input": "999",
          "output": "27",
          "points": 1
        },
        {
          "input": "12345",
          "output": "15",
          "points": 1
        },
        {
          "input": "10000",
          "output": "1",
          "points": 1
        },
        {
          "input": "777",
          "output": "21",
          "points": 1
        },
        {
          "input": "1001",
          "output": "2",
          "points": 1
        }
      ]
    },
    {
      "id": "S5Q2",
      "title": "Find the ASCII value of a character",
      "difficulty": "Easy",
      "description": "Implement a solution for: Find the ASCII value of a character. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "A",
          "output": "65",
          "points": 1
        },
        {
          "input": "a",
          "output": "97",
          "points": 1
        },
        {
          "input": "Z",
          "output": "90",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "48",
          "points": 1
        },
        {
          "input": "z",
          "output": "122",
          "points": 1
        },
        {
          "input": "B",
          "output": "66",
          "points": 1
        },
        {
          "input": "m",
          "output": "109",
          "points": 1
        },
        {
          "input": " ",
          "output": "32",
          "points": 1
        },
        {
          "input": "9",
          "output": "57",
          "points": 1
        },
        {
          "input": "M",
          "output": "77",
          "points": 1
        }
      ]
    },
    {
      "id": "S5Q3",
      "title": "Print the multiplication table of a number",
      "difficulty": "Medium",
      "description": "Implement a solution for: Print the multiplication table of a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "2",
          "output": "2 4 6 8 10 12 14 16 18 20",
          "points": 2
        },
        {
          "input": "5",
          "output": "5 10 15 20 25 30 35 40 45 50",
          "points": 2
        },
        {
          "input": "1",
          "output": "1 2 3 4 5 6 7 8 9 10",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "3",
          "output": "3 6 9 12 15 18 21 24 27 30",
          "points": 2
        },
        {
          "input": "7",
          "output": "7 14 21 28 35 42 49 56 63 70",
          "points": 2
        },
        {
          "input": "10",
          "output": "10 20 30 40 50 60 70 80 90 100",
          "points": 2
        },
        {
          "input": "4",
          "output": "4 8 12 16 20 24 28 32 36 40",
          "points": 2
        },
        {
          "input": "9",
          "output": "9 18 27 36 45 54 63 72 81 90",
          "points": 2
        },
        {
          "input": "6",
          "output": "6 12 18 24 30 36 42 48 54 60",
          "points": 2
        },
        {
          "input": "8",
          "output": "8 16 24 32 40 48 56 64 72 80",
          "points": 2
        }
      ]
    },
    {
      "id": "S5Q4",
      "title": "Find the Least Common Multiple (LCM) of two numbers",
      "difficulty": "Medium",
      "description": "Find the Least Common Multiple of two numbers.",
      "formula": "LCM(a, b) = (a * b) / GCD(a, b). Use Euclidean algorithm for GCD first.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "4 6",
          "output": "12",
          "points": 2
        },
        {
          "input": "7 5",
          "output": "35",
          "points": 2
        },
        {
          "input": "12 18",
          "output": "36",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1",
          "output": "1",
          "points": 2
        },
        {
          "input": "3 9",
          "output": "9",
          "points": 2
        },
        {
          "input": "8 12",
          "output": "24",
          "points": 2
        },
        {
          "input": "15 20",
          "output": "60",
          "points": 2
        },
        {
          "input": "100 10",
          "output": "100",
          "points": 2
        },
        {
          "input": "7 11",
          "output": "77",
          "points": 2
        },
        {
          "input": "6 14",
          "output": "42",
          "points": 2
        }
      ]
    },
    {
      "id": "S5Q5",
      "title": "Toggle the case of each character in a string",
      "difficulty": "Hard",
      "description": "Implement a solution for: Toggle the case of each character in a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "Hello",
          "output": "hELLO",
          "points": 3
        },
        {
          "input": "WORLD",
          "output": "world",
          "points": 3
        },
        {
          "input": "aLgO",
          "output": "AlGo",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "A",
          "points": 3
        },
        {
          "input": "Z",
          "output": "z",
          "points": 3
        },
        {
          "input": "AbCdEf",
          "output": "aBcDeF",
          "points": 3
        },
        {
          "input": "programming",
          "output": "PROGRAMMING",
          "points": 3
        },
        {
          "input": "Python3",
          "output": "pYTHON3",
          "points": 3
        },
        {
          "input": "hElLo WoRlD",
          "output": "HeLlO wOrLd",
          "points": 3
        },
        {
          "input": "abc",
          "output": "ABC",
          "points": 3
        }
      ]
    },
    {
      "id": "S5Q6",
      "title": "Longest Consecutive Ones",
      "difficulty": "Hard",
      "description": "Implement a solution for: longest_consecutive_ones. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 1 0 1 1 1 0 1",
          "output": "Position: 4, Length: 3",
          "points": 3
        },
        {
          "input": "0 0 0 0",
          "output": "No consecutive 1s",
          "points": 3
        },
        {
          "input": "1 1 1 1 1",
          "output": "Position: 1, Length: 5",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Position: 1, Length: 1",
          "points": 3
        },
        {
          "input": "0",
          "output": "No consecutive 1s",
          "points": 3
        },
        {
          "input": "1 0 1 0 1",
          "output": "Position: 1, Length: 1",
          "points": 3
        },
        {
          "input": "0 1 1 1 0 1 1",
          "output": "Position: 2, Length: 3",
          "points": 3
        },
        {
          "input": "1 1 0 0 1 1 1 1",
          "output": "Position: 5, Length: 4",
          "points": 3
        },
        {
          "input": "0 0 1 1 1 0 0",
          "output": "Position: 3, Length: 3",
          "points": 3
        },
        {
          "input": "1 1 1 0 1 1",
          "output": "Position: 1, Length: 3",
          "points": 3
        }
      ]
    }
  ],
  "6": [
    {
      "id": "S6Q1",
      "title": "Check if a number is a palindrome",
      "difficulty": "Easy",
      "description": "Implement a solution for: Check if a number is a palindrome. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "121",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "123",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "12321",
          "output": "Palindrome",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "10",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "9",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "1001",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "12345",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "99",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "100",
          "output": "Not Palindrome",
          "points": 1
        }
      ]
    },
    {
      "id": "S6Q2",
      "title": "String Length Without Builtin",
      "difficulty": "Easy",
      "description": "Implement a solution for: string_length_without_builtin. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello",
          "output": "5",
          "points": 1
        },
        {
          "input": "programming",
          "output": "11",
          "points": 1
        },
        {
          "input": "a",
          "output": "1",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "",
          "output": "0",
          "points": 1
        },
        {
          "input": "abcdefghij",
          "output": "10",
          "points": 1
        },
        {
          "input": "algo auction",
          "output": "12",
          "points": 1
        },
        {
          "input": "z",
          "output": "1",
          "points": 1
        },
        {
          "input": "twelve chars",
          "output": "12",
          "points": 1
        },
        {
          "input": "12345",
          "output": "5",
          "points": 1
        },
        {
          "input": "Hello World!",
          "output": "12",
          "points": 1
        }
      ]
    },
    {
      "id": "S6Q3",
      "title": "Average Of Array",
      "difficulty": "Medium",
      "description": "Implement a solution for: average_of_array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "3.0",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "20.0",
          "points": 2
        },
        {
          "input": "5",
          "output": "5.0",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0 0 0",
          "output": "0.0",
          "points": 2
        },
        {
          "input": "2 4 6 8",
          "output": "5.0",
          "points": 2
        },
        {
          "input": "1 3 5 7 9",
          "output": "5.0",
          "points": 2
        },
        {
          "input": "100 200",
          "output": "150.0",
          "points": 2
        },
        {
          "input": "7 7 7 7",
          "output": "7.0",
          "points": 2
        },
        {
          "input": "10 20 30 40 50",
          "output": "30.0",
          "points": 2
        },
        {
          "input": "1 2",
          "output": "1.5",
          "points": 2
        }
      ]
    },
    {
      "id": "S6Q4",
      "title": "Count Primes In Range",
      "difficulty": "Medium",
      "description": "Implement a solution for: count_primes_in_range. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 10",
          "output": "4",
          "points": 2
        },
        {
          "input": "1 20",
          "output": "8",
          "points": 2
        },
        {
          "input": "1 100",
          "output": "25",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1",
          "output": "0",
          "points": 2
        },
        {
          "input": "2 2",
          "output": "1",
          "points": 2
        },
        {
          "input": "1 50",
          "output": "15",
          "points": 2
        },
        {
          "input": "10 30",
          "output": "6",
          "points": 2
        },
        {
          "input": "50 100",
          "output": "10",
          "points": 2
        },
        {
          "input": "1 2",
          "output": "1",
          "points": 2
        },
        {
          "input": "90 100",
          "output": "1",
          "points": 2
        }
      ]
    },
    {
      "id": "S6Q5",
      "title": "First Non Repeating Character",
      "difficulty": "Hard",
      "description": "Implement a solution for: first_non_repeating_character. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "swiss",
          "output": "w",
          "points": 3
        },
        {
          "input": "aabbcc",
          "output": "No unique character",
          "points": 3
        },
        {
          "input": "programming",
          "output": "p",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a",
          "points": 3
        },
        {
          "input": "aab",
          "output": "b",
          "points": 3
        },
        {
          "input": "abcd",
          "output": "a",
          "points": 3
        },
        {
          "input": "aabbccdd",
          "output": "No unique character",
          "points": 3
        },
        {
          "input": "leetcode",
          "output": "l",
          "points": 3
        },
        {
          "input": "abacabad",
          "output": "c",
          "points": 3
        },
        {
          "input": "xxyyzz",
          "output": "No unique character",
          "points": 3
        }
      ]
    },
    {
      "id": "S6Q6",
      "title": "Even Fibonacci Sum",
      "difficulty": "Hard",
      "description": "Find the sum of all even Fibonacci numbers up to (and including) n.",
      "formula": "Generate Fibonacci sequence. Sum only even-valued terms where term <= n.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "10",
          "output": "10",
          "points": 3
        },
        {
          "input": "100",
          "output": "44",
          "points": 3
        },
        {
          "input": "50",
          "output": "44",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "2",
          "output": "2",
          "points": 3
        },
        {
          "input": "1",
          "output": "0",
          "points": 3
        },
        {
          "input": "8",
          "output": "10",
          "points": 3
        },
        {
          "input": "34",
          "output": "44",
          "points": 3
        },
        {
          "input": "1000",
          "output": "798",
          "points": 3
        },
        {
          "input": "144",
          "output": "188",
          "points": 3
        },
        {
          "input": "400",
          "output": "188",
          "points": 3
        }
      ]
    }
  ],
  "7": [
    {
      "id": "S7Q1",
      "title": "Find the largest digit in a number",
      "difficulty": "Easy",
      "description": "Implement a solution for: Find the largest digit in a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "3947",
          "output": "9",
          "points": 1
        },
        {
          "input": "12345",
          "output": "5",
          "points": 1
        },
        {
          "input": "7",
          "output": "7",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "999",
          "output": "9",
          "points": 1
        },
        {
          "input": "100",
          "output": "1",
          "points": 1
        },
        {
          "input": "1234567890",
          "output": "9",
          "points": 1
        },
        {
          "input": "55",
          "output": "5",
          "points": 1
        },
        {
          "input": "19",
          "output": "9",
          "points": 1
        },
        {
          "input": "321",
          "output": "3",
          "points": 1
        }
      ]
    },
    {
      "id": "S7Q2",
      "title": "Remove all spaces from a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Remove all spaces from a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello world",
          "output": "helloworld",
          "points": 1
        },
        {
          "input": "  algo  auction  ",
          "output": "algoauction",
          "points": 1
        },
        {
          "input": "no spaces",
          "output": "nospaces",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": " ",
          "output": "",
          "points": 1
        },
        {
          "input": "a b c",
          "output": "abc",
          "points": 1
        },
        {
          "input": "programming is fun",
          "output": "programmingisfun",
          "points": 1
        },
        {
          "input": "hello",
          "output": "hello",
          "points": 1
        },
        {
          "input": "  ",
          "output": "",
          "points": 1
        },
        {
          "input": "one two three",
          "output": "onetwothree",
          "points": 1
        },
        {
          "input": " x y z ",
          "output": "xyz",
          "points": 1
        }
      ]
    },
    {
      "id": "S7Q3",
      "title": "Count Even Numbers",
      "difficulty": "Medium",
      "description": "Implement a solution for: count_even_numbers. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5 6",
          "output": "3",
          "points": 2
        },
        {
          "input": "1 3 5 7",
          "output": "0",
          "points": 2
        },
        {
          "input": "2 4 6 8",
          "output": "4",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "1",
          "points": 2
        },
        {
          "input": "1",
          "output": "0",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "3",
          "points": 2
        },
        {
          "input": "1 2 3 4 5",
          "output": "2",
          "points": 2
        },
        {
          "input": "100 200 300 400 500",
          "output": "5",
          "points": 2
        },
        {
          "input": "7 8 9 10",
          "output": "2",
          "points": 2
        },
        {
          "input": "0 0 0",
          "output": "3",
          "points": 2
        }
      ]
    },
    {
      "id": "S7Q4",
      "title": "Check if a number is a perfect number",
      "difficulty": "Medium",
      "description": "A Perfect Number equals the sum of all its proper divisors (excluding itself).",
      "formula": "Sum all d where 1 <= d < n and n % d == 0. If sum == n, it is Perfect.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "6",
          "output": "Perfect",
          "points": 2
        },
        {
          "input": "28",
          "output": "Perfect",
          "points": 2
        },
        {
          "input": "10",
          "output": "Not Perfect",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Not Perfect",
          "points": 2
        },
        {
          "input": "12",
          "output": "Not Perfect",
          "points": 2
        },
        {
          "input": "496",
          "output": "Perfect",
          "points": 2
        },
        {
          "input": "8128",
          "output": "Perfect",
          "points": 2
        },
        {
          "input": "100",
          "output": "Not Perfect",
          "points": 2
        },
        {
          "input": "4",
          "output": "Not Perfect",
          "points": 2
        },
        {
          "input": "36",
          "output": "Not Perfect",
          "points": 2
        }
      ]
    },
    {
      "id": "S7Q5",
      "title": "Check Sorted Array",
      "difficulty": "Hard",
      "description": "Implement a solution for: check_sorted_array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "Sorted",
          "points": 3
        },
        {
          "input": "5 3 1",
          "output": "Not Sorted",
          "points": 3
        },
        {
          "input": "1 1 2 3",
          "output": "Sorted",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Sorted",
          "points": 3
        },
        {
          "input": "2 1",
          "output": "Not Sorted",
          "points": 3
        },
        {
          "input": "1 2 3 3 4",
          "output": "Sorted",
          "points": 3
        },
        {
          "input": "10 20 15",
          "output": "Not Sorted",
          "points": 3
        },
        {
          "input": "5 5 5 5",
          "output": "Sorted",
          "points": 3
        },
        {
          "input": "1 2 3 2 1",
          "output": "Not Sorted",
          "points": 3
        },
        {
          "input": "0 1 2 3",
          "output": "Sorted",
          "points": 3
        }
      ]
    },
    {
      "id": "S7Q6",
      "title": "Palindrome Words In Sentence",
      "difficulty": "Hard",
      "description": "Implement a solution for: palindrome_words_in_sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "madam racecar hello level",
          "output": "madam racecar level",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "",
          "points": 3
        },
        {
          "input": "civic noon eye",
          "output": "civic noon eye",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a",
          "points": 3
        },
        {
          "input": "abc",
          "output": "",
          "points": 3
        },
        {
          "input": "radar deed tenet coding",
          "output": "radar deed tenet",
          "points": 3
        },
        {
          "input": "mom dad sister brother",
          "output": "mom dad",
          "points": 3
        },
        {
          "input": "refer noon kayak test",
          "output": "refer noon kayak",
          "points": 3
        },
        {
          "input": "apple banana",
          "output": "",
          "points": 3
        },
        {
          "input": "anna bob carol",
          "output": "anna bob",
          "points": 3
        }
      ]
    }
  ],
  "8": [
    {
      "id": "S8Q1",
      "title": "Check if a number is a perfect square",
      "difficulty": "Easy",
      "description": "Implement a solution for: Check if a number is a perfect square. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "9",
          "output": "Perfect Square",
          "points": 1
        },
        {
          "input": "16",
          "output": "Perfect Square",
          "points": 1
        },
        {
          "input": "10",
          "output": "Not Perfect Square",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Perfect Square",
          "points": 1
        },
        {
          "input": "4",
          "output": "Perfect Square",
          "points": 1
        },
        {
          "input": "25",
          "output": "Perfect Square",
          "points": 1
        },
        {
          "input": "0",
          "output": "Perfect Square",
          "points": 1
        },
        {
          "input": "36",
          "output": "Perfect Square",
          "points": 1
        },
        {
          "input": "15",
          "output": "Not Perfect Square",
          "points": 1
        },
        {
          "input": "100",
          "output": "Perfect Square",
          "points": 1
        }
      ]
    },
    {
      "id": "S8Q2",
      "title": "Concatenate two strings",
      "difficulty": "Easy",
      "description": "Implement a solution for: Concatenate two strings. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello world",
          "output": "helloworld",
          "points": 1
        },
        {
          "input": "algo auction",
          "output": "algoauction",
          "points": 1
        },
        {
          "input": "foo bar",
          "output": "foobar",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a b",
          "output": "ab",
          "points": 1
        },
        {
          "input": "abc def",
          "output": "abcdef",
          "points": 1
        },
        {
          "input": "hello  ",
          "output": "hello",
          "points": 1
        },
        {
          "input": "  world",
          "output": "world",
          "points": 1
        },
        {
          "input": "open source",
          "output": "opensource",
          "points": 1
        },
        {
          "input": "12 34",
          "output": "1234",
          "points": 1
        },
        {
          "input": "x y",
          "output": "xy",
          "points": 1
        }
      ]
    },
    {
      "id": "S8Q3",
      "title": "Count Odd Numbers",
      "difficulty": "Medium",
      "description": "Implement a solution for: count_odd_numbers. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "3",
          "points": 2
        },
        {
          "input": "2 4 6 8",
          "output": "0",
          "points": 2
        },
        {
          "input": "1 3 5 7",
          "output": "4",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 2
        },
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "0",
          "points": 2
        },
        {
          "input": "7 8 9 10",
          "output": "2",
          "points": 2
        },
        {
          "input": "1 1 1",
          "output": "3",
          "points": 2
        },
        {
          "input": "2 3 4 5 6",
          "output": "2",
          "points": 2
        },
        {
          "input": "100 101 102 103",
          "output": "2",
          "points": 2
        }
      ]
    },
    {
      "id": "S8Q4",
      "title": "Armstrong In Range",
      "difficulty": "Medium",
      "description": "Find all Armstrong numbers in the given range [l, r].",
      "formula": "For each n in [l,r]: let d = number of digits. If sum(digit^d for each digit) == n, it is Armstrong.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 500",
          "output": "1 2 3 4 5 6 7 8 9 153 370 371 407",
          "points": 2
        },
        {
          "input": "100 200",
          "output": "153",
          "points": 2
        },
        {
          "input": "400 500",
          "output": "407",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 10",
          "output": "1 2 3 4 5 6 7 8 9",
          "points": 2
        },
        {
          "input": "150 160",
          "output": "153",
          "points": 2
        },
        {
          "input": "365 375",
          "output": "370 371",
          "points": 2
        },
        {
          "input": "200 300",
          "output": "",
          "points": 2
        },
        {
          "input": "1 1",
          "output": "1",
          "points": 2
        },
        {
          "input": "9000 9500",
          "output": "9474",
          "points": 2
        },
        {
          "input": "1000 1000",
          "output": "",
          "points": 2
        }
      ]
    },
    {
      "id": "S8Q5",
      "title": "Character Frequency",
      "difficulty": "Hard",
      "description": "Implement a solution for: character_frequency. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello",
          "output": "h:1 e:1 l:2 o:1",
          "points": 3
        },
        {
          "input": "aabb",
          "output": "a:2 b:2",
          "points": 3
        },
        {
          "input": "abc",
          "output": "a:1 b:1 c:1",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a:1",
          "points": 3
        },
        {
          "input": "aaa",
          "output": "a:3",
          "points": 3
        },
        {
          "input": "abcabc",
          "output": "a:2 b:2 c:2",
          "points": 3
        },
        {
          "input": "programming",
          "output": "p:1 r:2 o:1 g:2 a:1 m:2 i:1 n:1",
          "points": 3
        },
        {
          "input": "mississippi",
          "output": "m:1 i:4 s:4 p:2",
          "points": 3
        },
        {
          "input": "success",
          "output": "s:3 u:1 c:2 e:1",
          "points": 3
        },
        {
          "input": "xyz",
          "output": "x:1 y:1 z:1",
          "points": 3
        }
      ]
    },
    {
      "id": "S8Q6",
      "title": "Find the maximum difference between two elements in an array",
      "difficulty": "Hard",
      "description": "Implement a solution for: Find the maximum difference between two elements in an array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "2 3 10 6 4 8 1",
          "output": "8",
          "points": 3
        },
        {
          "input": "1 2 3 4 5",
          "output": "4",
          "points": 3
        },
        {
          "input": "5 4 3 2 1",
          "output": "-1",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2",
          "output": "1",
          "points": 3
        },
        {
          "input": "2 1",
          "output": "-1",
          "points": 3
        },
        {
          "input": "7 1 5 3 6 4",
          "output": "5",
          "points": 3
        },
        {
          "input": "3 3 3 3",
          "output": "0",
          "points": 3
        },
        {
          "input": "1 9 7 5 11 3",
          "output": "10",
          "points": 3
        },
        {
          "input": "10 8 6 4 2",
          "output": "-8",
          "points": 3
        },
        {
          "input": "1 1",
          "output": "0",
          "points": 3
        }
      ]
    }
  ],
  "9": [
    {
      "id": "S9Q1",
      "title": "Sum Of N Naturals",
      "difficulty": "Easy",
      "description": "Implement a solution for: sum_of_n_naturals. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5",
          "output": "15",
          "points": 1
        },
        {
          "input": "10",
          "output": "55",
          "points": 1
        },
        {
          "input": "1",
          "output": "1",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "2",
          "output": "3",
          "points": 1
        },
        {
          "input": "100",
          "output": "5050",
          "points": 1
        },
        {
          "input": "50",
          "output": "1275",
          "points": 1
        },
        {
          "input": "4",
          "output": "10",
          "points": 1
        },
        {
          "input": "20",
          "output": "210",
          "points": 1
        },
        {
          "input": "1000",
          "output": "500500",
          "points": 1
        }
      ]
    },
    {
      "id": "S9Q2",
      "title": "Vowel Or Consonant",
      "difficulty": "Easy",
      "description": "Implement a solution for: vowel_or_consonant. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "a",
          "output": "Vowel",
          "points": 1
        },
        {
          "input": "b",
          "output": "Consonant",
          "points": 1
        },
        {
          "input": "E",
          "output": "Vowel",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "i",
          "output": "Vowel",
          "points": 1
        },
        {
          "input": "z",
          "output": "Consonant",
          "points": 1
        },
        {
          "input": "U",
          "output": "Vowel",
          "points": 1
        },
        {
          "input": "M",
          "output": "Consonant",
          "points": 1
        },
        {
          "input": "o",
          "output": "Vowel",
          "points": 1
        },
        {
          "input": "y",
          "output": "Consonant",
          "points": 1
        },
        {
          "input": "A",
          "output": "Vowel",
          "points": 1
        }
      ]
    },
    {
      "id": "S9Q3",
      "title": "Array Reverse Print",
      "difficulty": "Medium",
      "description": "Implement a solution for: array_reverse_print. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "5 4 3 2 1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "30 20 10",
          "points": 2
        },
        {
          "input": "7",
          "output": "7",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "5 5 5",
          "output": "5 5 5",
          "points": 2
        },
        {
          "input": "2 4 6 8 10",
          "output": "10 8 6 4 2",
          "points": 2
        },
        {
          "input": "9 8 7",
          "output": "7 8 9",
          "points": 2
        },
        {
          "input": "0 1 2 3 4",
          "output": "4 3 2 1 0",
          "points": 2
        },
        {
          "input": "100 99",
          "output": "99 100",
          "points": 2
        },
        {
          "input": "1 3 5 7 9 11",
          "output": "11 9 7 5 3 1",
          "points": 2
        }
      ]
    },
    {
      "id": "S9Q4",
      "title": "Check if a number is a strong number",
      "difficulty": "Medium",
      "description": "A Strong Number is one where the sum of factorial of each digit equals the number itself.",
      "formula": "sum(factorial(digit) for each digit d of n) == n",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "145",
          "output": "Strong",
          "points": 2
        },
        {
          "input": "40585",
          "output": "Strong",
          "points": 2
        },
        {
          "input": "100",
          "output": "Not Strong",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Strong",
          "points": 2
        },
        {
          "input": "2",
          "output": "Strong",
          "points": 2
        },
        {
          "input": "10",
          "output": "Not Strong",
          "points": 2
        },
        {
          "input": "12",
          "output": "Not Strong",
          "points": 2
        },
        {
          "input": "123",
          "output": "Not Strong",
          "points": 2
        },
        {
          "input": "2",
          "output": "Strong",
          "points": 2
        },
        {
          "input": "999",
          "output": "Not Strong",
          "points": 2
        }
      ]
    },
    {
      "id": "S9Q5",
      "title": "Check if one string is a rotation of another",
      "difficulty": "Hard",
      "description": "Implement a solution for: Check if one string is a rotation of another. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "abcde cdeab",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "hello lohel",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "abc bca",
          "output": "Yes",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "abc def",
          "output": "No",
          "points": 3
        },
        {
          "input": "aa aa",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "abcde abced",
          "output": "No",
          "points": 3
        },
        {
          "input": "rotation tationro",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "ab ba",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "No",
          "points": 3
        },
        {
          "input": "coding ingcod",
          "output": "Yes",
          "points": 3
        }
      ]
    },
    {
      "id": "S9Q6",
      "title": "Decode Run Length",
      "difficulty": "Hard",
      "description": "Decode a run-length encoded string where each character is followed by its count.",
      "formula": "For each (char, count) pair in encoded string: output = char repeated count times. Concatenate all.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "a3b2c4",
          "output": "aaabbcccc",
          "points": 3
        },
        {
          "input": "h1e1l2o1",
          "output": "hello",
          "points": 3
        },
        {
          "input": "x5",
          "output": "xxxxx",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a1",
          "output": "a",
          "points": 3
        },
        {
          "input": "a2b3",
          "output": "aabbb",
          "points": 3
        },
        {
          "input": "z3y2x1",
          "output": "zzzyyx",
          "points": 3
        },
        {
          "input": "a10",
          "output": "aaaaaaaaaa",
          "points": 3
        },
        {
          "input": "m1i4s2p2i1",
          "output": "miisssppii",
          "points": 3
        },
        {
          "input": "a1b1c1d1e1",
          "output": "abcde",
          "points": 3
        },
        {
          "input": "a1b1c1d1e1",
          "output": "abcde",
          "points": 3
        }
      ]
    }
  ],
  "10": [
    {
      "id": "S10Q1",
      "title": "Positive Negative Zero",
      "difficulty": "Easy",
      "description": "Implement a solution for: positive_negative_zero. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-3",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "0",
          "output": "Zero",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-1",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "100",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-100",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "999",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-999",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "0",
          "output": "Zero",
          "points": 1
        }
      ]
    },
    {
      "id": "S10Q2",
      "title": "Count the number of words in a sentence",
      "difficulty": "Easy",
      "description": "Implement a solution for: Count the number of words in a sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello world",
          "output": "2",
          "points": 1
        },
        {
          "input": "the quick brown fox",
          "output": "4",
          "points": 1
        },
        {
          "input": "one",
          "output": "1",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a b c d e",
          "output": "5",
          "points": 1
        },
        {
          "input": "hello",
          "output": "1",
          "points": 1
        },
        {
          "input": "I love to code",
          "output": "4",
          "points": 1
        },
        {
          "input": "  spaces between  ",
          "output": "2",
          "points": 1
        },
        {
          "input": "one two three four five six",
          "output": "6",
          "points": 1
        },
        {
          "input": "AlgoAuction",
          "output": "1",
          "points": 1
        },
        {
          "input": "a",
          "output": "1",
          "points": 1
        }
      ]
    },
    {
      "id": "S10Q3",
      "title": "Smallest Element",
      "difficulty": "Medium",
      "description": "Implement a solution for: smallest_element. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "3 1 4 1 5 9",
          "output": "1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "10",
          "points": 2
        },
        {
          "input": "5",
          "output": "5",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2 3 4 5",
          "output": "1",
          "points": 2
        },
        {
          "input": "100 200 50",
          "output": "50",
          "points": 2
        },
        {
          "input": "-1 -5 -3",
          "output": "-5",
          "points": 2
        },
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        },
        {
          "input": "7 7 7",
          "output": "7",
          "points": 2
        },
        {
          "input": "999 1 500",
          "output": "1",
          "points": 2
        },
        {
          "input": "42",
          "output": "42",
          "points": 2
        }
      ]
    },
    {
      "id": "S10Q4",
      "title": "Factors Of Number",
      "difficulty": "Medium",
      "description": "Implement a solution for: factors_of_number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "12",
          "output": "1 2 3 4 6 12",
          "points": 2
        },
        {
          "input": "7",
          "output": "1 7",
          "points": 2
        },
        {
          "input": "36",
          "output": "1 2 3 4 6 9 12 18 36",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "2",
          "output": "1 2",
          "points": 2
        },
        {
          "input": "100",
          "output": "1 2 4 5 10 20 25 50 100",
          "points": 2
        },
        {
          "input": "13",
          "output": "1 13",
          "points": 2
        },
        {
          "input": "16",
          "output": "1 2 4 8 16",
          "points": 2
        },
        {
          "input": "24",
          "output": "1 2 3 4 6 8 12 24",
          "points": 2
        },
        {
          "input": "50",
          "output": "1 2 5 10 25 50",
          "points": 2
        }
      ]
    },
    {
      "id": "S10Q5",
      "title": "Reverse each word in a sentence",
      "difficulty": "Hard",
      "description": "Implement a solution for: Reverse each word in a sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "Hello World",
          "output": "olleH dlroW",
          "points": 3
        },
        {
          "input": "I love coding",
          "output": "I evol gnidoc",
          "points": 3
        },
        {
          "input": "algo auction",
          "output": "ogla noitcua",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "one",
          "output": "eno",
          "points": 3
        },
        {
          "input": "a b c",
          "output": "a b c",
          "points": 3
        },
        {
          "input": "abc def ghi",
          "output": "cba fed ihg",
          "points": 3
        },
        {
          "input": "racecar",
          "output": "racecar",
          "points": 3
        },
        {
          "input": "keep coding",
          "output": "peek gnidoc",
          "points": 3
        },
        {
          "input": "hello world foo",
          "output": "olleh dlrow oof",
          "points": 3
        },
        {
          "input": "abcde",
          "output": "edcba",
          "points": 3
        }
      ]
    },
    {
      "id": "S10Q6",
      "title": "Words Same Start End",
      "difficulty": "Hard",
      "description": "Implement a solution for: words_same_start_end. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "level civic hello kayak",
          "output": "3",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "0",
          "points": 3
        },
        {
          "input": "abcba anna test",
          "output": "2",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "1",
          "points": 3
        },
        {
          "input": "ab ba aa",
          "output": "1",
          "points": 3
        },
        {
          "input": "madam refer noon",
          "output": "3",
          "points": 3
        },
        {
          "input": "abc def ghi",
          "output": "0",
          "points": 3
        },
        {
          "input": "easy area able",
          "output": "3",
          "points": 3
        },
        {
          "input": "eye ere age",
          "output": "3",
          "points": 3
        },
        {
          "input": "xyz abc",
          "output": "0",
          "points": 3
        }
      ]
    }
  ],
  "11": [
    {
      "id": "S11Q1",
      "title": "Find the smallest digit in a number",
      "difficulty": "Easy",
      "description": "Implement a solution for: Find the smallest digit in a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "3947",
          "output": "3",
          "points": 1
        },
        {
          "input": "12345",
          "output": "1",
          "points": 1
        },
        {
          "input": "7",
          "output": "7",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "999",
          "output": "9",
          "points": 1
        },
        {
          "input": "100",
          "output": "0",
          "points": 1
        },
        {
          "input": "9876543210",
          "output": "0",
          "points": 1
        },
        {
          "input": "55",
          "output": "5",
          "points": 1
        },
        {
          "input": "91",
          "output": "1",
          "points": 1
        },
        {
          "input": "321",
          "output": "1",
          "points": 1
        }
      ]
    },
    {
      "id": "S11Q2",
      "title": "Ascii Of String",
      "difficulty": "Easy",
      "description": "Implement a solution for: ascii_of_string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "Hi",
          "output": "72 105",
          "points": 1
        },
        {
          "input": "abc",
          "output": "97 98 99",
          "points": 1
        },
        {
          "input": "A",
          "output": "65",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "Z",
          "output": "90",
          "points": 1
        },
        {
          "input": "az",
          "output": "97 122",
          "points": 1
        },
        {
          "input": "ABC",
          "output": "65 66 67",
          "points": 1
        },
        {
          "input": "hello",
          "output": "104 101 108 108 111",
          "points": 1
        },
        {
          "input": "0",
          "output": "48",
          "points": 1
        },
        {
          "input": "XYZ",
          "output": "88 89 90",
          "points": 1
        },
        {
          "input": "aZ",
          "output": "97 90",
          "points": 1
        }
      ]
    },
    {
      "id": "S11Q3",
      "title": "Copy all elements from one array to another",
      "difficulty": "Medium",
      "description": "Implement a solution for: Copy all elements from one array to another. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "1 2 3 4 5",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "10 20 30",
          "points": 2
        },
        {
          "input": "7",
          "output": "7",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0 0 0",
          "output": "0 0 0",
          "points": 2
        },
        {
          "input": "9 8 7 6",
          "output": "9 8 7 6",
          "points": 2
        },
        {
          "input": "100",
          "output": "100",
          "points": 2
        },
        {
          "input": "1 3 5 7 9",
          "output": "1 3 5 7 9",
          "points": 2
        },
        {
          "input": "2 2 2 2 2",
          "output": "2 2 2 2 2",
          "points": 2
        },
        {
          "input": "42 43 44",
          "output": "42 43 44",
          "points": 2
        },
        {
          "input": "1 2 3 4 5 6 7 8 9 10",
          "output": "1 2 3 4 5 6 7 8 9 10",
          "points": 2
        }
      ]
    },
    {
      "id": "S11Q4",
      "title": "Count the number of divisors of a number",
      "difficulty": "Medium",
      "description": "Implement a solution for: Count the number of divisors of a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "12",
          "output": "6",
          "points": 2
        },
        {
          "input": "7",
          "output": "2",
          "points": 2
        },
        {
          "input": "36",
          "output": "9",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "2",
          "output": "2",
          "points": 2
        },
        {
          "input": "100",
          "output": "9",
          "points": 2
        },
        {
          "input": "13",
          "output": "2",
          "points": 2
        },
        {
          "input": "16",
          "output": "5",
          "points": 2
        },
        {
          "input": "24",
          "output": "8",
          "points": 2
        },
        {
          "input": "50",
          "output": "6",
          "points": 2
        }
      ]
    },
    {
      "id": "S11Q5",
      "title": "Palindrome Ignore Case Spaces",
      "difficulty": "Hard",
      "description": "Implement a solution for: palindrome_ignore_case_spaces. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "A man a plan a canal Panama",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "Hello World",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "Was it a car or a cat I saw",
          "output": "Palindrome",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "Madam",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "Never odd or even",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "race a car",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "No lemon no melon",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "hello",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "Rats live on no evil star",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "top spot",
          "output": "Not Palindrome",
          "points": 3
        }
      ]
    },
    {
      "id": "S11Q6",
      "title": "Merge Sorted Arrays",
      "difficulty": "Hard",
      "description": "Implement a solution for: merge_sorted_arrays. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 3 5\n2 4 6",
          "output": "1 2 3 4 5 6",
          "points": 3
        },
        {
          "input": "1 2 3\n4 5 6",
          "output": "1 2 3 4 5 6",
          "points": 3
        },
        {
          "input": "1 5 9\n2 3 7",
          "output": "1 2 3 5 7 9",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1\n2",
          "output": "1 2",
          "points": 3
        },
        {
          "input": "1 3\n2 4",
          "output": "1 2 3 4",
          "points": 3
        },
        {
          "input": "1 2 3\n1 2 3",
          "output": "1 1 2 2 3 3",
          "points": 3
        },
        {
          "input": "5\n1 2 3 4",
          "output": "1 2 3 4 5",
          "points": 3
        },
        {
          "input": "10 20 30\n15 25 35",
          "output": "10 15 20 25 30 35",
          "points": 3
        },
        {
          "input": "1 1 1\n1 1 1",
          "output": "1 1 1 1 1 1",
          "points": 3
        },
        {
          "input": "2 4 6 8\n1 3 5 7",
          "output": "1 2 3 4 5 6 7 8",
          "points": 3
        }
      ]
    }
  ],
  "12": [
    {
      "id": "S12Q1",
      "title": "Check if a number is divisible by both 3 and 5",
      "difficulty": "Easy",
      "description": "Implement a solution for: Check if a number is divisible by both 3 and 5. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "15",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "9",
          "output": "No",
          "points": 1
        },
        {
          "input": "30",
          "output": "Yes",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "45",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "10",
          "output": "No",
          "points": 1
        },
        {
          "input": "60",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "25",
          "output": "No",
          "points": 1
        },
        {
          "input": "75",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "100",
          "output": "No",
          "points": 1
        }
      ]
    },
    {
      "id": "S12Q2",
      "title": "Chars One Per Line",
      "difficulty": "Easy",
      "description": "Implement a solution for: chars_one_per_line. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "abc",
          "output": "a\nb\nc",
          "points": 1
        },
        {
          "input": "hi",
          "output": "h\ni",
          "points": 1
        },
        {
          "input": "x",
          "output": "x",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "hello",
          "output": "h\ne\nl\nl\no",
          "points": 1
        },
        {
          "input": "az",
          "output": "a\nz",
          "points": 1
        },
        {
          "input": "123",
          "output": "1\n2\n3",
          "points": 1
        },
        {
          "input": "abcd",
          "output": "a\nb\nc\nd",
          "points": 1
        },
        {
          "input": "A",
          "output": "A",
          "points": 1
        },
        {
          "input": "XY",
          "output": "X\nY",
          "points": 1
        },
        {
          "input": "algo",
          "output": "a\nl\ng\no",
          "points": 1
        }
      ]
    },
    {
      "id": "S12Q3",
      "title": "Max Min Difference",
      "difficulty": "Medium",
      "description": "Implement a solution for: max_min_difference. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "4",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "20",
          "points": 2
        },
        {
          "input": "5",
          "output": "0",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        },
        {
          "input": "1 100",
          "output": "99",
          "points": 2
        },
        {
          "input": "-5 -1 -3",
          "output": "4",
          "points": 2
        },
        {
          "input": "7 7 7",
          "output": "0",
          "points": 2
        },
        {
          "input": "50 25 75 100",
          "output": "75",
          "points": 2
        },
        {
          "input": "1 2",
          "output": "1",
          "points": 2
        },
        {
          "input": "0 1000",
          "output": "1000",
          "points": 2
        }
      ]
    },
    {
      "id": "S12Q4",
      "title": "Primes Between L And R",
      "difficulty": "Medium",
      "description": "Implement a solution for: primes_between_l_and_r. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 20",
          "output": "2 3 5 7 11 13 17 19",
          "points": 2
        },
        {
          "input": "10 30",
          "output": "11 13 17 19 23 29",
          "points": 2
        },
        {
          "input": "1 10",
          "output": "2 3 5 7",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2",
          "output": "2",
          "points": 2
        },
        {
          "input": "1 1",
          "output": "",
          "points": 2
        },
        {
          "input": "20 30",
          "output": "23 29",
          "points": 2
        },
        {
          "input": "50 60",
          "output": "53 59",
          "points": 2
        },
        {
          "input": "90 100",
          "output": "97",
          "points": 2
        },
        {
          "input": "1 5",
          "output": "2 3 5",
          "points": 2
        },
        {
          "input": "1 50",
          "output": "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47",
          "points": 2
        }
      ]
    },
    {
      "id": "S12Q5",
      "title": "Remove all vowels from a string",
      "difficulty": "Hard",
      "description": "Implement a solution for: Remove all vowels from a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello",
          "output": "hll",
          "points": 3
        },
        {
          "input": "programming",
          "output": "prgrmmng",
          "points": 3
        },
        {
          "input": "aeiou",
          "output": "",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "",
          "points": 3
        },
        {
          "input": "b",
          "output": "b",
          "points": 3
        },
        {
          "input": "beautiful",
          "output": "btfl",
          "points": 3
        },
        {
          "input": "rhythm",
          "output": "rhythm",
          "points": 3
        },
        {
          "input": "AEIOU",
          "output": "",
          "points": 3
        },
        {
          "input": "Hello World",
          "output": "Hll Wrld",
          "points": 3
        },
        {
          "input": "bcdfg",
          "output": "bcdfg",
          "points": 3
        }
      ]
    },
    {
      "id": "S12Q6",
      "title": "Most Frequent Word",
      "difficulty": "Hard",
      "description": "Implement a solution for: most_frequent_word. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "the cat sat on the mat the",
          "output": "the",
          "points": 3
        },
        {
          "input": "one one two three two one",
          "output": "one",
          "points": 3
        },
        {
          "input": "hello world hello",
          "output": "hello",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a a a b b c",
          "output": "a",
          "points": 3
        },
        {
          "input": "x y z",
          "output": "x",
          "points": 3
        },
        {
          "input": "go go go stop stop go",
          "output": "go",
          "points": 3
        },
        {
          "input": "coding is fun coding is great",
          "output": "coding",
          "points": 3
        },
        {
          "input": "alpha beta gamma alpha beta alpha",
          "output": "alpha",
          "points": 3
        },
        {
          "input": "single",
          "output": "single",
          "points": 3
        },
        {
          "input": "tie tie top top",
          "output": "tie",
          "points": 3
        }
      ]
    }
  ],
  "13": [
    {
      "id": "S13Q1",
      "title": "Digit Sum Until Single",
      "difficulty": "Easy",
      "description": "Implement a solution for: digit_sum_until_single. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "9999",
          "output": "9",
          "points": 1
        },
        {
          "input": "12345",
          "output": "6",
          "points": 1
        },
        {
          "input": "100",
          "output": "1",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "5",
          "output": "5",
          "points": 1
        },
        {
          "input": "99",
          "output": "9",
          "points": 1
        },
        {
          "input": "19",
          "output": "1",
          "points": 1
        },
        {
          "input": "999",
          "output": "9",
          "points": 1
        },
        {
          "input": "38",
          "output": "2",
          "points": 1
        },
        {
          "input": "1000000",
          "output": "1",
          "points": 1
        }
      ]
    },
    {
      "id": "S13Q2",
      "title": "Reverse the order of words in a sentence",
      "difficulty": "Easy",
      "description": "Implement a solution for: Reverse the order of words in a sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "Hello World",
          "output": "World Hello",
          "points": 1
        },
        {
          "input": "I love coding",
          "output": "coding love I",
          "points": 1
        },
        {
          "input": "one",
          "output": "one",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a b c",
          "output": "c b a",
          "points": 1
        },
        {
          "input": "the sky is blue",
          "output": "blue is sky the",
          "points": 1
        },
        {
          "input": "go home",
          "output": "home go",
          "points": 1
        },
        {
          "input": "algo auction final",
          "output": "final auction algo",
          "points": 1
        },
        {
          "input": "code run test",
          "output": "test run code",
          "points": 1
        },
        {
          "input": "reverse this now",
          "output": "now this reverse",
          "points": 1
        },
        {
          "input": "keep it up",
          "output": "up it keep",
          "points": 1
        }
      ]
    },
    {
      "id": "S13Q3",
      "title": "Count the occurrences of a specific element",
      "difficulty": "Medium",
      "description": "Implement a solution for: Count the occurrences of a specific element. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 2 1 2\n2",
          "output": "3",
          "points": 2
        },
        {
          "input": "5 5 5 5 5\n5",
          "output": "5",
          "points": 2
        },
        {
          "input": "1 2 3 4 5\n6",
          "output": "0",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1 1 1\n1",
          "output": "4",
          "points": 2
        },
        {
          "input": "0 0 0\n0",
          "output": "3",
          "points": 2
        },
        {
          "input": "1 2 3\n4",
          "output": "0",
          "points": 2
        },
        {
          "input": "7 3 7 9 7\n7",
          "output": "3",
          "points": 2
        },
        {
          "input": "10 20 30 10\n10",
          "output": "2",
          "points": 2
        },
        {
          "input": "1\n1",
          "output": "1",
          "points": 2
        },
        {
          "input": "5 6 7 8\n5",
          "output": "1",
          "points": 2
        }
      ]
    },
    {
      "id": "S13Q4",
      "title": "Automorphic Number",
      "difficulty": "Medium",
      "description": "An Automorphic number is one whose square ends with the number itself.",
      "formula": "Compute square = n * n. Check if str(square).endswith(str(n)).",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5",
          "output": "Automorphic",
          "points": 2
        },
        {
          "input": "25",
          "output": "Automorphic",
          "points": 2
        },
        {
          "input": "7",
          "output": "Not Automorphic",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Automorphic",
          "points": 2
        },
        {
          "input": "6",
          "output": "Automorphic",
          "points": 2
        },
        {
          "input": "76",
          "output": "Automorphic",
          "points": 2
        },
        {
          "input": "376",
          "output": "Automorphic",
          "points": 2
        },
        {
          "input": "10",
          "output": "Not Automorphic",
          "points": 2
        },
        {
          "input": "100",
          "output": "Not Automorphic",
          "points": 2
        },
        {
          "input": "625",
          "output": "Automorphic",
          "points": 2
        }
      ]
    },
    {
      "id": "S13Q5",
      "title": "Check if a string contains only digits",
      "difficulty": "Hard",
      "description": "Implement a solution for: Check if a string contains only digits. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "12345",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "12abc",
          "output": "No",
          "points": 3
        },
        {
          "input": "0",
          "output": "Yes",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "9999",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "1 2 3",
          "output": "No",
          "points": 3
        },
        {
          "input": "abc",
          "output": "No",
          "points": 3
        },
        {
          "input": "007",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "3.14",
          "output": "No",
          "points": 3
        },
        {
          "input": "100",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "1a",
          "output": "No",
          "points": 3
        }
      ]
    },
    {
      "id": "S13Q6",
      "title": "Array Split Equal Sum Pairs",
      "difficulty": "Hard",
      "description": "Implement a solution for: array_split_equal_sum_pairs. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 5 3 3",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "1 2 3 4",
          "output": "No",
          "points": 3
        },
        {
          "input": "2 2 2 2",
          "output": "Yes",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "1 2 3",
          "output": "No",
          "points": 3
        },
        {
          "input": "4 4 4 4",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "1 3 5 7",
          "output": "No",
          "points": 3
        },
        {
          "input": "6 6",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "1 2 3 4 5 6",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "10 10 10",
          "output": "No",
          "points": 3
        }
      ]
    }
  ],
  "14": [
    {
      "id": "S14Q1",
      "title": "Area Of Circle",
      "difficulty": "Easy",
      "description": "Find the area of a circle given its radius.",
      "formula": "Area = PI * r * r. Use PI = 3.14159265358979. Round to 2 decimal places.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "7",
          "output": "153.94",
          "points": 1
        },
        {
          "input": "1",
          "output": "3.14",
          "points": 1
        },
        {
          "input": "5",
          "output": "78.54",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0.0",
          "points": 1
        },
        {
          "input": "10",
          "output": "314.16",
          "points": 1
        },
        {
          "input": "3",
          "output": "28.27",
          "points": 1
        },
        {
          "input": "2",
          "output": "12.57",
          "points": 1
        },
        {
          "input": "4",
          "output": "50.27",
          "points": 1
        },
        {
          "input": "6",
          "output": "113.1",
          "points": 1
        },
        {
          "input": "100",
          "output": "31415.93",
          "points": 1
        }
      ]
    },
    {
      "id": "S14Q2",
      "title": "Count the number of consonants in a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Count the number of consonants in a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "hello",
          "output": "3",
          "points": 1
        },
        {
          "input": "aeiou",
          "output": "0",
          "points": 1
        },
        {
          "input": "programming",
          "output": "8",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "0",
          "points": 1
        },
        {
          "input": "b",
          "output": "1",
          "points": 1
        },
        {
          "input": "rhythm",
          "output": "6",
          "points": 1
        },
        {
          "input": "HELLO",
          "output": "3",
          "points": 1
        },
        {
          "input": "xyz",
          "output": "3",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "7",
          "points": 1
        },
        {
          "input": "bcdfg",
          "output": "5",
          "points": 1
        }
      ]
    },
    {
      "id": "S14Q3",
      "title": "Index Of Element",
      "difficulty": "Medium",
      "description": "Implement a solution for: index_of_element. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "10 20 30 40 50\n30",
          "output": "2",
          "points": 2
        },
        {
          "input": "5 3 8 1\n8",
          "output": "2",
          "points": 2
        },
        {
          "input": "1 2 3\n4",
          "output": "-1",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2 3 4 5\n1",
          "output": "0",
          "points": 2
        },
        {
          "input": "1 2 3 4 5\n5",
          "output": "4",
          "points": 2
        },
        {
          "input": "7 7 7\n7",
          "output": "0",
          "points": 2
        },
        {
          "input": "10 20 30\n20",
          "output": "1",
          "points": 2
        },
        {
          "input": "5\n5",
          "output": "0",
          "points": 2
        },
        {
          "input": "1 2 3\n0",
          "output": "-1",
          "points": 2
        },
        {
          "input": "100 200 300\n200",
          "output": "1",
          "points": 2
        }
      ]
    },
    {
      "id": "S14Q4",
      "title": "Print all divisors of a number in ascending order",
      "difficulty": "Medium",
      "description": "Implement a solution for: Print all divisors of a number in ascending order. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "12",
          "output": "1 2 3 4 6 12",
          "points": 2
        },
        {
          "input": "7",
          "output": "1 7",
          "points": 2
        },
        {
          "input": "1",
          "output": "1",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "2",
          "output": "1 2",
          "points": 2
        },
        {
          "input": "36",
          "output": "1 2 3 4 6 9 12 18 36",
          "points": 2
        },
        {
          "input": "100",
          "output": "1 2 4 5 10 20 25 50 100",
          "points": 2
        },
        {
          "input": "16",
          "output": "1 2 4 8 16",
          "points": 2
        },
        {
          "input": "24",
          "output": "1 2 3 4 6 8 12 24",
          "points": 2
        },
        {
          "input": "50",
          "output": "1 2 5 10 25 50",
          "points": 2
        },
        {
          "input": "13",
          "output": "1 13",
          "points": 2
        }
      ]
    },
    {
      "id": "S14Q5",
      "title": "Differ By One Char",
      "difficulty": "Hard",
      "description": "Implement a solution for: differ_by_one_char. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "cat bat",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "No",
          "points": 3
        },
        {
          "input": "abc abd",
          "output": "Yes",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "ab ac",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "aa bb",
          "output": "No",
          "points": 3
        },
        {
          "input": "abc abc",
          "output": "No",
          "points": 3
        },
        {
          "input": "abc xyz",
          "output": "No",
          "points": 3
        },
        {
          "input": "abcd abce",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "a b",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "abc abcd",
          "output": "No",
          "points": 3
        }
      ]
    },
    {
      "id": "S14Q6",
      "title": "Longest Word No Repeated Chars",
      "difficulty": "Hard",
      "description": "Implement a solution for: longest_word_no_repeated_chars. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "the sky is blue and clear",
          "output": "clear",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "world",
          "points": 3
        },
        {
          "input": "abc ab a",
          "output": "abc",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "i am fine",
          "output": "fine",
          "points": 3
        },
        {
          "input": "aabb ccdd ef",
          "output": "ef",
          "points": 3
        },
        {
          "input": "coding is fun",
          "output": "coding",
          "points": 3
        },
        {
          "input": "unique words are great",
          "output": "unique",
          "points": 3
        },
        {
          "input": "a ab abc abcd abcde",
          "output": "abcde",
          "points": 3
        },
        {
          "input": "swift python java",
          "output": "swift",
          "points": 3
        },
        {
          "input": "go rust dart elixir",
          "output": "elixir",
          "points": 3
        }
      ]
    }
  ],
  "15": [
    {
      "id": "S15Q1",
      "title": "Fibonacci Upto N",
      "difficulty": "Easy",
      "description": "Print all Fibonacci numbers less than or equal to n.",
      "formula": "F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2). Generate terms while term <= n.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "10",
          "output": "0 1 1 2 3 5 8",
          "points": 1
        },
        {
          "input": "1",
          "output": "0 1 1",
          "points": 1
        },
        {
          "input": "50",
          "output": "0 1 1 2 3 5 8 13 21 34",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "2",
          "output": "0 1 1 2",
          "points": 1
        },
        {
          "input": "100",
          "output": "0 1 1 2 3 5 8 13 21 34 55 89",
          "points": 1
        },
        {
          "input": "5",
          "output": "0 1 1 2 3 5",
          "points": 1
        },
        {
          "input": "20",
          "output": "0 1 1 2 3 5 8 13",
          "points": 1
        },
        {
          "input": "35",
          "output": "0 1 1 2 3 5 8 13 21 34",
          "points": 1
        },
        {
          "input": "200",
          "output": "0 1 1 2 3 5 8 13 21 34 55 89 144",
          "points": 1
        }
      ]
    },
    {
      "id": "S15Q2",
      "title": "Remove all digits from a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Remove all digits from a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "h3ll0 w0rld",
          "output": "hll wrld",
          "points": 1
        },
        {
          "input": "abc123",
          "output": "abc",
          "points": 1
        },
        {
          "input": "no digits",
          "output": "no digits",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "123",
          "output": "",
          "points": 1
        },
        {
          "input": "a1b2c3",
          "output": "abc",
          "points": 1
        },
        {
          "input": "9",
          "output": "",
          "points": 1
        },
        {
          "input": "hello",
          "output": "hello",
          "points": 1
        },
        {
          "input": "p4ss w0rd",
          "output": "pss wrd",
          "points": 1
        },
        {
          "input": "1a2b3c",
          "output": "abc",
          "points": 1
        },
        {
          "input": "0000",
          "output": "",
          "points": 1
        }
      ]
    },
    {
      "id": "S15Q3",
      "title": "Sum Of Odd Elements",
      "difficulty": "Medium",
      "description": "Implement a solution for: sum_of_odd_elements. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "9",
          "points": 2
        },
        {
          "input": "2 4 6 8",
          "output": "0",
          "points": 2
        },
        {
          "input": "1 3 5 7",
          "output": "16",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 2
        },
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "0",
          "points": 2
        },
        {
          "input": "7 8 9 10",
          "output": "16",
          "points": 2
        },
        {
          "input": "1 1 1",
          "output": "3",
          "points": 2
        },
        {
          "input": "2 3 4 5 6",
          "output": "8",
          "points": 2
        },
        {
          "input": "100 101 102 103",
          "output": "204",
          "points": 2
        }
      ]
    },
    {
      "id": "S15Q4",
      "title": "Check if a number is a happy number",
      "difficulty": "Medium",
      "description": "A Happy Number reaches 1 when repeatedly replaced by the sum of squares of its digits. Otherwise it is Not Happy.",
      "formula": "Repeat: n = sum(digit^2 for each digit of n). If n == 1 → Happy. Detect cycle using a visited set → Not Happy.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "19",
          "output": "Happy",
          "points": 2
        },
        {
          "input": "4",
          "output": "Not Happy",
          "points": 2
        },
        {
          "input": "7",
          "output": "Happy",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Happy",
          "points": 2
        },
        {
          "input": "2",
          "output": "Not Happy",
          "points": 2
        },
        {
          "input": "10",
          "output": "Happy",
          "points": 2
        },
        {
          "input": "13",
          "output": "Happy",
          "points": 2
        },
        {
          "input": "23",
          "output": "Happy",
          "points": 2
        },
        {
          "input": "100",
          "output": "Happy",
          "points": 2
        },
        {
          "input": "5",
          "output": "Not Happy",
          "points": 2
        }
      ]
    },
    {
      "id": "S15Q5",
      "title": "Check if an array is a palindrome",
      "difficulty": "Hard",
      "description": "Implement a solution for: Check if an array is a palindrome. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 2 1",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 2 3 4 5",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "1 2 1",
          "output": "Palindrome",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 2",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "5 5 5",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 2 3 2 1 0",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "4 3 4",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 1 1 1",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "9 8 7 8 9",
          "output": "Palindrome",
          "points": 3
        }
      ]
    },
    {
      "id": "S15Q6",
      "title": "Rearrange Negatives Before Positives",
      "difficulty": "Hard",
      "description": "Implement a solution for: rearrange_negatives_before_positives. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "-1 2 -3 4 5 -6",
          "output": "-1 -3 -6 2 4 5",
          "points": 3
        },
        {
          "input": "1 2 3",
          "output": "1 2 3",
          "points": 3
        },
        {
          "input": "-1 -2 -3",
          "output": "-1 -2 -3",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 3
        },
        {
          "input": "-1 1",
          "output": "-1 1",
          "points": 3
        },
        {
          "input": "1 -1",
          "output": "-1 1",
          "points": 3
        },
        {
          "input": "-5 -3 -1 2 4 6",
          "output": "-5 -3 -1 2 4 6",
          "points": 3
        },
        {
          "input": "6 4 2 -1 -3 -5",
          "output": "-1 -3 -5 6 4 2",
          "points": 3
        },
        {
          "input": "-2 1 -3 2 -4 3",
          "output": "-2 -3 -4 1 2 3",
          "points": 3
        },
        {
          "input": "0 -1 0 -2 0",
          "output": "-1 -2 0 0 0",
          "points": 3
        }
      ]
    }
  ],
  "16": [
    {
      "id": "S16Q1",
      "title": "Even Or Odd",
      "difficulty": "Easy",
      "description": "Implement a solution for: even_or_odd. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "12",
          "output": "Even",
          "points": 1
        },
        {
          "input": "9",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "0",
          "output": "Even",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "100",
          "output": "Even",
          "points": 1
        },
        {
          "input": "999",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "2",
          "output": "Even",
          "points": 1
        },
        {
          "input": "13",
          "output": "Odd",
          "points": 1
        },
        {
          "input": "1000000",
          "output": "Even",
          "points": 1
        },
        {
          "input": "11",
          "output": "Odd",
          "points": 1
        }
      ]
    },
    {
      "id": "S16Q2",
      "title": "Reverse a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Reverse a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "python",
          "output": "nohtyp",
          "points": 1
        },
        {
          "input": "level",
          "output": "level",
          "points": 1
        },
        {
          "input": "world",
          "output": "dlrow",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a",
          "points": 1
        },
        {
          "input": "abcde",
          "output": "edcba",
          "points": 1
        },
        {
          "input": "racecar",
          "output": "racecar",
          "points": 1
        },
        {
          "input": "OpenAI",
          "output": "IAnepO",
          "points": 1
        },
        {
          "input": "12345",
          "output": "54321",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "dlroW olleH",
          "points": 1
        },
        {
          "input": "madam",
          "output": "madam",
          "points": 1
        }
      ]
    },
    {
      "id": "S16Q3",
      "title": "Sum Of Array",
      "difficulty": "Medium",
      "description": "Implement a solution for: sum_of_array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5 10 15",
          "output": "30",
          "points": 2
        },
        {
          "input": "1 1 1 1",
          "output": "4",
          "points": 2
        },
        {
          "input": "100",
          "output": "100",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        },
        {
          "input": "100 200 300",
          "output": "600",
          "points": 2
        },
        {
          "input": "-1 -2 -3",
          "output": "-6",
          "points": 2
        },
        {
          "input": "5 5 5 5",
          "output": "20",
          "points": 2
        },
        {
          "input": "1 1 1 1 1 1 1 1 1 1",
          "output": "10",
          "points": 2
        },
        {
          "input": "50",
          "output": "50",
          "points": 2
        },
        {
          "input": "3 6 9 12",
          "output": "30",
          "points": 2
        }
      ]
    },
    {
      "id": "S16Q4",
      "title": "Calculate the factorial of a number",
      "difficulty": "Medium",
      "description": "Implement a solution for: Calculate the factorial of a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "6",
          "output": "720",
          "points": 2
        },
        {
          "input": "0",
          "output": "1",
          "points": 2
        },
        {
          "input": "3",
          "output": "6",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "4",
          "output": "24",
          "points": 2
        },
        {
          "input": "5",
          "output": "120",
          "points": 2
        },
        {
          "input": "7",
          "output": "5040",
          "points": 2
        },
        {
          "input": "10",
          "output": "3628800",
          "points": 2
        },
        {
          "input": "2",
          "output": "2",
          "points": 2
        },
        {
          "input": "8",
          "output": "40320",
          "points": 2
        }
      ]
    },
    {
      "id": "S16Q5",
      "title": "Check if a string is a palindrome",
      "difficulty": "Hard",
      "description": "Implement a solution for: Check if a string is a palindrome. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "civic",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "python",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "level",
          "output": "Palindrome",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "ab",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "abcba",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "noon",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "madam",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "world",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "racecar",
          "output": "Palindrome",
          "points": 3
        }
      ]
    },
    {
      "id": "S16Q6",
      "title": "Character Frequency",
      "difficulty": "Hard",
      "description": "Implement a solution for: character_frequency. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "aabb",
          "output": "a:2 b:2",
          "points": 3
        },
        {
          "input": "xyz",
          "output": "x:1 y:1 z:1",
          "points": 3
        },
        {
          "input": "aaa",
          "output": "a:3",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a:1",
          "points": 3
        },
        {
          "input": "abcabc",
          "output": "a:2 b:2 c:2",
          "points": 3
        },
        {
          "input": "programming",
          "output": "p:1 r:2 o:1 g:2 a:1 m:2 i:1 n:1",
          "points": 3
        },
        {
          "input": "mississippi",
          "output": "m:1 i:4 s:4 p:2",
          "points": 3
        },
        {
          "input": "success",
          "output": "s:3 u:1 c:2 e:1",
          "points": 3
        },
        {
          "input": "hello",
          "output": "h:1 e:1 l:2 o:1",
          "points": 3
        },
        {
          "input": "abc",
          "output": "a:1 b:1 c:1",
          "points": 3
        }
      ]
    }
  ],
  "17": [
    {
      "id": "S17Q1",
      "title": "Prime Check",
      "difficulty": "Easy",
      "description": "Implement a solution for: prime_check. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "13",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "15",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "2",
          "output": "Prime",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "97",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "49",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "100",
          "output": "Not Prime",
          "points": 1
        },
        {
          "input": "7919",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "99991",
          "output": "Prime",
          "points": 1
        },
        {
          "input": "25",
          "output": "Not Prime",
          "points": 1
        }
      ]
    },
    {
      "id": "S17Q2",
      "title": "Convert uppercase characters to lowercase",
      "difficulty": "Easy",
      "description": "Implement a solution for: Convert uppercase characters to lowercase. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "JAVA",
          "output": "java",
          "points": 1
        },
        {
          "input": "Python",
          "output": "python",
          "points": 1
        },
        {
          "input": "CODE",
          "output": "code",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "A",
          "output": "a",
          "points": 1
        },
        {
          "input": "ABC",
          "output": "abc",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "hello world",
          "points": 1
        },
        {
          "input": "PYTHON",
          "output": "python",
          "points": 1
        },
        {
          "input": "Java",
          "output": "java",
          "points": 1
        },
        {
          "input": "CoDiNg",
          "output": "coding",
          "points": 1
        },
        {
          "input": "XYZ123",
          "output": "xyz123",
          "points": 1
        }
      ]
    },
    {
      "id": "S17Q3",
      "title": "Reverse the elements of an array",
      "difficulty": "Medium",
      "description": "Implement a solution for: Reverse the elements of an array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5 4 3 2 1",
          "output": "1 2 3 4 5",
          "points": 2
        },
        {
          "input": "100 200",
          "output": "200 100",
          "points": 2
        },
        {
          "input": "9",
          "output": "9",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2",
          "output": "2 1",
          "points": 2
        },
        {
          "input": "5 5 5",
          "output": "5 5 5",
          "points": 2
        },
        {
          "input": "1 3 5 7 9",
          "output": "9 7 5 3 1",
          "points": 2
        },
        {
          "input": "100 200 300 400",
          "output": "400 300 200 100",
          "points": 2
        },
        {
          "input": "0",
          "output": "0",
          "points": 2
        },
        {
          "input": "6 4 2",
          "output": "2 4 6",
          "points": 2
        },
        {
          "input": "9 8 7 6 5 4 3 2 1",
          "output": "1 2 3 4 5 6 7 8 9",
          "points": 2
        }
      ]
    },
    {
      "id": "S17Q4",
      "title": "Armstrong Number",
      "difficulty": "Medium",
      "description": "An Armstrong number equals the sum of its digits each raised to the power of the number of digits.",
      "formula": "Let d = number of digits. Armstrong if: n = sum(digit^d for each digit of n)",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "371",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "200",
          "output": "Not Armstrong",
          "points": 2
        },
        {
          "input": "407",
          "output": "Armstrong",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "153",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "100",
          "output": "Not Armstrong",
          "points": 2
        },
        {
          "input": "370",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "123",
          "output": "Not Armstrong",
          "points": 2
        },
        {
          "input": "9474",
          "output": "Armstrong",
          "points": 2
        },
        {
          "input": "999",
          "output": "Not Armstrong",
          "points": 2
        }
      ]
    },
    {
      "id": "S17Q5",
      "title": "Count the number of vowels in a string",
      "difficulty": "Hard",
      "description": "Implement a solution for: Count the number of vowels in a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "auction",
          "output": "4",
          "points": 3
        },
        {
          "input": "rhythm",
          "output": "0",
          "points": 3
        },
        {
          "input": "beautiful",
          "output": "5",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "1",
          "points": 3
        },
        {
          "input": "bcdfg",
          "output": "0",
          "points": 3
        },
        {
          "input": "AEIOU",
          "output": "5",
          "points": 3
        },
        {
          "input": "Hello World",
          "output": "3",
          "points": 3
        },
        {
          "input": "xyz",
          "output": "0",
          "points": 3
        },
        {
          "input": "programming",
          "output": "3",
          "points": 3
        },
        {
          "input": "aeiou",
          "output": "5",
          "points": 3
        }
      ]
    },
    {
      "id": "S17Q6",
      "title": "Fibonacci Upto N",
      "difficulty": "Hard",
      "description": "Print all Fibonacci numbers less than or equal to n.",
      "formula": "F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2). Generate terms while term <= n.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "20",
          "output": "0 1 1 2 3 5 8 13",
          "points": 3
        },
        {
          "input": "3",
          "output": "0 1 1 2 3",
          "points": 3
        },
        {
          "input": "55",
          "output": "0 1 1 2 3 5 8 13 21 34 55",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 3
        },
        {
          "input": "2",
          "output": "0 1 1 2",
          "points": 3
        },
        {
          "input": "100",
          "output": "0 1 1 2 3 5 8 13 21 34 55 89",
          "points": 3
        },
        {
          "input": "5",
          "output": "0 1 1 2 3 5",
          "points": 3
        },
        {
          "input": "1",
          "output": "0 1 1",
          "points": 3
        },
        {
          "input": "35",
          "output": "0 1 1 2 3 5 8 13 21 34",
          "points": 3
        },
        {
          "input": "200",
          "output": "0 1 1 2 3 5 8 13 21 34 55 89 144",
          "points": 3
        }
      ]
    }
  ],
  "18": [
    {
      "id": "S18Q1",
      "title": "Count the number of digits in an integer",
      "difficulty": "Easy",
      "description": "Implement a solution for: Count the number of digits in an integer. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "9876",
          "output": "4",
          "points": 1
        },
        {
          "input": "0",
          "output": "1",
          "points": 1
        },
        {
          "input": "1000000",
          "output": "7",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "1",
          "points": 1
        },
        {
          "input": "9999",
          "output": "4",
          "points": 1
        },
        {
          "input": "99",
          "output": "2",
          "points": 1
        },
        {
          "input": "123456789",
          "output": "9",
          "points": 1
        },
        {
          "input": "10000",
          "output": "5",
          "points": 1
        },
        {
          "input": "12345",
          "output": "5",
          "points": 1
        },
        {
          "input": "7",
          "output": "1",
          "points": 1
        }
      ]
    },
    {
      "id": "S18Q2",
      "title": "Remove all spaces from a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Remove all spaces from a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "open source",
          "output": "opensource",
          "points": 1
        },
        {
          "input": "  hello  ",
          "output": "hello",
          "points": 1
        },
        {
          "input": "abc def ghi",
          "output": "abcdefghi",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": " ",
          "output": "",
          "points": 1
        },
        {
          "input": "a b c",
          "output": "abc",
          "points": 1
        },
        {
          "input": "programming is fun",
          "output": "programmingisfun",
          "points": 1
        },
        {
          "input": "hello",
          "output": "hello",
          "points": 1
        },
        {
          "input": "  ",
          "output": "",
          "points": 1
        },
        {
          "input": "one two three",
          "output": "onetwothree",
          "points": 1
        },
        {
          "input": " x y z ",
          "output": "xyz",
          "points": 1
        }
      ]
    },
    {
      "id": "S18Q3",
      "title": "Largest Element",
      "difficulty": "Medium",
      "description": "Implement a solution for: largest_element. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "7 2 9 4 1",
          "output": "9",
          "points": 2
        },
        {
          "input": "-1 -5 -3",
          "output": "-1",
          "points": 2
        },
        {
          "input": "42",
          "output": "42",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2 3 4 5",
          "output": "5",
          "points": 2
        },
        {
          "input": "100 200 150 50",
          "output": "200",
          "points": 2
        },
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        },
        {
          "input": "999 1000 998",
          "output": "1000",
          "points": 2
        },
        {
          "input": "7 7 7",
          "output": "7",
          "points": 2
        },
        {
          "input": "3 1 4 1 5 9 2 6",
          "output": "9",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "30",
          "points": 2
        }
      ]
    },
    {
      "id": "S18Q4",
      "title": "Find the Greatest Common Divisor (GCD) of two numbers",
      "difficulty": "Medium",
      "description": "Find the Greatest Common Divisor of two numbers.",
      "formula": "Euclidean Algorithm: GCD(a, b) = GCD(b, a mod b). Base case: GCD(a, 0) = a",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "48 18",
          "output": "6",
          "points": 2
        },
        {
          "input": "56 98",
          "output": "14",
          "points": 2
        },
        {
          "input": "81 27",
          "output": "27",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1",
          "output": "1",
          "points": 2
        },
        {
          "input": "36 24",
          "output": "12",
          "points": 2
        },
        {
          "input": "17 13",
          "output": "1",
          "points": 2
        },
        {
          "input": "100 10",
          "output": "10",
          "points": 2
        },
        {
          "input": "12 8",
          "output": "4",
          "points": 2
        },
        {
          "input": "100 75",
          "output": "25",
          "points": 2
        },
        {
          "input": "7 5",
          "output": "1",
          "points": 2
        }
      ]
    },
    {
      "id": "S18Q5",
      "title": "Toggle the case of each character in a string",
      "difficulty": "Hard",
      "description": "Implement a solution for: Toggle the case of each character in a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "Python",
          "output": "pYTHON",
          "points": 3
        },
        {
          "input": "abcDEF",
          "output": "ABCdef",
          "points": 3
        },
        {
          "input": "AlGoAuCtIoN",
          "output": "aLgOaUcTiOn",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "A",
          "points": 3
        },
        {
          "input": "Z",
          "output": "z",
          "points": 3
        },
        {
          "input": "AbCdEf",
          "output": "aBcDeF",
          "points": 3
        },
        {
          "input": "programming",
          "output": "PROGRAMMING",
          "points": 3
        },
        {
          "input": "Python3",
          "output": "pYTHON3",
          "points": 3
        },
        {
          "input": "hElLo WoRlD",
          "output": "HeLlO wOrLd",
          "points": 3
        },
        {
          "input": "abc",
          "output": "ABC",
          "points": 3
        }
      ]
    },
    {
      "id": "S18Q6",
      "title": "Check if a number is a perfect number",
      "difficulty": "Hard",
      "description": "A Perfect Number equals the sum of all its proper divisors (excluding itself).",
      "formula": "Sum all d where 1 <= d < n and n % d == 0. If sum == n, it is Perfect.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "496",
          "output": "Perfect",
          "points": 3
        },
        {
          "input": "12",
          "output": "Not Perfect",
          "points": 3
        },
        {
          "input": "6",
          "output": "Perfect",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Not Perfect",
          "points": 3
        },
        {
          "input": "28",
          "output": "Perfect",
          "points": 3
        },
        {
          "input": "8128",
          "output": "Perfect",
          "points": 3
        },
        {
          "input": "100",
          "output": "Not Perfect",
          "points": 3
        },
        {
          "input": "4",
          "output": "Not Perfect",
          "points": 3
        },
        {
          "input": "36",
          "output": "Not Perfect",
          "points": 3
        },
        {
          "input": "10",
          "output": "Not Perfect",
          "points": 3
        }
      ]
    }
  ],
  "19": [
    {
      "id": "S19Q1",
      "title": "Calculate the sum of digits of a number",
      "difficulty": "Easy",
      "description": "Implement a solution for: Calculate the sum of digits of a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "456",
          "output": "15",
          "points": 1
        },
        {
          "input": "1001",
          "output": "2",
          "points": 1
        },
        {
          "input": "777",
          "output": "21",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "5",
          "output": "5",
          "points": 1
        },
        {
          "input": "999",
          "output": "27",
          "points": 1
        },
        {
          "input": "12345",
          "output": "15",
          "points": 1
        },
        {
          "input": "10000",
          "output": "1",
          "points": 1
        },
        {
          "input": "123",
          "output": "6",
          "points": 1
        },
        {
          "input": "9999",
          "output": "36",
          "points": 1
        }
      ]
    },
    {
      "id": "S19Q2",
      "title": "Find the ASCII value of a character",
      "difficulty": "Easy",
      "description": "Implement a solution for: Find the ASCII value of a character. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "B",
          "output": "66",
          "points": 1
        },
        {
          "input": "z",
          "output": "122",
          "points": 1
        },
        {
          "input": "0",
          "output": "48",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "A",
          "output": "65",
          "points": 1
        },
        {
          "input": "a",
          "output": "97",
          "points": 1
        },
        {
          "input": "Z",
          "output": "90",
          "points": 1
        },
        {
          "input": "m",
          "output": "109",
          "points": 1
        },
        {
          "input": " ",
          "output": "32",
          "points": 1
        },
        {
          "input": "9",
          "output": "57",
          "points": 1
        },
        {
          "input": "M",
          "output": "77",
          "points": 1
        }
      ]
    },
    {
      "id": "S19Q3",
      "title": "Minimum Element",
      "difficulty": "Medium",
      "description": "Implement a solution for: minimum_element. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "9 3 6 1 8",
          "output": "1",
          "points": 2
        },
        {
          "input": "-1 -5 -3",
          "output": "-5",
          "points": 2
        },
        {
          "input": "0 0 0",
          "output": "0",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2 3 4 5",
          "output": "1",
          "points": 2
        },
        {
          "input": "100 200 50",
          "output": "50",
          "points": 2
        },
        {
          "input": "7 7 7",
          "output": "7",
          "points": 2
        },
        {
          "input": "999 1 500",
          "output": "1",
          "points": 2
        },
        {
          "input": "42",
          "output": "42",
          "points": 2
        },
        {
          "input": "3 1 4 1 5 9",
          "output": "1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "10",
          "points": 2
        }
      ]
    },
    {
      "id": "S19Q4",
      "title": "Find the Least Common Multiple (LCM) of two numbers",
      "difficulty": "Medium",
      "description": "Find the Least Common Multiple of two numbers.",
      "formula": "LCM(a, b) = (a * b) / GCD(a, b). Use Euclidean algorithm for GCD first.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "8 12",
          "output": "24",
          "points": 2
        },
        {
          "input": "15 20",
          "output": "60",
          "points": 2
        },
        {
          "input": "7 11",
          "output": "77",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1",
          "output": "1",
          "points": 2
        },
        {
          "input": "3 9",
          "output": "9",
          "points": 2
        },
        {
          "input": "4 6",
          "output": "12",
          "points": 2
        },
        {
          "input": "100 10",
          "output": "100",
          "points": 2
        },
        {
          "input": "7 5",
          "output": "35",
          "points": 2
        },
        {
          "input": "6 14",
          "output": "42",
          "points": 2
        },
        {
          "input": "12 18",
          "output": "36",
          "points": 2
        }
      ]
    },
    {
      "id": "S19Q5",
      "title": "Anagram Check",
      "difficulty": "Hard",
      "description": "Implement a solution for: anagram_check. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "cat tac",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "python java",
          "output": "Not Anagram",
          "points": 3
        },
        {
          "input": "evil vile",
          "output": "Anagram",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "abc cba",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "abc def",
          "output": "Not Anagram",
          "points": 3
        },
        {
          "input": "dust stud",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "rat car",
          "output": "Not Anagram",
          "points": 3
        },
        {
          "input": "aab baa",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "listen silent",
          "output": "Anagram",
          "points": 3
        },
        {
          "input": "hello bye",
          "output": "Not Anagram",
          "points": 3
        }
      ]
    },
    {
      "id": "S19Q6",
      "title": "Check if a number is a strong number",
      "difficulty": "Hard",
      "description": "A Strong Number is one where the sum of factorial of each digit equals the number itself.",
      "formula": "sum(factorial(digit) for each digit d of n) == n",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1",
          "output": "Strong",
          "points": 3
        },
        {
          "input": "2",
          "output": "Strong",
          "points": 3
        },
        {
          "input": "12",
          "output": "Not Strong",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "145",
          "output": "Strong",
          "points": 3
        },
        {
          "input": "40585",
          "output": "Strong",
          "points": 3
        },
        {
          "input": "10",
          "output": "Not Strong",
          "points": 3
        },
        {
          "input": "100",
          "output": "Not Strong",
          "points": 3
        },
        {
          "input": "123",
          "output": "Not Strong",
          "points": 3
        },
        {
          "input": "40320",
          "output": "Not Strong",
          "points": 3
        },
        {
          "input": "999",
          "output": "Not Strong",
          "points": 3
        }
      ]
    }
  ],
  "20": [
    {
      "id": "S20Q1",
      "title": "Positive Negative Zero",
      "difficulty": "Easy",
      "description": "Implement a solution for: positive_negative_zero. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "42",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-7",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "0",
          "output": "Zero",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-1",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "100",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-100",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "999",
          "output": "Positive",
          "points": 1
        },
        {
          "input": "-999",
          "output": "Negative",
          "points": 1
        },
        {
          "input": "0",
          "output": "Zero",
          "points": 1
        }
      ]
    },
    {
      "id": "S20Q2",
      "title": "Count the number of words in a sentence",
      "difficulty": "Easy",
      "description": "Implement a solution for: Count the number of words in a sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "I love algo auction",
          "output": "4",
          "points": 1
        },
        {
          "input": "coding",
          "output": "1",
          "points": 1
        },
        {
          "input": "one two three",
          "output": "3",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a b c d e",
          "output": "5",
          "points": 1
        },
        {
          "input": "hello",
          "output": "1",
          "points": 1
        },
        {
          "input": "I love to code",
          "output": "4",
          "points": 1
        },
        {
          "input": "  spaces between  ",
          "output": "2",
          "points": 1
        },
        {
          "input": "one two three four five six",
          "output": "6",
          "points": 1
        },
        {
          "input": "AlgoAuction",
          "output": "1",
          "points": 1
        },
        {
          "input": "a",
          "output": "1",
          "points": 1
        }
      ]
    },
    {
      "id": "S20Q3",
      "title": "Find the second largest element in an array",
      "difficulty": "Medium",
      "description": "Implement a solution for: Find the second largest element in an array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "3 1 4 1 5 9 2 6",
          "output": "6",
          "points": 2
        },
        {
          "input": "10 10 8",
          "output": "8",
          "points": 2
        },
        {
          "input": "100 200 150",
          "output": "150",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 2",
          "output": "1",
          "points": 2
        },
        {
          "input": "1 2 3 4 5",
          "output": "4",
          "points": 2
        },
        {
          "input": "7 7 7 7",
          "output": "No second largest",
          "points": 2
        },
        {
          "input": "99 100 1",
          "output": "99",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "20",
          "points": 2
        },
        {
          "input": "50 50 49",
          "output": "49",
          "points": 2
        },
        {
          "input": "1000 999 998",
          "output": "999",
          "points": 2
        }
      ]
    },
    {
      "id": "S20Q4",
      "title": "Check if a year is a leap year",
      "difficulty": "Medium",
      "description": "Implement a solution for: Check if a year is a leap year. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1600",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "2100",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "2020",
          "output": "Leap Year",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "2000",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "1900",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "2024",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "2019",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "2004",
          "output": "Leap Year",
          "points": 2
        },
        {
          "input": "2023",
          "output": "Not Leap Year",
          "points": 2
        },
        {
          "input": "1800",
          "output": "Not Leap Year",
          "points": 2
        }
      ]
    },
    {
      "id": "S20Q5",
      "title": "Remove all vowels from a string",
      "difficulty": "Hard",
      "description": "Implement a solution for: Remove all vowels from a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "education",
          "output": "dctn",
          "points": 3
        },
        {
          "input": "bcdfg",
          "output": "bcdfg",
          "points": 3
        },
        {
          "input": "AEIOU",
          "output": "",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "",
          "points": 3
        },
        {
          "input": "b",
          "output": "b",
          "points": 3
        },
        {
          "input": "beautiful",
          "output": "btfl",
          "points": 3
        },
        {
          "input": "rhythm",
          "output": "rhythm",
          "points": 3
        },
        {
          "input": "aeiou",
          "output": "",
          "points": 3
        },
        {
          "input": "Hello World",
          "output": "Hll Wrld",
          "points": 3
        },
        {
          "input": "programming",
          "output": "prgrmmng",
          "points": 3
        }
      ]
    },
    {
      "id": "S20Q6",
      "title": "Automorphic Number",
      "difficulty": "Hard",
      "description": "An Automorphic number is one whose square ends with the number itself.",
      "formula": "Compute square = n * n. Check if str(square).endswith(str(n)).",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "6",
          "output": "Automorphic",
          "points": 3
        },
        {
          "input": "376",
          "output": "Automorphic",
          "points": 3
        },
        {
          "input": "9",
          "output": "Not Automorphic",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Automorphic",
          "points": 3
        },
        {
          "input": "5",
          "output": "Automorphic",
          "points": 3
        },
        {
          "input": "25",
          "output": "Automorphic",
          "points": 3
        },
        {
          "input": "76",
          "output": "Automorphic",
          "points": 3
        },
        {
          "input": "10",
          "output": "Not Automorphic",
          "points": 3
        },
        {
          "input": "100",
          "output": "Not Automorphic",
          "points": 3
        },
        {
          "input": "625",
          "output": "Automorphic",
          "points": 3
        }
      ]
    }
  ],
  "21": [
    {
      "id": "S21Q1",
      "title": "Check if a number is a palindrome",
      "difficulty": "Easy",
      "description": "Implement a solution for: Check if a number is a palindrome. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1001",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "456",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "99",
          "output": "Palindrome",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "10",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "9",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "121",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "12345",
          "output": "Not Palindrome",
          "points": 1
        },
        {
          "input": "12321",
          "output": "Palindrome",
          "points": 1
        },
        {
          "input": "100",
          "output": "Not Palindrome",
          "points": 1
        }
      ]
    },
    {
      "id": "S21Q2",
      "title": "Ascii Of String",
      "difficulty": "Easy",
      "description": "Implement a solution for: ascii_of_string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "XYZ",
          "output": "88 89 90",
          "points": 1
        },
        {
          "input": "az",
          "output": "97 122",
          "points": 1
        },
        {
          "input": "hello",
          "output": "104 101 108 108 111",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "A",
          "output": "65",
          "points": 1
        },
        {
          "input": "Z",
          "output": "90",
          "points": 1
        },
        {
          "input": "ABC",
          "output": "65 66 67",
          "points": 1
        },
        {
          "input": "Hi",
          "output": "72 105",
          "points": 1
        },
        {
          "input": "0",
          "output": "48",
          "points": 1
        },
        {
          "input": "abc",
          "output": "97 98 99",
          "points": 1
        },
        {
          "input": "aZ",
          "output": "97 90",
          "points": 1
        }
      ]
    },
    {
      "id": "S21Q3",
      "title": "Count Even Numbers",
      "difficulty": "Medium",
      "description": "Implement a solution for: count_even_numbers. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "10 20 30 40",
          "output": "4",
          "points": 2
        },
        {
          "input": "1 3 5 7 9",
          "output": "0",
          "points": 2
        },
        {
          "input": "2 3 4 5 6",
          "output": "3",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "1",
          "points": 2
        },
        {
          "input": "1",
          "output": "0",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "3",
          "points": 2
        },
        {
          "input": "1 2 3 4 5",
          "output": "2",
          "points": 2
        },
        {
          "input": "100 200 300 400 500",
          "output": "5",
          "points": 2
        },
        {
          "input": "7 8 9 10",
          "output": "2",
          "points": 2
        },
        {
          "input": "0 0 0",
          "output": "3",
          "points": 2
        }
      ]
    },
    {
      "id": "S21Q4",
      "title": "Factors Of Number",
      "difficulty": "Medium",
      "description": "Implement a solution for: factors_of_number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "24",
          "output": "1 2 3 4 6 8 12 24",
          "points": 2
        },
        {
          "input": "13",
          "output": "1 13",
          "points": 2
        },
        {
          "input": "50",
          "output": "1 2 5 10 25 50",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "2",
          "output": "1 2",
          "points": 2
        },
        {
          "input": "100",
          "output": "1 2 4 5 10 20 25 50 100",
          "points": 2
        },
        {
          "input": "7",
          "output": "1 7",
          "points": 2
        },
        {
          "input": "16",
          "output": "1 2 4 8 16",
          "points": 2
        },
        {
          "input": "12",
          "output": "1 2 3 4 6 12",
          "points": 2
        },
        {
          "input": "36",
          "output": "1 2 3 4 6 9 12 18 36",
          "points": 2
        }
      ]
    },
    {
      "id": "S21Q5",
      "title": "Most Frequent Word",
      "difficulty": "Hard",
      "description": "Implement a solution for: most_frequent_word. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "go go go stop stop go",
          "output": "go",
          "points": 3
        },
        {
          "input": "a b c a b a",
          "output": "a",
          "points": 3
        },
        {
          "input": "single word here",
          "output": "single",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a a a b b c",
          "output": "a",
          "points": 3
        },
        {
          "input": "x y z",
          "output": "x",
          "points": 3
        },
        {
          "input": "the cat sat on the mat the",
          "output": "the",
          "points": 3
        },
        {
          "input": "coding is fun coding is great",
          "output": "coding",
          "points": 3
        },
        {
          "input": "alpha beta gamma alpha beta alpha",
          "output": "alpha",
          "points": 3
        },
        {
          "input": "single",
          "output": "single",
          "points": 3
        },
        {
          "input": "tie tie top top",
          "output": "tie",
          "points": 3
        }
      ]
    },
    {
      "id": "S21Q6",
      "title": "Check if a number is a happy number",
      "difficulty": "Hard",
      "description": "A Happy Number reaches 1 when repeatedly replaced by the sum of squares of its digits. Otherwise it is Not Happy.",
      "formula": "Repeat: n = sum(digit^2 for each digit of n). If n == 1 → Happy. Detect cycle using a visited set → Not Happy.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "10",
          "output": "Happy",
          "points": 3
        },
        {
          "input": "13",
          "output": "Happy",
          "points": 3
        },
        {
          "input": "11",
          "output": "Not Happy",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Happy",
          "points": 3
        },
        {
          "input": "2",
          "output": "Not Happy",
          "points": 3
        },
        {
          "input": "7",
          "output": "Happy",
          "points": 3
        },
        {
          "input": "19",
          "output": "Happy",
          "points": 3
        },
        {
          "input": "23",
          "output": "Happy",
          "points": 3
        },
        {
          "input": "100",
          "output": "Happy",
          "points": 3
        },
        {
          "input": "5",
          "output": "Not Happy",
          "points": 3
        }
      ]
    }
  ],
  "22": [
    {
      "id": "S22Q1",
      "title": "Check if a number is divisible by both 3 and 5",
      "difficulty": "Easy",
      "description": "Implement a solution for: Check if a number is divisible by both 3 and 5. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "45",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "20",
          "output": "No",
          "points": 1
        },
        {
          "input": "60",
          "output": "Yes",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "15",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "10",
          "output": "No",
          "points": 1
        },
        {
          "input": "9",
          "output": "No",
          "points": 1
        },
        {
          "input": "25",
          "output": "No",
          "points": 1
        },
        {
          "input": "75",
          "output": "Yes",
          "points": 1
        },
        {
          "input": "100",
          "output": "No",
          "points": 1
        }
      ]
    },
    {
      "id": "S22Q2",
      "title": "Reverse the words in a sentence",
      "difficulty": "Easy",
      "description": "Implement a solution for: Reverse the words in a sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "code is fun",
          "output": "fun is code",
          "points": 1
        },
        {
          "input": "algo auction",
          "output": "auction algo",
          "points": 1
        },
        {
          "input": "one",
          "output": "one",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a b c",
          "output": "c b a",
          "points": 1
        },
        {
          "input": "good morning",
          "output": "morning good",
          "points": 1
        },
        {
          "input": "keep calm and code",
          "output": "code and calm keep",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "World Hello",
          "points": 1
        },
        {
          "input": "reverse this sentence",
          "output": "sentence this reverse",
          "points": 1
        },
        {
          "input": "a b c d e",
          "output": "e d c b a",
          "points": 1
        },
        {
          "input": "the sky is blue",
          "output": "blue is sky the",
          "points": 1
        }
      ]
    },
    {
      "id": "S22Q3",
      "title": "Sum Of Odd Elements",
      "difficulty": "Medium",
      "description": "Implement a solution for: sum_of_odd_elements. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 2 3 4 5",
          "output": "9",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "0",
          "points": 2
        },
        {
          "input": "1 3 5 7 9",
          "output": "25",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 2
        },
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "7 8 9 10",
          "output": "16",
          "points": 2
        },
        {
          "input": "1 1 1",
          "output": "3",
          "points": 2
        },
        {
          "input": "2 3 4 5 6",
          "output": "8",
          "points": 2
        },
        {
          "input": "100 101 102 103",
          "output": "204",
          "points": 2
        },
        {
          "input": "2 4 6 8",
          "output": "0",
          "points": 2
        }
      ]
    },
    {
      "id": "S22Q4",
      "title": "Check if a number is a perfect square",
      "difficulty": "Medium",
      "description": "Implement a solution for: Check if a number is a perfect square. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "25",
          "output": "Perfect Square",
          "points": 2
        },
        {
          "input": "36",
          "output": "Perfect Square",
          "points": 2
        },
        {
          "input": "50",
          "output": "Not Perfect Square",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Perfect Square",
          "points": 2
        },
        {
          "input": "4",
          "output": "Perfect Square",
          "points": 2
        },
        {
          "input": "9",
          "output": "Perfect Square",
          "points": 2
        },
        {
          "input": "0",
          "output": "Perfect Square",
          "points": 2
        },
        {
          "input": "16",
          "output": "Perfect Square",
          "points": 2
        },
        {
          "input": "15",
          "output": "Not Perfect Square",
          "points": 2
        },
        {
          "input": "100",
          "output": "Perfect Square",
          "points": 2
        }
      ]
    },
    {
      "id": "S22Q5",
      "title": "First Non Repeating Character",
      "difficulty": "Hard",
      "description": "Implement a solution for: first_non_repeating_character. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "abacabad",
          "output": "c",
          "points": 3
        },
        {
          "input": "aabbcc",
          "output": "No unique character",
          "points": 3
        },
        {
          "input": "leetcode",
          "output": "l",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a",
          "points": 3
        },
        {
          "input": "aab",
          "output": "b",
          "points": 3
        },
        {
          "input": "abcd",
          "output": "a",
          "points": 3
        },
        {
          "input": "aabbccdd",
          "output": "No unique character",
          "points": 3
        },
        {
          "input": "swiss",
          "output": "w",
          "points": 3
        },
        {
          "input": "programming",
          "output": "p",
          "points": 3
        },
        {
          "input": "xxyyzz",
          "output": "No unique character",
          "points": 3
        }
      ]
    },
    {
      "id": "S22Q6",
      "title": "Check if an array is a palindrome",
      "difficulty": "Hard",
      "description": "Implement a solution for: Check if an array is a palindrome. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "9 8 7 8 9",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 2 3 4",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "5 5 5 5",
          "output": "Palindrome",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 2",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "5 5 5",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 2 3 2 1 0",
          "output": "Not Palindrome",
          "points": 3
        },
        {
          "input": "4 3 4",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 2 3 2 1",
          "output": "Palindrome",
          "points": 3
        },
        {
          "input": "1 1 1 1",
          "output": "Palindrome",
          "points": 3
        }
      ]
    }
  ],
  "23": [
    {
      "id": "S23Q1",
      "title": "Find the largest digit in a number",
      "difficulty": "Easy",
      "description": "Implement a solution for: Find the largest digit in a number. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "5839",
          "output": "9",
          "points": 1
        },
        {
          "input": "1000",
          "output": "1",
          "points": 1
        },
        {
          "input": "321",
          "output": "3",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "999",
          "output": "9",
          "points": 1
        },
        {
          "input": "100",
          "output": "1",
          "points": 1
        },
        {
          "input": "1234567890",
          "output": "9",
          "points": 1
        },
        {
          "input": "55",
          "output": "5",
          "points": 1
        },
        {
          "input": "19",
          "output": "9",
          "points": 1
        },
        {
          "input": "3947",
          "output": "9",
          "points": 1
        }
      ]
    },
    {
      "id": "S23Q2",
      "title": "Count the number of consonants in a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Count the number of consonants in a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "python",
          "output": "4",
          "points": 1
        },
        {
          "input": "aeiou",
          "output": "0",
          "points": 1
        },
        {
          "input": "rhythm",
          "output": "6",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "0",
          "points": 1
        },
        {
          "input": "b",
          "output": "1",
          "points": 1
        },
        {
          "input": "hello",
          "output": "3",
          "points": 1
        },
        {
          "input": "HELLO",
          "output": "3",
          "points": 1
        },
        {
          "input": "xyz",
          "output": "3",
          "points": 1
        },
        {
          "input": "Hello World",
          "output": "7",
          "points": 1
        },
        {
          "input": "bcdfg",
          "output": "5",
          "points": 1
        }
      ]
    },
    {
      "id": "S23Q3",
      "title": "Average Of Array",
      "difficulty": "Medium",
      "description": "Implement a solution for: average_of_array. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "2 4 6 8",
          "output": "5.0",
          "points": 2
        },
        {
          "input": "7 7 7 7",
          "output": "7.0",
          "points": 2
        },
        {
          "input": "1 2",
          "output": "1.5",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0 0 0",
          "output": "0.0",
          "points": 2
        },
        {
          "input": "1 3 5 7 9",
          "output": "5.0",
          "points": 2
        },
        {
          "input": "100 200",
          "output": "150.0",
          "points": 2
        },
        {
          "input": "10 20 30 40 50",
          "output": "30.0",
          "points": 2
        },
        {
          "input": "1 2 3 4 5",
          "output": "3.0",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "20.0",
          "points": 2
        },
        {
          "input": "5",
          "output": "5.0",
          "points": 2
        }
      ]
    },
    {
      "id": "S23Q4",
      "title": "Count Primes In Range",
      "difficulty": "Medium",
      "description": "Implement a solution for: count_primes_in_range. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "10 30",
          "output": "6",
          "points": 2
        },
        {
          "input": "50 100",
          "output": "10",
          "points": 2
        },
        {
          "input": "1 50",
          "output": "15",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "1 1",
          "output": "0",
          "points": 2
        },
        {
          "input": "2 2",
          "output": "1",
          "points": 2
        },
        {
          "input": "1 10",
          "output": "4",
          "points": 2
        },
        {
          "input": "1 20",
          "output": "8",
          "points": 2
        },
        {
          "input": "1 2",
          "output": "1",
          "points": 2
        },
        {
          "input": "90 100",
          "output": "1",
          "points": 2
        },
        {
          "input": "1 100",
          "output": "25",
          "points": 2
        }
      ]
    },
    {
      "id": "S23Q5",
      "title": "Check if one string is a rotation of another",
      "difficulty": "Hard",
      "description": "Implement a solution for: Check if one string is a rotation of another. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "rotation tationro",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "coding ingcod",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "No",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "abc def",
          "output": "No",
          "points": 3
        },
        {
          "input": "aa aa",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "abcde abced",
          "output": "No",
          "points": 3
        },
        {
          "input": "abcde cdeab",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "ab ba",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "hello lohel",
          "output": "Yes",
          "points": 3
        },
        {
          "input": "abc bca",
          "output": "Yes",
          "points": 3
        }
      ]
    },
    {
      "id": "S23Q6",
      "title": "Armstrong In Range",
      "difficulty": "Hard",
      "description": "Find all Armstrong numbers in the given range [l, r].",
      "formula": "For each n in [l,r]: let d = number of digits. If sum(digit^d for each digit) == n, it is Armstrong.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "365 375",
          "output": "370 371",
          "points": 3
        },
        {
          "input": "9000 9500",
          "output": "9474",
          "points": 3
        },
        {
          "input": "1 10",
          "output": "1 2 3 4 5 6 7 8 9",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "1 500",
          "output": "1 2 3 4 5 6 7 8 9 153 370 371 407",
          "points": 3
        },
        {
          "input": "100 200",
          "output": "153",
          "points": 3
        },
        {
          "input": "400 500",
          "output": "407",
          "points": 3
        },
        {
          "input": "150 160",
          "output": "153",
          "points": 3
        },
        {
          "input": "200 300",
          "output": "",
          "points": 3
        },
        {
          "input": "1 1",
          "output": "1",
          "points": 3
        },
        {
          "input": "1000 1000",
          "output": "",
          "points": 3
        }
      ]
    }
  ],
  "24": [
    {
      "id": "S24Q1",
      "title": "Digit Sum Until Single",
      "difficulty": "Easy",
      "description": "Implement a solution for: digit_sum_until_single. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "38",
          "output": "2",
          "points": 1
        },
        {
          "input": "19",
          "output": "1",
          "points": 1
        },
        {
          "input": "999",
          "output": "9",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 1
        },
        {
          "input": "5",
          "output": "5",
          "points": 1
        },
        {
          "input": "99",
          "output": "9",
          "points": 1
        },
        {
          "input": "12345",
          "output": "6",
          "points": 1
        },
        {
          "input": "9999",
          "output": "9",
          "points": 1
        },
        {
          "input": "100",
          "output": "1",
          "points": 1
        },
        {
          "input": "1000000",
          "output": "1",
          "points": 1
        }
      ]
    },
    {
      "id": "S24Q2",
      "title": "Remove all digits from a string",
      "difficulty": "Easy",
      "description": "Implement a solution for: Remove all digits from a string. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "a1b2c3",
          "output": "abc",
          "points": 1
        },
        {
          "input": "1a2b3c",
          "output": "abc",
          "points": 1
        },
        {
          "input": "hello123",
          "output": "hello",
          "points": 1
        }
      ],
      "hiddenTests": [
        {
          "input": "123",
          "output": "",
          "points": 1
        },
        {
          "input": "9",
          "output": "",
          "points": 1
        },
        {
          "input": "hello",
          "output": "hello",
          "points": 1
        },
        {
          "input": "p4ss w0rd",
          "output": "pss wrd",
          "points": 1
        },
        {
          "input": "h3ll0 w0rld",
          "output": "hll wrld",
          "points": 1
        },
        {
          "input": "abc123",
          "output": "abc",
          "points": 1
        },
        {
          "input": "0000",
          "output": "",
          "points": 1
        }
      ]
    },
    {
      "id": "S24Q3",
      "title": "Count Odd Numbers",
      "difficulty": "Medium",
      "description": "Implement a solution for: count_odd_numbers. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "1 3 5 7 9",
          "output": "5",
          "points": 2
        },
        {
          "input": "2 4 6 8",
          "output": "0",
          "points": 2
        },
        {
          "input": "10 11 12 13",
          "output": "2",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 2
        },
        {
          "input": "1",
          "output": "1",
          "points": 2
        },
        {
          "input": "10 20 30",
          "output": "0",
          "points": 2
        },
        {
          "input": "7 8 9 10",
          "output": "2",
          "points": 2
        },
        {
          "input": "1 1 1",
          "output": "3",
          "points": 2
        },
        {
          "input": "2 3 4 5 6",
          "output": "2",
          "points": 2
        },
        {
          "input": "100 101 102 103",
          "output": "2",
          "points": 2
        }
      ]
    },
    {
      "id": "S24Q4",
      "title": "Area Of Circle",
      "difficulty": "Medium",
      "description": "Find the area of a circle given its radius.",
      "formula": "Area = PI * r * r. Use PI = 3.14159265358979. Round to 2 decimal places.",
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "3",
          "output": "28.27",
          "points": 2
        },
        {
          "input": "10",
          "output": "314.16",
          "points": 2
        },
        {
          "input": "2",
          "output": "12.57",
          "points": 2
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0.0",
          "points": 2
        },
        {
          "input": "1",
          "output": "3.14",
          "points": 2
        },
        {
          "input": "7",
          "output": "153.94",
          "points": 2
        },
        {
          "input": "4",
          "output": "50.27",
          "points": 2
        },
        {
          "input": "5",
          "output": "78.54",
          "points": 2
        },
        {
          "input": "6",
          "output": "113.1",
          "points": 2
        },
        {
          "input": "100",
          "output": "31415.93",
          "points": 2
        }
      ]
    },
    {
      "id": "S24Q5",
      "title": "Palindrome Words In Sentence",
      "difficulty": "Hard",
      "description": "Implement a solution for: palindrome_words_in_sentence. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "radar deed tenet coding",
          "output": "radar deed tenet",
          "points": 3
        },
        {
          "input": "apple banana",
          "output": "",
          "points": 3
        },
        {
          "input": "anna bob carol",
          "output": "anna bob",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "a",
          "output": "a",
          "points": 3
        },
        {
          "input": "abc",
          "output": "",
          "points": 3
        },
        {
          "input": "madam racecar hello level",
          "output": "madam racecar level",
          "points": 3
        },
        {
          "input": "mom dad sister brother",
          "output": "mom dad",
          "points": 3
        },
        {
          "input": "refer noon kayak test",
          "output": "refer noon kayak",
          "points": 3
        },
        {
          "input": "civic noon eye",
          "output": "civic noon eye",
          "points": 3
        },
        {
          "input": "hello world",
          "output": "",
          "points": 3
        }
      ]
    },
    {
      "id": "S24Q6",
      "title": "Rearrange Negatives Before Positives",
      "difficulty": "Hard",
      "description": "Implement a solution for: rearrange_negatives_before_positives. Ensure your code handles all test cases correctly.",
      "formula": null,
      "constraints": "Time Limit: 2.0s\nMemory Limit: 256MB",
      "visibleTests": [
        {
          "input": "6 4 2 -1 -3 -5",
          "output": "-1 -3 -5 6 4 2",
          "points": 3
        },
        {
          "input": "-2 1 -3 2 -4 3",
          "output": "-2 -3 -4 1 2 3",
          "points": 3
        },
        {
          "input": "0 -1 0 -2 0",
          "output": "-1 -2 0 0 0",
          "points": 3
        }
      ],
      "hiddenTests": [
        {
          "input": "0",
          "output": "0",
          "points": 3
        },
        {
          "input": "-1 1",
          "output": "-1 1",
          "points": 3
        },
        {
          "input": "1 -1",
          "output": "-1 1",
          "points": 3
        },
        {
          "input": "-5 -3 -1 2 4 6",
          "output": "-5 -3 -1 2 4 6",
          "points": 3
        },
        {
          "input": "1 2 3",
          "output": "1 2 3",
          "points": 3
        },
        {
          "input": "-1 2 -3 4 5 -6",
          "output": "-1 -3 -6 2 4 5",
          "points": 3
        },
        {
          "input": "-1 -2 -3",
          "output": "-1 -2 -3",
          "points": 3
        }
      ]
    }
  ]
};

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
