//listen for button

// functions 
function generate() {
    var randomNumber = Math.floor(Math.random()*9999999);
    return randomNumber;
}

var numberArray = []

$("button").on("click", function(event){
    var newNumber = generate();
    var newH1 = $("<h1></h1>")
    numberArray.push(newNumber);
    $("h1").text(numberArray);
    $(".numbers").append(numberArray);

})
//gerate random number 7 
//Display number
