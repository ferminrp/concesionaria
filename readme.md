# Ejercicio de la concesionaria para curso Full Stack Digital House 2021

Este programa pensado para manejar las operaciones diarias de una concesionaria se tiene que llamar desde la consola utilizando algo como:

``` node app.js comando	```

## Comandos Validos

### Listar

Utilizando este comando se imprimen en consola todos los autos.

``` node app.js listar	```

### Buscar

Utilizando este comando seguido de una patente se imprimen todos los datos de un auto.

De no encontrarse ese auto imprimirá null

``` node app.js buscar JJK116	```

### Vender

Utilizando este comando seguido de una patente se pasa el estado de un auto a vendido.

``` node app.js vender JJK116	```


### En Venta

Utilizando este comando se imprime una lista de todos los autos que aun no han sido vendidos

``` node app.js enVenta	```

### Nuevos

Utilizando este comando se imprime una lista de todos los autos que aun no han sido vendidos y que son 0km

``` node app.js nuevos	```

### Lista Ventas

Utilizando este comando se imprime una lista de los precios de todos los autos que se han vendido

``` node app.js listaVentas	```

### Total Ventas

Con este comando, similar al anterior, recibimos el valor total de todas las ventas realizadas

``` node app.js totalVentas	```

### Puede Comprar

Con este comando, e ingresando dos datos de una persona determinaremos que autos esa persona podria comprar.

El primer parametro es el monto maximo que esa persona esta dispuesta a pagar.

El segundo parametro es el monto máximo por cuota.

``` node app.js puedeComprar [monto total] [monto cuota] ```

por ejemplo:

``` node app.js puedeComprar 900000 150000 ```
