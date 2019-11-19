
// Create variable to hold map element, give initial settings to map
let map = L.map('map',{ center: [42.362432, -71.086086], zoom: 14});

//Add OpenStreetMap tile layer to map element
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map);

map.setView([0, 0], 0);

// Locate moveISS

function moveISS () {
    $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {

    console.log(data);
         let lat = data['iss_position']['latitude'];
         let lon = data['iss_position']['longitude'];
         let iss = L.marker([lat, lon]).addTo(map).bindPopup("<b>The International Space Station</b>").openPopup();
         let isscirc = L.circle([lat, lon], 500, {
           color: 'red',
           fillColor: '#f03',
           fillOpacity: 0.5
         }).addTo(map);
        let myDataPoint = L.marker([lat, lon]).addTo(map);
        iss.setLatLng([lat, lon]);
        console.log(iss.setLatLng([lat, lon]));
        isscirc.setLatLng([lat, lon]);
        console.log(isscirc.setLatLng([lat, lon]));
        map.panTo([lat, lon], animate=true);
        console.log(map.panTo([lat, lon], animate=true))
    });
    setTimeout(moveISS, 5000); 
}

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

moveISS();
numberPeopleSpace();

