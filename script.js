/* 
Calculadora de média

O sistema deve permitir inserir 3 notas e, a partir disso, deve retornar o valor da média desse aluno.
*/

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a segunda nota: "))
let nota3 = parseFloat(prompt("Digite a terceira nota: "))

try {
    if(isNaN(nota1) || isNaN(nota2 || isNaN(nota3))){
        throw new Error("Valor inválido. Por favor, digite apenas números.")
    } else if((nota1 < 0) || (nota2 < 0) || (nota3 < 0)){
        throw new Error("Valor inválido. Digite apenas números positivos.")
    }

    let media = (nota1 + nota2 + nota3) / 3

    console.log(`A média do aluno é: ${media.toFixed(2)}`)

} catch (erro) {
    console.log("Erro: ", erro.message)
}