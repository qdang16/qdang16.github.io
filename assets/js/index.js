$(document).ready(function() {

    $("#tab-home").click(function() {

        $('.tab').css("font-weight", "normal");
        $('html, body').animate({
            scrollTop: $("#view").offset().top
        }, 500);

        $(this).css("font-weight", "bolder");
    });

    $('#tab-project').click(function() {

        $('.tab').css("font-weight", "normal");
        $('html, body').animate({
            scrollTop: $(".projects-container").offset().top
        }, 500);

        $(this).css("font-weight", "bolder");
    });

    $('#tab-contact').click(function() {
        $('.tab').css("font-weight", "normal");
        $('html, body').animate({
            scrollTop: $(".contactme-container").offset().top
        }, 500);

        $(this).css("font-weight", "bolder");
    });

    $('.view-text').delay(800).hover(function() {
        $('.view-text').fadeOut("fast");
        $('.view-bio').fadeTo("slow", 1);
        $('.view-bio-nub').fadeTo("slow", 1);
        $('.view-image').fadeTo("slow", 1);
    });

});