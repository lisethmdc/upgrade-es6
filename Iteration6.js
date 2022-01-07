//6.1
const numbers = [32, 21, 63, 95, 100, 67, 43]

let hundred = numbers.find(item => item === 100)


//6.2
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
]

let found = movies.find(item => item.date === 2010)


//6.3
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
]
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
]

let alien = aliens.find(item => item.name === 'Cucushumushu')
let mutation = mutations.find(item => item.name === 'Porompompero')

let newAlien = {...alien, mutacion: {...mutation}}
console.log(newAlien)