$(function() {
  // This is our API key
  var APIKey = "vvT6UiB9OnN6pgMgOWVY79s9DbQglY5uNeqqIwn5";

  // Here we are building the URL we need to query the database
  var queryURL = "https://images-api.nasa.gov/search?q=Apollo";
  console.log(queryURL);

  // Here we run our AJAX call to the NASA Gallery API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      // Log the queryURL and response
      console.log(queryURL);
      console.log(response);

      let firstImg = response.collection.items[4].links[0].href;
      let secondImg = response.collection.items[18].links[0].href;
      let thirdImg = response.collection.items[21].links[0].href;
      let fourthImg = response.collection.items[22].links[0].href;
      let fifthImg = response.collection.items[25].links[0].href;
      let sixthImg = response.collection.items[26].links[0].href;
      let seventhImg = response.collection.items[27].links[0].href;
      let eigthImg = response.collection.items[28].links[0].href;
      let ninthImg = response.collection.items[29].links[0].href;
      let tenthImg = response.collection.items[30].links[0].href;
      let eleventhImg = response.collection.items[32].links[0].href;
      let twevelthImg = response.collection.items[33].links[0].href;
      let thirteenthImg = response.collection.items[34].links[0].href;
      let fourteenthImg = response.collection.items[35].links[0].href;
      let fifteenthImg = response.collection.items[36].links[0].href;
      let sixteenthImg = response.collection.items[37].links[0].href;
      let seventeenthImg = response.collection.items[38].links[0].href;
      let eighteenthImg = response.collection.items[39].links[0].href;
      let nineteenthImg = response.collection.items[40].links[0].href;
      let twentyImg = response.collection.items[41].links[0].href;
      let twentyoneImg = response.collection.items[42].links[0].href;
      let twentytwoImg = response.collection.items[43].links[0].href;
      let twentythreeImg = response.collection.items[44].links[0].href;
      let twentyfourthImg = response.collection.items[45].links[0].href;
      let twentyfiveImg = response.collection.items[46].links[0].href;
      let twentysixImg = response.collection.items[47].links[0].href;
      let twentysevenImg = response.collection.items[48].links[0].href;
      let twentyeightImg = response.collection.items[49].links[0].href;
      let twentynineImg = response.collection.items[51].links[0].href;
      let thirtyImg = response.collection.items[55].links[0].href;
      let thirtyoneImg = response.collection.items[56].links[0].href;
      let thirtytwoImg = response.collection.items[57].links[0].href;
      let thirtythreeImg = response.collection.items[58].links[0].href;
      let thirtyfourImg = response.collection.items[59].links[0].href;
      let thirtyfiveImg = response.collection.items[61].links[0].href;
      let thirtysixImg = response.collection.items[62].links[0].href;
      let thirtysevenImg = response.collection.items[64].links[0].href;
      let thirtyeightImg = response.collection.items[65].links[0].href;
      let thirtynineImg = response.collection.items[66].links[0].href;
      let fourtyImg = response.collection.items[67].links[0].href;
      let fourtyoneImg = response.collection.items[68].links[0].href;
      let fourtytwoImg = response.collection.items[70].links[0].href;
      let fourtythreeImg = response.collection.items[71].links[0].href;
      let fourtyfourImg = response.collection.items[72].links[0].href;
      let fourtyfiveImg = response.collection.items[74].links[0].href;
      let fourtysixImg = response.collection.items[75].links[0].href;
      let fourtysevenImg = response.collection.items[76].links[0].href;
      let fourtyeightImg = response.collection.items[77].links[0].href;
      let fourtynineImg = response.collection.items[78].links[0].href;
      let fiftyImg = response.collection.items[79].links[0].href;
      let fiftyoneImg = response.collection.items[80].links[0].href;
      let fiftytwoImg = response.collection.items[82].links[0].href;
      let fiftythreeImg = response.collection.items[95].links[0].href;
      let fiftyfourImg = response.collection.items[96].links[0].href;
      let fiftyfiveImg = response.collection.items[98].links[0].href;
      let fiftysixImg = response.collection.items[99].links[0].href;
      var images = [
          firstImg,
          secondImg,
          thirdImg,
          fourthImg,
          fifthImg,
          sixthImg,
          seventhImg,
          eigthImg,
          ninthImg,
          tenthImg,
          eleventhImg,
          twevelthImg,
          thirteenthImg,
          fourteenthImg,
          fifteenthImg,
          sixteenthImg,
          seventeenthImg,
          eighteenthImg,
          nineteenthImg,
          twentyImg,
          twentyoneImg,
          twentytwoImg,
          twentythreeImg,
          twentyfourthImg,
          twentyfiveImg,
          twentysixImg,
          twentysevenImg,
          twentyeightImg,
          twentynineImg,
          thirtyImg,
          thirtyoneImg,
          thirtytwoImg,
          thirtythreeImg,
          thirtyfourImg,
          thirtyfiveImg,
          thirtysixImg,
          thirtysevenImg,
          thirtyeightImg,
          thirtynineImg,
          fourtyImg,
          fourtyoneImg,
          fourtytwoImg,
          fourtythreeImg,
          fourtyfourImg,
          fourtyfiveImg,
          fourtysixImg,
          fourtysevenImg,
          fourtyeightImg,
          fourtynineImg,
          fiftyImg,
          fiftyoneImg,
          fiftytwoImg,
          fiftythreeImg,
          fiftyfourImg,
          fiftyfiveImg,
          fiftysixImg
        ],
        curIndex = 0,
        gotoImage = function(index) {
          $("#images").each(function(i) {
            var image = curIndex + i;
            if (image >= images.length) {
              image = image - images.length;
            }
            $(this).html($("<img>", { src: images[image] }));
          });
        };

      $(".prev").click(function() {
        curIndex--;
        if (curIndex === -1) {
          curIndex = images.length - 1;
        }
        $("#prev").show();
        gotoImage(curIndex);
        console.log(curIndex);
      });

      $(".next").click(function() {
        curIndex++;
        if (curIndex === images.length) {
          curIndex = 0;
        }
        $("#next").show();
        gotoImage(curIndex);
        console.log(curIndex);
      });
    });
});

