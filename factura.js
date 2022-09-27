const moduloEmpleados= require("./moduloEmpleados");

var Factura=(function(){
    var id=1;
    var newFactura = function(vendedor, renglonesN){  //array de renglones (Piezacant)
        moduloEmpleados.validar(vendedor);
        this.identificador=id;
        id++;
        this.vendedor=vendedor;
        this.renglones=[];
        renglonesN.forEach(value=>this.renglones.push(value));
        this.vendedor.vender(this);

        this.infoFactura=()=>{
            
            let texto="";
            this.renglones.forEach(element =>{ texto+="\n  >> "+element.info()})
            return "ID factura: "+this.identificador+
                "\n  Se vendieron: \n"+texto +
                "\n  El precio total es $"+this.montoTotal();
        }
        this.montoTotal= ()=>{
            let precio=0;
            this.renglones.forEach(element =>{
                precio+=element.cant*(element.pieza.precioUnidad);
            })
            return precio;
        }
        this.infoVendedor=()=>{
            return "El personal de ventas a cargo de esta factura es "+this.vendedor.nombreCompleto();
        }
        this.cambiarCantidad=(tipoPieza,cantidad)=>{ 
            if (cantidad<=0){
                console.log("La cantidad vendida no puede ser negativa o 0.");
            } else{
                let cambiar=renglones.find(function(value){return value.pieza==tipoPieza});
                cambiar.cant=cantidad;
            }
        }
        this.sumarRenglones=(renglon)=>{
            this.renglones.push(renglon);
        }
    }

    return newFactura;
})();

module.exports= Factura;