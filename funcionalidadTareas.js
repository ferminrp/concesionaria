let autos = require('./autos');


let concesionaria = {
  autos: autos,

  listar: function() {
      console.log(autos);
  },

  buscarAuto: function(patenteBuscada) {
    autoBuscado = autos.filter(auto => auto.patente === patenteBuscada)[0];
    return autoBuscado != undefined ? autoBuscado : null;

  },

  venderAuto: function(patenteBuscada) {
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
    return autos.filter(auto => auto.vendido == false)
  },

  autosNuevos: function() {
    return this.autosParaLaVenta().filter(auto => auto.km == 0)
  },

  listaDeVentas: function() {
    let autosVendidos = autos.filter(auto => auto.vendido == true);
    var ventas = []
    autosVendidos.forEach(function(auto){
      ventas.push(auto.precio);
    });
    return ventas;
  },

  totalDeVentas: function() {
    let ventas = this.listaDeVentas();
    //console.log(ventas);
    //console.log(ventas.length);
    if (ventas.length > 0){
      return ventas.reduce((a, b) => a + b, 0)
    } else {
      return 0;
    }
  },

  puedeComprar: function(auto, persona){
    return auto.precio <= persona.capacidadDePagoTotal  && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
  },

  autosQuePuedeComprar: function(persona){
    let autosALaVenta = this.autosParaLaVenta();
    //console.log(autosALaVenta);
    let autosComprables = autosALaVenta.filter(function(auto){
      return concesionaria.puedeComprar(auto, persona);
    });
    return autosComprables;
  }
}

module.exports = concesionaria;
