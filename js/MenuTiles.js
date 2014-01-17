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
    });

    //Mantiene el mapa en el tamaño necesario del navegador
    $("#mapa").height($(window).height() - $("#header").height() - $("#info").height() - 50);
    $(window).resize(function () {
        $("#mapa").height($(window).height() - $("#header").height() - $("#info").height() - 50);
    });
    //Mantiene los tiles en el tamaño necesario del navegador
    $("#MenuPrincipal").height(($(window).height() - $("#header").height()) - ($("#Publicidad").height() + 30));
    $(window).resize(function () {
        $("#MenuPrincipal").height(($(window).height() - $("#header").height()) - ($("#Publicidad").height() + 30));
    });

    //Inicializa y responde a los Tiles
    $(".live-tile, .flip-list").not(".exclude").liveTile();

    $("#CondicionesActualesTile").click(function () {
        Datos.CargarCondicionesActuales();
        MostrarMapa();
    });
    $("#TemperaturaActualTile").click(function () {
        Datos.CargarTemperatura();
        MostrarMapa();
    });
    $("#PrecipitacionTile").click(function () {
        Datos.CargarPrecipitacion();
        MostrarMapa();
    });
    $("#VientoActualTile").click(function () {
        Datos.CargarViento();
        MostrarMapa();
    });
    $("#HumedadTile").click(function () {
        Datos.CargarHumedadRelativa();
        MostrarMapa();
    });
    $("#PuntoDeRocioTile").click(function () {
        Datos.CargarPuntoDeRocio();
        MostrarMapa();
    });
    $("#GraficasTile").click(function () {
        Datos.CargarGraficas();
        MostrarMapa();
    });
    $("#ObservacionesTile").click(function () {
        Datos.CargarObservaciones();
        MostrarMapa();
    });
    $("#RadiacionTile").click(function () {
        Datos.CargarRadiacionSolar();
        MostrarMapa();
    });
    $("#SateliteNacionalTile").click(function () {
        Datos.CargarSateliteNacional();
        MostrarMapa();
    });
    $("#IR4Tile").click(function () {
        Datos.CargarIR4();
        MostrarMapa();
    });
    $("#RadarTile").click(function () {
        Datos.CargarRadar();
        MostrarMapa();
    });
}