function initStatistic() {
  var figures = [
    "sp1",
    "sp2",
    "sp3",
    "sb1",
    "sb2",
    "sb3",
    "sc1",
    "sc2",
    "sc3",
    "tp1",
    "tp2",
    "tp3",
    "tc1",
    "tc2",
    "tc3",
    "tb1",
    "tb2",
    "tb3",
    "cb1",
    "cb2",
    "cb3",
    "cp1",
    "cp2",
    "cp3",
    "cc1",
    "cc2",
    "cc3"
  ].map(function(id) {
    var el = document.getElementById(id);
    var path = document.getElementById(`${id}p`);

    var props = el.getBBox();
    var pathLength = path.getTotalLength();
    var c1 = getStartColor(el);
    var c2 = getFinalColor(el);
    return { id, el, path, props, pathLength, c1, c2 };
  });

  $.fn.roundSlider.prototype._handleDragDistance = 90;
  $(".control")
    .roundSlider({
      radius: 138,
      width: 50,
      startAngle: 90,
      endAngle: 89,
      min: 0,
      max: 1000,
      editableTooltip: false
    })
    .on("drag change", function(event) {
      var translateRatio = (event.value < 500 ? event.value : 500) / 500;
      var colorRatio = (event.value > 500 ? event.value - 500 : 0) / 500;

      figures.forEach(function(figure) {
        var position = figure.pathLength * translateRatio;
        var point = figure.path.getPointAtLength(position);
        var deltaX = point.x - figure.props.x;
        var deltaY = point.y - figure.props.y;
        figure.el.setAttribute("transform", `translate(${deltaX} ${deltaY})`);
        figure.el.style.stroke = transformColor(
          figure.c1,
          figure.c2,
          colorRatio
        );
      });
    });

  //-------------------------------------------------------------------
  // Helpers
  function getStartColor(el) {
    if (/cyan/.test(el.className.baseVal)) return "6aedfc";
    if (/purple/.test(el.className.baseVal)) return "c80cff";
    if (/blue/.test(el.className.baseVal)) return "6f78f0";
  }

  function getFinalColor(el) {
    if (/circle/.test(el.className.baseVal)) return "6f78f0";
    if (/triangle/.test(el.className.baseVal)) return "6aedfc";
    if (/square/.test(el.className.baseVal)) return "c80cff";
  }

  function transformColor(c1, c2, ratio) {
    var r = Math.ceil(
      parseInt(c2.substring(0, 2), 16) * ratio +
        parseInt(c1.substring(0, 2), 16) * (1 - ratio)
    );
    var g = Math.ceil(
      parseInt(c2.substring(2, 4), 16) * ratio +
        parseInt(c1.substring(2, 4), 16) * (1 - ratio)
    );
    var b = Math.ceil(
      parseInt(c2.substring(4, 6), 16) * ratio +
        parseInt(c1.substring(4, 6), 16) * (1 - ratio)
    );
    return toHex(r) + toHex(g) + toHex(b);
  }

  function toHex(x) {
    x = x.toString(16);
    return x.length === 1 ? `0${x}` : x;
  }
}
