'use strict';
alert('Please the following using yes or no.');
// let answer1 = 'yes';
// let answer2;
// let answer3;
// let answer4;
// let answer5;
const answers = ['y', 'n', 'y', 'n', 'y'];
const prompts = ['Have I played on a State Championship winning football team?', 'Was I born in the United States of America?', 'Did I start university at 16 years old?', 'Have I previously attempted to obtain a bachelor\'s degree in Computer Science?', 'Have I attended culinary school and graduated with honors?'];
// let resp1 = prompt();
// let resp2 = prompt();
// let resp3 = 
for (let i = 0; i < answers.length; i++) {
  const answer = answers[i];
  const resp = prompt(prompts[i]).charAt(0).toLowerCase();

  // alert(resp);
}
// console.log('');
// alert();
