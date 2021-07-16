/* eslint-disable indent */
'use strict';
let currentScore = 0;
const genericPositive = 'Congratulations, you got the answer right!';
const genericNegative = 'Sorry, you got the answer wrong.';
const genericInvalid = 'Your answer did not fit the criteria';
const genericOver = 'You have exhausted all attempts';
const randomNum = Math.floor(Math.random() * 100);
const prompts = ['Have I played on a State Championship winning football team?', 'Was I born in the United States of America?', 'Did I start university at 16 years old?', 'Have I previously attempted to obtain a bachelor\'s degree in Computer Science?', 'Have I attended culinary school and graduated with honors?', 'Guess a number between 0 and 100. (You have 4 attempts)', 'What is my favorite sport? (This time you\'ll have 6 attempts'];
const answers = ['y', 'n', 'y', 'n', 'y', randomNum, 'hockey', 'football', 'soccer'];
let userName = prompt('Welcome to my site! Please enter your name.');
playGame();
function playGame() {
  alert('You may answer the following using either yes/no or y/n.');
  for (let i = 0; i < prompts.length; i++) {
    switch (prompts, answers, i) {
      case 6:
          qType3(i);
          break;
      case 5:
          qType2(i);
          break;
      default:
          qType1(i);
    }
  }
  alert('Thank you, ' + userName + ', for playing! You got ' + currentScore + ' correct out of 7!');
}
function qType1(i) {
  let answer = prompt(prompts[i]).charAt(0).toLowerCase();
  //console.log(answer);
  if (!isNaN(answer)) {
      alert(genericInvalid);
  } else {
      if (answer === answers[i]) {
          alert(genericPositive);
          currentScore++;
      } else {
          alert(genericNegative);
      }
  }
}
function qType2(i) {
  let attempts = 0;
  let correct = false;
  while (!correct && attempts < 4) {
      let answer = prompt(prompts[i]);
      //console.log(answer);
      if (isNaN(answer)) {
          alert(genericInvalid);
      } else {
          if (answer > answers[i]) {
              alert('Too high, try again.');
          } else if (answer < answers[i]) {
              alert('Too low, try again.');
          } else {
              alert(genericPositive);
              correct = true;
              currentScore++;
          }
      }
      attempts++;
  }
  if (!correct) {
      alert(genericOver);
  }
}
function qType3(i) {
  let attempts = 0;
  let correct = false;
  while (!correct && attempts < 6) {
      let answer = prompt(prompts[i]).toLowerCase();
      //console.log(answer);
      if (!isNaN(answer)) {
          alert(genericInvalid);
          break;
      } else {
          for (let favs = i; favs < answers.length; favs++) {
              if (answer === answers[favs]) {
                  alert(genericPositive);
                  correct = true;
                  currentScore++;
              }
          }
          if (!correct) {
              alert(genericNegative);
          }
      }
      attempts++;
  }
  if (!correct) {
      alert(genericOver);
  }
}
