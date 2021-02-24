let funcionalidadTareas = require('./funcionalidadTareas.js');

let accion = process.argv[2];
let parametroAdicional = process.argv[3];

switch(accion) {
    case 'listar':
        funcionalidadTareas.listar();
        break;

    case 'buscar':
        console.log(funcionalidadTareas.buscarAuto(parametroAdicional))
        break;

    case 'vender':
        break;
    
    case 'enventa':
        console.log(funcionalidadTareas.autosParaLaVenta());
        break;

    case 'nuevos':
        break;

    case 'listaVentas':
        break;

    case 'totalVentas':
        break;

    case 'puedeComprar':
        break

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: A,B,C ');
        break;
}
