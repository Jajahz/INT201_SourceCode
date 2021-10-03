let str1 = 'Hello';
let str2 = 'hello';
console.log(`str1 === str2 is ${str1 === str2}`);
console.log(`str1 < str2 is ${str1 < str2}`);
console.log(`str1 > str2 is ${str1 > str2}`);
console.log(`str1.length = ${str1.length}`);
console.log(
  `str1.toLowerCase === str2.toLowerCase is ${
    str1.toLowerCase === str2.toLowerCase
  }`
);
console.log(`str1.charAt(str1.length-1) = ${str1.charAt(str1.length - 1)}`);

let str1 = "ab";
let str2 = "cd";
console.log(str1.localeCompare(str2))  // Returns -1

let str1 = "A";
let str2 = "a";
console.log(str1.localeCompare(str2))