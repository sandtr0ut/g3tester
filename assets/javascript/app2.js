//Ford's YouTube API Code

function buildQueryURL() {
  
  //submit the term in the text-input to YouTube API
  var query = $("#prodSearch")
  .val()
  .trim();
  // ...but stringify it first
  var q = JSON.stringify(query);
  
  // this is a required parameter and contains what we need
  var part = "snippet";
  
  // don't need any channels or playlists
  var type = "video";
  
  // personal api key
  var key = "AIzaSyBCUJS6cSN78A5GwyfEMnLgua52afC2CgQ";
  
  // All combined for ajax request
  var queryURL = "https://www.googleapis.com/youtube/v3/search?" + "part=" + part + "&q=" + q + "&type=" + type + "&key=" + key;
  

}

$("#submit").on("click", function() {
  event.preventDefault();

// empty the divs of prior results
// may need to remove since this is in other js file
 $(".app-content").empty();

// build query url inside click function for ajax
 var queryURL = buildQueryURL();
 
 console.log(queryURL);

// perform ajax request
$.$.ajax({
  url: queryURL,
    method: "GET"
})
.then(function(response) {
  var results = //start here
})
});
