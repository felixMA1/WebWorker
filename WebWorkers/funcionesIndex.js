var worker;

function lanzarWorker() {
    worker = new Worker("funcionesWebWorker.js");
    worker.onmessage = function (evt) {

        var array = evt.data.split(":");
        document.getElementById("horas").innerHTML = array[0];
        document.getElementById("minutos").innerHTML = array[1];
        document.getElementById("segundos").innerHTML = array[2];

        //if (evt.data == "0") {
        //    location.reload();
        //}

    }
}



function parar() {

    worker.terminate();
    worker = undefined;

}


function reiniciar() {


    if (worker == undefined)
        lanzarWorker();
    else
        worker.postMessage("reiniciar");

}

lanzarWorker();
document.getElementById("reiniciar").addEventListener("click", reiniciar);
document.getElementById("stop").addEventListener("click", parar);


