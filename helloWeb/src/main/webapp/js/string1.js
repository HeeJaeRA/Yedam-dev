let str1 = "Hello";
let str2 = new String("Hello");

console.log(typeof str1, typeof str2);

console.log(str1 == str2);
console.log(str1 === str2);

console.log(str1.toUpperCase());

let result = " 공백 제거 합니다.         ".trim();
console.log(result, '문자열 길이: ', result.length);

result = "Hello, World, Nice, World".replace(',', '.');
console.log(result);

result = "Hello, World, Nice, World".replace(/,/g, '.');
console.log(result);