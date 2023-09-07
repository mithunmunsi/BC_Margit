// alert("Hello World");

function calGasoline(e) {
  const price = document.querySelector("#price").value;
  const amount = document.querySelector("#amount").value;
  const answer = document.querySelector("#answer");
  let message;
  const totalPrice = (amount / price).toFixed(2);
  if (amount >= 10) {
    message = `You Could get about ${totalPrice} liters. Good, now you can escape`;
  } else {
    message = `You could about ${totalPrice} liters, Sorry! 🥲 You have to Stay!`;
  }
  answer.textContent = message;
}
