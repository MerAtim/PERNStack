console.log("Hola a toda la cohorte 2024");
// Cuando ejecutamos el documento, se abre un proceso de node para interpretar el archivo.
// Despues lo convierte a código máquina y prepara todo lo que necesita para ejecutarse.
// Cuando está todo listo, muestra en la consola el mensaje del log y se termina el proceso.

var i = 0; // declaramos el iterador afuera del set interval para que no se reinicie desde cero cada vez que se ejecute la función de setinterval.
setInterval(function(){
    console.log(i); // muestra el valor del iterador en la consola cada 1000 milisegundos.
    i++; //aumenta 1 al valor del iterador.

    /*if(i === 5){
        console.log("Forzamos un error");
        var a = 3 + z;
    }*/
},
1000);

console.log("Segunda instrucción");