console.clear();

// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

function searchArray(arr, elem) {
  let positions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      positions.push(i);
    }
  }
  return positions.length > 0
    ? positions.length === 1
      ? positions[0]
      : positions
    : -1;
}
let arr = [1, 2, 3, 4, 5, 1, 3];
let elem1 = 4;
let elem2 = 1;
let elem3 = 7;

console.log(searchArray(arr, elem1));
console.log(searchArray(arr, elem2));
console.log(searchArray(arr, elem3));

console.log("Q1 END =====================");

// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 5; j >= i; j--) {
    row += j;
  }
  console.log(row);
}
console.log("Q2 END =====================");

// Question 3:
// Write a JavaScript program to sort an array in ascending order
// For example,
// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]
var numbers = [3, 2, 1, 4, 5, 45];

var sortedArr = numbers.sort(customSort);
function customSort(b, a) {
  if (b > a) {
    return 1;
  } else if (b < a) {
    return -1;
  }
  return 0;
}

console.log(sortedArr);

console.log("Q3 END =====================");

// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
function areAnagrams(str1, str2) {
  str1 = str1.replace().toLowerCase();
  str2 = str2.replace().toLowerCase();
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log(areAnagrams("LISTEN", "SILENT"));
console.log(areAnagrams("HELLO", "JELLO"));
console.log("Q4 END =====================");

// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH
function revStr(str1) {
  var reverse = "";
  for (var i = str1.length - 1; i >= 0; i--) {
    reverse += str1[i];
  }
  console.log(reverse);
}
revStr("Hello");

console.log("Q5 END =====================");
