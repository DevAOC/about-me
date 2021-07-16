/* eslint-disable indent */
'use strict';
let resp;
let currentScore = 0;
const randomNum = Math.floor(Math.random() * 100);
const prompts = ['Have I played on a State Championship winning football team?', 'Was I born in the United States of America?', 'Did I start university at 16 years old?', 'Have I previously attempted to obtain a bachelor\'s degree in Computer Science?', 'Have I attended culinary school and graduated with honors?', 'Guess a number between 0 and 100. (You have 4 attempts)', 'What is my favorite sport? (This time you\'ll have 6 attempts'];
const answers = ['y', 'n', 'y', 'n', 'y', randomNum, 'hockey', 'football', 'soccer'];
let userName = prompt('Welcome to my site! Please enter your name.');
playGame();
function playGame() {
  alert('You may answer the following using either yes/no or y/n.');
  for (let i = 0; i < prompts.length; i++) {
    switch (i) {
      case 5:
        type3(i);
        break;
      case 6:
        type2(i);
        break;
      default:
        type1(i);
    } 
  }
  alert('Thank you, ' + userName + ', for playing! You got ' + currentScore + ' correct out of 7!');
}
function type3(i) {
  //let score = currentScore;
  let correct = false;
  let attempts = 0;
  while (!correct && attempts < 4) {
    resp = prompt(prompts[i]);
    // console.log(resp);
    if (isNaN(resp)) {
      alert('You did not enter a number.');
    } else if (resp > answers[i]) {
      alert('Too high, try again!');
    } else if (resp < answers[i]) {
      alert('Too low, try again!');
    } else {
      alert('You got it right!');
      correct = true;
      //score++;
      currentScore++;
    }
    attempts++;
  }
  if (!correct) {
    alert('Sorry, the correct number was ' + answers[i] + ', better luck next time!');
  }
}
function type2(i) {
  let correct = false;
  let attempts = 0;
  while (!correct && attempts < 6) {
    resp = prompt(prompts[i]).toLowerCase();
    for (let x = 6; x < answers.length; x++) {
      if (resp === answers[x]) {
        alert('Nice job! You guessed one of my favorite sports!');
        correct = true;
        currentScore++;
      }
    }
    if (!correct && attempts === answers.length) {
      alert('Sorry, you were incorrect and are out of guesses. The possible answers were ' + answers[6] + ', ' + answers[7] + ', ' + answers[8] + '.');
    } else if (!correct) {
      alert('Sorry, you were incorrect. Please try again!');
    }
    attempts++;
  }
}
function type1(i) {
  resp = prompt(prompts[i]).charAt(0).toLowerCase();
  if (resp === 'y' || resp === 'n') {
    switch (resp === answers[i]) {
      case true:
        // console.log('Awesome! You answered correctly!');
        alert('Awesome! You answered correctly!');
        currentScore++;
        break;
      default:
        // console.log('Sorry, you answered incorrectly.');
        alert('Sorry, you answered incorrectly.');
    }
  } else {
    alert('You did not give a proper response.');
  }
}
