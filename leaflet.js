var map = L.map('mapid').setView([40.2838, -3.8215], 15);
 // Una vez creado el mapa con la localizacion del campus añadimos las capas..
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

/* MAS SIMPLIFICADO-- menos datos en el mapa ...
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
*/

// Añadimos un popup para identificar nuestra posicion exacta( añadiendo las cordenadas manualmente)
    L.marker([40.2838, -3.8215]).addTo(map)
        .bindPopup("<b> Aulario III Popup</b>").openPopup();

    var popup = L.popup(); // vemos el popup en cuanto se carge la pagina





map.locate({setView: true, maxZoom: 15}); // agregamos el mapa