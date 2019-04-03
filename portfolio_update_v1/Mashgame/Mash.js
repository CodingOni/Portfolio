function random_number(num) {  // New function called random_choice that takes one parameter, num (or a number)
    // Get a random number between 0 and a passed-in number
    var num = num || 4  // If no number passed in, default to 4
    return Math.floor(Math.random() * num); // Round the answer down (floor) of a random number between 0 and 1 and multiply it by a number. Then return a value and exit the function.
}

function mash_choice() {  // New function called mash_choice that doesn't take any parameters
    // Since MASH is a special case, give it its own list
    var mash = ['Mansion', 'Apartment', 'Shack', 'House'];  // The array of choices to pick from
    var randomNum = random_number(5);  // Use the above function to get a number between 0 and 4
    return mash[randomNum];  // Return the list item the random number function just picked and exit the function
}

function get_answer(category) {
    // Get a random answer from the available answers in a given category
    var choices = [];  // A blank array to hold the user provided answer
    var selector = 'input[name="' + category + '[]"]';  // Build a CSS selector for the blanks in our passed in category
    var inputs = document.querySelectorAll(selector);  // Get all of the inputs that match our selector
    var answer;

    for (var i = 0; i < inputs.length; i++) {  // Begin a for loop that will run through the code. i++ = add one to the counter which is "i"
        answer = inputs[i].value;  // Get the input with the index value of the counter and get the value ie. if they typed in dog, you get back "dog"
        if (answer !== '') {  // If answer doesn't equal a blank... !== means doesn't equal
            choices.push(answer); //...add it to the end of the list
        }
    }
    return choices[random_number(choices.length)];   // Pick and return a random choice choice.length = number of answers the user provided in that category
}

function fill_in_answers(answers) {
    // Find the spans that need filled
    var home = document.querySelector('#home');  // This says make a new variable and find the HTML tag that has the ID of "home"
    var profession = document.querySelector('#profession');
    var pet = document.querySelector('#pet');
    var location = document.querySelector('#location');
    var hobies = document.querySelector('#hobies');

    // Fill them with the provided answers
    home.innerText = answers['mash'];
    profession.innerText = answers['profession'];
    pet.innerText = answers['pet'];
    location.innerText = answers['location'];
    location.innerText = answers['hobbies'];
    home.innerHTML = answers.mash;  // Change the content of the element in the HTML doc with the id "home" to the "mash" value in answers
    profession.innerHTML = answers.profession;  // Change the content of the element in the HTML doc with the id "career" to the "career" value in answers
    pet.innerHTML = answers.pet;
    location.innerHTML = answers.location;
    hobies.innerHTML = answers.hobies;
}

function handle_submission(evt) {
    evt.preventDefault();  // Stop the form from reloading the page
    evt.stopPropagation();  // Stop the form from reloading the page

    // Build up our answers object
    var answers = {
        'mash': mash_choice(),
        'profession': get_answer('profession'),
        'pet': get_answer('pet'),
        'location': get_answer('location'),
        'hobies': get_answer('hobies')

    }
    // Fill in the answers
    fill_in_answers(answers);

    var answer_div = document.querySelector('#answers');
    answer_div.classList.add('show');
}

// Find the form on the page and attach a handler for when it's submitted
var form = document.querySelector('#mash');
form.addEventListener('submit', handle_submission);  // Anytime the form is submitted, we want to call the function handle_submission

//Scroll to top on button click




// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// location.reload();
function refresh() {
  location.reload();
}
