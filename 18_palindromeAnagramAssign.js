console.log(
  `================Palindrome Program===================================================================`
);

const isPalindrome = function (word) {
  const resultPalindrome = word.split("").reverse().join("");
  console.log(
    `Is given word '${word}' Palindrome? :=> ${word === resultPalindrome}`
  );
};
const result = isPalindrome("madam");
const result1 = isPalindrome("dad");
const result2 = isPalindrome("hello");

console.log(`                                           `);
console.log(
  `================Anagram Program===================================================================`
);
// ANAGRAM

const isAnagram = function (str1, str2) {
  const resultStr1 = str1.toLowerCase().split("").sort().join("");
  const resultStr2 = str2.toLowerCase().split("").sort().join("");
  console.log(
    `Is given words '${str1}' & '${str2}' are ANAGRAM ?  :=> ${
      resultStr1 === resultStr2 ? true : false
    }`
  );
};
const resultAnagram = isAnagram("Silent", "Listen");
const resultAnagram1 = isAnagram("Hello", "World");
const resultAnagram2 = isAnagram("Such", "Much");




