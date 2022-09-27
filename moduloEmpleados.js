var moduloEmpleados=(function() {
    let staff =[]; // arreglo de empleados

    function contratar(candidato){
        staff.push(candidato);
    }
    function despedir(trabajador) {
        let i=staff.findIndex(empleado => empleado.dni==trabajador.dni);
        if (i==-1){
            console.log("Esa persona no trabaja acá.");
        } else{
            staff.splice(i,1);
        }
    }
    function pagar(){
        var total=0;
        console.log("\nLiquidando sueldos: ");
        staff.forEach(empleado => {
            console.log("\n > "+empleado.nombreCompleto() + " - " +empleado.tipoEmpleado+". Honorarios: $"+empleado.calcularMonto())
            total+=empleado.calcularMonto();
        }  )
        console.log("Total: $"+total);
    }
    function contratados() {
        console.log("\nEn esta empresa trabajan: ");
        staff.forEach(empleado =>
            console.log("\n > "+empleado.nombreCompleto() + " - " +empleado.tipoEmpleado)
        );
    }

    function validarEmpleado(trabajador) {
        if ((staff.findIndex(empleado => empleado.dni==trabajador.dni))==-1) { 
            throw new Error(trabajador.nombreCompleto()+" no trabaja acá");
        }
    }

    function llamarR(freelance,horas){
        validarEmpleado(freelance);
        if (horas<=0){
            throw new Error("La cantidad de horas trabajadas no puede ser negativo o 0.");
        } 
        freelance.trabajar(horas); 
    }
    
    return{
        contratarEmpleado : contratar,
        despedirEmpleado: despedir,
        pagarSalarios: pagar,
        mostrarStaff: contratados,
        validar: validarEmpleado,
        llamarReemplazo: llamarR
    };
}) ()

module.exports =moduloEmpleados;