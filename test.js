const elContainer = document.querySelector('.container');
const el = document.createElement('p');

let firstName = '';
while (!firstName) {
  firstName = prompt("What's your name?");
}

el.textContent = `Hei ${firstName}`;

elContainer.append(el);
