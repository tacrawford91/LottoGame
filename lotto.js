//listen for button

// functions 
function generate() {
    var randomNumber = Math.floor(Math.random()*9999999);
    return randomNumber.toString();
}



$("button").on("click", function(event){
    var newNumber = generate();
    $(".numbers").append($("<h1>").text(newNumber));
})

//gerate random number 7 
//Display number
