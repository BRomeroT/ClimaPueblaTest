Datos.CargarPuntoDeRocio = function ()
{
    var Params = {};
    Params.type = 'GET';
    Params.url = 'http://www.climapuebla.org.mx/ClientBin/Sysne-Clima-Portal-Svr-RIAService.svc/JSON/GetActuales';
    //Params.dataType = 'json';
    Params.success = function (res)
    {
        var data = $.parseJSON(res.responseText);
        for (var i in data.GetActualesResult.RootResults)
        {
            var medicion = data.GetActualesResult.RootResults[i];
            Datos.MostrarDato(medicion.Numero, '<div class="Tile-Redondeado-5 degradado-09 Sombra Medicion">' + medicion.PuntoDeRocioActual + '</div>')
        }
    }
    $.ajax(Params);
};