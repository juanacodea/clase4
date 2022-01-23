class Producto{
    constructor(precio, id){
        this.precio=precio;
        this.id=id;
    } 
    total(){
        this.precioTotal=this.precio * 2.1;
    } 
    vender(){
        this.vendido=true
    }
}
const bateria=new Producto(1, 1 );
bateria.total();

const guitarra=new Producto(2, 2);
guitarra.total();

const piano=new Producto(3, 3 );
piano.total();

const bajo=new Producto(4, 4);
bajo.total();
let contador=0

let ProductoElegido= prompt("elíja algun instrumento para comprar") .toUpperCase()
while(ProductoElegido!=""){
    switch(ProductoElegido){
        case "BATERIA":
            contador=contador+1;
            alert("EL precio a pagar es de: "+bateria.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            break;
        case "BATERÍA":
            contador=contador+1;
            alert("EL precio a pagar es de: "+bateria.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            break;
        case "GUITARRA":
            contador=contador+1;
            alert("EL precio a pagar es de: "+guitarra.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            break;
        case "PIANO":
            contador=contador+1;
            alert("EL precio a pagar es de: "+piano.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            break;
        case "TECLADO":
            contador=contador+1;
            alert("EL precio a pagar es de: "+piano.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            break;
        case "BAJO":
            contador=contador+1;
            alert("EL precio a pagar es de: "+bajo.precioTotal+" y la cantidad de productos comprados es de:"+contador);
            break;
        default:
            alert("no tenemos ese producto")
    }
    ProductoElegido= prompt("elíja algun instrumento para comprar") .toUpperCase()
}
