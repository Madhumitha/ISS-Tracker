
// Create variable to hold map element, give initial settings to map
let map = L.map('map', {center : [0, 0], zoom: 14});

// Set the map's view
map.setView([0, 0], 2);

//Add OpenStreetMap tile layer to map element
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);


// Locate moveISS
function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {

    console.log(data);
    let lat = data['iss_position']['latitude'];
    let lon = data['iss_position']['longitude'];

// Icon Image 

    let LeafIcon = L.Icon.extend({
        options: {
                iconSize:     [30, 30],
                shadowSize:   [50, 50],
                }
            });

    let Icon = new LeafIcon({
                iconUrl: 'http://open-notify.org/Open-Notify-API/map/ISSIcon.png',
                shadowUrl: 'http://open-notify.org/Open-Notify-API/map/ISSIcon_shadow.png'
            })

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


