const fs = require('fs');


let operacionesArchivos =
{
    archivo: 'autos.json',

    leerArchivoJson: function () {

        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    grabarUnJson: function (autos) {
        return  fs.writeFileSync(this.archivo, autos)
    },

 
}

module.exports = operacionesArchivos;
