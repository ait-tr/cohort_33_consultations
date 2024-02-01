//Mozilla Developer Network (MDN) документация по js 


//функция callback может находиться как непосредственно в самом методе, так и за его пределами
const arr = [1,2,3]
const summa = arr.reduce(callback,0)

//в данном примере callback объеявлен после объявления метода reduce. Если мы создаем callback посредством function declaration, то есть 
//function someFunction(){} то он доступен даже после объявления метода.

function callback(acc, value){
    return acc + value
}
//console.log('summa===> ', summa)

// Задание 1
// У вас есть массив объектов:
// ```
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

// Создайте на основе старого массива новый массив объектов по образу: [{brand: "BMW", isDiesel: true}, 
//{brand: "Mercedes", isDiesel: false}...]

//в данном примерее callback - стрелочная функция. Объявляется до объявления метода map. Стрелочная функция объявляется до того, как она будет вызываться.
const getCar = (car) => {
    return {brand:car.brand, isDiesel:car.isDiesel}
}
//Вариант1 - метод map
const newCars = cars.map(getCar)

//Вариант2 - цикл
const newCars2 = []
for (let i = 0; i < cars.length; i++) {
    newCars2.push({brand:cars[i].brand, isDiesel:cars[i].isDiesel}) 
}
//console.log('newCars===> ', newCars)
//console.log('newCar2===> ', newCars2)


const newArrayOfObjects = cars.map(({ brand, isDiesel }) => ({ brand, isDiesel }));
//console.log('newArrayOfObjects===> ', newArrayOfObjects)

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.
const totalPrice = cars.filter(car => {
    return car.isDiesel == false
}).reduce((acc, car) => acc + car.price, 0)

//console.log('totalPrice===> ', totalPrice)

//Задание. Изменить строку

//Мама мыла раму

//амаМ алым умар

const string = 'Мама мыла раму'

const stringArr = string.split(' ')
const reversedString = stringArr.map(Word).join(' ')

function Word(item){
return item.split('').reverse().join('')
}

//Варианты объявления функций
function foo(){

}

const foo1 = function(){

}

const foo2 = () => {
  
}

{
(() => {
console.log('===> это анонимная самовызывающаяся функция')
})()
}

//console.log('reversedString===> ', reversedString)




