// Give it a shot and see what happens!
// Pause and think things over before deciding.
// Learn from what you've been through before.
// Try doing something different for a change.
// Take care of yourself first – it matters.
// Listen to what your heart says – it helps.
// Stick to what feels right with your values.
// Think about where you want to be in the long run.
// Ask people who know about this for advice.
// Trust your gut feeling – it's usually right.

// Arrow Function
const decision = () => {
  // Getting Question from the user by ID
  const userQuestion = document.querySelector('#question').value; // here .value brings whatever is written in the input
  // console.log('userQuestion');
  // Selecting HTML element with querySelector and Storing in a variable
  const systemAnswer = document.querySelector('#answer');
  // Generating Random Numbers
  let randomNum = Math.floor(Math.random() * 10);

  //Now Making Random Answers Using Switch Statments
  let reply;

  switch (randomNum) {
    case 0:
      reply = 'Give it a shot and see what happens!';
      break;
    case 1:
      reply = 'Pause and think things over before deciding.';
      break;
    case 2:
      reply = 'Learn from what you have been through before.';
      break;
    case 3:
      reply = 'Try doing something different for a change.';
      break;
    case 4:
      reply = 'Take care of yourself first – it matters.';
      break;
    case 5:
      reply = 'Listen to what your heart says – it helps.';
      break;
    case 6:
      reply = 'Stick to what feels right with your values.';
      break;
    case 7:
      reply = 'Think about where you want to be in the long run.';
      break;
    case 8:
      reply = 'Ask people who know about this for advice.';
      break;
    case 9:
      reply = 'Trust your gut feeling – it is usually right.';
      break;

    default:
      break;
  }
  // User Question converts into random number and
  // if that random number matches with the swith cases then
  // pusing the asnwer to HTML back
  systemAnswer.textContent = reply;
  clearInput();
};

const clearInput = () => {
  if (question.value != '') {
    question.value = '';
  }
};
