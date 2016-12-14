$(function() {
var graf;
$('.plot').click(function () {
    var x = parseFloat($('.from').val());
    const x1 = parseFloat($('.to').val());
    var i = x;
    var step = 0.1;
    const fun = ($('.fun').val());
    var poinst = [x, eval(fun)];

    for (x; i < x1; i += parseFloat(step)) {
            $.plot($('.graph'), [{label: fun, data: poinst}], {});
            x = x + step;
            poinst.push([x, eval(fun)]);
    }
});
});