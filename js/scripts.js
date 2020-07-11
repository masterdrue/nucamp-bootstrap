/* Carousel Button */
$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    $("#reserveSite").click(function(){
        $('#reserveModal').modal('toggle'); 
    });
    
    $("#loginModalButton").click(function(){
        $('#loginModal').modal('toggle'); 
    
    });
});




/* Reserve Campsite Modal Form */
function reserve() {
    const message = document.querySelector("#message");
    const checkedInput = document.querySelector("input:checked");
    const date = document.getElementById("date");
    const numCampers = document.querySelector("select");

         if (checkedInput) {
            message.textContent = `Your Reservation is confirmed for ${date.value}, and includes ${checkedInput.value} with ${numCampers.value} Campers.`;
        } else {
        message.textContent - "Unknown reserveration.";
        }
    }
/* ToolTip */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })