// <script src="js/jquery-3.2.1.min.js> </script>"

// <script src="js/Jquery1.js> </script>"
//Create the "Reveal Spoiler" myButton
const $button = $ ('<button> Reveal Spoiler </button>');
//Append to web page
$('.spoiler ').append($button);


// Hide the spoiler text
$('.spoiler span').hide();
// When the button is pressed
$('.spoiler button').on('click mouseleave', function() {
$('.spoiler span') .show();
$('.spoiler button').hide();


});
