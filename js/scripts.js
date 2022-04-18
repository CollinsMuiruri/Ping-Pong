//user interface logic
$(document).ready(function() {
    $("form#display").submit(function(event) {
        event.preventDefault();
        $(".Push").empty();
        var display = parseInt($("input#pingpong").val());
        var resul = answer(display).toString();
        var result = resul.split(",").join("<br>");
        $(".Push").addClass("res-scroll").append('<li class="res-scroll">' + result + '</li>');

    });
});

//business logic
function answer(display) {
    var arr = [];
    for (i = 1; i <= display; i++) {
        // if the number is divisible by 15, write ping pong
        if (i % 15 === 0) {
            console.log("pingpong")
                //$(".Push").append("<li>" + "pingpong" + "</li>");
            arr.push("PING PONG");
            //return pingpong
        }
        //if the number is divisible by 3
        else if (i % 3 === 0) {
            //$(".Push").append("<li>" + "ping" + "</>");
            //return ping
            arr.push("PING");
        }
        //if the number is divisible by 5
        else if (i % 5 === 0) {
            //$(".Push").append("<li>" + "pong" + "</>");
            // return pong
            arr.push("PONG");
        }
        //if the number is not divisible by anything
        else {
            console.log("conto");
            //$(".Push").append("<li>" + i + "</>")
            arr.push(i);
            //will return i
        }
    };
    return arr;
}


//the menu//

// $(document).ready(function() {
//   $("#open-menu").click(function() {
//     $("aside").animate({
//       "left":0}, 2000);
//   });
// });
// $("#close-menu").click(function() {
//   $("aside").animate({
//     "left":-10000}, 2000);
// });