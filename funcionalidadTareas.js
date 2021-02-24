let autos = require('./autos');


let concesionaria = {
  autos: autos,

  listar: function() {
      // cuando se llama a este metodo se imprimen todos los autos en autos.json
      console.log(autos);
  },

  buscarAuto: function(patenteBuscada) {
    // cuando se llama a este metodo se imprimen todos los datos del auto con la patente inresada. Sino esta, devuelve null
    console.log('========================')
    console.log('Buscando el auto de patente '+patenteBuscada)
    console.log('========================')
    autoBuscado = autos.filter(auto => auto.patente === patenteBuscada)[0];
    return autoBuscado != undefined ? autoBuscado : null;

  },

  venderAuto: function(patenteBuscada) {
    // cuando se llama a este metodo se sobrescribe el objeto de autos, cambiando este auto en particular a vendido
    let autoVendido = this.buscarAuto(patenteBuscada);
    autos = autos.map(function(auto){
      if (auto.patente == patenteBuscada){
        auto.vendido = true;
        return auto;
      } else {
        return auto;
      }
    })
  },

  autosParaLaVenta: function() {
    // cuando se llama a este metodo se imprimen todos los autos en autos.json que su estado vendido es false
    console.log('========================')
    console.log('Estos autos estan en venta:')
    console.log('========================')
    return autos.filter(auto => auto.vendido == false)
  },

  autosNuevos: function() {
    // cuando se llama a este metodo se imprimen todos los autos en autos.json que su estado vendido es false y sus km son cero
    // para determinar cuales no estan vendidos se aprovecha como callback del metodo anterior.
    console.log('========================')
    console.log('Estos autos estan en venta y son 0km:')
    console.log('========================')
    return this.autosParaLaVenta().filter(auto => auto.km == 0)
  },

  listaDeVentas: function() {
    // cuando se llama a este metodo se imprime un array de precios de autos cuyo estado vendido es true
    let autosVendidos = autos.filter(auto => auto.vendido == true);
    var ventas = []
    autosVendidos.forEach(function(auto){
      ventas.push(auto.precio);
    });
    return ventas;
  },

  totalDeVentas: function() {
    // cuando se llama a este se suman los precios de todos los autos vendidos
    // los precios de los autos vendidos se los trae usando como callback el metodo anterior
    let ventas = this.listaDeVentas();
    if (ventas.length > 0){
      return ventas.reduce((a, b) => a + b, 0)
    } else {
      return 0;
    }
  },

  puedeComprar: function(auto, persona){
    // este metodo recibe un objeto auto y un objeto persona, no se puede llamar directamente.
    // dice true o false si esa persona puede comprar ese auto
    return auto.precio <= persona.capacidadDePagoTotal  && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
  },

  autosQuePuedeComprar: function(persona){
    // dada una persona este metodo trae todos los autos que esa persona puede pagar
    let autosALaVenta = this.autosParaLaVenta();
    let autosComprables = autosALaVenta.filter(function(auto){
      return concesionaria.puedeComprar(auto, persona);
    });
    return autosComprables;
  }
}

module.exports = concesionaria;
