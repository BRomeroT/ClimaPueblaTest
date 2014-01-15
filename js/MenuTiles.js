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
    $("#MenuPrincipal").height($(window).height() - $("#header").height());
    $(window).resize(function () {
        $("#MenuPrincipal").height($(window).height() - $("#header").height());
    });

    //Inicializa y responde a los Tiles
    $(".live-tile, .flip-list").not(".exclude").liveTile();
    $("#CondicionesActualesTile").click(function () {
        //TODO: Cargar CondicionesActuales
        MostrarMapa();
    });
}