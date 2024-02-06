//отрендерить числа в блоках по очереди с задержкой в 1 секунду
window.onload = function () {
  for (let i = 0; i <= 4; i++) {
    setTimeout(function () {
      const div = document.getElementById('first_case' + i);
      div.innerHTML = i + 1;
    }, i * 1000);
  }
};

//отрендерить один блок за другим по очереди с задержкой в 1 секунду
let id = 0;
const interval = setInterval(function () {
  const divHidden = document.getElementById('second_case' + (id - 1));

  if (divHidden) {
    divHidden.classList = 'hidden';
  }
  const divVisible = document.getElementById('second_case' + id);
  divVisible.classList = 'visible';
  id++;
  if (id >= 5) clearInterval(interval);
}, 1000);

//написать функцию wait, которая возвращает промисы возвращающие время задержки в секундах
const showNumbers = (delay) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('прошло' + ' ' + delay + ' ' + 'секунды');
    }, delay);
  });

function wait() {
  showNumbers(2000).then((response) => console.log('===> response', response));

  showNumbers(4000).then((response) => console.log('===> response', response));

  showNumbers(1000).then((response) => console.log('===> response', response));
}
wait();

//В каком порядке появятся в консоле результат выполнения функций
function logA() {
  console.log('A');
} //1
function logB() {
  console.log('B');
} //6
function logC() {
  console.log('C');
} //5
function logD() {
  console.log('D');
} //3
function logE() {
  console.log('E');
} //4
function logF() {
  console.log('F');
} //7
function logU() {
  console.log('U');
} //2

Promise.resolve().then(logE);
logA();
setTimeout(logF, 2000);
logU();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

const random = Math.random();
const casino = new Promise((res, rej) => {
  if (random > 0.5) {
    res('число действительно блольше чем 0.5');
  }
  rej('не повезло');
});

casino
  .then((success) => console.log('===> ', success))
  .catch((error) => console.log('===> ', error));

//пример рекурсии
function recursion() {
  console.log('===> ping');

  setTimeout(() => {
    recursion();
  }, 3000);
}
recursion();
