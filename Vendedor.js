const Empleado = require("./Empleado");

function Vendedor(nombre,apellido,dni,comision) {
    if (comision<=0){
        throw new Error("La comision no puede ser negativo o 0.");
    }
    Empleado.call(this,nombre,apellido,dni); 
    this.comision=comision;    
    this.misFacturas=[];
    this.tipoEmpleado= "Vendedor";

    this.vender=(factura)=>{
        this.misFacturas.push(factura);
    }
    this.totalVendido=()=>{
        let total=0;
        this.misFacturas.forEach(factura => {
            total+=factura.montoTotal();
        });
        return total;
    }
    this.calcularMonto=()=>{
        return this.totalVendido()*this.comision;
    }
    
}
Vendedor.prototype = Object.create(Empleado.prototype);
Vendedor.prototype.constructor=Vendedor;
module.exports = Vendedor;