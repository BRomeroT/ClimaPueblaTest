Datos.CargarTemperatura = function ()
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
            var condicionActual = data.GetActualesResult.RootResults[i];
            Datos.MostrarDato(condicionActual.Numero, '<div class="Tile-Redondeado-5 degradado-09 Sombra Medicion>' + condicionActual.TemperaturaActual + '</div>');
        }
    }
    $.ajax(Params);
};
Datos.CargarTemperaturaMaximaMinimaHoy = function ()
{
    var Params = {};
    Params.type = 'GET';
    Params.url = 'http://www.climapuebla.org.mx/ClientBin/Sysne-Clima-Portal-Svr-RIAService.svc/JSON/GetTemperaturaMaxMinHoy';
    //Params.dataType = 'json';
    //Params.timeout = 20000;
    Params.success = function (res)
    {
        var data = $.parseJSON(res.responseText);
        for (var i in data.GetTemperaturaMaxMinHoyResult.RootResults)
        {
            var temperaturaMaximaMinima = data.GetTemperaturaMaxMinHoyResult.RootResults[i];
            if (temperaturaMaximaMinima.DatoMaximo != null && temperaturaMaximaMinima.DatoMinimo != null)
            {
                Datos.MostrarDato(temperaturaMaximaMinima.Numero, '<div class="Tile-Redondeado-5 color-fondo-15 Sombra Medicion>' + '<span style="color:#ff1300 !important; text-align:center;">' + temperaturaMaximaMinima.DatoMaximo + '</span><br>' + '<span style="color:#007aff !important; text-align:center;">' + temperaturaMaximaMinima.DatoMinimo + '</span>' + '</div>');
            }
        }
    }
    $.ajax(Params);
};
Datos.CargarTemperaturaMaximaMinimaAyer = function ()
{
    var Params = {};
    Params.type = 'GET';
    Params.url = 'http://www.climapuebla.org.mx/ClientBin/Sysne-Clima-Portal-Svr-RIAService.svc/JSON/GetTemperaturaMaxMinAyer';
    //Params.dataType = 'json';
    //Params.timeout = 20000;
    Params.success = function (res)
    {
        var data = $.parseJSON(res.responseText);
        for (var i in data.GetTemperaturaMaxMinAyerResult.RootResults)
        {
            var temperaturaMaximaMinima = data.GetTemperaturaMaxMinAyerResult.RootResults[i];
            if (temperaturaMaximaMinima.DatoMaximo != null && temperaturaMaximaMinima.DatoMinimo != null) {
                Datos.MostrarDato(temperaturaMaximaMinima.Numero, '<div class="Tile-Redondeado-5 color-fondo-15 Sombra Medicion>' + '<span style="color:#ff1300 !important; text-align:center;">' + temperaturaMaximaMinima.DatoMaximo + '</span><br>' + '<span style="color:#007aff !important; text-align:center;">' + temperaturaMaximaMinima.DatoMinimo + '</span>' + '</div>');
            }
        }
    }
    $.ajax(Params);
};
Datos.CargarTemperaturaMaxMin = function ()
{
    var xhr = new XMLHttpRequest();
    var onLoaderHandler = function (event)
    {
        var data = $.parseJSON(event.target.responseText);
        for (var i in data.GetTemperaturaMaxMinAyerResult.RootResults)
        {
            var temperaturaMaximaMinima = data.GetTemperaturaMaxMinAyerResult.RootResults[i];
            if (temperaturaMaximaMinima.DatoMaximo != null && temperaturaMaximaMinima.DatoMinimo != null)
            {
                Datos.MostrarDato(temperaturaMaximaMinima.Numero, '<div class="Tile-Redondeado-5 color-fondo-15 Sombra Medicion>' + '<span style="color:#ff1300 !important; text-align:center;">' + temperaturaMaximaMinima.DatoMaximo + '</span>, ' + '<span style="color:#007aff !important; text-align:center;">' + temperaturaMaximaMinima.DatoMinimo + '</span>' + '</div>');
            }
        }
    }
    xhr.open('GET', 'http://www.climapuebla.org.mx/ClientBin/Sysne-Clima-Portal-Svr-RIAService.svc/JSON/GetTemperaturaMaxMinAyer');
    xhr.withCredentials = false;
    xhr.onload = onLoaderHandler;
    xhr.send();
}