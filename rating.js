$(function() {
        
    $("#rating").on('submit', function(e){

        e.preventDefault();

        var rate = $('.labels input:checked').attr('data');

        var checked = $('.labels input:checked');

        if (checked.length > 0) {

       $('.selection #userRate').text(rate);

        $(".rateState").fadeOut(500);

        $(".thankYou").delay(500).fadeIn(500);

        }

    });

});