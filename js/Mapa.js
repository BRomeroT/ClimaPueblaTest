﻿var Mapa = {
    mapaElement: null, mapaElementId: "", Eventos: null, Inicializado: false,
    Inicializar: function (mapaElementId, Eventos, inicializado, error) {
        Mapa.mapaElementId = mapaElementId;
        Mapa.Eventos = Eventos;
        try {
            Mapa.mapaElement = new Microsoft.Maps.Map(document.getElementById(mapaElementId),
                            {
                                credentials: "Al9zPH654c2ilovwyubEWKEKfK0Z3q_lFHBf-OIsNRHtv49Pf0cuE3m9pVT3hImU",
                                mapTypeId: Microsoft.Maps.MapTypeId.road,
                                center: new Microsoft.Maps.Location(19.040899, -98.138100),
                                zoom: 8,
                                enableSearchLogo: false,
                                showMapTypeSelector: false,
                            })
            Mapa.Inicializado = true;
            if (inicializado != 'undefined') inicializado();
        } catch (e) {
            Mapa.Inicializado = false;
            if (error != 'undefined') error(e);
        }
    },

    AgregarPin: function (html, latitud, longitud)
    {
        var pos = new Microsoft.Maps.Location(latitud, longitud)
        var pin = new Microsoft.Maps.Pushpin(pos, { htmlContent: html});
        Mapa.mapaElement.entities.push(pin);
        Microsoft.Maps.Events.addHandler(pin, 'click', function (e)
        {
            if (Mapa.Eventos != null && Mapa.Eventos.Pin_Click != 'undefined') Mapa.Eventos.Pin_Click(e.target);
        });
        return pin;
    },

    LimpiarDatos: function ()
    {
        //TODO: quitar los Pins del mapa
        Mapa.mapaElement.entities.clear();
        //for (var i = Mapa.mapaElement.entities.getLength() - 1; i >= 0; i--)
        //{
        //    var pushpin = Mapa.mapaElement.entities.get(i);
        //    if (pushpin instanceof Microsoft.Maps.Pushpin)
        //    {
        //        Mapa.mapaElement.entities.removeAt(i);
        //    };
        //}
    }
};