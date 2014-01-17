var Datos = {

    estacionesSelectId: "estacionesSelect",

    Estaciones: {},

    EstacionSeleccionada: null,

    Eventos: null,

    EventosMapa: {
        Pin_Click: function (pin) {
            alert($(pin._htmlContent).attr('id'));
            //Cacha el Click por cada pin
            Datos.SeleccionarPin(pin);
        }
    },

    SeleccionarPin: function (pin) {
        //analiza los datos del pin y manda a seleccionar la estación
        Datos.SeleccionarEstacion($(pin._htmlContent).attr('id').replace('estacion', ''));
    },

    SeleccionarEstacion: function (estacionNumero) {
        var estacion = Datos.Estaciones[estacionNumero];
        if (Datos.EstacionSeleccionada != estacion) {
            Datos.EstacionSeleccionada = estacion;
            //Selecciona en el Select la estación correspondiente (por si fue seleccionada en el mapa)
            if ($("#" + Datos.estacionesSelectId).val() != estacion.Numero) {
                $("#" + Datos.estacionesSelectId + " option").removeAttr("selected");
                $("#" + Datos.estacionesSelectId + " option[value=" + estacionNumero + "]").attr("selected", "selected");
            }
            Datos.Eventos.EstacionSeleccionada(estacion);
        }
    },

    CargarEstaciones: function () {
        var Params = {};
        Params.type = 'GET';
        Params.url = 'http://www.climapuebla.org.mx/ClientBin/Sysne-Clima-Portal-Svr-RIAService.svc/JSON/GetEstaciones';
        //Params.dataType = 'json';
        Params.success = function (res) {
            var data = $.parseJSON(res.responseText);
            for (var i in data.GetEstacionesResult.RootResults) {
                var estacion = data.GetEstacionesResult.RootResults[i];
                var htmlContent = "";
                if (!estacion.PosicionDatos || estacion.PosicionDatos != "") {
                    switch (estacion.PosicionDatos) {
                        case "I":
                            htmlContent = '<div id="estacion' + estacion.Numero + '"><table class="estacion"><tr><td colspan="3"></td></tr><tr><td><div class="dato degradado-06"><a href="#">10</a></div></td><td><div class="punto" style="background-color:' + estacion.ColorDistintivo + ';"></div></td><td></td></tr><tr><td colspan="3"></td></tr></table></div>';
                            break;
                        case "S":
                            htmlContent = '<div id="estacion' + estacion.Numero + '"><table class="estacion"><tr><td colspan="3"><div class="dato degradado-06"><a href="#">10</a></div></td></tr><tr><td></td><td><div class="punto" style="background-color:' + estacion.ColorDistintivo + ';"></div></td><td></td></tr><tr><td colspan="3"></td></tr></table></div>';
                            break;
                        case "A":
                            htmlContent = '<div id="estacion' + estacion.Numero + '"><table class="estacion"><tr><td colspan="3"></td></tr><tr><td></td><td><div class="punto" style="background-color:' + estacion.ColorDistintivo + ';"></div></td><td></td></tr><tr><td colspan="3"><div class="dato degradado-06"><a href="#">10</a></div></td></tr></table></div>';
                            break;
                        case "D":
                        default:
                            htmlContent = '<div id="estacion' + estacion.Numero + '"><table class="estacion"><tr><td colspan="3"></td></tr><tr><td></td><td><div class="punto" style="background-color:' + estacion.ColorDistintivo + ';"></div></td><td><div class="dato degradado-06"><a href="#">10</a></div></td></tr><tr><td colspan="3"></td></tr></table></div>';
                            break;
                    }
                }
                Datos.Estaciones[estacion.Numero] = estacion;
                var pin = Mapa.AgregarPin(htmlContent, estacion.Latitud, estacion.Longitud);
                /*Llenar el select*/
                $("#" + Datos.estacionesSelectId).append('<option value="' + estacion.Numero + '">' + estacion.Nombre + '</option>');
                $("#" + Datos.estacionesSelectId).change(function () {
                    Datos.SeleccionarEstacion($(this).val());
                });
            }
        };
        $.ajax(Params);
    },

    Limpiar: function () {

    },

    MostrarDato: function (numEstacion, htmlContent) {

    },

    CargarInfo: null,
    CargarCondicionesActuales: null,
    CargarTemperatura: null,
    CargarPrecipitacion: null,
    CargarViento: null,
    CargarHumedadRelativa: null,
    CargarPuntoDeRocio: null,
    CargarGraficas: null,
    CargarObservaciones: null,
    CargarRadiacionSolar: null,
    CargarSateliteNacional: null,
    CargarIR4: null,
    CargarRadar: null
}