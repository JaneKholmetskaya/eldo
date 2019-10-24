function initFullpage() {

    var sections = [];

    return new Promise(function(resolve, reject) {
        var a = $('#fullpage').fullpage({
            anchors: [
                "headerPage",
                "how",
                "analitic",
                "mapPage",
                "groups",       
                "use",
                "contacts"
              ],
              controlArrows: false,
              resetSliders: true,

 
            afterLoad: function(fromScreen, toScreen) {
                // console.log(fromScreen, toScreen)
                switch (toScreen.index) {
                    case 1:
                        if (fromScreen.index == 0) {
                            $('.info-section .info-section-line.section-1 object', toScreen.item).ready(function() {
                                setTimeout(function() {
                                    var obj = $('.info-section .info-section-line.section-1 object', toScreen.item)[0];
                                    var animates = obj.contentDocument.getElementsByTagName('animate');
                                    //var animates = $('.info-section .info-section-line.section-1 svg animate', toScreen.item);
                                    animates[0].beginElement();
                                    setTimeout(function() {
                                        var gg = obj.contentDocument.getElementsByTagName('g');
                                        gg[0].setAttribute('stroke-dashoffset', 0);
                                        gg[3].setAttribute('stroke-dashoffset', 0);
                                    }, 100);
                                }, 100);
                            });

                            $('.info-section .text-block.section-1 .title', toScreen.item).fadeIn(1000);
                            setTimeout(function() {
                                $('.info-section .text-block.section-1 p', toScreen.item).fadeIn(1000);
                            }, 500);

                            break;
                        }
                        break;

                    case 2:
                        if (fromScreen.index == 1) {
                            $('.analitic-section .icons-wrapper.analitic-section-1', toScreen.item).fadeIn(1000);
                            $('.analitic-section .text-block.analitic-section-1 .title', toScreen.item).fadeIn(1000);
                            setTimeout(function() {
                                $('.analitic-section .text-block.analitic-section-1 p', toScreen.item).fadeIn(1000);
                            }, 500);

                            break;
                        }
                        break;
                }
                if (!$(fromScreen.item).hasClass('active')) {
                    //sections[fromScreen.index] = $('.fp-tableCell', fromScreen.item)[0].innerHTML;
                    //$('.fp-tableCell', fromScreen.item)[0].innerHTML = '';
                    $('content', fromScreen.item).hide();
                }
                return true;
            },
            onLeave: function(fromScreen, toScreen, dir) {
                //$('.fp-tableCell', toScreen.item)[0].innerHTML = sections[toScreen.index];
                console.log('ttt', fromScreen, toScreen)
                $('content', toScreen.item).show();
                // console.log(fromScreen);
                switch (fromScreen.index) {
                   
                    case 0:
                        if (toScreen.index == 1) {
                            $('.info-section > div', toScreen.item).hide();
                            $('.info-section', toScreen.item).removeClass('section-2 section-3');
                            $('.info-section', toScreen.item).addClass('section-1');
                            $('.info-section .section-1', toScreen.item).show();
                            $('.info-section .text-block.section-1 .title', toScreen.item).hide();
                            $('.info-section .text-block.section-1 p', toScreen.item).hide();
                            $('.info-section .background-section.section-1', toScreen.item).show();
                            $('.info-section .info-section-line.section-1 object', toScreen.item).ready(function() {
                                setTimeout(function() {
                                    var obj = $('.info-section .info-section-line.section-1 object', toScreen.item)[0];
                                    var gg = obj.contentDocument.getElementsByTagName('g');
                                    //var gg = $('.info-section .info-section-line.section-1 svg g', toScreen.item);
                                    console.log('a', $('.info-section .info-section-line.section-1', toScreen.item), toScreen.item);
                                    gg[0].setAttribute('stroke-dashoffset', gg[0].getAttribute('stroke-dasharray'));
                                    gg[3].setAttribute('stroke-dashoffset', gg[3].getAttribute('stroke-dasharray'));
                                }, 100);
                            });
                            break;
                        }
                        break;

                    case 1:
                        if (toScreen.index == 0) {
                            var section = $('.info-section', fromScreen.item);
                            if (section.hasClass('section-1')) return;
                            if (section.hasClass('section-2')) {
                                $('.info-section .text-block.section-2', fromScreen.item).fadeOut(1000, function() {
                                    $('.info-section .text-block.section-1', fromScreen.item).fadeIn(1000);
                                    $('.info-section .background-section.section-2', fromScreen.item).fadeOut(500, function() {
                                        $('.info-section .background-section.section-1', fromScreen.item).fadeIn(500);
                                        $('.info-section .info-section-line.section-2', fromScreen.item).fadeOut(500, function() {
                                            $('.info-section .info-section-line.section-1 object', fromScreen.item).ready(function() {
                                                setTimeout(function() {
                                                    var obj = $('.info-section .info-section-line.section-1 object', fromScreen.item)[0];
                                                    var gg = obj.contentDocument.getElementsByTagName('g');
                                                    //var gg = $('.info-section .info-section-line.section-1 svg g', fromScreen.item);
                                                    gg[0].setAttribute('stroke-dashoffset', gg[0].getAttribute('stroke-dasharray'));
                                                    gg[3].setAttribute('stroke-dashoffset', gg[3].getAttribute('stroke-dasharray'));
                                                    var animates = obj.contentDocument.getElementsByTagName('animate');
                                                    //var animates = $('.info-section .info-section-line.section-1 svg animate', fromScreen.item);
                                                    animates[1].beginElement();
                                                    setTimeout(function() {
                                                        //var g = obj.contentDocument.getElementsByTagName('g');
                                                        gg[0].setAttribute('stroke-dashoffset', 0);
                                                        gg[3].setAttribute('stroke-dashoffset', 0);
                                                    }, 100);
                                                }, 100);
                                            });
                                            $('.info-section .info-section-line.section-1', fromScreen.item).show();
                                            $('.info-section', fromScreen.item).removeClass('section-2 section-3');
                                            $('.info-section', fromScreen.item).addClass('section-1');
                                        });
                                    });
                                });
                                return false;
                            }
                            if (section.hasClass('section-3')) {
                                $('.info-section .text-block.section-3', fromScreen.item).fadeOut(1000, function() {
                                    $('.info-section .text-block.section-2', fromScreen.item).fadeIn(1000);
                                    $('.info-section .background-section.section-3', fromScreen.item).fadeOut(500, function() {
                                        $('.info-section .background-section.section-2', fromScreen.item).fadeIn(500);
                                        $('.info-section .info-section-line.section-3', fromScreen.item).fadeOut(500, function() {
                                            $('.info-section .info-section-line.section-2 object', fromScreen.item).ready(function() {
                                                setTimeout(function() {
                                                    var obj = $('.info-section .info-section-line.section-2 object', fromScreen.item)[0];
                                                    var gg = obj.contentDocument.getElementsByTagName('g');
                                                    //var gg = $('.info-section .info-section-line.section-2 svg g', fromScreen.item);
                                                    gg[0].setAttribute('stroke-dashoffset', gg[0].getAttribute('stroke-dasharray'));
                                                    gg[3].setAttribute('stroke-dashoffset', gg[3].getAttribute('stroke-dasharray'));
                                                    var animates = obj.contentDocument.getElementsByTagName('animate');
                                                    //var animates = $('.info-section .info-section-line.section-2 svg animate', fromScreen.item);
                                                    animates[1].beginElement();
                                                    setTimeout(function() {
                                                        //var g = obj.contentDocument.getElementsByTagName('g');
                                                        gg[0].setAttribute('stroke-dashoffset', 0);
                                                        gg[3].setAttribute('stroke-dashoffset', 0);
                                                    }, 100);
                                                }, 100);
                                            });
                                            $('.info-section .info-section-line.section-2', fromScreen.item).show();
                                            $('.info-section', fromScreen.item).removeClass('section-1 section-3');
                                            $('.info-section', fromScreen.item).addClass('section-2');
                                        });
                                    });
                                });
                                return false;
                            }
                        }
                        if (toScreen.index == 2) {
                            var section = $('.info-section', fromScreen.item);
                            if (section.hasClass('section-1')) {
                                $('.info-section .text-block.section-1', fromScreen.item).fadeOut(1000, function() {
                                    $('.info-section .text-block.section-2', fromScreen.item).fadeIn(1000);
                                    $('.info-section .background-section.section-1', fromScreen.item).fadeOut(500, function() {
                                        $('.info-section .background-section.section-2', fromScreen.item).fadeIn(500);
                                        $('.info-section .info-section-line.section-1', fromScreen.item).fadeOut(500, function() {
                                            $('.info-section .info-section-line.section-2 object', fromScreen.item).ready(function() {
                                                setTimeout(function() {
                                                    var obj = $('.info-section .info-section-line.section-2 object', fromScreen.item)[0];
                                                    var gg = obj.contentDocument.getElementsByTagName('g');
                                                    //var gg = $('.info-section .info-section-line.section-2 svg g', fromScreen.item);
                                                    gg[0].setAttribute('stroke-dashoffset', gg[0].getAttribute('stroke-dasharray'));
                                                    gg[3].setAttribute('stroke-dashoffset', gg[3].getAttribute('stroke-dasharray'));
                                                    var animates = obj.contentDocument.getElementsByTagName('animate');
                                                    //var animates = $('.info-section .info-section-line.section-2 svg animate', fromScreen.item);
                                                    animates[0].beginElement();
                                                    setTimeout(function() {
                                                        //var g = obj.contentDocument.getElementsByTagName('g');
                                                        gg[0].setAttribute('stroke-dashoffset', 0);
                                                        gg[3].setAttribute('stroke-dashoffset', 0);
                                                    }, 100);
                                                }, 100);
                                            });
                                            $('.info-section .info-section-line.section-2', fromScreen.item).show();
                                            $('.info-section', fromScreen.item).removeClass('section-1 section-3');
                                            $('.info-section', fromScreen.item).addClass('section-2');
                                        });
                                    });
                                });
                                return false;
                            }
                            if (section.hasClass('section-2')) {
                                $('.info-section .text-block.section-2', fromScreen.item).fadeOut(1000, function() {
                                    $('.info-section .text-block.section-3', fromScreen.item).fadeIn(1000);
                                    $('.info-section .background-section.section-2', fromScreen.item).fadeOut(500, function() {
                                        $('.info-section .background-section.section-3', fromScreen.item).fadeIn(500);
                                        $('.info-section .info-section-line.section-2', fromScreen.item).fadeOut(500, function() {
                                            $('.info-section .info-section-line.section-3 object', fromScreen.item).ready(function() {
                                                setTimeout(function() {
                                                    var obj = $('.info-section .info-section-line.section-3 object', fromScreen.item)[0];
                                                    var gg = obj.contentDocument.getElementsByTagName('g');
                                                    //var gg = $('.info-section .info-section-line.section-3 svg g', fromScreen.item);
                                                    gg[0].setAttribute('stroke-dashoffset', gg[0].getAttribute('stroke-dasharray'));
                                                    gg[3].setAttribute('stroke-dashoffset', gg[3].getAttribute('stroke-dasharray'));
                                                    var animates = obj.contentDocument.getElementsByTagName('animate');
                                                    //var animates = $('.info-section .info-section-line.section-3 svg animate', fromScreen.item);
                                                    animates[0].beginElement();
                                                    setTimeout(function() {
                                                        //var g = obj.contentDocument.getElementsByTagName('g');
                                                        gg[0].setAttribute('stroke-dashoffset', 0);
                                                        gg[3].setAttribute('stroke-dashoffset', 0);
                                                    }, 100);
                                                }, 100);
                                            });
                                            $('.info-section .info-section-line.section-3', fromScreen.item).show();
                                            $('.info-section', fromScreen.item).removeClass('section-1 section-2');
                                            $('.info-section', fromScreen.item).addClass('section-3');
                                        });
                                    });
                                });
                                return false;
                            }
                            if (section.hasClass('section-3')) {
                                $('.analitic-section > div', toScreen.item).hide();
                                $('.analitic-section', toScreen.item).removeClass('analitic-section-2 analitic-section-3 analitic-section-4');
                                $('.analitic-section', toScreen.item).addClass('analitic-section-1');
                                $('.analitic-section .analitic-section-1', toScreen.item).show();
                                $('.analitic-section .text-block.analitic-section-1 .title', toScreen.item).hide();
                                $('.analitic-section .text-block.analitic-section-1 p', toScreen.item).hide();
                                $('.analitic-section .icons-wrapper.analitic-section-1', toScreen.item).hide();
                                $('.analitic-section .icons-wrapper.analitic-section-1 object', toScreen.item).map(function(i, obj) {
                                    if (obj.contentDocument) {
                                        var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                        animate && animate.beginElement();
                                    }
                                });
                                break;
                            }
                        }

                    case 2:
                        if (toScreen.index == 1) {
                            var section = $('.analitic-section', fromScreen.item);
                            if (section.hasClass('analitic-section-1')) return true;
                            if (section.hasClass('analitic-section-2')) {
                                $('.slider-arrows svg #to1', fromScreen.item)[0].beginElement();
                                $('.analitic-section .text-block.analitic-section-2', fromScreen.item).fadeOut(1000, function() {
                                    $('.analitic-section .text-block.analitic-section-1', fromScreen.item).fadeIn(1000);
                                    $('.analitic-section .icons-wrapper.analitic-section-2', fromScreen.item).fadeOut(500, function() {
                                        $('.analitic-section .icons-wrapper.analitic-section-1', fromScreen.item).fadeIn(500);
                                        $('.analitic-section', fromScreen.item).removeClass('analitic-section-2 analitic-section-3 analitic-section-4');
                                        $('.analitic-section', fromScreen.item).addClass('analitic-section-1');
                                        $('.analitic-section .icons-wrapper.analitic-section-2 object', toScreen.item).map(function(i, obj) {
                                            var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                            animate && animate.endElement();
                                        });
                                    });
                                });
                                $('.analitic-section .icons-wrapper.analitic-section-1 object', toScreen.item).map(function(i, obj) {
                                    var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                    animate && animate.beginElement();
                                });
                                return false;
                            }
                            if (section.hasClass('analitic-section-3')) {
                                $('.slider-arrows svg #to2', fromScreen.item)[0].beginElement();
                                $('.analitic-section .text-block.analitic-section-3', fromScreen.item).fadeOut(1000, function() {
                                    $('.analitic-section .text-block.analitic-section-2', fromScreen.item).fadeIn(1000);
                                    $('.analitic-section .icons-wrapper.analitic-section-3', fromScreen.item).fadeOut(500, function() {
                                        $('.analitic-section .icons-wrapper.analitic-section-2', fromScreen.item).fadeIn(500);
                                        $('.analitic-section', fromScreen.item).removeClass('analitic-section-1 analitic-section-3 analitic-section-4');
                                        $('.analitic-section', fromScreen.item).addClass('analitic-section-2');
                                        $('.analitic-section .icons-wrapper.analitic-section-3 object', toScreen.item).map(function(i, obj) {
                                            var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                            animate && animate.endElement();
                                        });
                                    });
                                });
                                $('.analitic-section .icons-wrapper.analitic-section-2 object', toScreen.item).map(function(i, obj) {
                                    var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                    animate && animate.beginElement();
                                });
                                return false;
                            }
                            if (section.hasClass('analitic-section-4')) {
                                $('.slider-arrows svg #to3', fromScreen.item)[0].beginElement();
                                $('.analitic-section .text-block.analitic-section-4', fromScreen.item).fadeOut(1000, function() {
                                    $('.analitic-section .text-block.analitic-section-3', fromScreen.item).fadeIn(1000);
                                    $('.analitic-section .icons-wrapper.analitic-section-4', fromScreen.item).fadeOut(500, function() {
                                        $('.analitic-section .icons-wrapper.analitic-section-3', fromScreen.item).fadeIn(500);
                                        $('.analitic-section', fromScreen.item).removeClass('analitic-section-1 analitic-section-2 analitic-section-4');
                                        $('.analitic-section', fromScreen.item).addClass('analitic-section-3');
                                        $('.analitic-section .icons-wrapper.analitic-section-4 object', toScreen.item).map(function(i, obj) {
                                            var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                            animate && animate.endElement();
                                        });
                                    });
                                });
                                $('.analitic-section .icons-wrapper.analitic-section-3 object', toScreen.item).map(function(i, obj) {
                                    var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                    animate && animate.beginElement();
                                });
                                return false;
                            }
                        }
                        if (toScreen.index == 3) {
                            var section = $('.analitic-section', fromScreen.item);
                            if (section.hasClass('analitic-section-1')) {
                                $('.slider-arrows svg #to2', fromScreen.item)[0].beginElement();
                                $('.analitic-section .text-block.analitic-section-1', fromScreen.item).fadeOut(1000, function() {
                                    $('.analitic-section .text-block.analitic-section-2', fromScreen.item).fadeIn(1000);
                                    $('.analitic-section .icons-wrapper.analitic-section-1', fromScreen.item).fadeOut(500, function() {
                                        $('.analitic-section .icons-wrapper.analitic-section-2', fromScreen.item).fadeIn(500);
                                        $('.analitic-section', fromScreen.item).removeClass('analitic-section-1 analitic-section-3 analitic-section-4');
                                        $('.analitic-section', fromScreen.item).addClass('analitic-section-2');
                                        $('.analitic-section .icons-wrapper.analitic-section-1 object', toScreen.item).map(function(i, obj) {
                                            var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                            animate && animate.endElement();
                                        });
                                    });
                                });
                                $('.analitic-section .icons-wrapper.analitic-section-2 object', toScreen.item).map(function(i, obj) {
                                    var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                    animate && animate.beginElement();
                                });
                                return false;
                            }
                            if (section.hasClass('analitic-section-2')) {
                                $('.slider-arrows svg #to3', fromScreen.item)[0].beginElement();
                                $('.analitic-section .text-block.analitic-section-2', fromScreen.item).fadeOut(1000, function() {
                                    $('.analitic-section .text-block.analitic-section-3', fromScreen.item).fadeIn(1000);
                                    $('.analitic-section .icons-wrapper.analitic-section-2', fromScreen.item).fadeOut(500, function() {
                                        $('.analitic-section .icons-wrapper.analitic-section-3', fromScreen.item).fadeIn(500);
                                        $('.analitic-section', fromScreen.item).removeClass('analitic-section-1 analitic-section-2 analitic-section-4');
                                        $('.analitic-section', fromScreen.item).addClass('analitic-section-3');
                                        $('.analitic-section .icons-wrapper.analitic-section-2 object', toScreen.item).map(function(i, obj) {
                                            var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                            animate && animate.endElement();
                                        });
                                    });
                                });
                                $('.analitic-section .icons-wrapper.analitic-section-3 object', toScreen.item).map(function(i, obj) {
                                    var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                    animate && animate.beginElement();
                                });
                                return false;
                            }
                            if (section.hasClass('analitic-section-3')) {
                                $('.slider-arrows svg #to4', fromScreen.item)[0].beginElement();
                                $('.analitic-section .text-block.analitic-section-3', fromScreen.item).fadeOut(1000, function() {
                                    $('.analitic-section .text-block.analitic-section-4', fromScreen.item).fadeIn(1000);
                                    $('.analitic-section .icons-wrapper.analitic-section-3', fromScreen.item).fadeOut(500, function() {
                                        $('.analitic-section .icons-wrapper.analitic-section-4', fromScreen.item).fadeIn(500);
                                        $('.analitic-section', fromScreen.item).removeClass('analitic-section-1 analitic-section-2 analitic-section-3');
                                        $('.analitic-section', fromScreen.item).addClass('analitic-section-4');
                                        $('.analitic-section .icons-wrapper.analitic-section-3 object', toScreen.item).map(function(i, obj) {
                                            var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                            animate && animate.endElement();
                                        });
                                    });
                                });
                                $('.analitic-section .icons-wrapper.analitic-section-4 object', toScreen.item).map(function(i, obj) {
                                    var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                    animate && animate.beginElement();
                                });
                                return false;
                            }
                            if (section.hasClass('analitic-section-4')) {
                                map.easeTo({
                                    center: [30.524626, 50.449840]
                                });

                                $('.map-section', toScreen.item).removeClass('map-section-2 map-section-3');
                                $('.map-section', toScreen.item).addClass('map-section-1');
                                $('.map-section .text-block.map-section-2', toScreen.item).hide();
                                $('.map-section .text-block.map-section-3', toScreen.item).hide();
                                break;
                            }
                        }
                    
                    case 3:
                        if (toScreen.index == 2) {
                            var section = $('.map-section', fromScreen.item);
                            if (section.hasClass('map-section-1')) return true;
                            if (section.hasClass('map-section-2')) {
                                map.easeTo({
                                    center: [30.524626, 50.449840]
                                });

                                map.setPaintProperty('road-path', 'line-color', 'hsl(0, 0%, 28%)');
                                map.setPaintProperty('road-pedestrian', 'line-color', 'hsl(0, 0%, 36%)');
                                map.setPaintProperty('road-primary', 'line-color', '#171717');
                                map.setPaintProperty('road-street', 'line-color', '#171717');

                                setTimeout(function() {
                                    map.setPaintProperty('building-color', 'fill-extrusion-opacity', 1);
                                    map.setPaintProperty('building', 'fill-extrusion-opacity', 0);
                                }, 500);

                                $('.map-section .text-block.map-section-2', fromScreen.item).fadeOut(1000, function() {
                                    $('.map-section .text-block.map-section-1', fromScreen.item).fadeIn(1000);
                                });

                                setTimeout(function() {
                                    $('.map-section', fromScreen.item).removeClass('map-section-2 map-section-3');
                                    $('.map-section', fromScreen.item).addClass('map-section-1');
                                }, 1000);
                                return false;
                            }
                            if (section.hasClass('map-section-3')) {
                                map.easeTo({
                                    center: [30.524626, 50.449840]
                                });

                                map.setPaintProperty('polygon', 'fill-opacity', 0);
                                map.setPaintProperty('points', 'icon-opacity', 0);

                                setTimeout(function() {
                                    map.setPaintProperty('road-path', 'line-color', '#c000fa');
                                    map.setPaintProperty('road-pedestrian', 'line-color', 'hsl(309, 100%, 41%)');
                                    map.setPaintProperty('road-primary', 'line-color', '#ffad14');
                                    map.setPaintProperty('road-street', 'line-color', 'hsl(186, 100%, 50%)');
                                }, 500);

                                $('.map-section .text-block.map-section-3', fromScreen.item).fadeOut(1000, function() {
                                    $('.map-section .text-block.map-section-2', fromScreen.item).fadeIn(1000);
                                });

                                setTimeout(function() {
                                    $('.map-section', fromScreen.item).removeClass('map-section-1 map-section-3');
                                    $('.map-section', fromScreen.item).addClass('map-section-2');
                                }, 1000);
                                return false;
                            }
                        }
                        if (toScreen.index == 4) {
                            var section = $('.map-section', fromScreen.item);
                            if (section.hasClass('map-section-1')) {
                                map.easeTo({
                                    center: [30.524626, 50.449840]
                                });

                                map.setPaintProperty('building-color', 'fill-extrusion-opacity', 0);
                                map.setPaintProperty('building', 'fill-extrusion-opacity', 1);

                                setTimeout(function() {
                                    map.setPaintProperty('road-path', 'line-color', '#c000fa');
                                    map.setPaintProperty('road-pedestrian', 'line-color', 'hsl(309, 100%, 41%)');
                                    map.setPaintProperty('road-primary', 'line-color', '#ffad14');
                                    map.setPaintProperty('road-street', 'line-color', 'hsl(186, 100%, 50%)');
                                }, 500);

                                $('.map-section .text-block.map-section-1', fromScreen.item).fadeOut(1000, function() {
                                    $('.map-section .text-block.map-section-2', fromScreen.item).fadeIn(1000);
                                });

                                setTimeout(function() {
                                    $('.map-section', fromScreen.item).removeClass('map-section-1 map-section-3');
                                    $('.map-section', fromScreen.item).addClass('map-section-2');
                                }, 1000);
                                return false;
                            }
                            if (section.hasClass('map-section-2')) {
                                map.easeTo({
                                    center: [30.524626, 50.449840]
                                });

                                map.setPaintProperty('road-path', 'line-color', 'hsl(0, 0%, 28%)');
                                map.setPaintProperty('road-pedestrian', 'line-color', 'hsl(0, 0%, 36%)');
                                map.setPaintProperty('road-primary', 'line-color', '#171717');
                                map.setPaintProperty('road-street', 'line-color', '#171717');

                                setTimeout(function() {
                                    map.setPaintProperty('polygon', 'fill-opacity', 0.8);
                                    map.setPaintProperty('points', 'icon-opacity', 1);
                                }, 500);

                                $('.map-section .text-block.map-section-2', fromScreen.item).fadeOut(1000, function() {
                                    $('.map-section .text-block.map-section-3', fromScreen.item).fadeIn(1000);
                                });

                                setTimeout(function() {
                                    $('.map-section', fromScreen.item).removeClass('map-section-1 map-section-2');
                                    $('.map-section', fromScreen.item).addClass('map-section-3');
                                }, 1000);
                                return false;
                            }
                            if (section.hasClass('map-section-3')) {
                                $('.figures-section', toScreen.item).removeClass('figures-section-2 figures-section-3');
                                $('.figures-section', toScreen.item).addClass('figures-section-1');
                                break;
                            }
                        }
                    case 4:
                        if (toScreen.index == 3) {
                            map.easeTo({
                                center: [30.524626, 50.449840]
                            });

                            $('.map-section .text-block.map-section-1', toScreen.item).hide();
                            $('.map-section .text-block.map-section-2', toScreen.item).hide();
                        }
                        if (toScreen.index == 5) {
                            $('.services-section .icon-box object', toScreen.item).map(function(i, obj) {
                                var animate = obj.contentDocument.getElementsByTagName('animate')[0];
                                animate && animate.beginElement();
                            });
                        }

                }

                return true;
            },
            afterRender: function() {
                $('#fullpage .section').map(function(i, section) {
                    //sections[i] = $('.fp-tableCell', section)[0].innerHTML;
                    //if (!$(section).hasClass('active')) {
                    //    $('.fp-tableCell', section)[0].innerHTML = '';
                    //}
                    $('content', section).hide();
                });
                resolve();
            },
  

        });

        $('.nextPage').click(function(e) {
            e.preventDefault()
            fullpage_api.moveSectionDown();
        });
        $('.prevPage').click(function(e) {
            e.preventDefault()
            fullpage_api.moveSectionUp();
        });
        
            $(".scrolled li a").click(function(e){
            //     $('#fullpage .section').map(function(i, section) {
  
            //         $('.content', section).hide();
            //     });
                var type = $(this).attr("href").replace('#', '');
                var secMap = {
                    how : '',
                    analitic: 'analitic-',
                    mapPage: 'map-'
                }
                console.log(type);
                fullpage_api.moveTo(type);
                $('[data-anchor="'+type+'"]').find('.content').removeClass(secMap[type]+'section-2, '+secMap[type]+'section-3, '+secMap[type]+'section-4').addClass(secMap[type]+'section-1');
                $('[data-anchor="'+type+'"]').find('.content').find('.'+secMap[type]+'section-2, .'+secMap[type]+'section-3, .'+secMap[type]+'section-4').hide();
                $('[data-anchor="'+type+'"]').find('.content').find('.'+secMap[type]+'section-1').show();

                })
                        
            // $(".scrolled li a").click(function(e){
            //     $('#fullpage .section').map(function(i, section) {
  
            //         $('.content', section).hide();
            //     });
              
            //     $('#fullpage .section').map(function(i, section) {
  
            //         $('.content', section).show();
            //     });
            //     if($(this).attr("href") == "#how"){
            //         console.log('click',$(this).attr("href"))
            //         // fullpage_api.moveTo("how", 1);
            //         $('[data-anchor="how"]').find('.content').removeClass('section-2, section-3').addClass('section-1');
            //         $('[data-anchor="how"]').find('.content').find('.section-2, .section-3').hide();
            //         $('[data-anchor="how"]').find('.content').find('.section-1').show();
            //     }else if($(this).attr("href") == "#analitic"){
            //         console.log('click',$(this).attr("href"))
            //         // fullpage_api.moveTo("analitic", 1);
            //         $('[data-anchor="analitic"]').find('.content').removeClass('analitic-section-2, analitic-section-3, analitic-section-4').addClass('analitic-section-1');
            //         $('[data-anchor="analitic"]').find('.content').find('.analitic-section-2, .analitic-section-3, .analitic-section-4').hide();
            //         $('[data-anchor="analitic"]').find('.content').find('.analitic-section-1').show();
            //     }else if($(this).attr("href") == "#mapPage"){
            //         console.log('click',$(this).attr("href"))
            //         // fullpage_api.moveTo("mapPage", 1);
            //     $('[data-anchor="mapPage"]').find('.content').removeClass('map-section-2, map-section-3').addClass('map-section-1');
            //     $('[data-anchor="mapPage"]').find('.content').find('.map-section-2, .map-section-3').hide();
            //     $('[data-anchor="mapPage"]').find('.content').find('.map-section-1').show();
            //     }
            
             

            

                    
            //     })


    });

}
