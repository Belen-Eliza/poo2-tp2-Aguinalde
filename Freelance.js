const Empleado = require("./Empleado");

function Freelance (nombre,apellido,dni,valorHora){
    if (valorHora<=0){
        throw new Error("El valor de la hora no puede ser negativo o 0.");
    }
    Empleado.call(this,nombre,apellido,dni);
    this.valorHora=valorHora;
    this.horas=0;
    this.trabajar=(horasTrabajadas)=>{
        this.horas+=horasTrabajadas;       
    }

    this.calcularMonto=()=>{
        if (this.horas==0){
            return " -   (No fue llamado)";
        }else{
            return this.valorHora*this.horas;
        }
        
    }
    this.tipoEmpleado="Freelance";
}
Freelance.prototype = Object.create(Empleado.prototype);
Freelance.prototype.constructor = Freelance;

module.exports = Freelance;