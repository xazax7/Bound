export function findPcPos() {
    var pos = { left: 0, top: 0 };
    //   Find where PC is
    pos = {
        // left: $(".pc").offset().left,
        // top: $(".pc").offset().top
        left: +$(".pc").css("left").split("px")[0],
        top: +$(".pc").css("top").split("px")[0]
    };
    return pos;
}