$(document).ready(() => {
$('.factButton').on('click', () => {
        console.log("hello")
       var factsList = ["Sixteen nations were involved in the construction of the ISS: The United States, Russia, Canada, Japan, Belgium, Brazil, Denmark, France, Germany, Italy, the Netherlands, Norway, Spain, Sweden, Switzerland, and the United Kingdom.",
       "Sixty-five miles per hour may be a pretty standard speed limit on highways here on Earth, but up in orbit, the ISS travels a whopping 5 miles-per-second. That means the station circles the entire planet once every 90 minutes.",
    "You may think your house or apartment is spacious, but it’s got nothing on the ISS. At about 357.6 feet (or 109 meters) long, the International Space Station gives astronauts plenty of room to stretch out.",
"The ISS is the single most expensive object ever built. The cost of the ISS has been estimated at over $120 billion.",
"The electrical systems on the ISS include 8 miles of wire. That’s longer than the entire perimeter of New York City's Central Park."]
        var randomNumber = Math.floor(Math.random()*factsList.length);
        var daFact = (factsList[randomNumber]);
        $('.modal-append').append("<p>"+daFact+"</p>")
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
     modal.style.display = "block";
    span.onclick = function() {
       modal.style.display = "none";
     }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
})
})