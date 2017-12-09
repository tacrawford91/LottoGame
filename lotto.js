//listen for button

// functions 
function generate() {
    var num = "";
    for(i=0;i<8;i++) {
        var random = Math.floor(Math.random() * 9)+ 1;
        num = random + num;
    };
    return num
}
console.log(generate);


$("button").on("click", function(event){
    var newNumber = generate();
    $(".numbers").prepend($("<h1>").text(newNumber));
})

//gerate random number 7 
//Display number
