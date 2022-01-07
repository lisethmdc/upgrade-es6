//7.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
]

let totalScore = exams.reduce((acc, alumn) => acc + alumn.score, 0)
console.log(totalScore)


//7.2
let onlyApproved = exams.reduce((acc, alumn) => {
    if (alumn.score >= 5) {
        acc = acc + alumn.score
    }
    return acc
}, 0)

console.log(onlyApproved)


//7.3
let average = exams.reduce((acc, alumn) => {
    return acc + alumn.score
}, 0) / exams.length

console.log(average)

