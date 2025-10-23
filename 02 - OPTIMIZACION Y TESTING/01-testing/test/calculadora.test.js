import test from 'node:test';
import assert from 'node:assert'
import { calculadora } from '../calculadora.js';

test('conjunto de pruebas Suma', (t)=>{
    t.test('deberia sumar correctamente dos numeros', ()=>{
        //preparacion
        const num1 = 5;
        const num2 = 3;
        const esperado = 8;

        //ejecucion
        const resultado = calculadora.suma(num1, num2);

        //verificacion - aserciones
        assert.strictEqual(resultado, esperado, 'La suma no es la esperada');
        assert.notStrictEqual(resultado, 0)
        assert.ok(resultado > 7)
    });

    t.test('si sumo argumentos no numericos deberia lanzar un error', ()=>{
        const arg1 = "hola";
        const arg2 = 5;

        assert.throws(
            () => calculadora.suma(arg1, arg2),
            Error,
            'Los valores deben ser numéricos'
        )
    })
})
