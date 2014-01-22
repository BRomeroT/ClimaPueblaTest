function InicializarInterfase() {
    function MostrarMapa() {
        $("#InicioPage").hide("fadeOut");
        $("#MapaPage").show("fadeIn");
    }

    function OcultarMapa() {
        $("#MapaPage").hide("fadeOut");
        $("#InicioPage").show("fadeIn");
    }

    $("#VerMapa").click(function () {
        MostrarMapa();
    });
    $("#IrInicio").click(function () {
        OcultarMapa();
        Datos.Limpiar();
    });

    //Mantiene el mapa en el tamaño necesario del navegador
    $("#mapa").height($(window).height() - $("#header").height() - $("#info").height() - 50);
    $(window).resize(function () {
        $("#mapa").height($(window).height() - $("#header").height() - $("#info").height() - 50);
    });
    //Mantiene los tiles en el tamaño necesario del navegador
    $("#MenuPrincipal").height(($(window).height() - $("#header").height()) - ($("#Publicidad").height() + 40));
    $(window).resize(function () {
        $("#MenuPrincipal").height(($(window).height() - $("#header").height()) - ($("#Publicidad").height() + 40));
    });

    //Inicializa y responde a los Tiles
    $(".live-tile, .flip-list").not(".exclude").liveTile();

    $("#CondicionesActualesTile").click(function ()
    {
        MostrarMapa();
        Datos.CargarCondicionesActuales();
        $("#SeccionActual").text("Condiciones actuales");
    });
    $("#TemperaturaActualTile").click(function ()
    {
        //Datos.CargarTemperatura();
        Datos.CargarTemperaturaMaximaMinimaAyer();
        //Datos.CargarTemperaturaMaxMin();
        MostrarMapa();
        $("#SeccionActual").text("Temperatura");
    });
    $("#PrecipitacionTile").click(function ()
    {
        Datos.CargarPrecipitacion();
        MostrarMapa();
        $("#SeccionActual").text("Precipitación");
    });
    $("#VientoActualTile").click(function ()
    {
        Datos.CargarDireccionViento();
        MostrarMapa();
        $("#SeccionActual").text("Viento");
    });
    $("#HumedadTile").click(function ()
    {
        Datos.CargarHumedadRelativa();
        MostrarMapa();
        $("#SeccionActual").text("Humedad");
    });
    $("#PuntoDeRocioTile").click(function ()
    {
        Datos.CargarPuntoDeRocio();
        MostrarMapa();
        $("#SeccionActual").text("Punto de rocio");
    });
    $("#GraficasTile").click(function ()
    {
        Datos.CargarGraficas();
        MostrarMapa();
        $("#SeccionActual").text("Graficas");
    });
    $("#ObservacionesTile").click(function ()
    {
        Datos.CargarObservaciones();
        MostrarMapa();
        $("#SeccionActual").text("Observaciones");
    });
    $("#RadiacionTile").click(function ()
    {
        Datos.CargarRadiacion();
        MostrarMapa();
        $("#SeccionActual").text("Radiación");
    });
    $("#SateliteNacionalTile").click(function ()
    {
        Datos.CargarSateliteNacional();
        MostrarMapa();
        $("#SeccionActual").text("Satelite nacional");
    });
    $("#IR4Tile").click(function ()
    {
        Datos.CargarIR4();
        MostrarMapa();
        $("#SeccionActual").text("IR4");
    });
    $("#RadarTile").click(function ()
    {
        Datos.CargarRadar();
        MostrarMapa();
        $("#SeccionActual").text("Radar");
    });
}