const Vendedor = require("./Vendedor");

function ConAntiguedad(nombre,apellido,dni,sueldo,comision) {
    if (sueldo<=0 ){
        throw new Error("El sueldo no puede ser negativo o 0.");
    }
    Vendedor.call(this,nombre,apellido,dni,comision);
    this.sueldo=sueldo;
    this.tipoEmpleado="Vendedor con antiguedad";
    this.calcularMonto=()=>{
        return this.sueldo + this.comision*this.totalVendido();
    }
    
}
ConAntiguedad.prototype=Object.create(Vendedor.prototype);
ConAntiguedad.prototype.constructor=ConAntiguedad;

module.exports=ConAntiguedad;