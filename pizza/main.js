'use strict';
const name = document.querySelector('#name').value;

function calculateTotal() {
  const toppings = document.querySelectorAll('input[name="topping"]:checked');
  const size = document.querySelector('input[name="size"]:checked');
  const delivery = document.querySelector('#delivery');
  let total = 0;

  toppings.forEach((topping) => {
    switch (topping.value) {
      case 'pepperoni':
      case 'sausage':
        total += 0.0;
        break;
      case 'mushrooms':
      case 'olives':
        total += 0.0;
        break;
    }
  });

  if (size) {
    switch (size.value) {
      case 'medium':
        total += 10.0;
        break;
      case 'large':
        total += 12.0;
        break;
      default:
        total += 8.0;
    }
  }
  if (delivery) {
    switch (delivery.value) {
      case 'eatIn':
        total += 0;
        break;
      case 'pickup':
        total += 0;
        break;
      case 'doorD':
        total += 5.0;
        break;
      default:
        total += 8.0;
    }
  }

  document.getElementById('total-cost').textContent = total.toFixed(2);
}
