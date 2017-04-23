var map = L.map('mapid').setView([40.2838, -3.8215], 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    L.marker([40.2838, -3.8215]).addTo(map)
        .bindPopup("<b> Aulario III Popup</b>").openPopup();

    var popup = L.popup(); 


map.locate({setView: true, maxZoom: 15}); 
