const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('промис, который выполнится через 3 секунды');
  }, 3000);
});
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('промис, который выполнится через 2 секунды');
  }, 2000);
});
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('промис, который выполнится через 1 секунду');
  }, 1000);
});

async function promiseRace() {
  try {
    const firstResult = await firstPromise;
    const secondResult = await secondPromise;
    const thirdResult = await thirdPromise;

    //Предполагаем, что здесь логика, которая определяет, какой из промисов выполнится быстрее
    //В данном примере это thirdResult
    return thirdResult;
  } catch {}
}
promiseRace().then((res) =>
  console.log(
    '===> дожидаемся выполнения всех промисов и возвращаем самый быстрый. И это',
    res
  )
);

//асинхронная функция возвращает промис!
async function asyncFunction() {
  return 1;
}
console.log('===> это промис', asyncFunction()); //Так мы получим промис!
asyncFunction().then((res) => console.log('===> это результат', res)); //а так результат

const firstPromiseFunc = (number) =>
  new Promise((resolve, reject) => {
    number += 1;
    console.log('===> этот промис возвращает 2');
    setTimeout(() => {
      resolve(number);
    }, 3000);
  });
const secondPromiseFunc = (numberFromFirsFunction) =>
  new Promise((resolve, reject) => {
    numberFromFirsFunction += 1;

    if (numberFromFirsFunction != 3)
      reject('значение не равно 3. Ожидальсь входное значение 2');

    console.log('===> этот промис возвращает 3');
    setTimeout(() => {
      resolve(numberFromFirsFunction);
    }, 2000);
  });
const thirdPromiseFunc = (numberFromSeconFunction) =>
  new Promise((resolve, reject) => {
    numberFromSeconFunction += 1;
    console.log('===> этот промис возвращает 4');
    setTimeout(() => {
      resolve(numberFromSeconFunction);
    }, 1000);
  });

//в блоке try функции getNumber результаты промосов возвращаются последовательно в том порядке, в которым мы вызвали функции firstPromiseFunc, secondPromiseFunc и thirdPromiseFunc
async function getNumber() {
  try {
    const firstResult = await firstPromiseFunc(1); //если сюда передать другое число, то промис в функции secondPromiseFunc исполнится с ошибкой
    const secondResult = await secondPromiseFunc(firstResult);
    const thirdResult = await thirdPromiseFunc(secondResult);
    return thirdResult;
  } catch (err) {
    console.log('===> fatal error', err);
  }
}

getNumber().then((res) => {
  console.log('===> ', res);
});
