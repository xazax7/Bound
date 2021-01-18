export function cursor() {
    
    // Cursor
    $(document).on('mousemove', function (e) {
        $('.cursor').css({
            left: e.pageX,
            top: e.pageY
        });
    });
    
    // Visual marker when user clicks
    $('.screen').mousedown(function (e) {
        $('.cursor-click').removeClass("blinking");
        setTimeout(function () {
            // $('<div class="cursor-click blinking"></div>').appendTo($('.screen'));
            $('.cursor-click').addClass("blinking");
            $('.cursor-click').css({
                left: e.pageX - 12,
                top: e.pageY - 12
            });
        }, 1)
    })

}
