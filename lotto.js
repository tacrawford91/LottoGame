//listen for button

// functions 
function generate() {
<<<<<<< HEAD
<<<<<<< HEAD
    var randomNumber = Math.floor(Math.random()*9999999);
=======
    var randomNumber = Math.floor(Math.random()*999);
>>>>>>> e9f673255cff6f5c7b081b5c482861a1bd113a9d
=======
    var randomNumber = Math.floor(Math.random()*999);
>>>>>>> 3f78332eebed2a2d4ed249c0d6d0d703542857a1
    return randomNumber;
}

$("button").on("click", function(event){
    var newNumber = generate();
    $(".numbers").html(`<h1>${newNumber}</h1>`);
    console.log(newNumber);
})
//generate random number 7 
//Display number
