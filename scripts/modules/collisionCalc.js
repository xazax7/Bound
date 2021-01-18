export function collisionCalc($div1, $div2) {
    Math.floor();
    var x1 = $div1.offset().left; //X
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true); //X
    var b1 = y1 + h1; //Y length / bottom edge
    var r1 = x1 + w1; //X length
    var x2 = $div2.offset().left; //X
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true); //X
    var b2 = y2 + h2;
    var r2 = x2 + w2; //X length

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}