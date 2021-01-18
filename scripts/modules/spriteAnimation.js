export function spriteAnimation(clickPos, pcPos, state) {
    if (state === "running") {
        $('.pc-sprite').css({
            'background-image': 'url("../images/running.gif")'
        });
        if (pcPos.left < clickPos.left) {
            $(".pc-sprite").css({ transform: `scaleX(-1)` });
        } else {
            $(".pc-sprite").css({ transform: `scaleX(1)` });
        }
    }
    if (state === "stopped") {
        $('.pc-sprite').css({
            'background-image': 'url("../images/standing.gif")'
        });
    }
}