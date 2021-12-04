const findAnagram = require("./findAnagram");

test("check if two strings are anagram or not", () => {
  expect(findAnagram("eat", "tea")).toBe(true);
});
test("check if two strings are anagram or not", () => {
  expect(findAnagram("table", "bleat")).toBe(true);
});
test("check if two strings are anagram or not", () => {
  expect(findAnagram("how", "what")).toBe(false);
});
