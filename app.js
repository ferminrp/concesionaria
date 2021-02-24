let funcionalidadTareas = require('./funcionalidadTareas.js');


// cuando por consola hagamos "node app.js palabra" palabra va a guardarse en la variable accion y desencadenara distintas operaciones
let accion = process.argv[2];
// algunas operaciones requieren informacion adicional, por ejemplo que ingresemos una patente
// cuando por consola digamos "node app.js buscar patente" esa cuarta palabra que es la patente va en la variable parametroAdicional
let parametroAdicional = process.argv[3];
// para saber si una persona puede comprar un auto necesitamos saber el monto maximo que esta dispuesta a pagar y el monto por cuota
// por eso nos reservamos la quinta posicion y la guardamos en la variable parametroAdicionalDos
// por ejemplo "node app.js puedeComprar {montoTotal} {montoCuota}"
// iria como "node app.js puedeComprar 150000000 635000"
let parametroAdicionalDos = process.argv[4];

switch(accion) {
    case 'listar':
        funcionalidadTareas.listar();
        break;

    case 'buscar':
        console.log(funcionalidadTareas.buscarAuto(parametroAdicional))
        break;

    case 'vender':
        funcionalidadTareas.venderAuto(parametroAdicional);
        break;
    
    case 'enVenta':
        console.log(funcionalidadTareas.autosParaLaVenta());
        break;

    case 'nuevos':
        console.log(funcionalidadTareas.autosNuevos());
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
        // devuelve todos los autos que la persona puede pagar con esas restricciones
        let persona = {
            "capacidadDePagoTotal" : parametroAdicional,
            "capacidadDePagoEnCuotas" : parametroAdicionalDos
        }
        console.log(funcionalidadTareas.autosQuePuedeComprar(persona));
        break

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: vender, enVenta, nuevos, listaVentas, totalVentas, puedeComprar ');
        break;
}
