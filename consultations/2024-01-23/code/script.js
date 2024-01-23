const btn = document.querySelector('button');
const input = document.querySelector('input');
btn.addEventListener('click', changeButtonColor);

let flag = false;
let flag2 = false;

function changeButtonColor() {
  !flag ? (flag = true) : (flag = false);

  if (flag) {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
}

const colorBtn = document.querySelector('.color_change');
function changeColor() {
  !flag2 ? (flag2 = true) : (flag2 = false);
  if (flag2) {
    colorBtn.style.backgroundColor = 'lightGreen';
    alert('color has been changed');
  } else {
    colorBtn.style.backgroundColor = 'lightGrey';
    alert('color has been changed');
  }
}

colorBtn.addEventListener('click', changeColor);
