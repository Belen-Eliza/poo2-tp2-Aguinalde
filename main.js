const Freelance=require("./Freelance");
const Administrativo=require("./Administrativo");
const Vendedor=require("./Vendedor");
const ConAntiguedad=require("./ConAntiguedad"); 

const moduloStock=require("./moduloStock");
const moduloEmpleados= require("./moduloEmpleados");

let juan=new Freelance("Juan","Menentez",143,15);
let norah =new Freelance("Norah","Dake",145,15);
let pedro=new Administrativo("Pedro","Croschi",144,500); 
let lilian = new Vendedor("Lilian","Ramos", 1776,0.25);
let missM= new ConAntiguedad("Jane","Marple",007,500,0.25);

const empleados= [juan,pedro,missM,lilian,norah];
empleados.forEach(empleado => 
        moduloEmpleados.contratarEmpleado(empleado)
)

moduloEmpleados.llamarReemplazo(juan,30);
moduloEmpleados.llamarReemplazo(norah,50);

var engranaje={
        tipo: "engranaje",
        precioUnidad: 25
}

var pintura=Object.create(engranaje);
pintura.tipo="lata de pintura";
pintura.precioUnidad=1000;

var clavos =Object.create(engranaje);
clavos.tipo="caja de clavos";
clavos.precioUnidad=50;

var martillo=Object.create(engranaje);
martillo.tipo="martillo";
martillo.precioUnidad=250;

const piezas =[pintura,engranaje,clavos,martillo];

moduloStock.reponerStock(piezas,[41,58,60,12]);

var tornillos=Object.create(engranaje);
tornillos.tipo="caja de tornillos";
tornillos.precioUnidad=60;

moduloStock.reponerStock([tornillos],[13]);
moduloStock.revisarStock();

const facturas=[moduloStock.venderStock(piezas,[10,10,10,1],missM),
                moduloStock.venderStock([tornillos],[10],lilian),
                moduloStock.venderStock([pintura,clavos,engranaje,tornillos],[10,20,5,2],lilian)];

moduloStock.revisarStock();

facturas.forEach(factura =>
        console.log("\n>>"+factura.infoFactura() + "\n"+factura.infoVendedor())
    );


moduloEmpleados.mostrarStaff();
moduloEmpleados.pagarSalarios();


