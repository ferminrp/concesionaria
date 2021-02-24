let funcionalidadTareas = require('./funcionalidadTareas.js');

let accion = process.argv[2];
let parametroAdicional = process.argv[3];
let parametroAdicionalDos = process.argv[4];

switch(accion) {
    case 'listar':
        funcionalidadTareas.listar();
        break;

    case 'buscar':
        console.log(funcionalidadTareas.buscarAuto(parametroAdicional))
        break;

    case 'vender':
        break;
    
    case 'enVenta':
        console.log(funcionalidadTareas.autosParaLaVenta());
        break;

    case 'nuevos':
        console.log(funcionalidadTareas.autosParaLaVenta());
        break;

    case 'listaVentas':
        console.log(funcionalidadTareas.listaDeVentas());
        break;

    case 'totalVentas':
        console.log(funcionalidadTareas.totalDeVentas());
        break;

    case 'puedeComprar':
        // toma como primer argumento valor total que el usuario esta dispuesto a pagar
        // toma como segundo argumento valor que el usuario puede pagar por cuota
        let persona = {
            "capacidadDePagoTotal" : parametroAdicional,
            "capacidadDePagoEnCuotas" : parametroAdicionalDos
        }
        console.log(funcionalidadTareas.autosQuePuedeComprar(persona));
        break

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: A,B,C ');
        break;
}
