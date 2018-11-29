//"use strict";

// ! function() {
//     String.prototype.toSVG = function(t) {
//         var e = function(t, e) {
//                 if ("object" != typeof e) return !1;
//                 for (var r in t) {
//                     if (e.hasOwnProperty(r)) break;
//                     e[r] = t[r]
//                 }
//                 return e
//             }({ svgClass: "replaced-svg", onComplete: function() {} }, t),
//             r = function(t, e) {
//                 var r = new XMLHttpRequest;
//                 r.open("GET", t, !0), r.send(), r.onreadystatechange = function() { 4 == r.readyState && (200 != r.status ? console.log(r.status + ": " + r.statusText) : e.call(this, r.responseText)) }
//             };
//         Array.prototype.forEach.call(document.querySelectorAll(this), function(t) {
//             var i = t,
//                 n = i.getAttribute("id"),
//                 o = i.getAttribute("class"),
//                 s = i.getAttribute("src");
//             /\.(svg)$/i.test(s) ? r(s, function(t) {
//                 var r = document.createElement("html");
//                 r.innerHTML = "<body>" + t + "</body>";
//                 var s = r.getElementsByTagName("svg")[0];
//                 void 0 != n && null != n && s.setAttribute("id", n), void 0 !== o && s.setAttribute("class", o + " " + e.svgClass), s.removeAttribute("xmlns:a"), !s.getAttribute("viewBox") && s.getAttribute("height") && s.getAttribute("width") && s.getAttribute("viewBox", "0 0 " + s.getAttribute("height") + " " + s.getAttribute("width")), i.parentNode.replaceChild(s, i), "function" == typeof e.onComplete && e.onComplete.call(this, s)
//             }) : console.warn("image src='" + s + "' is not a SVG, item remained tag <img/> ")
//         })
//     }
// }();
// ".svg".toSVG({
//     svgClass: "replaced",
//     onComplete: function() {}
// });

$(document).ready(function() {
    var w = screen.width;
    var h = screen.height;
    var bw = window.innerWidth;
    var bh = window.innerHeight;

    //E-mail Ajax Send
    $("form").each(function() {
        var it = $(this);
        it.validate({
            rules: {
                phone: {
                    required: true
                }
            },
            messages: {},
            errorPlacement: function(error, element) {},
            submitHandler: function(form) {
                var thisForm = $(form);
                $.ajax({
                    type: "POST",
                    url: thisForm.attr("action"),
                    data: thisForm.serialize()
                }).done(function() {
                    $.fancybox.close();
                    $.fancybox({
                        href: '#myThanks',
                        wrapCSS: 'owrap',
                        openEffect: "elastic",
                        openMethod: "zoomIn",
                        closeEffect: "elastic",
                        closeMethod: "zoomOut",
                    });
                    setTimeout(function() {
                        $.fancybox.close();
                    }, 3000);
                    it.trigger("reset");
                    $('.hidden_field > input[type=hidden]').remove();
                });
                return false;
            },
            success: function() {},
            highlight: function(element, errorClass) {
                $(element).addClass('error');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
            }
        })
    });

    //  scroll with offset
    // $(".nav_list").on("click", "a", function(event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href');
    //     // screen width
    //     // if (w < 768) {
    //     //     $(id).attr('data-top', 90);
    //     // }
    //     var topOffset = $(id).attr("data-top");
    //     var top = $(id).offset().top,
    //         finalTop = top - topOffset;
    //     $('body,html').animate({ scrollTop: finalTop }, 700);

    // });

    // if (w < 768) {
    //     $(".nav_list li a").click(function() {
    //         $(".hidden_trigger").removeClass('open_menu');
    //         $(".nav_list").slideUp();
    //     });
    // }

    $(".scroll_btn").click(function() {
        var id = $(this).attr('href');
        // screen width
        // if (w < 768) {
        //     $(id).attr('data-top', 90);
        // }
        // var topOffset = $(id).attr("data-top");
        var top = $(id).offset().top,
            finalTop = top - 90;
        $('body,html').animate({ scrollTop: finalTop }, 700);
        event.preventDefault();
    });

    // top menu
    if (w > 991) {
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 10) $(".top_line").removeClass("more");
            else $(".top_line").addClass("more");
        });
    }

    // menu-btn 
    $(".hidden_trigger").click(function() {
        $(".nav_list").slideToggle();
        $(this).toggleClass('open_menu');
    });

    //masked
    // $('input[type=tel]').mask("+99(999) 999-99-99");

    $(".fancybox").fancybox({
        // margin: 0
        // scrolling: 'yes',
        // fixed: false,
        // autoCenter: true,
        // centerOnScroll: true,
        // helpers: {
        //     overlay: {
        //         showEarly: false
        //     }
        // }
        // helpers: {
        //     overlay: {
        //         locked: false
        //     }
        // }
    });


    $(".video_btn").fancybox({
        wrapCSS: "wrap_video",
        autoSize: false,
        helpers: {
            media: true,
            title: {
                type: 'inside'
            }
        },
        fitToView: false,
        aspectRatio: true,
        maxWidth: "100%",
        maxHeight: "100%"
    });


    $(".item_blocks").on('click', '.buy_btn', function(event) {
        var thisHash = $(this).attr('href');
        console.log(thisHash);
        var thistem = $(this).attr('data-item');
        console.log(thisHash + " " + thistem);
        $(thisHash).find('.hidden_field > input[type=hidden]').remove();
        $(thisHash).find('.hidden_field').append(
            $('<input>', {
                type: 'hidden',
                value: thistem,
                name: "Название товара"
            })
        );
        $.fancybox.close();
        $.fancybox({
            href: thisHash,
            wrapCSS: 'owrap'
        });
        event.preventDefault();
    });



    $(".scr3_links").on('click', 'a', function(event) {
        var filterVal = $(this).data('filter');
        $(this).addClass('active').siblings().removeClass('active');
        $(".item_block").hide()
        $(filterVal).show();
    });




    if ($("#map").length > 0) {
        var target = document.head;
        var observer = new MutationObserver(function(mutations) {
            for (var i = 0; mutations[i]; ++i) {
                if (mutations[i].addedNodes[0].nodeName == "SCRIPT" && mutations[i].addedNodes[0].src.match(/\/AuthenticationService.Authenticate?/g)) {
                    var str = mutations[i].addedNodes[0].src.match(/[?&]callback=.*[&$]/g);
                    if (str) {
                        if (str[0][str[0].length - 1] == '&') {
                            str = str[0].substring(10, str[0].length - 1);
                        } else {
                            str = str[0].substring(10);
                        }
                        var split = str.split(".");
                        var object = split[0];
                        var method = split[1];
                        window[object][method] = null; // remove censorship message function _xdc_._jmzdv6 (AJAX callback name "_jmzdv6" differs depending on URL)
                        //window[object] = {}; // when we removed the complete object xdc, Google Maps tiles did not load when we moved the map with the mouse (no problem with OpenStreetMap)
                    }
                    observer.disconnect();
                }
            }
        });
        var config = {
            attributes: true,
            childList: true,
            characterData: true
        }
        observer.observe(target, config);



        // map
        var thisMapLatitude = $("#map").data('latitude'),
            thisMapLongtitude = $("#map").data('longitude');
        console.log(thisMapLatitude);
        console.log(thisMapLongtitude);

        google.maps.event.addDomListener(window, 'load', init);
        var map;

        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(thisMapLatitude, thisMapLongtitude),
                zoom: 14,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.DEFAULT,
                },
                disableDoubleClickZoom: true,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                },
                scaleControl: true,
                scrollwheel: false,
                panControl: true,
                streetViewControl: true,
                draggable: true,
                overviewMapControl: true,
                // fullscreenControl: false,
                // fullscreenControlOptions: {
                //     position: google.maps.ControlPosition.RIGHT_BOTTOM
                // },
                overviewMapControlOptions: {
                    opened: false,
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                        "featureType": "landscape",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 60
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [{
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "lightness": 30
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#ef8c25"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#b6c54c"
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "saturation": -40
                            }
                        ]
                    },
                    {}
                ],
            }
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var locations = [
                ['', 'undefined', 'undefined', 'undefined', 'undefined', thisMapLatitude, thisMapLongtitude, 'img/map_pin.png']
            ];
            for (i = 0; i < locations.length; i++) {
                if (locations[i][1] == 'undefined') { description = ''; } else { description = locations[i][1]; }
                if (locations[i][2] == 'undefined') { telephone = ''; } else { telephone = locations[i][2]; }
                if (locations[i][3] == 'undefined') { email = ''; } else { email = locations[i][3]; }
                if (locations[i][4] == 'undefined') { web = ''; } else { web = locations[i][4]; }
                if (locations[i][7] == 'undefined') { markericon = ''; } else { markericon = locations[i][7]; }
                marker = new google.maps.Marker({
                    icon: markericon,
                    position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                    map: map,
                    title: locations[i][0],
                    desc: description,
                    tel: telephone,
                    email: email,
                    web: web
                });
                link = '';
            }

            // if (w < 992) {
            //     map.panBy(-150, 0);
            // }
            // if (w < 768) {
            //     map.panBy(220, -170);
            // }
            // map.panBy(100, 0); // set center of the map
        }

    }
});


$(window).on('resize', function() {
    var w = screen.width;
    var h = screen.height;
    var bw = window.innerWidth;
    var bh = window.innerHeight;
    var btnLen = $(".search_checkboxes").find('.red_btn').length;
    if (w > 991) {
        $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 10) $(".top_line").removeClass("more");
            else $(".top_line").addClass("more");
        });
    }
});