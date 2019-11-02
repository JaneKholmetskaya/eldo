function initStatisticMobile() {
  const figures = [
    "msp1",
    "msp2",
    "msp3",
    "msb1",
    "msb2",
    "msb3",
    "msc1",
    "msc2",
    "msc3",
    "mtp1",
    "mtp2",
    "mtp3",
    "mtc1",
    "mtc2",
    "mtc3",
    "mtb1",
    "mtb2",
    "mtb3",
    "mcb1",
    "mcb2",
    "mcb3",
    "mcp1",
    "mcp2",
    "mcp3",
    "mcc1",
    "mcc2",
    "mcc3"
  ].map(id => {
    const el = document.getElementById(id);
    console.log(id);
    const path = document.getElementById(`${id}p`);

    const props = el.getBBox();
    const pathLength = path.getTotalLength();
    const c1 = getStartColor(el);
    const c2 = getFinalColor(el);
    return { id, el, path, props, pathLength, c1, c2 };
  });

  $.fn.roundSlider.prototype._handleDragDistance = 90;
  $(".control")
    .roundSlider({
      radius: 67,
      width: 26,
      startAngle: 90,
      endAngle: 89,
      min: 0,
      max: 1000,
      editableTooltip: false
    })
    .on("drag change", event => {
      const translateRatio = (event.value < 500 ? event.value : 500) / 500;
      const colorRatio = (event.value > 500 ? event.value - 500 : 0) / 500;

      figures.forEach(figure => {
        const position = figure.pathLength * translateRatio;
        const point = figure.path.getPointAtLength(position);
        const deltaX = point.x - figure.props.x;
        const deltaY = point.y - figure.props.y;
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
    if (/purple/.test(el.className.baseVal)) return "c645ec";
    if (/blue/.test(el.className.baseVal)) return "6f78f0";
  }

  function getFinalColor(el) {
    if (/circle/.test(el.className.baseVal)) return "c645ec";
    if (/triangle/.test(el.className.baseVal)) return "6aedfc";
    if (/square/.test(el.className.baseVal)) return "6f78f0";
  }

  function transformColor(c1, c2, ratio) {
    const r = Math.ceil(
      parseInt(c2.substring(0, 2), 16) * ratio +
        parseInt(c1.substring(0, 2), 16) * (1 - ratio)
    );
    const g = Math.ceil(
      parseInt(c2.substring(2, 4), 16) * ratio +
        parseInt(c1.substring(2, 4), 16) * (1 - ratio)
    );
    const b = Math.ceil(
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
