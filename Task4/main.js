// Decision Making App
'use strict';

function getRandom() {
  return Math.floor(Math.random() * 10);
}
console.log(getRandom());

function randomQ() {
  const userInput = document.querySelector('#question').value;
  if (userInput == '') {
    console.log('You did not ask anything');
  } else {
    let answer;
    switch (getRandom()) {
      case 0:
        answer = 'I am not sure!';
        break;
      case 1:
        answer = 'It really depends on the specific situation and context.';
        break;
      case 2:
        answer = 'It is certain';
        break;
      case 3:
        answer = 'It is decidedly so!';
        break;
      case 4:
        answer = 'Without a doubt';
        break;
      case 5:
        answer = 'Yes, definitely!';
        break;
      case 6:
        answer = 'You may rely on it.';
        break;
      case 7:
        answer = 'Cannot predict now';
        break;
      case 8:
        answer = "Don't count on it";
        break;
      case 9:
        answer = 'My sources say No';
        break;

      default:
        answer = 'Ask a valid question!';
    }
    console.log(answer);
  }
}
