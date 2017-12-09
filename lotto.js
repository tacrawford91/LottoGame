//listen for button

// functions 
function generate() {
    var randomNumber = Math.floor(Math.random()*9999999);
    return randomNumber;
}

var numberArray = []

$("button").on("click", function(event){
    var newNumber = generate();
    $(".numbers").html(`<h1>${newNumber}</h1>`);
    console.log(newNumber);

    var newH1 = $("<h1></h1>")
    $("h1").text(numberArray);
    $(".numbers").append(numberArray);


})
//generate random number 7 
//Display number
