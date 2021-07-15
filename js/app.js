/* eslint-disable indent */
'use strict';
let answer;
let resp;
let score = 0;
const prompts = ['Have I played on a State Championship winning football team?', 'Was I born in the United States of America?', 'Did I start university at 16 years old?', 'Have I previously attempted to obtain a bachelor\'s degree in Computer Science?', 'Have I attended culinary school and graduated with honors?', 'Guess a number between 0 and 100. (You have 4 attempts)', 'What is my favorite sport? (This time you\'ll have 6 attempts'];
const answers = ['y', 'n', 'y', 'n', 'y'];
const randomNum = Math.floor(Math.random() * 101);
const favSports = ['hockey', 'football', 'soccer'];
let userName = prompt('Welcome to my site! Please enter your name.');
alert('You may answer the following using either yes/no or y/n.');
for (let i = 0; i < prompts.length; i++) {
  answer = answers[i];
  resp = prompt(prompts[i]).charAt(0).toLowerCase();
  if (i < 5) {
    if (resp === 'y' || resp === 'n') {
      switch (resp === answer) {
        case true:
          // console.log('Awesome! You answered correctly!');
          alert('Awesome! You answered correctly!');
          score++;
          break;
        default:
          // console.log('Sorry, you answered incorrectly.');
          alert('Sorry, you answered incorrectly.');
      }
    } else {
      alert('You did not give a proper response.');
    }
  } else if (i === 5) {//Number question
    let correct = false;
    let attempts = 0;
    while (!correct && attempts < 4) {
      resp = prompt(prompts[i]);
      // console.log(resp);
      if (isNaN(resp)) {
        alert('You did not enter a number.');
      } else if (resp > randomNum) {
        alert('Too high, try again!');
      } else if (resp < randomNum) {
        alert('Too low, try again!');
      } else {
        alert('You got it right!');
        correct = true;
        score++;
      }
      attempts++;
    }
    if (!correct) {
      alert('Sorry, the correct number was ' + randomNum + ', better luck next time!');
    }
  } else { //Fav sport question
    let correct = false;
    let attempts = 0;
    while (!correct && attempts < 6) {
      resp = prompt(prompts[i]).toLowerCase();
      for (let i = 0; i < favSports.length; i++) {
        if (resp === favSports[i]) {
          alert('Nice job! You guessed one of my favorite sports!');
          correct = true;
          score++;
        }
      }
      if (!correct && attempts === 6) {
        alert('Sorry, you were incorrect and are out of guesses. The possible answers were ' + favSports.join(', '));
      } else if (!correct) {
        alert('Sorry, you were incorrect. Please try again!');
      }
      attempts++;
    }
  }
}
alert('Thank you, ' + userName + ', for playing! You got ' + score + ' correct out of 7!');
