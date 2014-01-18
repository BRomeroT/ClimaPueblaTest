Datos.CargarInfo = function (estacion) {

};

Datos.CargarCondicionesActuales = function () {

    Datos.Limpiar();
    var Params = {};
    Params.type = 'GET';
    Params.url = 'http://www.climapuebla.org.mx/ClientBin/Sysne-Clima-Portal-Svr-RIAService.svc/JSON/GetActuales';
    //Params.dataType = 'json';
    Params.success = function (res) {
        var data = $.parseJSON(res.responseText);
        for (var i in data.GetActualesResult.RootResults) {
            var condicionActual = data.GetActualesResult.RootResults[i];
            Datos.MostrarDato(condicionActual.Numero, '<div style="color:red">' + condicionActual.TemperaturaActual + '°<div>')
        }
    }

    $.ajax(Params);
};