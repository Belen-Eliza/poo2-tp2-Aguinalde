const Empleado = require("./Empleado");

function Administrativo(nombre,apellido,dni,sueldo) {
    if (sueldo<=0){
        throw new Error("El sueldo no puede ser negativo o 0."); 
    }
    Empleado.call(this,nombre,apellido,dni);
    this.sueldo=sueldo;
    this.calcularMonto=()=>{
        return this.sueldo;
    }
    this.tipoEmpleado="Administrativo";
}
Administrativo.prototype = Object.create(Empleado.prototype);
Administrativo.prototype.constructor = Administrativo;

module.exports = Administrativo;
