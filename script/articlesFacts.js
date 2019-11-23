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
       $("#bigMap").hide();
      span.onclick = function() {
         modal.style.display = "none";
         $("#bigMap").show();
       }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
          $("#bigMap").show();
        }
      }
  })
  });

  $(document).ready( () => {
    $(".test").on("click", () => {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=flat earth&api-key=TI5JqG3XC6bQ7AJaB1BNxbRrrKJiIYFu";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(res) {
            // console.log(queryURL);
            var results = res.response
            console.log(results);
    let artArray = results.docs;
    //console.log(artArray);
    var randomNumber = Math.floor(Math.random()*artArray.length);
    let leadPar = artArray[randomNumber].lead_paragraph;
    console.log(leadPar);
    $(".artinfo").html(leadPar);
    $(".readmore").on("click", () => {
        var artLink = artArray[randomNumber].web_url;
        console.log(artLink);
        window.open(artLink);
    })
    })
    });
});