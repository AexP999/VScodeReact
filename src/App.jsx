import React from 'react';
import './App.css';


function App () {
  //------------------------------------------------------
  // Valid Parentheses

  // Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.The function should return true if the string is valid, and false if it's invalid.

  // "()"              => true;
  // ")(()))"          => false;
  // "("               => false;
  // "(())((()())())"  => true

  // function validParentheses (parens) {
  //   let pairArr = parens.split('');

  //   delPair();

  //   function delPair () {
  //     let length = pairArr.length;
  //     console.log('start length', length);
  //     for(let i = 0; i < pairArr.length; i++) {
  //       console.log("pairArr[ i ] === '('", pairArr[ i ] === '(', i);
  //       console.log('pairArr[ i + 1 ] === ")"', pairArr[ i + 1 ] === ')', i);

  //       if(pairArr[ i ] === '(' && pairArr[ i + 1 ] === ')') {
  //         console.log('here in if');
  //         pairArr.splice(i, 2);
  //         console.log('pairArr.length', pairArr.length, 'length', length);
  //       }
  //     }
  //     if(length === pairArr.length) {
  //       return console.log('end');
  //     }
  //     delPair();
  //     return pairArr.length;
  //   }
  //   if(pairArr.length === 0) { return true; }
  //   return false;
  // }
  // console.log(validParentheses('(((())))'));
  //------------------------------------------------------

  //------------------------------------------------------
  //   Rot13
  // ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.ROT13 is an example of the Caesar cipher.

  // Create a function that takes a string and returns the string ciphered with Rot13.If there are numbers or special characters included in the string, they should be returned as they are.Only letters from the latin / english alphabet should be shifted, like in the original Rot13 "implementation".


  // function rot13 (message) {

  //   const alphabetArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  //   const strArr = message.split('');

  //   const res1 = strArr.map(letter => {
  //     for(let i = 0; i < alphabetArray.length; i++) {

  //       if(/^[A-Z]*$/.test(letter)) {
  //         if(letter === alphabetArray[ i ].toUpperCase()) {
  //           return alphabetArray[ i >= 13 ? i - 13 : i + 13 ].toUpperCase();
  //         }
  //       }
  //       if(letter === alphabetArray[ i ]) {
  //         return alphabetArray[ i >= 13 ? i - 13 : i + 13 ];
  //       }
  //     }
  //     return letter;
  //   });

  //   return res1.join('');
  // }


  // let res = rot13('Ehol vf pbby!');
  // console.log(res);


  //------------------------------------------------------

  //------------------------------------------------------
  // Persistent Bugger.
  // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

  // For example:
  //   persistence(39) === 3; // because 3*9 = 27, 2*7 = 14, 1*4=4
  //   // and 4 has only one digit

  //   persistence(999) === 4; // because 9*9*9 = 729, 7*2*9 = 126,
  //   // 1*2*6 = 12, and finally 1*2 = 2

  //   persistence(4) === 0; // because 4 is already a one-digit number

  // function persistence (num) {

  //   const numToArr = val => val.toString().split('');
  //   const onReduceArr = val => val.reduce((prev, curr) => prev * curr);
  //   let count = 0;
  //   const res = (item) => {
  //     const numArr = numToArr(item);
  //     const res1 = onReduceArr(numArr);
  //     ++count;
  //     if(res1 >= 10) { res(res1); }
  //     return count;
  //   };
  //   res(num);
  //   return num < 10 ? 0 : count;
  // }
  // console.log(persistence(222));

  //------------------------------------------------------

  //------------------------------------------------------
  //   Highest Scoring Word

  // Given a string of words, you need to find the highest scoring word.
  // Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
  // You need to return the highest scoring word as a string.
  // If two words score the same, return the word that appears earliest in the original string.
  // All letters will be lowercase and all inputs will be valid.

  //  function high (x) {
  //   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  //   const wordArr = x.split(' ');
  //   const res = wordArr.map(el => {
  //     let sum = 0;
  //     for(let i = 0; i < el.length; i++) {
  //       sum += alphabetString.indexOf(el[ i ]) + 1;
  //     }
  //     return sum;
  //   });
  //   return wordArr[ res.indexOf(Math.max(...res)) ];
  // }
  // console.log(high('aa b'));

  //------------------------------------------------------
  //------------------------------------------------------

  //   Problem Context
  //   The Fibonacci sequence is traditionally used to explain tree recursion.
  //   var fibonacci = function(n) {
  //     if(n == 0 || n == 1)
  //       return n;
  //     return fibonacci(n - 1) + fibonacci(n - 2);
  //   }
  //   This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

  // This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much.You may go for a cup of coffee or go take a nap while you wait for the answer.But if you try it here in Code Wars you will most likely get a code timeout before any answers.

  // For this particular Kata we want to implement the memoization solution.This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

  // The trick of the memoized version is that we will keep a cache data structure(most likely an associative array) where we will store the Fibonacci numbers as we calculate them.When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

  // Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion Can you make it so the memoization cache is private to this function?

  // let store = {};
  // let fibonacci = function(n) {

  //   if(n === 0 || n === 1) {
  //     store[ n ] = n;
  //     return n;

  //   }
  //   if(store[ n ]) {
  //     return store[ n ];
  //   }
  //   let res = fibonacci(n - 1) + fibonacci(n - 2);
  //   store[ n ] = res;

  //   return res;
  // };
  // let n = 70;
  // console.log(n, fibonacci(n));

  //------------------------------------------------------

  //------------------------------------------------------






  //------------------------------------------------------

  return (
    <div className='App'>
      <h1>CODEWARS</h1>
    </div>
  );
};
export default App;
