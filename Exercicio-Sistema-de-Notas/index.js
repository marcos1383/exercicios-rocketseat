/*
let A = 'Mais que 90';
let B = '80 a 89'
let C = '70 a 79'
let D = '60 a 69'
let F = 'Menor que 60'
*/

function getScore(nota){
    if (nota > 100){
        console.log('Ops. Nota maior que 100! Digite uma nota válida...')
    } else if(nota >= 90){
        console.log('Nota A: Parabéns...')
    } else if (nota >= 80 && nota <= 89){
        console.log('Nota B: Muito bom...')
    } else if (nota >= 70 && nota <= 79){
        console.log('Nota C: Bom...')
    } else if (nota >= 60 && nota <= 69){
        console.log('Nota D: Foi por pouco em...')
    } else if (nota < 60 && nota >=0) {
        console.log('Nota F: Não foi dessa vez :(')
    } else {
        console.log('Nota inválida...')
    }
    return nota
}

console.log(getScore(-9))
console.log(getScore(10))
console.log(getScore(60))
console.log(getScore(70))
console.log(getScore(102))
console.log(getScore(80))