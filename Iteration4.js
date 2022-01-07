//4.1
const users = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
]

var userName = users.map(user => user.name)
console.log(userName)


//4.2
const users2 = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
]

var newArr = users2.map(user => {
	
if (user.name[0] === 'A') {
	user.name = 'Anacleto'
} 
return user.name
})

console.log(newArr)


//4.3
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
]

let check = cities.map(city => {
	if (city.isVisited === true) {
		city.name = city.name + ' (Visitado)'
	}
	return city.name
})

console.log(check)