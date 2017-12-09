//listen for button

// functions 
function generate() {
<<<<<<< HEAD
    var num = "";
    for(i=0;i<8;i++) {
        var random = Math.floor(Math.random() * 9)+ 1;
        num = random + num;
    };
    return num
=======
    var randomNumber = Math.floor(Math.random()*9999999);
    return randomNumber.toString();
>>>>>>> 02432ae5ed28f0d766f2ca61bb135cf9990afc95
}
console.log(generate);


$("button").on("click", function(event){
    var newNumber = generate();
    $(".numbers").prepend($("<h1>").text(newNumber));
})

//gerate random number 7 
//Display number
