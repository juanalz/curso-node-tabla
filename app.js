const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

//const base = 6;
crearArchivo(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));