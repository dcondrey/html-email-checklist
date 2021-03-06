var spreadsheet = "1bz4mDdN6-f-FeEy2wpQaQaGygQ4hOa6BbpUiEeQpttc"

var marketingSheet = spreadsheet + "/od6";
var designSheet = spreadsheet + "/o5lsipi";
var developmentSheet = spreadsheet + "/oynmg9z";

function updateProgress() {
    var e = $('input[type="checkbox"]').length;
    var t = $('input[type="checkbox"]:checked').length;
    if (e > 0) {
        var n = t / e * 100;
        $("#progressbar").progressbar("value", n)
    }
}
function reset() {
    $("input[type=checkbox]").attr("checked", false).each(function() {
        $.removeCookie($(this).attr("name"))
    }).parents("label").removeClass("checked");
    progress_bar()
}

$(document).ready(function() {
    $("#progressbar").progressbar({
        value: 0,
        max: 100
    });

	$( ".nav a" ).click(function() {
	  $(".nav a").removeClass('active');
	});

	var prefix = "https://spreadsheets.google.com/feeds/list/";
	var suffix = "/public/values?alt=json";

	var liStyle = "position:relative;";
	var labelStyle = "position:relative;margin-left:-45px;padding-left:45px;";
	var boxStyle = "position:absolute;top:0;float:left;color:#415D94;margin:-8px 0 0 20px;font-size: 35px;font-weight:700;display:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;";

	$.getJSON(prefix + marketingSheet + suffix,
    function(e) {
        var t = 1;
        for (var n = 0; n < e.feed.entry.length; n++) {
			var r,i,d,s,p;
            r = e.feed.entry[n].gsx$stepnum.$t;
            i = e.feed.entry[n].gsx$step.$t;
			d = e.feed.entry[n].gsx$explaination.$t;
            if (d !== 0) {
				p = '<span class="popover">' + d + '</span>';
				s = '<li class="list" style="' + liStyle + '"><label for="' + r + '" class="checkbox" style="' + labelStyle + '"><input type="checkbox" id="' + r + '" name="' + r + t + '" value="1" onchange="updateProgress();" onclick="updateProgress();">' + i + '<div class="box" style="' + boxStyle + '">&#10003;</div></label>' + p + '</li>';
			} else {
				s = '<li class="list" style="' + liStyle + '"><label for="' + r + '" class="checkbox" style="' + labelStyle + '"><input type="checkbox" id="' + r + '" name="' + r + t + '" value="1" onchange="updateProgress();" onclick="updateProgress();">' + i + '<div class="box" style="' + boxStyle + '">&#10003;</div></label></li>';
			}
            $("#section-1 ul").prepend(s);
			
            t++
        }
        updateProgress();
    });

    $.getJSON(prefix + designSheet + suffix,
    	function(e) {
	        var t = 1;
	        for (var n = 0; n < e.feed.entry.length; n++) {
				var r,i,d,s,p;
	            r = e.feed.entry[n].gsx$stepnum.$t;
	            i = e.feed.entry[n].gsx$step.$t;
				d = e.feed.entry[n].gsx$explaination.$t;
	            if (d !== 0) {
					p = '<span class="popover">' + d + '</span>';
					s = '<li class="list" style="' + liStyle + '"><label for="' + r + '" class="checkbox" style="' + labelStyle + '"><input type="checkbox" id="' + r + '" name="' + r + t + '" value="1" onchange="updateProgress();" onclick="updateProgress();">' + i + '<div class="box" style="' + boxStyle + '">&#10003;</div></label>' + p + '</li>';
				} else {
					s = '<li class="list" style="' + liStyle + '"><label for="' + r + '" class="checkbox" style="' + labelStyle + '"><input type="checkbox" id="' + r + '" name="' + r + t + '" value="1" onchange="updateProgress();" onclick="updateProgress();">' + i + '<div class="box" style="' + boxStyle + '">&#10003;</div></label></li>';
				}
	            $("#section-2 ul").prepend(s);

	            t++
	        }
	        updateProgress();
	    });

    $.getJSON(prefix + developmentSheet + suffix,
    	function(e) {
	        var t = 1;
	        for (var n = 0; n < e.feed.entry.length; n++) {
				var r,i,d,s,p;
	            r = e.feed.entry[n].gsx$stepnum.$t;
	            i = e.feed.entry[n].gsx$step.$t;
				d = e.feed.entry[n].gsx$explaination.$t;
	            if (d !== 0) {
					p = '<span class="popover">' + d + '</span>';
					s = '<li class="list" style="' + liStyle + '"><label for="' + r + '" class="checkbox" style="' + labelStyle + '"><input type="checkbox" id="' + r + '" name="' + r + t + '" value="1" onchange="updateProgress();" onclick="updateProgress();">' + i + '<div class="box" style="' + boxStyle + '">&#10003;</div></label>' + p + '</li>';
				} else {
					s = '<li class="list" style="' + liStyle + '"><label for="' + r + '" class="checkbox" style="' + labelStyle + '"><input type="checkbox" id="' + r + '" name="' + r + t + '" value="1" onchange="updateProgress();" onclick="updateProgress();">' + i + '<div class="box" style="' + boxStyle + '">&#10003;</div></label></li>';
				}
	            $("#section-3 ul").prepend(s);

	            t++
	        }
	        updateProgress();
	    });

    $(document).on("change", 'input[type="checkbox"]', updateProgress);
    $("#progressbar").progressbar({
        value: 0,
        max: 100
    });
    $("button.reset").click(function() {
        reset()
    })
}); (function(e) {
    "use strict";
    function t(e) {
        return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }
    function s(e, t) {
        var s = n(e, t) ? i: r;
        s(e, t)
    }
    var n,
    r,
    i;
    if ("classList" in document.documentElement) {
        n = function(e, t) {
            return e.classList.contains(t)
        };
        r = function(e, t) {
            e.classList.add(t)
        };
        i = function(e, t) {
            e.classList.remove(t)
        }
    } else {
        n = function(e, n) {
            return t(n).test(e.className)
        };
        r = function(e, t) {
            if (!n(e, t)) {
                e.className = e.className + " " + t
            }
        };
        i = function(e, n) {
            e.className = e.className.replace(t(n), " ")
        }
    }
    var o = {
        hasClass: n,
        addClass: r,
        removeClass: i,
        toggleClass: s,
        has: n,
        add: r,
        remove: i,
        toggle: s
    };
    if (typeof define === "function" && define.amd) {
        define(o)
    } else {
        e.classie = o
    }
})(window); (function() {
    function e() {
        var e = false; (function(t) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) e = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return e
    }
    function t() {
        var t = document.getElementById("container"),
        n = t.querySelector("div.inner"),
        r = Array.prototype.slice.call(n.querySelectorAll("section")),
        i = Array.prototype.slice.call(t.querySelectorAll("header.header > ul.nav > li")),
        s = r.length,
        o = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            msTransition: "MSTransitionEnd",
            transition: "transitionend"
        },
        u = o[Modernizr.prefixed("transition")],
        a = e() ? "touchstart": "click";
        if (s >= 3 && Modernizr.csstransforms3d) {
            var f = 0,
            l = false;
            classie.add(t, "triplelayout");
            function c() {
                var e = document.createElement("div"),
                r = document.createElement("div"),
                i = document.createElement("nav");
                e.className = "inactive-left";
                r.className = "inactive-right";
                i.className = "inactive";
                i.appendChild(e);
                i.appendChild(r);
                t.insertBefore(i, n.nextSibling);
                e.addEventListener(a,
                function() {
                    p("left")
                });
                r.addEventListener(a,
                function() {
                    p("right")
                })
            }
            function h() {
                r.forEach(function(e, t) {
                    e.className = ""
                });
                i.forEach(function(e, t) {
                    e.className = ""
                })
            }
            function p(e) {
                if (l) {
                    return false
                }
                l = true;
                var n = e === "right" ? "left": "right";
                classie.add(t, "move-" + n);
                var o = f === 0 ? s - 1: f - 1,
                a = f < s - 1 ? f + 1: 0,
                c;
                if (e === "right") {
                    c = a < s - 1 ? a + 1: 0
                } else if (e === "left") {
                    c = o > 0 ? o - 1: s - 1
                }
                var p = r[c],
                d = i[c];
                p.className = "";
                d.className = "";
                classie.add(p, "" + e + "-outer");
                classie.add(d, "nav-" + e + "-outer");
                var v = function() {
                    p.removeEventListener(u, v);
                    h();
                    if (e === "right") {
                        classie.add(r[f], "left");
                        classie.add(r[a], "current");
                        classie.add(p, "right");
                        classie.add(i[f], "nav-left");
                        classie.add(i[a], "nav-current");
                        classie.add(d, "nav-right");
                        f = f < s - 1 ? f + 1: 0
                    } else if (e === "left") {
                        classie.add(p, "left");
                        classie.add(r[o], "current");
                        classie.add(r[f], "right");
                        classie.add(d, "nav-left");
                        classie.add(i[o], "nav-current");
                        classie.add(i[f], "nav-right");
                        f = f > 0 ? f - 1: s - 1
                    }
                    classie.remove(t, "move-" + n);
                    l = false
                };
                p.addEventListener(u, v)
            }
            classie.add(r[f], "current");
            classie.add(r[f + 1], "right");
            classie.add(r[s - 1], "left");
            classie.add(i[f], "nav-current");
            classie.add(i[f + 1], "nav-right");
            classie.add(i[s - 1], "nav-left");
            c();
            i.forEach(function(e, t) {
                e.addEventListener(a,
                function(t) {
                    t.preventDefault();
                    if (classie.has(e, "nav-right")) {
                        p("right")
                    } else if (classie.has(e, "nav-left")) {
                        p("left")
                    } else {
                        return false
                    }
                })
            });
            document.addEventListener("keydown",
            function(e) {
                var t = e.keyCode || e.which,
                n = {
                    left: 37,
                    right: 39
                };
                switch (t) {
                case n.left:
                    p("left");
                    break;
                case n.right:
                    p("right");
                    break
                }
            });
            if (e()) {
                Hammer(t).on("swipeleft",
                function(e) {
                    p("right")
                });
                Hammer(t).on("swiperight",
                function(e) {
                    p("left")
                })
            }
        }
    }
    t()
})()
