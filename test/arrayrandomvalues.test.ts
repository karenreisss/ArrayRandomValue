import {describe, expect, test} from '@jest/globals';
import {Produto} from '../src/atividades/arrayRandomValues/Produto';
import{ArrayRandomValues} from '../src/atividades/arrayRandomValues/ArrayRandomValues'

const produtos:Array<Produto> = [
    new Produto('Camiseta', 10, 5),
    new Produto('Caneta', 20.99, 3),
    new Produto('Notebook', 5000, 1),
    new Produto('Monitor', 399.89, 0)
]

describe('Array random values', () => {

    test('Adicionar produto ao array', () => {
        const arrayRandomValues = new ArrayRandomValues()
        const produto = new Produto('Rádio', 99.50, 3)
        arrayRandomValues.addProductToArray(produto)

        const procutsArrayLength = arrayRandomValues.getProductsArrayLength()
        expect(procutsArrayLength).toBeGreaterThan(0)
    })

    test('Gerar numero aleatorio', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.setProductsArray(produtos)

        const randomNumber = arrayRandomValues.generateRandomNumber()
        expect(typeof randomNumber).toBe('number')
    })

    test('Pegar produto aleatorio do array', () => {
        const arrayRandomValues = new ArrayRandomValues()
        arrayRandomValues.setProductsArray(produtos)

        const randomProduct = arrayRandomValues.getRandomProductFromArray()
        expect(randomProduct).toBeInstanceOf(Produto)
    })
})