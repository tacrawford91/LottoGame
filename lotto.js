//listen for button

// functions 
function generate() {
    var randomNumber = Math.floor(Math.random()*999);
    return randomNumber;
}

$("button").on("click", function(event){
    var newNumber = generate();
    $(".numbers").html(`<h1>${newNumber}</h1>`);
})
//gerate random number 7 
//Display number
