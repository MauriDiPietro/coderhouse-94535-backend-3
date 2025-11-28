function hola(name: string): string {
    return `Hola, ${name}!`;
}

console.log(hola('Juan'))

let variable: string;

let variable2: number;

let variable3 = 'hola'

function hola2(name: string): void {
    `Hola, ${name}!`;
}

interface Usuario {
    nombre: string;
    edad: number;
    email: string;
    mascota?: string;
}

type Usuario2 = {
    nombre: string;
    edad: number;
    email: string;
    mascota?: string;
}

const usuario: Usuario2 = {
    nombre: 'Juan',
    edad: 20,
    email: 'juan@mail.com',
    mascota: 'Firulais'
}

