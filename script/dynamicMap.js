// Locate moveISS

function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {

    console.log(data);
         let lat = data['iss_position']['latitude'];
         let lon = data['iss_position']['longitude'];

         // Icon Image 

         let LeafIcon = L.Icon.extend({
            options: {
               iconSize:     [70, 70],
               shadowSize:   [50, 50],
            }
        });

        let Icon = new LeafIcon({
            iconUrl: 'http://open-notify.org/Open-Notify-API/map/ISSIcon.png',
            shadowUrl: 'http://open-notify.org/Open-Notify-API/map/ISSIcon_shadow.png'
        })

         // Create variable to hold map element, give initial settings to map
         let map = L.map('map',{ center: [lat, lon], zoom: 14});

         let mapStyle = [
            'hue: 230deg',
            'grayscale: 60%',
            'invert: 100%',
            'brightness: 90%',
         ];

         //Add OpenStreetMap tile layer to map element
         L.tileLayer.colorFilter('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap', filter: mapStyle }).addTo(map);

         map.setView([0, 0], 2.5);
         map.setMinZoom(2.5);

         let iss = L.marker([lat, lon],{icon: Icon}).addTo(map).bindPopup("<b>The International Space Station</b>").openPopup();
         let isscirc = L.circle([lat, lon], 500, {
           color: 'red',
           fillColor: '#f03',
           fillOpacity: 0.5
         }).addTo(map);
        iss.setLatLng([lat, lon]);
        console.log(iss.setLatLng([lat, lon]));
        isscirc.setLatLng([lat, lon]);
        console.log(isscirc.setLatLng([lat, lon]));
        map.panTo([lat, lon], animate=true);
        console.log(map.panTo([lat, lon], animate=true))

        $('#latitude').html(lat);
        $('#longitude').html(lon);
    });
    setTimeout(moveISS, 5000);
}

// Number of People in Space 

function numberPeopleSpace() {

    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    
    console.log("Number of People in Space");
    console.log(data);
    
    let number = data['number'];
    $('#spacepeeps').html(number);

    data['people'].forEach(function (d) {
        console.log(d.name);
        let astronames = d.name;
         $('#astronames').append('<li>' + astronames + '</li>');
    });
});
}

// Function Calls 

moveISS();
numberPeopleSpace();