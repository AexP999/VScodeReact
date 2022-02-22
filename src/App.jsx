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

  // Range Extraction

  // A format for expressing an ordered list of integers is to use a comma separated list of either

  // individual integers
  // or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'.The range includes all integers in the interval including both endpoints.It is not considered a range unless it spans at least 3 numbers.For example "12,13,15-17"
  // Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

  //     Example:
  //   solution([ -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ]);
  // // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

  //------------------------------------------------------


  // function solution (arr) {
  //   return (
  //     arr.reduce(splitToRange, [])
  //       .map(convertToString)
  //       .join(',')
  //   );

  //   function splitToRange (prevArr, curEl) {
  //     if(!prevArr.length) {
  //       prevArr.push([ curEl ]);
  //       return prevArr;
  //     }

  //     let curArr = prevArr[ prevArr.length - 1 ];
  //     let prevEl = curArr[ curArr.length - 1 ];
  //     console.log('curArr', curArr);
  //     console.log('prevArr', prevArr);
  //     console.log('prevEl', prevEl);

  //     prevEl + 1 === curEl ? curArr.push(curEl) : prevArr.push([ curEl ]);
  //     return prevArr;
  //   }

  //   function convertToString (prevArrRange) {
  //     return prevArrRange.length - 1 >= 2
  //       ? prevArrRange[ 0 ] + '-' + prevArrRange[ prevArrRange.length - 1 ]
  //       : prevArrRange.join(',');

  //   }

  // }

  // function solution (list) {
  //   for(var i = 0; i < list.length; i++) {
  //     var j = i;
  //     while(list[ j ] + 1 === list[ j + 1 ]) { j++; };
  //     // debugger;
  //     if(j !== i && j - i > 1) list.splice(i, j - i + 1, list[ i ] + '-' + list[ j ]);
  //   }
  //   return list.join();
  // }

  // const solution = (list) => list.reduce((acc, curr, i) => {
  //   // debugger;
  //   // if(i === 0) return curr.toString();
  //   if(list[ i - 1 ] === curr - 1 && list[ i + 1 ] === curr + 1) return acc;
  //   if(list[ i - 2 ] === curr - 2 && list[ i - 1 ] === curr - 1) return acc + "-" + curr;
  //   return acc + "," + curr;
  // });

  // const a = solution([ -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ]);
  // console.log(a);

  //------------------------------------------------------

  //------------------------------------------------------
  // Codewars style ranking system

  //   Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.

  // Business Rules:
  // A user starts at rank - 8 and can progress all the way to 8.
  // There is no 0(zero) rank.The next rank after - 1 is 1.
  // Users will complete activities.These activities also have ranks.
  // Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
  // The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
  // A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
  // Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards(Once you reach rank 8 there is no more progression).
  // A user cannot progress beyond rank 8.
  // The only acceptable range of rank values is - 8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8. Any other value should raise an error.
  // The progress is scored like so:

  // Completing an activity that is ranked the same as that of the user's will be worth 3 points
  // Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
  // Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
  // Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.
  // Logic Examples:
  // If a user ranked - 8 completes an activity ranked - 7 they will receive 10 progress
  // If a user ranked - 8 completes an activity ranked - 6 they will receive 40 progress
  // If a user ranked - 8 completes an activity ranked - 5 they will receive 90 progress
  // If a user ranked - 8 completes an activity ranked - 4 they will receive 160 progress, resulting in the user being upgraded to rank - 7 and having earned 60 progress towards their next rank
  // If a user ranked - 1 completes an activity ranked 1 they will receive 10 progress(remember, zero rank is ignored)
  // Code Usage Examples:
  //   var user = new User();
  //   user.rank; // => -8
  //   user.progress; // => 0
  //   user.incProgress(-7);
  //   user.progress; // => 10
  //   user.incProgress(-5); // will add 90 progress
  //   user.progress # => 0; // progress is now zero
  //   user.rank # => -7; // rank was upgraded to -7
  //   Note: Codewars no longer uses this algorithm for its own ranking system.It uses a pure Math based solution that gives consistent results no matter what order a set of ranked activities are completed at.


  return (
    <div className='App'>
      <h1>CODEWARS</h1>
      <h2>Result: { }</h2>

    </div>
  );
};
export default App;
