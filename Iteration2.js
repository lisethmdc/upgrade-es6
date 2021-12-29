//2.1
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
}

let {title, gender, year} = game

console.log(title)
console.log(gender)
console.log(year)


//2.2
const fruits = ['Banana', 'Strawberry', 'Orange']

let [fruit1, fruit2, fruit3] =  fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)


//2.3
const animalFunction = () => {
 
  return {name: 'Bengal Tiger', race: 'Tiger'}
  
}

let { name, race } = animalFunction()
console.log(name)
console.log(race)


//2.4

const car = {model: 'Mazda 6', itv: [2015, 2011, 2020] }

let { model, itv } = car
let [ year1, year2, year3 ] = car.itv

console.log(model)
console.log(itv)
console.log(year1)
console.log(year2)
console.log(year3)


