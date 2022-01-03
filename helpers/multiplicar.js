const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, hasta = 10, listar) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.blue(base)} ${'x'.green} ${colors.yellow(i)} ${'='.green} ${colors.red(base * i)}\n`;
        }

        if (listar) {
            console.log('=================='.green);
            console.log('   Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);
            console.log(consola);
        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log(`tabla-${base}.txt creado`);
        // });

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}