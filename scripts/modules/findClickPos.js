export function findClickPos(e) {
    var pos = { left: 0, top: 0 };
    //   Find where user clicked
    var el = $(".board");
    pos = {
        // left: Math.floor(e.clientX - 15),
        // top: Math.floor(e.clientY - 15)
        // left: $('.cursor').offset().left - $('.board').outerWidth(),
        // top: $('.cursor').offset().top - $('.board').outerHeight()


        left: e.pageX - el.offset().left - 10,
        top: e.pageY - el.offset().top - 12



    };
    return pos;
}