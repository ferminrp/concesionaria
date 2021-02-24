let funcionalidadTareas = require('./funcionalidadTareas.js');

let accion = process.argv[2];
let parametroAdicional = process.argv[3];

switch(accion) {
    case 'listar':
        funcionalidadTareas.listar();
        break;


    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: A,B,C ');
        break;
}
