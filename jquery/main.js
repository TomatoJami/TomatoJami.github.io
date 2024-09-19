$(function() {
    $(this).keydown(function(event) {
        var key = $('.key[data-key='+event.which+']');
        var audio = $('audio[data-key='+event.which+']')[0];
        
        if (!audio) return;
        
        key.addClass('playing');
        audio.currentTime = 0;
        audio.play();
    });

    $(this).keyup(function(event) {
        var key = $('.key[data-key='+event.which+']');
        key.removeClass('playing');
    });
});