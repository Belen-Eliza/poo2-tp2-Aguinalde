function Empleado(nombre, apellido, dni) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;

    this.calcularMonto=()=>{
        throw new Error("El método debe invocarse desde una subclase");
    }
    this.nombreCompleto=()=>{
        return this.nombre +" " + this.apellido;
    }
}
module.exports = Empleado;