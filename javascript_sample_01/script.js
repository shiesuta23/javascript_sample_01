// JavaScript
console.log('読み込みOK');

// body の背景色を変える
const btnSample01 = document.querySelector('.sample01');
btnSample01.addEventListener('click', () => {
  const obj = document.body;
  obj.style.backgroundColor = 'pink';
});

// ID要素 の背景色を変える
const btnSample02 = document.querySelector('.sample02');
btnSample02.addEventListener('click', () => {
  const obj = document.querySelector('#id01');
  obj.style.backgroundColor = 'skyblue';
});

// CLASS要素 の背景色を変える
const btnSample03 = document.querySelector('.sample03');
btnSample03.addEventListener('click', () => {
  const lines = document.querySelectorAll('.class01');
  for (let i = 0; i < lines.length; i++) {
    lines[i].style.backgroundColor = 'yellow';
  }
});

// HTML要素 の背景色を変える
const btnSample04 = document.querySelector('.sample04');
btnSample04.addEventListener('click', () => {
  const obj = document.querySelectorAll('p');
  for (let i = 0; i < obj.length; i++) {
    obj[i].style.backgroundColor = 'blue';
    obj[i].style.color = 'white';
  }
});
