const button = document.querySelector('.btn');
const color1 = document.querySelector('#first-color');
const color2 = document.querySelector('#second-color');

var hex_numbers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

button.addEventListener('click', function (e) {
  let hexcode1 = '';
  let hexcode2 = '';
  let random_index = 0;

  for (let i = 0; i < 6; i++) {
    random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode1 += hex_numbers[random_index];
    random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode2 += hex_numbers[random_index];
  }

  document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
  color1.textContent = hexcode1;
  color2.textContent = hexcode2;
});
