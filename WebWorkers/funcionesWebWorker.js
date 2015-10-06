var horas = 0;
var minutos = 0;
var segundos = 0;

function bajar() {

    segundos++;

    if (segundos == 60) {
        minutos++;
        segundos = 0;
        if (minutos == 60) {
            horas++;
            minutos = 0;
            segundos = 0;
        }
    }

    

    self.postMessage(horas+":"+minutos+":"+segundos);
    setTimeout("bajar()", 1000);

}

self.onmessage = function(evt) {

    if (evt.data == "reiniciar")
        segundos = 0;
        minutos = 0;
        horas = 0;
}

bajar();

