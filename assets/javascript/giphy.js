
//global variables
var topics = ['happy', 'sad', 'angry', 'silly', 'nice', 'sarcastic', 'funny', 'crazy', 'mean', 'annoying'];
var btn;
var logo = '<img src="assets/images/logo.gif">';

//dynamically create buttons from the topics array
for (var i = 0; i < topics.length; i++) {
  btn = $('<button>');
  btn.addClass('btn btn-success giphyButton');
  btn.attr('dataTopic', topics[i]);
  btn.text(topics[i]);

  $('.buttons').append(btn);
}

//button on.click function attached to the dataTopic class, attached to the buttons
    $(document).on("click", '.giphyButton', function() {
      console.log('giphyButton click is working');
      $('.instructionsDiv').html('<h4>Click on an image to play or pause the gif<h4>');
      $('.logo').empty();
      $('.logo').html(logo);
      
      //grab the dataTopic attr associated with the button, then run a query search with the value
      var adj = $(this).attr("dataTopic");
      ajaxQuery(adj);
      //end of button on.click function
    });

//ajaxQuery function to run a giphy query based on the key search word  
    function ajaxQuery(adj) {
      console.log('ajaxQuery function is working');
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        adj + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          console.log(response);
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            gifDiv.addClass('giphyDiv');

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);
            p.addClass('giphyRating');

            var adjImage = $("<img>"); 
             //create source attributes for the different states of the image, so that we may choose
             //between static and animated states           
            adjImage.attr("srcStill", results[i].images.fixed_height_still.url); 
            adjImage.attr("srcAnimate", results[i].images.fixed_height.url);

             //initially loaded as static image
            adjImage.attr("src", results[i].images.fixed_height_still.url); 
            adjImage.attr('state', 'still');
            adjImage.addClass('giphyImage');

            gifDiv.prepend(p);
            gifDiv.prepend(adjImage);
           
            $(".gifDiv").prepend(gifDiv);
          }
        });
 //end of ajaxQuery function      
    }  

 //clear the form value when the input field is focused
    $('#formInput').on('focus', function() {
      $('#formInput').attr('value', '');
    })

//Search for new adjective function
      $('.searchButton').on('click', function(e) {
        console.log('search click function is working');
        e.preventDefault();
       var adj = $('#formInput').val().trim();
        console.log(adj);
        ajaxQuery(adj); 
        //end of search for new adjective function 
      })

//giphyImage on.click function
    $(document).on('click', '.giphyImage', function() {
      console.log('giphyImage click is working');
      var state = $(this).attr('state');  //set state to the state of the image

          //conditional state to check the state of the image.  If the state is still
          //it changes both the image and state to animate, and vice-versa
          if (state === 'still') {
            $(this).attr('src', $(this).attr('srcAnimate'));
            $(this).attr('state', 'animate');
          }

          else {
            $(this).attr('src', $(this).attr('srcStill'));
            $(this).attr('state', 'still');
          }

//end of giphyImage on.click function
    })
