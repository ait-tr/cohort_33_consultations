// const body = document.querySelector('body')

//получить и обработать json
// fetch('https://rickandmortyapi.com/api/character')
// .then(jsonData => jsonData.json())
// .then(data => {
// data.results.forEach(row => {
// const img = document.createElement('img')
// img.setAttribute('src', row.image)
// body.appendChild(img)
// })
// })

for (let index = 0; index < 10; index++) {
  //console.count('Итерация')
}

const arr = [];

//посмотреть время выполнения цикла
//console.log('===> ',new Date )

for (let index = 0; index < 100000000; index++) {
  //arr.push(index)
}
//console.log('===> ',new Date )

// Создать случайное число от 1 до 10
//Если выпадает число от 1 до 3 включително вывести в консоль "ДЖЕКПОТ!!!"
//Если выпадает число от 4 до 7  включително вывести в консоль "ТЕБЕ ПОЧТИ ПОВЕЗЛО"
//Если выпадает число от 8 до 10  включително вывести в консоль "ХОЛОДНО"

//Math.floor() //всегда округляет в меньшую сторону
//Math.ceil()//всегда округляет в большую сторону
//Math.round() //математическое округление

const min = 1;
const max = 6;

let randomNumber = Math.round(Math.random() * (max - min) + min);

if (randomNumber >= 1 && randomNumber <= 2) {
  //console.log('ДЖЕКПОТ!!!')
} else if (randomNumber >= 3 && randomNumber <= 4) {
  //console.log("ТЕБЕ ПОЧТИ ПОВЕЗЛО")
} else {
  //console.log("ХОЛОДНО")
}

switch (randomNumber) {
  case 1: //console.log('ДЖЕКПОТ!!!')
    break;
  case 2: //console.log('ДЖЕКПОТ!!!')
    break;
  case 3: //console.log('ТЕБЕ ПОЧТИ ПОВЕЗЛО')
    break;
  case 4: //console.log('ТЕБЕ ПОЧТИ ПОВЕЗЛО')
    break;
  case 5: //console.log("ХОЛОДНО")
    break;
  case 6: //console.log("ХОЛОДНО")
    break;
  default:
  //console.log('Не одно условие не сработало', )
}

const day = 'Saturday';

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    //console.log(`${day} - это рабочий день`)
    break;
  case 'Saturday':
  case 'Sunday':
    //console.log(`${day} - это выходной день`)
    break;
  default:
    break;
}

const names = ['Iavan', 'Semen', 'Petr', 'Tatyana'];
const ages = [20, 25, 18, 50];
const persons = [];

for (let index = 0; index < names.length; index++) {
  persons.push(names[index], ages[index], 'лет/годов');
}

const personsReverse = [];
for (let index = 0; index < persons.length; index++) {
  personsReverse.unshift(persons[index]);
}
console.log('newPersons===> ', personsReverse);

//тернарный оператор
// условие ? результат 1 : результат 2
