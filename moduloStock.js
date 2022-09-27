const Factura = require("./factura");
const PiezaCant = require("./PiezaCant");
const moduloEmpleados= require("./moduloEmpleados");

var moduloStock = (function(){
    let stock=[]; // arreglo de PiezaCant

    function reponer(arrPiezas,arrCant){
        arrPiezas.forEach((pieza,index)=>{
            i=stock.findIndex((element)  =>{return  pieza.tipo==element.pieza.tipo});
            if (i!=-1){
                stock[i].cant+=arrCant[index];
            } else{
                stock.push(new PiezaCant(pieza,arrCant[index]));
            }
        })
    }
    function puedoVender(aVender){
        aVender.forEach(quieroVender=>{
            let tengo=stock.find(value=>quieroVender.pieza.tipo==value.pieza.tipo);
            if (tengo==undefined || (tengo.cant<quieroVender.cant) ){ // que el tipo de pieza no esté en el arreglo, o que sí esté, pero no haya la cantidad suficiente, o que la cantidad pedida sea invalida
                throw new Error("No alcanza el stock para realizar esta venta.");
            } else if ( quieroVender.cant<=0){
                throw new Error("La cantidad pedida es inválida.");
            }
        })  
    }
    function vender(arrPiezas,arrCant,vendedor){
        moduloEmpleados.validar(vendedor);
        const productos=[];
        arrPiezas.forEach((element,index) => {
            productos.push(new PiezaCant(element,arrCant[index]));
        });
        // sacar de stock
        puedoVender(productos);
        productos.forEach(value=>{
            i=stock.findIndex(e=>{return e.pieza.tipo==value.pieza.tipo});
            stock[i].cant-=value.cant;
        });
        let factura =new Factura(vendedor,productos);
        return factura;
    }
    function revisar() {
        console.log("En stock hay: ");
        stock.forEach(element=>{
            console.log("\n "+element.info()+",  ");
        })
    }
    return{
        reponerStock: reponer,
        venderStock: vender,
        revisarStock: revisar
    };

})();

module.exports =moduloStock;