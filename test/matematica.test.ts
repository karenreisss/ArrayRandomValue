import {describe, expect, test} from '@jest/globals';
import { Matematica } from '../src/atividades/TDD/Matematica';
import { ErrorMessages } from '../src/atividades/TDD/errorMessage.enum';


describe('Operações matematicas', () => {

    test('Deve somar dois numeros', () => {
        const matematica = new Matematica()
        matematica.setX(1)
        matematica.setY(2)

        expect(matematica.getSum()).toBe(3)
    })

    test('Deve subtrair dois numeros', () => {
        const matematica = new Matematica()
        matematica.setX(1)
        matematica.setY(1)

        expect(matematica.getSub()).toBe(0)
    })


    test('Deve multiplicar dois numeros', () => {
        const matematica = new Matematica()
        matematica.setX(5)
        matematica.setY(6)

        expect(matematica.getMultiply()).toBe(30)
    })

    test('Deve dividir dois numeros', () => {
        const matematica = new Matematica()
        matematica.setX(4)
        matematica.setY(2)

        expect(matematica.getDivision()).toBe(2)
    })

    test('Deve retornar um erro ao informar string no lugar de numero', () => {
        const matematica = new Matematica()

        //@ts-ignore
        expect(matematica.setX('pipipi')).toBe(ErrorMessages.INVALID_OPERATION)
        //@ts-ignore
        expect(matematica.setY('popopo')).toBe(ErrorMessages.INVALID_OPERATION)
    })
})