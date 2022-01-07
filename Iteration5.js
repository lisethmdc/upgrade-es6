//5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90]
let grownUp = ages.filter(age => age > 18)


//5.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90]
let evenNumber = ages2.filter(age => age % 2 === 0)


//5.3
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

let moreLol = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends')


//5.4
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

let withU = streamers2.filter(streamer => streamer.name.includes('u'))


//5.5
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

let streamOld = streamers3.filter(streamer => {
	if (streamer.gameMorePlayed.includes('Legends') && streamer.age > 35) {
		streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
		return streamer
	}
})

console.log(streamOld)


//5.6
const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]
