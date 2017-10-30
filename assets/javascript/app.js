$(document).ready(function () {




    var topics = ["Beagle", "Cocker Spaniel", "Golden Retriever", "Collie"];
    // displayMovieInfo function re-renders the HTML to display the appropriate content

    function displayGif() {
        var gifDog = $(this).attr("data-name");

    
   
    
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifDog + "dogs&api_key=u84oHtJLc0udWhc5sR0xPRJ0f7vrzz00&offset=5&limit=5";
           // Creating an AJAX call for the specific movie button being clicked
              $.ajax({
                url: queryURL,
                method: "GET"
              }).done(function(response) {
                  console.log(response)
                  var results = response.data;
    // var queryURL = $.get("http://api.giphy.com/v1/gifs/search?q=dogs&api_key=u84oHtJLc0udWhc5sR0xPRJ0f7vrzz00&limit=5");
    // queryURL.done(function (data) {
    //     console.log("success got data", data);
        // })
        // Creating a div to hold the gif
        
        
        for (var i = 0; i <topics.length; i++) {
            var dogDiv = $("<div>");
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);
            // Creating and storing an image tag
            var dogImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            dogImage.attr("src", results[i].images.fixed_height.url);
            // Appending the paragraph and image tag to the animalDiv
            dogDiv.append(p);
            dogDiv.append(dogImage);
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#displayBody").prepend(dogDiv);
    
}});
    }
    


    // Function for displaying movie data
    function renderButtons() {
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttonBody").empty();
        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {
            // Then dynamicaly generating buttons for each movie in the array
            // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class of movie to our button
            a.addClass("breed");
            // Adding a data-attribute
            a.attr("data-name", topics[i]);
            // Providing the initial button text
            a.text(topics[i]);
            // Adding the button to the buttons-view div
            $("#buttonBody").append(a);
            // console.log(a);
        }
    }
    // This function handles events where the add breed button is clicked   XXXXXXXXXXXXXXXXXXXX
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var gifDog = $("#search-input").val().trim();
        // Adding movie from the textbox to our array
        topics.push(gifDog);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

    });
    
    $(document).on("click", ".breed", displayGif);


    // Calling the renderButtons function to display the intial buttons
    renderButtons();
    // function newFunction(displayGif) {
        // Adding a click event listener to all elements with a class of "movie"
        // $(document).on("click", ".breed", displayGif};
        // console.log("you clicked a breed");
    
})






    