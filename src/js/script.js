function initStatistic() {
  var figures = [
    'sp1', 'sp2', 'sp3',
    'sb1', 'sb2', 'sb3',
    'sc1', 'sc2', 'sc3',
    'tp1', 'tp2', 'tp3',
    'tc1', 'tc2', 'tc3',
    'tb1', 'tb2', 'tb3',
    'cb1', 'cb2', 'cb3',
    'cp1', 'cp2', 'cp3',
    'cc1', 'cc2', 'cc3',
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
  $('.control').roundSlider({
    radius: 138,
    width: 50,
    startAngle: 90,
    endAngle: 89,
    min: 0,
    max: 1000,
    editableTooltip: false
  }).on('drag change', function(event) {
    var translateRatio = (event.value < 500 ? event.value : 500) / 500;
    var colorRatio = (event.value > 500 ? event.value - 500 : 0) / 500;

    figures.forEach(function(figure) {
      var position = figure.pathLength * translateRatio;
      var point = figure.path.getPointAtLength(position);
      var deltaX = point.x - figure.props.x;
      var deltaY = point.y - figure.props.y;
      figure.el.setAttribute('transform', `translate(${deltaX} ${deltaY})`);
      figure.el.style.stroke = transformColor(figure.c1, figure.c2, colorRatio);
    });
  });

  //-------------------------------------------------------------------
  // Helpers
  function getStartColor(el) {
    if (/cyan/.test(el.className.baseVal)) return '6aedfc';
    if (/purple/.test(el.className.baseVal)) return 'c80cff';
    if (/blue/.test(el.className.baseVal)) return '6f78f0';
  }

  function getFinalColor(el) {
    if (/circle/.test(el.className.baseVal)) return '6f78f0';
    if (/triangle/.test(el.className.baseVal)) return '6aedfc';
    if (/square/.test(el.className.baseVal)) return 'c80cff';
  }

  function transformColor(c1, c2, ratio) {
    var r = Math.ceil(parseInt(c2.substring(0, 2), 16) * ratio + parseInt(c1.substring(0, 2), 16) * (1 - ratio));
    var g = Math.ceil(parseInt(c2.substring(2, 4), 16) * ratio + parseInt(c1.substring(2, 4), 16) * (1 - ratio));
    var b = Math.ceil(parseInt(c2.substring(4, 6), 16) * ratio + parseInt(c1.substring(4, 6), 16) * (1 - ratio));
    return toHex(r) + toHex(g) + toHex(b);
  }

  function toHex(x) {
    x = x.toString(16);
    return x.length === 1 ? `0${x}` : x;
  }

}


function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiemFwLWl0LXVwIiwiYSI6ImNrMHMxcXV3bDA3aGIzZG50ZmtzOTYyaWEifQ.884aDnhay46wwfV8yih8GA';

  //-------------------------------------------------------------------
  // Data

  const mapProps = {
    center: [30.524626, 50.449840],
    zoom: 15,
    minZoom: 15,
    maxZoom: 17,
    pitch: 60,
    bearing: -17.6,
    antialias: true,
    /*dragPan: false,*/
    scrollZoom: false
  };

  const markers = [
    {
      // St. Sophia
      center: [50.45278, 30.51444],
      radius: 0.08,
      color: 'blue',
      icon: 'triangle'
    },
    {
      // St. Michael
      center: [50.455801, 30.523079],
      radius: 0.1,
      color: 'blue',
      icon: 'square'
    },
    {
      // Independence Sq
      center: [50.450962, 30.522612],
      radius: 0.1,
      color: 'purple',
      icon: 'circle'
    },
    {
      // Golden Gate
      center: [50.448757, 30.513272],
      radius: 0.06,
      color: 'orange',
      icon: 'circle'
    },
    {
      // Ivan Franko Theatre
      center: [50.445616, 30.528215],
      radius: 0.06,
      color: 'blue',
      icon: 'triangle'
    },
    {
      // Lesia Ukrainka Theatre
      center: [50.444695, 30.518994],
      radius: 0.05,
      color: 'blue',
      icon: 'square'
    },
    {
      // People's Friendship Arch
      center: [50.454443, 30.529953],
      radius: 0.05,
      color: 'orange',
      icon: 'circle'
    },
    {
      // Dynamo Stadium
      center: [50.450436, 30.535045],
      radius: 0.09,
      color: 'purple',
      icon: 'triangle'
    },
    {
      // School 117
      center: [50.445296, 30.523866],
      radius: 0.05,
      color: 'orange',
      icon: 'square'
    },
    {
      // National Museum of Natural Sciences
      center: [50.445467, 30.514450],
      radius: 0.05,
      color: 'purple',
      icon: 'square'
    },
    {
      // Zhovtnevy Palace
      center: [50.449919, 30.527904],
      radius: 0.06,
      color: 'orange',
      icon: 'square'
    },
    {
      // Square on Shovkovychna St
      center: [50.445549, 30.533072],
      radius: 0.06,
      color: 'orange',
      icon: 'circle'
    },
    {
      // Entrance to Trukhaniv island
      center: [50.458542, 30.536049],
      radius: 0.04,
      color: 'blue',
      icon: 'square'
    },
    {
      // Lvivska Sq
      center: [50.454750, 30.506273],
      radius: 0.06,
      color: 'purple',
      icon: 'triangle'
    },
    {
      // Khreshchaty Yar
      center: [50.447848, 30.519766],
      radius: 0.06,
      color: 'orange',
      icon: 'triangle'
    },
    {
      // National Museum of the History of Ukraine
      center: [50.458325, 30.516179],
      radius: 0.07,
      color: 'orange',
      icon: 'square'
    }
  ];

  //-------------------------------------------------------------------
  // Init

  window.map = new mapboxgl.Map({
    ...mapProps,
    container: 'map',
    style: 'mapbox://styles/zap-it-up/ck0yx20de0shj1cqqi74sm109'
  });

  map.on('load', () => {
    map.setPaintProperty('building', 'fill-extrusion-opacity', 0);
    map.setPaintProperty('road-path', 'line-width', 4);
    map.setPaintProperty('road-path', 'line-dasharray', [100, 0]);

    map.setPaintProperty('building', 'fill-extrusion-opacity-transition', { duration: 1000 });
    map.setPaintProperty('road-path', 'line-color-transition', { duration: 1000 });
    map.setPaintProperty('road-pedestrian', 'line-color-transition', { duration: 1000 });
    map.setPaintProperty('road-primary', 'line-color-transition', { duration: 1000 });
    map.setPaintProperty('road-street', 'line-color-transition', { duration: 1000 });


    map.addLayer({
      "id": "polygon",
      "type": "fill",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": markers.map(({ center, radius, color }) =>
            generateFlatCircle(center, radius, color))
        }
      },
      "layout": {},
      "paint": {
        "fill-color": [
          'match',
          ['get', 'color'],
          'orange', '#ffad14',
          'blue', '#00e5ff',
          'purple', '#c000fa',
          '#ccc'
        ],
        "fill-opacity": 0,
        "fill-opacity-transition": { duration: 1000 }, 
      }
    }, 'building');

    map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": markers.map(({ center, color, icon }) =>
            generateMarker(center, color, icon))
        }
      },
      "layout": {
        "icon-image": "{icon}",
        "icon-anchor": 'bottom',
        "icon-size": [
          "interpolate", ["linear"], ["zoom"],
          15, 0.6,
          15.5, 0.7,
          16, 0.8,
          16.5, 0.9,
          17, 1,
        ]
      },
      "paint": {
        "icon-translate": [0, -12],
        "icon-translate-anchor": "viewport",
        "icon-opacity": 0,
        "icon-opacity-transition": {duration: 1000}
      }
    });

    const layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        labelLayerId = layers[i].id;
        break;
      }
    }

    map.addLayer({
      id: 'building-color',
      source: 'composite',
      'source-layer': 'building',
      type: 'fill-extrusion',
      paint: {
        'fill-extrusion-base': ['get', 'min_height'],
        'fill-extrusion-color': ['case', ['>', ['get', 'height'], 25], '#ffa424', ['<', ['get', 'height'], 3.5], 'hsl(273, 100%, 37%)', 'hsl(241, 5%, 12%)'],
        'fill-extrusion-height': ['get', 'height'],
        'fill-extrusion-opacity': 1,
        'fill-extrusion-opacity-transition': { duration: 1000 },
      }
    }, labelLayerId);
  });

  //-------------------------------------------------------------------
  // Helpers

  function generateFlatCircle(center, radius, color) {
    const points = [];
    const polygons = 64;
    const lat = center[0];
    const long = center[1];
    const distanceX = radius / (111.320 * Math.cos(lat * Math.PI / 180));
    const distanceY = radius / 110.574;

    for (let i = 0; i < polygons; i++) {
        const theta = (i / polygons) * (2 * Math.PI);
        const x = distanceX * Math.cos(theta);
        const y = distanceY * Math.sin(theta);
        points.push([long + x, lat + y]);
    }
    points.push(points[0]);

    return {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [points]
      },
      "properties": { color }
    };
  }

  function generateMarker(center, color, icon) {
    return {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": center.reverse()
      },
      "properties": {
        "icon": `${color}-${icon}`
      }
    };
  }
}