const span = document.querySelector('.lorem');
//const text = span.innerHTML
const text = 'Ivan ivanov';
pattern = /a-z/;
const result = text.search(pattern);
//console.log('===> result', result)

//check password
const btn1 = document.querySelector('.button_1');
const input1 = document.querySelector('.input_1');
const answerContainer1 = document.querySelector('.answer_container_1');

btn1.addEventListener('click', (e) => {
  //Пароль должен содержать символы: !%*&
  //Пароль должен содержать заглавне буквы
  //Пароль должен содержать цифры

  //option1
  const symbols = /[!%&]/g;
  const capitalLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  //option2
  const checkPasswd = /[!%&A-Z0-9]/g;

  const value = input1.value; //this is string from input
  //option1
  const isSymbols = value.match(symbols);
  const isCapitalLetters = value.match(capitalLetters);
  const isNumbers = value.match(numbers);
  //option2
  const isCheckPasswd = value.match(checkPasswd);

  //option1
  // if(isSymbols && isSymbols.length &&
  //     isCapitalLetters && isCapitalLetters.length &&
  //     isNumbers && isNumbers.length
  //     ){
  //option2
  if (isCheckPasswd && isCheckPasswd.length) {
    answerContainer1.style.color = 'green';
    answerContainer1.innerHTML = 'пароль принят';
  } else {
    answerContainer1.style.color = 'red';
    answerContainer1.innerHTML = 'пароль не принят';
  }
});

//check email
const btn2 = document.querySelector('.button_2');
const input2 = document.querySelector('.input_2');
const answerContainer2 = document.querySelector('.answer_container_2');

btn2.addEventListener('click', (e) => {
  const value = input2.value;
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = emailPattern.test(value);
  if (result) {
    answerContainer2.style.color = 'green';
    answerContainer2.innerHTML = 'email принят';
  } else {
    answerContainer2.style.color = 'red';
    answerContainer2.innerHTML = 'неверный формат email';
  }
});

const btn3 = document.querySelector('.button_3');
const input3 = document.querySelector('.input_3');
const answerContainer3 = document.querySelector('.answer_container_3');

//other
btn3.addEventListener('click', (e) => {
  const value = input3.value;
  const numbers = /\d{2,4}/g;
  const doubles = /\d.\d/g;

  const result = value.match(doubles);
  console.log('===> result', result);
});

//check phone
const btn4 = document.querySelector('.button_4');
const input4 = document.querySelector('.input_4');
const answerContainer4 = document.querySelector('.answer_container_4');

btn4.addEventListener('click', (e) => {
  const value = input4.value;
  //формат телефонного номера +49(123)-12345 или +49(123)-123456
  const phonePattern = /^(\+|00)49\(\d{3}\)-\d{5,6}$/g;
  const result = value.match(phonePattern);
  if (result && result.length) {
    answerContainer4.style.color = 'green';
    answerContainer4.innerHTML = 'формат телефона принят';
  } else {
    answerContainer4.style.color = 'red';
    answerContainer4.innerHTML = 'некорректный формат телефона';
  }
});

//regex groups
const btn5 = document.querySelector('.button_5');
const input5 = document.querySelector('.input_5');
const answerContainer5 = document.querySelector('.answer_container_5');

btn5.addEventListener('click', (e) => {
  const value = input5.value;

  //Работать надо хорошо Работать надо хорошо Работать надо плохо

  const pattern = /Работать надо (хорошо|плохо)/g;
  const result = value.match(pattern);
  //console.log('===> result', result)
});

//replace with regex groups
const person = 'Name: Jhon, age: 30';
const patternPerson = /(\w+): Jhon, (\w+): 30/;

//option1
// const newPerson = person.replace(patternPerson, '$1: Bob, $2: 40')
//console.log('===> newPerson ',newPerson  )

//option2
const newPerson = person.replace(patternPerson, function (match, name, age) {
  return `${name.toUpperCase()}: Ivan, ${age.toUpperCase()}: 25 Ivan married`;
});

//console.log('===> newPerson', newPerson);
