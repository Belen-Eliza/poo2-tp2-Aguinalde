function PiezaCant(pieza,cantidad){
    if (cantidad<=0){
        throw new Error("La cantidad no puede ser menor o igual a 0.");
    }
    this.pieza=pieza;
    this.cant=cantidad;
    this.info=()=>{return this.cant+" unidades de " + this.pieza.tipo} ;
}
module.exports =PiezaCant;
