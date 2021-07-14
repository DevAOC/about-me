/* eslint-disable indent */
'use strict';
let userName = prompt('Welcome to my site! Please enter your name.');
alert('You may answer the following using either yes/no or y/n.');
const answers = ['y', 'n', 'y', 'n', 'y'];
const prompts = ['Have I played on a State Championship winning football team?', 'Was I born in the United States of America?', 'Did I start university at 16 years old?', 'Have I previously attempted to obtain a bachelor\'s degree in Computer Science?', 'Have I attended culinary school and graduated with honors?'];
let answer;
let resp;
for (let i = 0; i < answers.length; i++) {
  answer = answers[i];
  resp = prompt(prompts[i]).charAt(0).toLowerCase();
  switch (resp === answer) {
    case true:
      // console.log('Awesome! You answered correctly!');
      alert('Awesome! You answered correctly!');
      break;
    default:
      // console.log('Sorry, you answered incorrectly.');
      alert('Sorry, you answered incorrectly.');
      break;
    // default:
    //   // console.log('You did not enter a proper response');
    //   alert('You did not enter a proper response.');
    //   break;
  }
}
alert('Thank you, ' + userName + ', for playing my game!');
