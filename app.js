'use strict'

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

// MAP - Percorre o array e retorna um array do mesmo tamanho modificado ou não
    // Sintaxe - array.map(callBack)
        // Parametros do callBack
            //1- Elemento
            //2 - Índice
            //3 - Array

// Aplicando um desconto de 2 no array
const desconto2 = (number) => number - 2
const numberDesconto = numbers.map(desconto2)

// Filtrar os elementos menores que 20 
const menor20 = (valor) => valor < 20
// FILTER - Percorre um array aplicando um callBack e retorna um array do mesmo tamanho ou não
    // Sintaxe - array.filter (callBack)
        // Parametros do callBack
            //1- Elemento
            //2 - Índice
            //3 - Array

// Retorno do callBack tem que ser booleano
const valoresMenores20 = numbers.filter(menor20) 

// REDUCE - Percorre o array aplicando um callBack e retorna um único valor
    // Sintaxe - array.reduce (callBack, valor inicial)
        // Parametros do callBack
            //1- Acumulador
            //2- Elemento
            //3 - Índice
            //4 - Array
// Valor Inicial pode ser qualquer tipo de variável

//Somar todos os valoroes
const soma = (a, b) => a + b
const valorTotal = numbers.reduce(soma, 0)

//Exercício 1 - Somar 100 em cada eleemento do array
const aumentar100 = (valor) => valor + 100
const somar100 = numbers.map(aumentar100)

//Exercício 2 - Exibir somente números pares
const valoresPares = (valor) => valor % 2 == 0 
const pares = numbers.filter (valoresPares)

//Exercício 3 - Total dos valores com desconto de 4
const desconto4 = (valor) => valor - 4
const valoresDesconto4 = numbers.map (desconto4)
const total = (a, b) => a + b
const valorTotal4 = valoresDesconto4.reduce (total, 0)

//Exercícios 4 - Array com todos os elementos ímpares somando 21
const valoresImpares = (valor) => valor % 2 != 0
const impares = numbers.filter (valoresImpares)
const somar21 = (valor) => valor + 21
const somaImpares = impares.map(somar21)


//Exercícios
//1 - Aumentar 100 em cada elemento 
//2 - Somente os números pares 
//3 - Total dos valores com o desconto de 4
//4 - Array com todos os elementos ímpares somando 21

showArray(numbers, 'main', 'Todos os números')
showArray(numberDesconto, 'main', 'Descontos')
showArray(valoresMenores20, 'main', 'Valores menores que 20')
showArray([valorTotal], 'main', 'Total de valores')
showArray(somar100, 'main', 'Exercício 1 - Aumentando 100')
showArray(pares, 'main', 'Exercício 2 - Valores pares')
showArray([valorTotal4], 'main', 'Exercício 3 - Total dos valores com desconto de 4')
showArray(somaImpares, 'main', 'Exercício 4 - Valores ímpares somado 21')
