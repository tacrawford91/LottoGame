//listen for button

// functions 
function generate() {
    var randomNumber = Math.floor(Math.random()*9999999);
    return randomNumber;
}

$("button").on("click", function(event){
    var newNumber = generate();
    $(".numbers").html(`<h1>${newNumber}</h1>`);
    console.log(newNumber);

    var newH1 = $("<h1></h1>")
    $("newH1").text(newNumber);
    $(".numbers").append(newH1);


})
//generate random number 7 
//Display number
