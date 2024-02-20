const json = {
    name: 'Ivan',
    lastName: 'Baga',
    1: 30
}

const arr = [1,2,3]

const oneArr = arr[0] // в переменной oneArr получаем элемент массива под индексом 0

//деструктуризация массива
const [one, two, three] = arr 
const [one1, ...args] = arr  //в args будет массив с элементами с начиная с индекса 1 

//деструктуризация объекта
const { lastName } = json

//получить значение ключа 1. Не всегда можно получить значение ключа через точку (.) Для некоторых случаев используются квадратные скобки []
const age = json['1']


const personName = {
    person: 'Ivan',
    getName: function() {
    console.log('===> Это у нас ', this.person)
    }
}

 const { getName } = personName

 //вызов метода с контекстом объекта personName
 getName.call(personName)

 //привязка контекста объекта personName к методу getName
 const ivanName = personName.getName.bind(personName)

 ivanName() // вызвается с контекстом personName

 const anotherPerson = {
    person:'Vasya'
 }

 function someFunc() {
console.log('===> Его зовут', this.person)
 }

 someFunc.call(anotherPerson) //вызов функции с контекстом объекта anotherPerson

 const someAnotherFunc = someFunc.bind(anotherPerson) //привазка контекста объекта anotherPerson к функции someFunc

 someAnotherFunc() //вызов функции с контекстом объекта anotherPerson





