/*
1. 
  Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, 
  та обробляє кожен елемент масиву цією функцією, повертаючи новий масив. 
  Приклад:
*/

function map(fn, array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
      result.push(fn(array[i]));
    }
  return result;
}

function square(x) {
  return x * x;
} // повертає квадрат числа

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []

// Зверніть увагу: функція не повинна змінювати переданий їй масив:

var arr = [1, 2, 3];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

/*
  2. Написати функцію яка форматує текст: 
    - прибирає пробіли з початку і кінця, 
    - прибарає всі займі пробіли (два і більше підряд)
    - кожне речення починає з великої букви, а всі наступні символи в речені робить маленькими
*/
function formatText(text) {
  const sentences = text.split('.');
  
  for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i].trim();
    if (sentence) {
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
        sentences[i] = sentence;
    }
  }
  
  const formattedText = sentences.join('. ');
  return formattedText;
}

console.log(formatText("heLLo, this is My teXT.   have A NiCe DaY  ")); // "Hello, this is my text. Have a nice day"
console.log(formatText(" Hello woRld   ")); // "Hello world"

/*
    3. Написати функцію, яка поверне число голосних букв в строці
*/

function countVowels(arr) {

  const vowels = ["a", "A", "o", "O", "u", "U", "e", "E", "i", "I"];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("aaaat")); // виводить 4
console.log(countVowels("Hello world")); // виводить 3

/*
    4. Написати функцію, яка видаляє всі спеціальні символи зі строки (залишає лише числа, букви і пробіли в будь-якому регістрі)
*/
function clearStr(str) { 
  let clearedStr = str.replace(/[^a-zA-Z0-9\s]/g, '').trim();
  return clearedStr;
}

console.log(clearStr("My var: 22 ")); // виведе "My var 22"
console.log(clearStr("Foo %$#% bar")); // виведе "Foo bar" 
console.log(clearStr("; SELECT * FROM passwords ")); // виведе "SELECT FROM passwords"
