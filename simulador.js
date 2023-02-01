
function interes_cuotas(monto, cuotas){

    if (cuotas == 3){
        
        let interes = monto * 0.20
        return interes
    }

    else if (cuotas == 6){
        
        let interes = monto * 0.40
        return interes
    }

    else if (cuotas == 12){
        
        let interes = monto * 0.60
        return interes
    }

}

console.log("Bienvenido a su prestamo");
let monto = prompt("Ingrese monto deseado:");
monto = parseInt(monto);

let cuotas = prompt("Cuotas deseadas: 3, 6 o 12");

let total = monto + interes_cuotas(monto,cuotas)




console.log("Ingresaste:",monto);
console.log("Cuotas", cuotas);
console.log("Total con interes: ", total);
console.log("Total por cuota", total/cuotas);
  

let repetir = false;
do{
    console.log("Gracias por su pago!");
}while (repetir)










