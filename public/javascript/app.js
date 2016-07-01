function waitAndRecordAbTestImpression(e, t) {
    var n = 0,
        i = setInterval(function() {
            5 === ++n && window.clearInterval(i), window.IntercomGTM && window.IntercomGTM.pageviewId && (window.clearInterval(i), window.IntercomGTM.recordAbTestImpression(window.IntercomGTM.pageviewId, e, t))
        }, 500)
}
window.Modernizr = function(e, t, n) {
        function i(e) {
            y.cssText = e
        }

        function r(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var i in e) {
                var r = e[i];
                if (!o(r, "-") && y[r] !== n) return "pfx" == t ? r : !0
            }
            return !1
        }

        function s(e, t, i) {
            for (var o in e) {
                var a = t[e[o]];
                if (a !== n) return i === !1 ? e[o] : r(a, "function") ? a.bind(i || t) : a
            }
            return !1
        }

        function l(e, t, n) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + w.join(i + " ") + i).split(" ");
            return r(t, "string") || r(t, "undefined") ? a(o, t) : (o = (e + " " + _.join(i + " ") + i).split(" "), s(o, t, n))
        }
        var c, u, d, f = "2.8.3",
            h = {},
            p = !0,
            m = t.documentElement,
            g = "modernizr",
            v = t.createElement(g),
            y = v.style,
            b = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            x = "Webkit Moz O ms",
            w = x.split(" "),
            _ = x.toLowerCase().split(" "),
            k = {},
            C = [],
            T = C.slice,
            E = function(e, n, i, r) {
                var o, a, s, l, c = t.createElement("div"),
                    u = t.body,
                    d = u || t.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = t.createElement("div"), s.id = r ? r[i] : g + (i + 1), c.appendChild(s);
                return o = ["&#173;", '<style id="s', g, '">', e, "</style>"].join(""), c.id = g, (u ? c : d).innerHTML += o, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)), a = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), m.style.overflow = l), !!a
            },
            S = function() {
                function e(e, o) {
                    o = o || t.createElement(i[e] || "div"), e = "on" + e;
                    var a = e in o;
                    return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = r(o[e], "function"), r(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            $ = {}.hasOwnProperty;
        d = r($, "undefined") || r($.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return $.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = T.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var r = function() {};
                        r.prototype = t.prototype;
                        var o = new r,
                            a = t.apply(o, n.concat(T.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, n.concat(T.call(arguments)))
                };
            return i
        }), k.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : E(["@media (", b.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, k.cssanimations = function() {
            return l("animationName")
        }, k.csstransforms = function() {
            return !!l("transform")
        }, k.csstransforms3d = function() {
            var e = !!l("perspective");
            return e && "webkitPerspective" in m.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, k.csstransitions = function() {
            return l("transition")
        };
        for (var j in k) d(k, j) && (u = j.toLowerCase(), h[u] = k[j](), C.push((h[u] ? "" : "no-") + u));
        return h.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var i in e) d(e, i) && h.addTest(i, e[i]);
                else {
                    if (e = e.toLowerCase(), h[e] !== n) return h;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof p && p && (m.className += " " + (t ? "" : "no-") + e), h[e] = t
                }
                return h
            }, i(""), v = c = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = v[e[m]];
                    return t || (t = {}, g++, e[m] = g, v[g] = t), t
                }

                function o(e, n, i) {
                    if (n || (n = t), u) return n.createElement(e);
                    i || (i = r(n));
                    var o;
                    return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !o.canHaveChildren || h.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
                }

                function a(e, n) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    n = n || r(e);
                    for (var o = n.frag.cloneNode(), a = 0, s = i(), l = s.length; l > a; a++) o.createElement(s[a]);
                    return o
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var i = r(e);
                    return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || s(e, i), e
                }
                var c, u, d = "3.7.0",
                    f = e.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        c = !0, u = !0
                    }
                }();
                var y = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: a
                };
                e.html5 = y, l(t)
            }(this, t), h._version = f, h._prefixes = b, h._domPrefixes = _, h._cssomPrefixes = w, h.hasEvent = S, h.testProp = function(e) {
                return a([e])
            }, h.testAllProps = l, h.testStyles = E, h.prefixed = function(e, t, n) {
                return t ? l(e, t, n) : l(e, "pfx")
            }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + C.join(" ") : ""), h
    }(this, this.document),
    function(e, t, n) {
        function i(e) {
            return "[object Function]" == g.call(e)
        }

        function r(e) {
            return "string" == typeof e
        }

        function o() {}

        function a(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function s() {
            var e = v.shift();
            y = 1, e ? e.t ? p(function() {
                ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), s()) : y = 0
        }

        function l(e, n, i, r, o, l, c) {
            function u(t) {
                if (!h && a(d.readyState) && (b.r = h = 1, !y && s(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && p(function() {
                        w.removeChild(d)
                    }, 50);
                    for (var i in E[n]) E[n].hasOwnProperty(i) && E[n][i].onload()
                }
            }
            var c = c || f.errorTimeout,
                d = t.createElement(e),
                h = 0,
                g = 0,
                b = {
                    t: i,
                    s: n,
                    e: o,
                    a: l,
                    x: c
                };
            1 === E[n] && (g = 1, E[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                u.call(this, g)
            }, v.splice(r, 0, b), "img" != e && (g || 2 === E[n] ? (w.insertBefore(d, x ? null : m), p(u, c)) : E[n].push(d))
        }

        function c(e, t, n, i, o) {
            return y = 0, t = t || "j", r(e) ? l("c" == t ? k : _, e, t, this.i++, n, i, o) : (v.splice(this.i++, 0, e), 1 == v.length && s()), this
        }

        function u() {
            var e = f;
            return e.loader = {
                load: c,
                i: 0
            }, e
        }
        var d, f, h = t.documentElement,
            p = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in h.style,
            x = b && !!t.createRange().compareNode,
            w = x ? h : m.parentNode,
            h = e.opera && "[object Opera]" == g.call(e.opera),
            h = !!t.attachEvent && !h,
            _ = b ? "object" : h ? "script" : "img",
            k = h ? "script" : _,
            C = Array.isArray || function(e) {
                return "[object Array]" == g.call(e)
            },
            T = [],
            E = {},
            S = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        f = function(e) {
            function t(e) {
                var t, n, i, e = e.split("!"),
                    r = T.length,
                    o = e.pop(),
                    a = e.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: e
                    };
                for (n = 0; a > n; n++) i = e[n].split("="), (t = S[i.shift()]) && (o = t(o, i));
                for (n = 0; r > n; n++) o = T[n](o);
                return o
            }

            function a(e, r, o, a, s) {
                var l = t(e),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = i(r) ? r : r[e] || r[a] || r[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, r, o, a, s) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(r) || i(c)) && o.load(function() {
                    u(), r && r(l.origUrl, s, a), c && c(l.origUrl, s, a), E[l.url] = 2
                })))
            }

            function s(e, t) {
                function n(e, n) {
                    if (e) {
                        if (r(e)) n || (d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), h()
                        }), a(e, d, t, 0, c);
                        else if (Object(e) === e)
                            for (l in s = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!n && !--s && (i(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), h()
                            } : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), h()
                                }
                            }(f[l])), a(e[l], d, t, l, c))
                    } else !n && h()
                }
                var s, l, c = !!e.test,
                    u = e.load || e.both,
                    d = e.callback || o,
                    f = d,
                    h = e.complete || o;
                n(c ? e.yep : e.nope, !!u), u && n(u)
            }
            var l, c, d = this.yepnope.loader;
            if (r(e)) a(e, 0, d, 0);
            else if (C(e))
                for (l = 0; l < e.length; l++) c = e[l], r(c) ? a(c, 0, d, 0) : C(c) ? f(c) : Object(c) === c && s(c, d);
            else Object(e) === e && s(e, d)
        }, f.addPrefix = function(e, t) {
            S[e] = t
        }, f.addFilter = function(e) {
            T.push(e)
        }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, n, i, r, l, c) {
            var u, d, h = t.createElement("script"),
                r = r || f.errorTimeout;
            h.src = e;
            for (d in i) h.setAttribute(d, i[d]);
            n = c ? s : n || o, h.onreadystatechange = h.onload = function() {
                !u && a(h.readyState) && (u = 1, n(), h.onload = h.onreadystatechange = null)
            }, p(function() {
                u || (u = 1, n(1))
            }, r), l ? h.onload() : m.parentNode.insertBefore(h, m)
        }, e.yepnope.injectCss = function(e, n, i, r, a, l) {
            var c, r = t.createElement("link"),
                n = l ? s : n || o;
            r.href = e, r.rel = "stylesheet", r.type = "text/css";
            for (c in i) r.setAttribute(c, i[c]);
            a || (m.parentNode.insertBefore(r, m), p(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(e, t, n, i, r) {
        "use strict";
        i.addTest("firefox", function() {
            return "undefined" != typeof InstallTrigger
        }), i.addTest("ie", function() {
            var e = t.navigator.userAgent,
                n = e.indexOf("MSIE ");
            if (n > 0) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
            var i = e.indexOf("Trident/");
            if (i > 0) {
                var r = e.indexOf("rv:");
                return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10)
            }
            var o = e.indexOf("Edge/");
            return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : !1
        })
    }(this.jQuery, this, this.document, this.Modernizr),
    /*!
     * jQuery JavaScript Library v1.11.1
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-05-01T17:42Z
     */
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = re.type(e);
            return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (re.isFunction(t)) return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return re.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (fe.test(t)) return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function(e) {
                return re.inArray(e, t) >= 0 !== n
            })
        }

        function r(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = xe[e] = {};
            return re.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pe.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(), re.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Te, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n
                    } catch (r) {}
                    re.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u(e, t, n, i) {
            if (re.acceptData(e)) {
                var r, o, a = re.expando,
                    s = e.nodeType,
                    l = s ? re.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = Q.pop() || re.guid++ : a), l[c] || (l[c] = s ? {} : {
                    toJSON: re.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = re.extend(l[c], t) : l[c].data = re.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
            }
        }

        function d(e, t, n) {
            if (re.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? re.cache : e,
                    s = o ? e[re.expando] : re.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !c(i) : !re.isEmptyObject(i)) return
                    }(n || (delete a[s].data, c(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function f() {
            return !0
        }

        function h() {
            return !1
        }

        function p() {
            try {
                return pe.activeElement
            } catch (e) {}
        }

        function m(e) {
            var t = Me.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== ke ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ke ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
        }

        function v(e) {
            Ae.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = Xe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
        }

        function _(e, t) {
            if (1 === t.nodeType && re.hasData(e)) {
                var n, i, r, o = re._data(e),
                    a = re._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
                }
                a.data && (a.data = re.extend({}, a.data))
            }
        }

        function k(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                    r = re._data(t);
                    for (i in r.events) re.removeEvent(t, i, r.handle);
                    t.removeAttribute(re.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function C(t, n) {
            var i, r = re(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
            return r.detach(), o
        }

        function T(e) {
            var t = pe,
                n = Ye[e];
            return n || (n = C(e, t), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Ke.detach()), Ye[e] = n), n
        }

        function E(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ft.length; r--;)
                if (t = ft[r] + n, t in e) return t;
            return i
        }

        function $(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[a] = re._data(i, "olddisplay", T(i.nodeName)))) : (r = $e(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function j(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function A(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + Se[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Se[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Se[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Se[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Se[o] + "Width", !0, r)));
            return a
        }

        function N(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = et(e),
                a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
                i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + A(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function F(e, t, n, i, r) {
            return new F.prototype.init(e, t, n, i, r)
        }

        function D() {
            return setTimeout(function() {
                ht = void 0
            }), ht = re.now()
        }

        function P(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function O(e, t, n) {
            for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function M(e, t, n) {
            var i, r, o, a, s, l, c, u, d = this,
                f = {},
                h = e.style,
                p = e.nodeType && $e(e),
                m = re._data(e, "fxshow");
            n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = re.css(e, "display"), u = "none" === c ? re._data(e, "olddisplay") || T(e.nodeName) : c, "inline" === u && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], mt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    f[i] = m && m[i] || re.style(e, i)
                } else c = void 0;
            if (re.isEmptyObject(f)) "inline" === ("none" === c ? T(e.nodeName) : c) && (h.display = c);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = re._data(e, "fxshow", {}), o && (m.hidden = !p), p ? re(e).show() : d.done(function() {
                    re(e).hide()
                }), d.done(function() {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in f) re.style(e, t, f[t])
                });
                for (i in f) a = O(p ? m[i] : 0, i, d), i in m || (m[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function I(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function L(e, t, n) {
            var i, r, o = 0,
                a = yt.length,
                s = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = ht || D(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: re.extend({}, t),
                    opts: re.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ht || D(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (I(u, c.opts.specialEasing); a > o; o++)
                if (i = yt[o].call(c, e, u, c.opts)) return i;
            return re.map(u, O, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function H(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(be) || [];
                if (re.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function R(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, re.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                a = e === zt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function q(e, t) {
            var n, i, r = re.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && re.extend(!0, e, n), e
        }

        function B(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in s)
                    if (s[a] && s[a].test(r)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function z(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = c[l + " " + o] || c["* " + o], !a)
                    for (r in c)
                        if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function U(e, t, n, i) {
            var r;
            if (re.isArray(t)) re.each(t, function(t, r) {
                n || Xt.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== re.type(t)) i(e, t);
            else
                for (r in t) U(e + "[" + r + "]", t[r], n, i)
        }

        function W() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function V() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function X(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var Q = [],
            G = Q.slice,
            Z = Q.concat,
            J = Q.push,
            K = Q.indexOf,
            Y = {},
            ee = Y.toString,
            te = Y.hasOwnProperty,
            ne = {},
            ie = "1.11.1",
            re = function(e, t) {
                return new re.fn.init(e, t)
            },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            se = /-([\da-z])/gi,
            le = function(e, t) {
                return t.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: ie,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
            },
            pushStack: function(e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return re.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(re.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: Q.sort,
            splice: Q.splice
        }, re.extend = re.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = a[i], n = r[i], a !== n && (c && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(c, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, re.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === re.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === re.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !re.isArray(e) && e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && re.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ae, "ms-").replace(se, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e);
                if (i) {
                    if (s)
                        for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                } else if (s)
                    for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(oe, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (K) return K.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && l.push(r);
                return Z.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(G.call(arguments)))
                }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ne
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Y["[object " + t + "]"] = t.toLowerCase()
        });
        var ce =
            /*!
             * Sizzle CSS Selector Engine v1.10.19
             * http://sizzlejs.com/
             *
             * Copyright 2013 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-04-18
             */
            function(e) {
                function t(e, t, n, i) {
                    var r, o, a, s, l, c, d, h, p, m;
                    if ((t ? t.ownerDocument || t : R) !== F && N(t), t = t || F, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (P && !i) {
                        if (r = ye.exec(e))
                            if (a = r[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && L(t, o) && o.id === a) return n.push(o), n
                            } else {
                                if (r[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = r[3]) && w.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(a)), n
                            }
                        if (w.qsa && (!O || !O.test(e))) {
                            if (h = d = H, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = T(e), (d = t.getAttribute("id")) ? h = d.replace(xe, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + f(c[l]);
                                p = be.test(e) && u(t.parentNode) || t, m = c.join(",")
                            }
                            if (m) try {
                                return Y.apply(n, p.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(le, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[H] = !0, e
                }

                function r(e) {
                    var t = F.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return i(function(t) {
                        return t = +t, i(function(n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function u(e) {
                    return e && typeof e.getElementsByTagName !== X && e
                }

                function d() {}

                function f(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function h(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = B++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, l, c = [q, o];
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if (l = t[H] || (t[H] = {}), (s = l[i]) && s[0] === q && s[1] === o) return c[2] = s[2];
                                    if (l[i] = c, c[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function p(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) {
                    for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                    return i
                }

                function g(e, t, n, i, r) {
                    for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
                    return a
                }

                function v(e, t, n, r, o, a) {
                    return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, a)), i(function(i, a, s, l) {
                        var c, u, d, f = [],
                            h = [],
                            p = a.length,
                            v = i || m(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !i && t ? v : g(v, f, e, s, l),
                            b = n ? o || (i ? e : p || r) ? [] : a : y;
                        if (n && n(y, b, s, l), r)
                            for (c = g(b, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                    o(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = o ? te.call(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : Y.apply(a, b)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, a, !0), c = h(function(e) {
                            return te.call(t, e) > -1
                        }, a, !0), u = [function(e, n, i) {
                            return !o && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                        }]; r > s; s++)
                        if (n = _.relative[e[s].type]) u = [h(p(u), n)];
                        else {
                            if (n = _.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (i = ++s; r > i && !_.relative[e[i].type]; i++);
                                return v(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                            }
                            u.push(n)
                        }
                    return p(u)
                }

                function b(e, n) {
                    var r = n.length > 0,
                        o = e.length > 0,
                        a = function(i, a, s, l, c) {
                            var u, d, f, h = 0,
                                p = "0",
                                m = i && [],
                                v = [],
                                y = $,
                                b = i || o && _.find.TAG("*", c),
                                x = q += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (c && ($ = a !== F && a); p !== w && null != (u = b[p]); p++) {
                                if (o && u) {
                                    for (d = 0; f = e[d++];)
                                        if (f(u, a, s)) {
                                            l.push(u);
                                            break
                                        }
                                    c && (q = x)
                                }
                                r && ((u = !f && u) && h--, i && m.push(u))
                            }
                            if (h += p, r && p !== h) {
                                for (d = 0; f = n[d++];) f(m, v, a, s);
                                if (i) {
                                    if (h > 0)
                                        for (; p--;) m[p] || v[p] || (v[p] = J.call(l));
                                    v = g(v)
                                }
                                Y.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                            }
                            return c && (q = x, $ = y), m
                        };
                    return r ? i(a) : a
                }
                var x, w, _, k, C, T, E, S, $, j, A, N, F, D, P, O, M, I, L, H = "sizzle" + -new Date,
                    R = e.document,
                    q = 0,
                    B = 0,
                    z = n(),
                    U = n(),
                    W = n(),
                    V = function(e, t) {
                        return e === t && (A = !0), 0
                    },
                    X = "undefined",
                    Q = 1 << 31,
                    G = {}.hasOwnProperty,
                    Z = [],
                    J = Z.pop,
                    K = Z.push,
                    Y = Z.push,
                    ee = Z.slice,
                    te = Z.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ie = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = re.replace("w", "w#"),
                    ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
                    se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                    le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                    ce = new RegExp("^" + ie + "*," + ie + "*"),
                    ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                    de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                    fe = new RegExp(se),
                    he = new RegExp("^" + oe + "$"),
                    pe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ae),
                        PSEUDO: new RegExp("^" + se),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ne + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    },
                    me = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /[+~]/,
                    xe = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                    _e = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    };
                try {
                    Y.apply(Z = ee.call(R.childNodes), R.childNodes), Z[R.childNodes.length].nodeType
                } catch (ke) {
                    Y = {
                        apply: Z.length ? function(e, t) {
                            K.apply(e, ee.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, C = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, N = t.setDocument = function(e) {
                    var t, n = e ? e.ownerDocument || e : R,
                        i = n.defaultView;
                    return n !== F && 9 === n.nodeType && n.documentElement ? (F = n, D = n.documentElement, P = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                        N()
                    }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                        N()
                    })), w.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = r(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), w.getById = r(function(e) {
                        return D.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                    }), w.getById ? (_.find.ID = function(e, t) {
                        if (typeof t.getElementById !== X && P) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, _.filter.ID = function(e) {
                        var t = e.replace(we, _e);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete _.find.ID, _.filter.ID = function(e) {
                        var t = e.replace(we, _e);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), _.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, _.find.CLASS = w.getElementsByClassName && function(e, t) {
                        return typeof t.getElementsByClassName !== X && P ? t.getElementsByClassName(e) : void 0
                    }, M = [], O = [], (w.qsa = ve.test(n.querySelectorAll)) && (r(function(e) {
                        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
                    }), r(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (w.matchesSelector = ve.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) {
                        w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), M.push("!=", se)
                    }), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(D.compareDocumentPosition), L = t || ve.test(D.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = t ? function(e, t) {
                        if (e === t) return A = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === R && L(R, e) ? -1 : t === n || t.ownerDocument === R && L(R, t) ? 1 : j ? te.call(j, e) - te.call(j, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return A = !0, 0;
                        var i, r = 0,
                            o = e.parentNode,
                            s = t.parentNode,
                            l = [e],
                            c = [t];
                        if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : j ? te.call(j, e) - te.call(j, t) : 0;
                        if (o === s) return a(e, t);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = t; i = i.parentNode;) c.unshift(i);
                        for (; l[r] === c[r];) r++;
                        return r ? a(l[r], c[r]) : l[r] === R ? -1 : c[r] === R ? 1 : 0
                    }, n) : F
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== F && N(e), n = n.replace(de, "='$1']"), w.matchesSelector && P && (!M || !M.test(n)) && (!O || !O.test(n))) try {
                        var i = I.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {}
                    return t(n, F, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== F && N(e), L(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== F && N(e);
                    var n = _.attrHandle[t.toLowerCase()],
                        i = n && G.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                    return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(V), A) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return j = null, e
                }, k = t.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += k(t);
                    return n
                }, _ = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: pe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(we, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(we, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(we, _e).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c, u, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (u = g[H] || (g[H] = {}), c = u[e] || [], h = c[0] === q && c[1], f = c[0] === q && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                                            if (1 === d.nodeType && ++f && d === t) {
                                                u[e] = [q, h, f];
                                                break
                                            }
                                    } else if (y && (c = (t[H] || (t[H] = {}))[e]) && c[0] === q) f = c[1];
                                    else
                                        for (;
                                            (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[H] || (d[H] = {}))[e] = [q, f]), d !== t)););
                                    return f -= r, f === i || f % i === 0 && f / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                for (var i, r = o(e, n), a = r.length; a--;) i = te.call(e, r[a]), e[i] = !(t[i] = r[a])
                            }) : function(e) {
                                return o(e, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = E(e.replace(le, "$1"));
                            return r[H] ? i(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function(e) {
                            return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, _e).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === D
                        },
                        focus: function(e) {
                            return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !_.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ge.test(e.nodeName)
                        },
                        input: function(e) {
                            return me.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) _.pseudos[x] = s(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) _.pseudos[x] = l(x);
                return d.prototype = _.filters = _.pseudos, _.setFilters = new d, T = t.tokenize = function(e, n) {
                    var i, r, o, a, s, l, c, u = U[e + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (s = e, l = [], c = _.preFilter; s;) {
                        (!i || (r = ce.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(le, " ")
                        }), s = s.slice(i.length));
                        for (a in _.filter) !(r = pe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
                }, E = t.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = W[e + " "];
                    if (!o) {
                        for (t || (t = T(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                        o = W(e, b(r, i)), o.selector = e
                    }
                    return o
                }, S = t.select = function(e, t, n, i) {
                    var r, o, a, s, l, c = "function" == typeof e && e,
                        d = !i && T(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && _.relative[o[1].type]) {
                            if (t = (_.find.ID(a.matches[0].replace(we, _e), t) || [])[0], !t) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                            if ((l = _.find[s]) && (i = l(a.matches[0].replace(we, _e), be.test(o[0].type) && u(t.parentNode) || t))) {
                                if (o.splice(r, 1), e = i.length && f(o), !e) return Y.apply(n, i), n;
                                break
                            }
                    }
                    return (c || E(e, d))(i, t, !P, n, be.test(e) && u(t.parentNode) || t), n
                }, w.sortStable = H.split("").sort(V).join("") === H, w.detectDuplicates = !!A, N(), w.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(F.createElement("div"))
                }), r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && r(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(ne, function(e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var ue = re.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^.[^:#\[\.,]*$/;
        re.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (re.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) re.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
            }
        });
        var he, pe = e.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = re.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)), de.test(n[1]) && re.isPlainObject(t))
                            for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = pe.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return he.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = pe, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
            };
        ge.prototype = re.fn, he = re(pe);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.extend({
            dir: function(e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), re.fn.extend({
            has: function(e) {
                var t, n = re(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (re.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? re.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return re.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return re.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return re.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return re.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return re.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return re.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return re.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return re.sibling(e.firstChild)
            },
            contents: function(e) {
                return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
            }
        }, function(e, t) {
            re.fn[e] = function(n, i) {
                var r = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var be = /\S+/g,
            xe = {};
        re.Callbacks = function(e) {
            e = "string" == typeof e ? xe[e] || o(e) : re.extend({}, e);
            var t, n, i, r, a, s, l = [],
                c = !e.once && [],
                u = function(o) {
                    for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(t) {
                                re.each(t, function(t, n) {
                                    var i = re.type(n);
                                    "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), t ? r = l.length : n && (s = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && re.each(arguments, function(e, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], r = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, n) {
                        return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, re.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return re.Deferred(function(n) {
                                re.each(t, function(t, o) {
                                    var a = re.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? re.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, re.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = G.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : re.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var we;
        re.fn.ready = function(e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? re.readyWait++ : re.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--re.readyWait : !re.isReady) {
                    if (!pe.body) return setTimeout(re.ready);
                    re.isReady = !0, e !== !0 && --re.readyWait > 0 || (we.resolveWith(pe, [re]), re.fn.triggerHandler && (re(pe).triggerHandler("ready"), re(pe).off("ready")))
                }
            }
        }), re.ready.promise = function(t) {
            if (!we)
                if (we = re.Deferred(), "complete" === pe.readyState) setTimeout(re.ready);
                else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                pe.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && pe.documentElement
                } catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
            return we.promise(t)
        };
        var _e, ke = "undefined";
        for (_e in re(ne)) break;
        ne.ownLast = "0" !== _e, ne.inlineBlockNeedsLayout = !1, re(function() {
                var e, t, n, i;
                n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = pe.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        ne.deleteExpando = !1
                    }
                }
                e = null
            }(), re.acceptData = function(e) {
                var t = re.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Te = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !c(e)
            },
            data: function(e, t, n) {
                return u(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return u(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), re.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                        re._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    re.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, e, t)
                }) : o ? l(o, e, re.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    re.removeData(this, e)
                })
            }
        }), re.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = re._queueHooks(e, t),
                    a = function() {
                        re.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return re._data(e, n) || re._data(e, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        re._removeData(e, t + "queue"), re._removeData(e, n)
                    })
                })
            }
        }), re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    re.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = re.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            $e = function(e, t) {
                return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
            },
            je = re.access = function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === re.type(n)) {
                    r = !0;
                    for (s in n) re.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(re(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Ae = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = pe.createElement("input"),
                t = pe.createElement("div"),
                n = pe.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ne.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    ne.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, i = pe.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Ne = /^(?:input|select|textarea)$/i,
            Fe = /^key/,
            De = /^(?:mouse|pointer|contextmenu)|click/,
            Pe = /^(?:focusinfocus|focusoutblur)$/,
            Oe = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, h, p, m, g = re._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                            return typeof re === ke || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Oe.exec(t[s]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h && (c = re.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = re.event.special[h] || {}, d = re.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && re.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, l), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, c.setup && c.setup.call(e, i, p, u) !== !1 || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, h, p, m, g = re.hasData(e) && re._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(be) || [""], c = t.length; c--;)
                        if (s = Oe.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (d = re.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || re.removeEvent(e, h, g.handle), delete u[h])
                        } else
                            for (h in u) re.event.remove(e, h + t[c], n, i, !0);
                    re.isEmptyObject(u) && (delete g.handle, re._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, u, d, f = [i || pe],
                    h = te.call(t, "type") ? t.type : t,
                    p = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = u = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[re.expando] ? t : new re.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3,
                        t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), c = re.event.special[h] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!r && !c.noBubble && !re.isWindow(i)) {
                        for (l = c.delegateType || h, Pe.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), u = s;
                        u === (i.ownerDocument || pe) && f.push(u.defaultView || u.parentWindow || e)
                    }
                    for (d = 0;
                        (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || h, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = h, !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[h] && !re.isWindow(i)) {
                        u = i[a], u && (i[a] = null), re.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        re.event.triggered = void 0, u && (i[a] = u)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = re.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = G.call(arguments),
                    l = (re._data(this, "events") || {})[e.type] || [],
                    c = re.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = re.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[re.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = De.test(r) ? this.mouseHooks : Fe.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || pe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || pe, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return re.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = re.extend(new re.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = pe.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === ke && (e[i] = null), e.detachEvent(i, n))
        }, re.Event = function(e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
        }, re.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (re.event.special.change = {
            setup: function() {
                return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
                })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ne.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                    }), re._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return re.event.remove(this, "._change"), !Ne.test(this.nodeName)
            }
        }), ne.focusinBubbles || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                re.event.simulate(t, e.target, re.event.fix(e), !0)
            };
            re.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t);
                    r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t) - 1;
                    r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
                }
            }
        }), re.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = h;
                else if (!i) return this;
                return 1 === r && (a = i, i = function(e) {
                    return re().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                    re.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                    re.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    re.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ie = / jQuery\d+="(?:null|\d+)"/g,
            Le = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
            He = /^\s+/,
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            qe = /<([\w:]+)/,
            Be = /<tbody/i,
            ze = /<|&#?\w+;/,
            Ue = /<(?:script|style|link)/i,
            We = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ve = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ze = m(pe),
            Je = Ze.appendChild(pe.createElement("div"));
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
                if (ne.html5Clone || re.isXMLDoc(e) || !Le.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && k(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) _(r, i[a]);
                    else _(e, o);
                return i = g(o, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = s = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, c, u, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
                    if (o = e[p], o || 0 === o)
                        if ("object" === re.type(o)) re.merge(h, o.nodeType ? [o] : o);
                        else if (ze.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), l = (qe.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, s.innerHTML = u[1] + o.replace(Re, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                    if (!ne.leadingWhitespace && He.test(o) && h.push(t.createTextNode(He.exec(o)[0])), !ne.tbody)
                        for (o = "table" !== l || Be.test(o) ? "<table>" !== u[1] || Be.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (re.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = f.lastChild
                } else h.push(t.createTextNode(o));
                for (s && f.removeChild(s), ne.appendChecked || re.grep(g(h, "input"), v), p = 0; o = h[p++];)
                    if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                        for (r = 0; o = s[r++];) Ve.test(o.type || "") && n.push(o);
                return s = null, f
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, c = ne.deleteExpando, u = re.event.special; null != (n = e[a]); a++)
                    if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) u[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== ke ? n.removeAttribute(s) : n[s] = null, Q.push(r))
                    }
            }
        }), re.fn.extend({
            text: function(e) {
                return je(this, function(e) {
                    return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return re.clone(this, e, t)
                })
            },
            html: function(e) {
                return je(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                    if ("string" == typeof e && !Ue.test(e) && (ne.htmlSerialize || !Le.test(e)) && (ne.leadingWhitespace || !He.test(e)) && !Ge[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Re, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Z.apply([], e);
                var n, i, r, o, a, s, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    f = e[0],
                    h = re.isFunction(f);
                if (h || c > 1 && "string" == typeof f && !ne.checkClone && We.test(f)) return this.each(function(n) {
                    var i = u.eq(n);
                    h && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = re.map(g(s, "script"), b), r = o.length; c > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
                    if (r)
                        for (a = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Ve.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                    s = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            re.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[t](n), J.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ke, Ye = {};
        ! function() {
            var e;
            ne.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = pe.getElementsByTagName("body")[0], n && n.style ? (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
            rt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }, tt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
            }) : pe.documentElement.currentStyle && (et = function(e) {
                return e.currentStyle
            }, tt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                function t() {
                    var t, n, i, r;
                    n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, r = t.appendChild(pe.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
                }
                var n, i, r, o, a, s, l;
                n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                    reliableHiddenOffsets: function() {
                        return null == s && t(), s
                    },
                    boxSizingReliable: function() {
                        return null == a && t(), a
                    },
                    pixelPosition: function() {
                        return null == o && t(), o
                    },
                    reliableMarginRight: function() {
                        return null == l && t(), l
                    }
                }))
            }(), re.swap = function(e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = a[o];
                return r
            };
        var ot = /alpha\([^)]*\)/i,
            at = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
            ct = new RegExp("^([+-])=(" + Ee + ")", "i"),
            ut = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            dt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ft = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ne.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = re.camelCase(t),
                        l = e.style;
                    if (t = re.cssProps[s] || (re.cssProps[s] = S(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                    if (o = typeof n, "string" === o && (r = ct.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch (c) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = re.camelCase(t);
                return t = re.cssProps[s] || (re.cssProps[s] = S(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
            }
        }), re.each(["height", "width"], function(e, t) {
            re.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ut, function() {
                        return N(e, t, i)
                    }) : N(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && et(e);
                    return j(e, n, i ? A(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ne.opacity || (re.cssHooks.opacity = {
            get: function(e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), re.cssHooks.marginRight = E(ne.reliableMarginRight, function(e, t) {
            return t ? re.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            re.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Se[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, nt.test(e) || (re.cssHooks[e + t].set = j)
        }), re.fn.extend({
            css: function(e, t) {
                return je(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (re.isArray(t)) {
                        for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    $e(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, re.fx = F.prototype.init, re.fx.step = {};
        var ht, pt, mt = /^(?:toggle|show|hide)$/,
            gt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [M],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = gt.exec(t),
                        o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                        a = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        re.Animation = re.extend(L, {
                tweener: function(e, t) {
                    re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? yt.unshift(e) : yt.push(e)
                }
            }), re.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? re.extend({}, e) : {
                    complete: n || !n && t || re.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !re.isFunction(t) && t
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter($e).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = re.isEmptyObject(e),
                        o = re.speed(t, n, i),
                        a = function() {
                            var t = L(this, re.extend({}, e), o);
                            (r || re._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = re.timers,
                            a = re._data(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && re.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = re._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = re.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(e, t) {
                var n = re.fn[t];
                re.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, r)
                }
            }), re.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                re.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var e, t = re.timers,
                    n = 0;
                for (ht = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || re.fx.stop(), ht = void 0
            }, re.fx.timer = function(e) {
                re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                pt || (pt = setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                clearInterval(pt), pt = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(e, t) {
                return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, r;
                t = pe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = pe.createElement("select"), r = n.appendChild(pe.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = pe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
            }();
        var xt = /\r/g;
        re.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = re.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
                }
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === r) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
                            if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
                }
            }, ne.checkOn || (re.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt, _t, kt = re.expr.attrHandle,
            Ct = /^(?:checked|selected)$/i,
            Tt = ne.getSetAttribute,
            Et = ne.input;
        re.fn.extend({
            attr: function(e, t) {
                return je(this, re.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? _t : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Et && Tt || !Ct.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(Tt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), _t = {
            set: function(e, t, n) {
                return t === !1 ? re.removeAttr(e, n) : Et && Tt || !Ct.test(n) ? e.setAttribute(!Tt && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = kt[t] || re.find.attr;
            kt[t] = Et && Tt || !Ct.test(t) ? function(e, t, i) {
                var r, o;
                return i || (o = kt[t], kt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, kt[t] = o), r
            } : function(e, t, n) {
                return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Et && Tt || (re.attrHooks.value = {
            set: function(e, t, n) {
                return re.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
            }
        }), Tt || (wt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, kt.id = kt.name = kt.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: wt.set
        }, re.attrHooks.contenteditable = {
            set: function(e, t, n) {
                wt.set(e, "" === t ? !1 : t, n)
            }
        }, re.each(["width", "height"], function(e, t) {
            re.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ne.style || (re.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var St = /^(?:input|select|textarea|button|object)$/i,
            $t = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(e, t) {
                return je(this, re.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = re.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), re.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : St.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
            re.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ne.optSelected || (re.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }), ne.enctype || (re.propFix.enctype = "encoding");
        var jt = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    c = "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = re.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? re.trim(i) : "", n.className !== a && (n.className = a);
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) {
                    re(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === ke || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            re.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var At = re.now(),
            Nt = /\?/,
            Ft = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = re.trim(t + "");
            return r && !re.trim(r.replace(Ft, function(e, t, r, o) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
            })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
        }, re.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
        };
        var Dt, Pt, Ot = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ht = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Bt = {},
            zt = {},
            Ut = "*/".concat("*");
        try {
            Pt = location.href
        } catch (Wt) {
            Pt = pe.createElement("a"), Pt.href = "", Pt = Pt.href
        }
        Dt = qt.exec(Pt.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pt,
                type: "GET",
                isLocal: Lt.test(Dt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ut,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? q(q(e, re.ajaxSettings), t) : q(re.ajaxSettings, e)
            },
            ajaxPrefilter: H(Bt),
            ajaxTransport: H(zt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, u, v, y, x, _ = t;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = B(d, w, n)), y = z(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, u = y.data, v = y.error, r = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || _) + "", r ? p.resolveWith(f, [u, _, w]) : p.rejectWith(f, [w, _, v]), w.statusCode(g), g = void 0, l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? u : v]), m.fireWith(f, [w, _]), l && (h.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, l, c, u, d = re.ajaxSetup({}, t),
                    f = d.context || d,
                    h = d.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                    p = re.Deferred(),
                    m = re.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; t = It.exec(a);) u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return c && c.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Pt) + "").replace(Ot, "").replace(Rt, Dt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = qt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), R(Bt, d, t, w), 2 === b) return w;
                l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ht.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Nt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mt.test(o) ? o.replace(Mt, "$1_=" + At++) : o + (Nt.test(o) ? "&" : "?") + "_=" + At++)), d.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[r](d[r]);
                if (c = R(zt, d, t, w)) {
                    w.readyState = 1, l && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (_) {
                        if (!(2 > b)) throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return re.get(e, void 0, t, "script")
            }
        }), re.each(["get", "post"], function(e, t) {
            re[t] = function(e, n, i, r) {
                return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            re.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), re._evalUrl = function(e) {
            return re.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, re.fn.extend({
            wrapAll: function(e) {
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return re.isFunction(e) ? this.each(function(t) {
                    re(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = re(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = re.isFunction(e);
                return this.each(function(n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
        }, re.expr.filters.visible = function(e) {
            return !re.expr.filters.hidden(e)
        };
        var Vt = /%20/g,
            Xt = /\[\]$/,
            Qt = /\r?\n/g,
            Gt = /^(?:submit|button|image|reset|file)$/i,
            Zt = /^(?:input|select|textarea|keygen)/i;
        re.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) U(n, e[n], t, r);
            return i.join("&").replace(Vt, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Zt.test(this.nodeName) && !Gt.test(e) && (this.checked || !Ae.test(e))
                }).map(function(e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Qt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Qt, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || V()
        } : W;
        var Jt = 0,
            Kt = {},
            Yt = re.ajaxSettings.xhr();
        e.ActiveXObject && re(e).on("unload", function() {
            for (var e in Kt) Kt[e](void 0, !0)
        }), ne.cors = !!Yt && "withCredentials" in Yt, Yt = ne.ajax = !!Yt, Yt && re.ajaxTransport(function(e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(),
                            a = ++Jt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, r) {
                            var s, l, c;
                            if (t && (r || 4 === o.readyState))
                                if (delete Kt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (u) {
                                        l = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                            c && i(s, l, c, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = pe.head || re("head")[0] || pe.documentElement;
                return {
                    send: function(i, r) {
                        t = pe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = en.pop() || re.expando + "_" + At++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || re.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || pe;
            var i = de.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
        };
        var nn = re.fn.load;
        re.fn.load = function(e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }), this
        }, re.expr.filters.animated = function(e) {
            return re.grep(re.timers, function(t) {
                return e === t.elem
            }).length
        };
        var rn = e.document.documentElement;
        re.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c, u = re.css(e, "position"),
                    d = re(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === u || "fixed" === u) && re.inArray("auto", [o, l]) > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, re.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = X(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - re.css(i, "marginTop", !0),
                        left: t.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                    return e || rn
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function(i) {
                return je(this, function(e, i, r) {
                    var o = X(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function(e, t) {
            re.cssHooks[t] = E(ne.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            re.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                re.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return je(this, function(t, n, i) {
                        var r;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), re.fn.size = function() {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var on = e.jQuery,
            an = e.$;
        return re.noConflict = function(t) {
            return e.$ === re && (e.$ = an), t && e.jQuery === re && (e.jQuery = on), re
        }, typeof t === ke && (e.jQuery = e.$ = re), re
    }),
    function(e, t) {
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(t) {
                var n = e('meta[name="csrf-token"]').attr("content");
                n && t.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function() {
                var t = e("meta[name=csrf-token]").attr("content"),
                    n = e("meta[name=csrf-param]").attr("content");
                e('form input[name="' + n + '"]').val(t)
            },
            fire: function(t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), r.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            handleRemote: function(i) {
                var r, o, a, s, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (a.push(u), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                    return c = {
                        type: r || "GET",
                        data: a,
                        dataType: l,
                        beforeSend: function(e, r) {
                            return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [e, r]) ? void i.trigger("ajax:send", e) : !1
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(o)
                    }, s && (c.xhrFields = {
                        withCredentials: s
                    }), o && (c.url = o), n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !n.protocol || !n.host || t.protocol + "//" + t.host != n.protocol + "//" + n.host
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    o = i.data("method"),
                    a = i.attr("target"),
                    s = e("meta[name=csrf-token]").attr("content"),
                    l = e("meta[name=csrf-param]").attr("content"),
                    c = e('<form method="post" action="' + r + '"></form>'),
                    u = '<input name="_method" value="' + o + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    r = !1;
                return i ? (n.fire(e, "confirm") && (r = n.confirm(i), t = n.fire(e, "confirm:complete", [r])), r && t) : !0
            },
            blankInputs: function(t, n, i) {
                var r, o, a = e(),
                    s = n || "input,textarea",
                    l = t.find(s);
                return l.each(function() {
                    if (r = e(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                        if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                        a = a.add(r)
                    }
                }), a.length ? a : !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                })
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(e(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
            var r = e(this),
                o = r.data("method"),
                a = r.data("params"),
                s = i.metaKey || i.ctrlKey;
            if (!n.allowAction(r)) return n.stopEverything(i);
            if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
                if (s && (!o || "GET" === o) && !a) return !0;
                var l = n.handleRemote(r);
                return l === !1 ? n.enableElement(r) : l.error(function() {
                    n.enableElement(r)
                }), !1
            }
            return r.data("method") ? (n.handleMethod(r), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return r === !1 ? n.enableFormElement(i) : r.error(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
            var i = e(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var r, o, a = e(this),
                s = a.data("remote") !== t;
            if (!n.allowAction(a)) return n.stopEverything(i);
            if (a.attr("novalidate") == t && (r = n.blankInputs(a, n.requiredInputSelector), r && n.fire(a, "ajax:aborted:required", [r]))) return n.stopEverything(i);
            if (s) {
                if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [o]);
                    return l || setTimeout(function() {
                        n.enableFormElements(a)
                    }, 13), l
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function() {
                n.disableFormElements(a)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                o = r ? {
                    name: r,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", o)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
            this == t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
            this == t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    function() {
        var e = this,
            t = e._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = i.push,
            s = i.slice,
            l = i.concat,
            c = r.toString,
            u = r.hasOwnProperty,
            d = i.forEach,
            f = i.map,
            h = i.reduce,
            p = i.reduceRight,
            m = i.filter,
            g = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            x = Array.isArray,
            w = Object.keys,
            _ = o.bind,
            k = function(e) {
                return e instanceof k ? e : this instanceof k ? void(this._wrapped = e) : new k(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : e._ = k, k.VERSION = "1.6.0";
        var C = k.each = k.forEach = function(e, t, i) {
            if (null == e) return e;
            if (d && e.forEach === d) e.forEach(t, i);
            else if (e.length === +e.length) {
                for (var r = 0, o = e.length; o > r; r++)
                    if (t.call(i, e[r], r, e) === n) return
            } else
                for (var a = k.keys(e), r = 0, o = a.length; o > r; r++)
                    if (t.call(i, e[a[r]], a[r], e) === n) return; return e
        };
        k.map = k.collect = function(e, t, n) {
            var i = [];
            return null == e ? i : f && e.map === f ? e.map(t, n) : (C(e, function(e, r, o) {
                i.push(t.call(n, e, r, o))
            }), i)
        };
        var T = "Reduce of empty array with no initial value";
        k.reduce = k.foldl = k.inject = function(e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), h && e.reduce === h) return i && (t = k.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
            if (C(e, function(e, o, a) {
                    r ? n = t.call(i, n, e, o, a) : (n = e, r = !0)
                }), !r) throw new TypeError(T);
            return n
        }, k.reduceRight = k.foldr = function(e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), p && e.reduceRight === p) return i && (t = k.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
            var o = e.length;
            if (o !== +o) {
                var a = k.keys(e);
                o = a.length
            }
            if (C(e, function(s, l, c) {
                    l = a ? a[--o] : --o, r ? n = t.call(i, n, e[l], l, c) : (n = e[l], r = !0)
                }), !r) throw new TypeError(T);
            return n
        }, k.find = k.detect = function(e, t, n) {
            var i;
            return E(e, function(e, r, o) {
                return t.call(n, e, r, o) ? (i = e, !0) : void 0
            }), i
        }, k.filter = k.select = function(e, t, n) {
            var i = [];
            return null == e ? i : m && e.filter === m ? e.filter(t, n) : (C(e, function(e, r, o) {
                t.call(n, e, r, o) && i.push(e)
            }), i)
        }, k.reject = function(e, t, n) {
            return k.filter(e, function(e, i, r) {
                return !t.call(n, e, i, r)
            }, n)
        }, k.every = k.all = function(e, t, i) {
            t || (t = k.identity);
            var r = !0;
            return null == e ? r : g && e.every === g ? e.every(t, i) : (C(e, function(e, o, a) {
                return (r = r && t.call(i, e, o, a)) ? void 0 : n
            }), !!r)
        };
        var E = k.some = k.any = function(e, t, i) {
            t || (t = k.identity);
            var r = !1;
            return null == e ? r : v && e.some === v ? e.some(t, i) : (C(e, function(e, o, a) {
                return r || (r = t.call(i, e, o, a)) ? n : void 0
            }), !!r)
        };
        k.contains = k.include = function(e, t) {
            return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : E(e, function(e) {
                return e === t
            })
        }, k.invoke = function(e, t) {
            var n = s.call(arguments, 2),
                i = k.isFunction(t);
            return k.map(e, function(e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }, k.pluck = function(e, t) {
            return k.map(e, k.property(t))
        }, k.where = function(e, t) {
            return k.filter(e, k.matches(t))
        }, k.findWhere = function(e, t) {
            return k.find(e, k.matches(t))
        }, k.max = function(e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var i = -(1 / 0),
                r = -(1 / 0);
            return C(e, function(e, o, a) {
                var s = t ? t.call(n, e, o, a) : e;
                s > r && (i = e, r = s)
            }), i
        }, k.min = function(e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            var i = 1 / 0,
                r = 1 / 0;
            return C(e, function(e, o, a) {
                var s = t ? t.call(n, e, o, a) : e;
                r > s && (i = e, r = s)
            }), i
        }, k.shuffle = function(e) {
            var t, n = 0,
                i = [];
            return C(e, function(e) {
                t = k.random(n++), i[n - 1] = i[t], i[t] = e
            }), i
        }, k.sample = function(e, t, n) {
            return null == t || n ? (e.length !== +e.length && (e = k.values(e)), e[k.random(e.length - 1)]) : k.shuffle(e).slice(0, Math.max(0, t))
        };
        var S = function(e) {
            return null == e ? k.identity : k.isFunction(e) ? e : k.property(e)
        };
        k.sortBy = function(e, t, n) {
            return t = S(t), k.pluck(k.map(e, function(e, i, r) {
                return {
                    value: e,
                    index: i,
                    criteria: t.call(n, e, i, r)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var $ = function(e) {
            return function(t, n, i) {
                var r = {};
                return n = S(n), C(t, function(o, a) {
                    var s = n.call(i, o, a, t);
                    e(r, s, o)
                }), r
            }
        };
        k.groupBy = $(function(e, t, n) {
            k.has(e, t) ? e[t].push(n) : e[t] = [n]
        }), k.indexBy = $(function(e, t, n) {
            e[t] = n
        }), k.countBy = $(function(e, t) {
            k.has(e, t) ? e[t]++ : e[t] = 1
        }), k.sortedIndex = function(e, t, n, i) {
            n = S(n);
            for (var r = n.call(i, t), o = 0, a = e.length; a > o;) {
                var s = o + a >>> 1;
                n.call(i, e[s]) < r ? o = s + 1 : a = s
            }
            return o
        }, k.toArray = function(e) {
            return e ? k.isArray(e) ? s.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : []
        }, k.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length
        }, k.first = k.head = k.take = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : s.call(e, 0, t)
        }, k.initial = function(e, t, n) {
            return s.call(e, 0, e.length - (null == t || n ? 1 : t))
        }, k.last = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
        }, k.rest = k.tail = k.drop = function(e, t, n) {
            return s.call(e, null == t || n ? 1 : t)
        }, k.compact = function(e) {
            return k.filter(e, k.identity)
        };
        var j = function(e, t, n) {
            return t && k.every(e, k.isArray) ? l.apply(n, e) : (C(e, function(e) {
                k.isArray(e) || k.isArguments(e) ? t ? a.apply(n, e) : j(e, t, n) : n.push(e)
            }), n)
        };
        k.flatten = function(e, t) {
            return j(e, t, [])
        }, k.without = function(e) {
            return k.difference(e, s.call(arguments, 1))
        }, k.partition = function(e, t) {
            var n = [],
                i = [];
            return C(e, function(e) {
                (t(e) ? n : i).push(e)
            }), [n, i]
        }, k.uniq = k.unique = function(e, t, n, i) {
            k.isFunction(t) && (i = n, n = t, t = !1);
            var r = n ? k.map(e, n, i) : e,
                o = [],
                a = [];
            return C(r, function(n, i) {
                (t ? i && a[a.length - 1] === n : k.contains(a, n)) || (a.push(n), o.push(e[i]))
            }), o
        }, k.union = function() {
            return k.uniq(k.flatten(arguments, !0))
        }, k.intersection = function(e) {
            var t = s.call(arguments, 1);
            return k.filter(k.uniq(e), function(e) {
                return k.every(t, function(t) {
                    return k.contains(t, e)
                })
            })
        }, k.difference = function(e) {
            var t = l.apply(i, s.call(arguments, 1));
            return k.filter(e, function(e) {
                return !k.contains(t, e)
            })
        }, k.zip = function() {
            for (var e = k.max(k.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = k.pluck(arguments, "" + n);
            return t
        }, k.object = function(e, t) {
            if (null == e) return {};
            for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, k.indexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = 0,
                r = e.length;
            if (n) {
                if ("number" != typeof n) return i = k.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && e.indexOf === y) return e.indexOf(t, n);
            for (; r > i; i++)
                if (e[i] === t) return i;
            return -1
        }, k.lastIndexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = null != n;
            if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            for (var r = i ? n : e.length; r--;)
                if (e[r] === t) return r;
            return -1
        }, k.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = e, e += n;
            return o
        };
        var A = function() {};
        k.bind = function(e, t) {
            var n, i;
            if (_ && e.bind === _) return _.apply(e, s.call(arguments, 1));
            if (!k.isFunction(e)) throw new TypeError;
            return n = s.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return e.apply(t, n.concat(s.call(arguments)));
                A.prototype = e.prototype;
                var r = new A;
                A.prototype = null;
                var o = e.apply(r, n.concat(s.call(arguments)));
                return Object(o) === o ? o : r
            }
        }, k.partial = function(e) {
            var t = s.call(arguments, 1);
            return function() {
                for (var n = 0, i = t.slice(), r = 0, o = i.length; o > r; r++) i[r] === k && (i[r] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }, k.bindAll = function(e) {
            var t = s.call(arguments, 1);
            if (0 === t.length) throw new Error("bindAll must be passed function names");
            return C(t, function(t) {
                e[t] = k.bind(e[t], e)
            }), e
        }, k.memoize = function(e, t) {
            var n = {};
            return t || (t = k.identity),
                function() {
                    var i = t.apply(this, arguments);
                    return k.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
        }, k.delay = function(e, t) {
            var n = s.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, k.defer = function(e) {
            return k.delay.apply(k, [e, 1].concat(s.call(arguments, 1)))
        }, k.throttle = function(e, t, n) {
            var i, r, o, a = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : k.now(), a = null, o = e.apply(i, r), i = r = null
            };
            return function() {
                var c = k.now();
                s || n.leading !== !1 || (s = c);
                var u = t - (c - s);
                return i = this, r = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, o = e.apply(i, r), i = r = null) : a || n.trailing === !1 || (a = setTimeout(l, u)), o
            }
        }, k.debounce = function(e, t, n) {
            var i, r, o, a, s, l = function() {
                var c = k.now() - a;
                t > c ? i = setTimeout(l, t - c) : (i = null, n || (s = e.apply(o, r), o = r = null))
            };
            return function() {
                o = this, r = arguments, a = k.now();
                var c = n && !i;
                return i || (i = setTimeout(l, t)), c && (s = e.apply(o, r), o = r = null), s
            }
        }, k.once = function(e) {
            var t, n = !1;
            return function() {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, k.wrap = function(e, t) {
            return k.partial(t, e)
        }, k.compose = function() {
            var e = arguments;
            return function() {
                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, k.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, k.keys = function(e) {
            if (!k.isObject(e)) return [];
            if (w) return w(e);
            var t = [];
            for (var n in e) k.has(e, n) && t.push(n);
            return t
        }, k.values = function(e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = e[t[r]];
            return i
        }, k.pairs = function(e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]];
            return i
        }, k.invert = function(e) {
            for (var t = {}, n = k.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i];
            return t
        }, k.functions = k.methods = function(e) {
            var t = [];
            for (var n in e) k.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, k.extend = function(e) {
            return C(s.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, k.pick = function(e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            return C(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }, k.omit = function(e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            for (var r in e) k.contains(n, r) || (t[r] = e[r]);
            return t
        }, k.defaults = function(e) {
            return C(s.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }, k.clone = function(e) {
            return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
        }, k.tap = function(e, t) {
            return t(e), e
        };
        var N = function(e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
            var r = c.call(e);
            if (r != c.call(t)) return !1;
            switch (r) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var o = n.length; o--;)
                if (n[o] == e) return i[o] == t;
            var a = e.constructor,
                s = t.constructor;
            if (a !== s && !(k.isFunction(a) && a instanceof a && k.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1;
            n.push(e), i.push(t);
            var l = 0,
                u = !0;
            if ("[object Array]" == r) {
                if (l = e.length, u = l == t.length)
                    for (; l-- && (u = N(e[l], t[l], n, i)););
            } else {
                for (var d in e)
                    if (k.has(e, d) && (l++, !(u = k.has(t, d) && N(e[d], t[d], n, i)))) break;
                if (u) {
                    for (d in t)
                        if (k.has(t, d) && !l--) break;
                    u = !l
                }
            }
            return n.pop(), i.pop(), u
        };
        k.isEqual = function(e, t) {
            return N(e, t, [], [])
        }, k.isEmpty = function(e) {
            if (null == e) return !0;
            if (k.isArray(e) || k.isString(e)) return 0 === e.length;
            for (var t in e)
                if (k.has(e, t)) return !1;
            return !0
        }, k.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, k.isArray = x || function(e) {
            return "[object Array]" == c.call(e)
        }, k.isObject = function(e) {
            return e === Object(e)
        }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            k["is" + e] = function(t) {
                return c.call(t) == "[object " + e + "]"
            }
        }), k.isArguments(arguments) || (k.isArguments = function(e) {
            return !(!e || !k.has(e, "callee"))
        }), "function" != typeof /./ && (k.isFunction = function(e) {
            return "function" == typeof e
        }), k.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, k.isNaN = function(e) {
            return k.isNumber(e) && e != +e
        }, k.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
        }, k.isNull = function(e) {
            return null === e
        }, k.isUndefined = function(e) {
            return void 0 === e
        }, k.has = function(e, t) {
            return u.call(e, t)
        }, k.noConflict = function() {
            return e._ = t, this
        }, k.identity = function(e) {
            return e
        }, k.constant = function(e) {
            return function() {
                return e
            }
        }, k.property = function(e) {
            return function(t) {
                return t[e]
            }
        }, k.matches = function(e) {
            return function(t) {
                if (t === e) return !0;
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        }, k.times = function(e, t, n) {
            for (var i = Array(Math.max(0, e)), r = 0; e > r; r++) i[r] = t.call(n, r);
            return i
        }, k.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, k.now = Date.now || function() {
            return (new Date).getTime()
        };
        var F = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        F.unescape = k.invert(F.escape);
        var D = {
            escape: new RegExp("[" + k.keys(F.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + k.keys(F.unescape).join("|") + ")", "g")
        };
        k.each(["escape", "unescape"], function(e) {
            k[e] = function(t) {
                return null == t ? "" : ("" + t).replace(D[e], function(t) {
                    return F[e][t]
                })
            }
        }), k.result = function(e, t) {
            if (null == e) return void 0;
            var n = e[t];
            return k.isFunction(n) ? n.call(e) : n
        }, k.mixin = function(e) {
            C(k.functions(e), function(t) {
                var n = k[t] = e[t];
                k.prototype[t] = function() {
                    var e = [this._wrapped];
                    return a.apply(e, arguments), L.call(this, n.apply(k, e))
                }
            })
        };
        var P = 0;
        k.uniqueId = function(e) {
            var t = ++P + "";
            return e ? e + t : t
        }, k.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var O = /(.)^/,
            M = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            I = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        k.template = function(e, t, n) {
            var i;
            n = k.defaults({}, n, k.templateSettings);
            var r = new RegExp([(n.escape || O).source, (n.interpolate || O).source, (n.evaluate || O).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(r, function(t, n, i, r, s) {
                return a += e.slice(o, s).replace(I, function(e) {
                    return "\\" + M[e]
                }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), o = s + t.length, t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", a)
            } catch (s) {
                throw s.source = a, s
            }
            if (t) return i(t, k);
            var l = function(e) {
                return i.call(this, e, k)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
        }, k.chain = function(e) {
            return k(e).chain()
        };
        var L = function(e) {
            return this._chain ? k(e).chain() : e
        };
        k.mixin(k), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = i[e];
            k.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], L.call(this, n)
            }
        }), C(["concat", "join", "slice"], function(e) {
            var t = i[e];
            k.prototype[e] = function() {
                return L.call(this, t.apply(this._wrapped, arguments))
            }
        }), k.extend(k.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function() {
            return k
        })
    }.call(this),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, i, r) {
            e.Backbone = t(e, r, n, i)
        });
        else if ("undefined" != typeof exports) {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function(e, t, n, i) {
        var r = e.Backbone,
            o = [],
            a = (o.push, o.slice);
        o.splice;
        t.VERSION = "1.1.2", t.$ = i, t.noConflict = function() {
            return e.Backbone = r, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var s = t.Events = {
                on: function(e, t, n) {
                    if (!c(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(e, t, i) {
                    if (!c(this, "once", e, [t, i]) || !t) return this;
                    var r = this,
                        o = n.once(function() {
                            r.off(e, o), t.apply(this, arguments)
                        });
                    return o._callback = t, this.on(e, o, i)
                },
                off: function(e, t, i) {
                    var r, o, a, s, l, u, d, f;
                    if (!this._events || !c(this, "off", e, [t, i])) return this;
                    if (!e && !t && !i) return this._events = void 0, this;
                    for (s = e ? [e] : n.keys(this._events), l = 0, u = s.length; u > l; l++)
                        if (e = s[l], a = this._events[e]) {
                            if (this._events[e] = r = [], t || i)
                                for (d = 0, f = a.length; f > d; d++) o = a[d], (t && t !== o.callback && t !== o.callback._callback || i && i !== o.context) && r.push(o);
                            r.length || delete this._events[e]
                        }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = a.call(arguments, 1);
                    if (!c(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        i = this._events.all;
                    return n && u(n, t), i && u(i, arguments), this
                },
                stopListening: function(e, t, i) {
                    var r = this._listeningTo;
                    if (!r) return this;
                    var o = !t && !i;
                    i || "object" != typeof t || (i = this), e && ((r = {})[e._listenId] = e);
                    for (var a in r) e = r[a], e.off(t, i, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[a];
                    return this
                }
            },
            l = /\s+/,
            c = function(e, t, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                    return !1
                }
                if (l.test(n)) {
                    for (var o = n.split(l), a = 0, s = o.length; s > a; a++) e[t].apply(e, [o[a]].concat(i));
                    return !1
                }
                return !0
            },
            u = function(e, t) {
                var n, i = -1,
                    r = e.length,
                    o = t[0],
                    a = t[1],
                    s = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
                        return;
                    case 2:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, a);
                        return;
                    case 3:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, a, s);
                        return;
                    default:
                        for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
                        return
                }
            },
            d = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(d, function(e, t) {
            s[t] = function(t, i, r) {
                var o = this._listeningTo || (this._listeningTo = {}),
                    a = t._listenId || (t._listenId = n.uniqueId("l"));
                return o[a] = t, r || "object" != typeof i || (r = this), t[e](i, r, this), this
            }
        }), s.bind = s.on, s.unbind = s.off, n.extend(t, s);
        var f = t.Model = function(e, t) {
            var i = e || {};
            t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(f.prototype, s, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return n.escape(this.get(e))
            },
            has: function(e) {
                return null != this.get(e)
            },
            set: function(e, t, i) {
                var r, o, a, s, l, c, u, d;
                if (null == e) return this;
                if ("object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i)) return !1;
                a = i.unset, l = i.silent, s = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), d = this.attributes, u = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (r in o) t = o[r], n.isEqual(d[r], t) || s.push(r), n.isEqual(u[r], t) ? delete this.changed[r] : this.changed[r] = t, a ? delete d[r] : d[r] = t;
                if (!l) {
                    s.length && (this._pending = i);
                    for (var f = 0, h = s.length; h > f; f++) this.trigger("change:" + s[f], this, d[s[f]], i)
                }
                if (c) return this;
                if (!l)
                    for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var i in this.attributes) t[i] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, i = !1,
                    r = this._changing ? this._previousAttributes : this.attributes;
                for (var o in e) n.isEqual(r[o], t = e[o]) || ((i || (i = {}))[o] = t);
                return i
            },
            previous: function(e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = this,
                    i = e.success;
                return e.success = function(n) {
                    return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1
                }, I(this, e), this.sync("read", this, e)
            },
            save: function(e, t, i) {
                var r, o, a, s = this.attributes;
                if (null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
                        validate: !0
                    }, i), r && !i.wait) {
                    if (!this.set(r, i)) return !1
                } else if (!this._validate(r, i)) return !1;
                r && i.wait && (this.attributes = n.extend({}, s, r)), void 0 === i.parse && (i.parse = !0);
                var l = this,
                    c = i.success;
                return i.success = function(e) {
                    l.attributes = s;
                    var t = l.parse(e, i);
                    return i.wait && (t = n.extend(r || {}, t)), n.isObject(t) && !l.set(t, i) ? !1 : (c && c(l, e, i), void l.trigger("sync", l, e, i))
                }, I(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), a = this.sync(o, this, i), r && i.wait && (this.attributes = s), a
            },
            destroy: function(e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    i = e.success,
                    r = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                if (e.success = function(n) {
                        (e.wait || t.isNew()) && r(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                    }, this.isNew()) return e.success(), !1;
                I(this, e);
                var o = this.sync("delete", this, e);
                return e.wait || r(), o
            },
            url: function() {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || M();
                return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(e) {
                return this._validate({}, n.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var i = this.validationError = this.validate(e, t) || null;
                return i ? (this.trigger("invalid", this, i, n.extend(t, {
                    validationError: i
                })), !1) : !0
            }
        });
        var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(h, function(e) {
            f.prototype[e] = function() {
                var t = a.call(arguments);
                return t.unshift(this.attributes), n[e].apply(n, t)
            }
        });
        var p = t.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                    silent: !0
                }, t))
            },
            m = {
                add: !0,
                remove: !0,
                merge: !0
            },
            g = {
                add: !0,
                remove: !1
            };
        n.extend(p.prototype, s, {
            model: f,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, n.extend({
                    merge: !1
                }, t, g))
            },
            remove: function(e, t) {
                var i = !n.isArray(e);
                e = i ? [e] : n.clone(e), t || (t = {});
                var r, o, a, s;
                for (r = 0, o = e.length; o > r; r++) s = e[r] = this.get(e[r]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
                return i ? e[0] : e
            },
            set: function(e, t) {
                t = n.defaults({}, t, m), t.parse && (e = this.parse(e, t));
                var i = !n.isArray(e);
                e = i ? e ? [e] : [] : n.clone(e);
                var r, o, a, s, l, c, u, d = t.at,
                    h = this.model,
                    p = this.comparator && null == d && t.sort !== !1,
                    g = n.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    y = [],
                    b = {},
                    x = t.add,
                    w = t.merge,
                    _ = t.remove,
                    k = !p && x && _ ? [] : !1;
                for (r = 0, o = e.length; o > r; r++) {
                    if (l = e[r] || {}, a = l instanceof f ? s = l : l[h.prototype.idAttribute || "id"], c = this.get(a)) _ && (b[c.cid] = !0), w && (l = l === s ? s.attributes : l, t.parse && (l = c.parse(l, t)), c.set(l, t), p && !u && c.hasChanged(g) && (u = !0)), e[r] = c;
                    else if (x) {
                        if (s = e[r] = this._prepareModel(l, t), !s) continue;
                        v.push(s), this._addReference(s, t)
                    }
                    s = c || s, !k || !s.isNew() && b[s.id] || k.push(s), b[s.id] = !0
                }
                if (_) {
                    for (r = 0, o = this.length; o > r; ++r) b[(s = this.models[r]).cid] || y.push(s);
                    y.length && this.remove(y, t)
                }
                if (v.length || k && k.length)
                    if (p && (u = !0), this.length += v.length, null != d)
                        for (r = 0, o = v.length; o > r; r++) this.models.splice(d + r, 0, v[r]);
                    else {
                        k && (this.models.length = 0);
                        var C = k || v;
                        for (r = 0, o = C.length; o > r; r++) this.models.push(C[r])
                    }
                if (u && this.sort({
                        silent: !0
                    }), !t.silent) {
                    for (r = 0, o = v.length; o > r; r++)(s = v[r]).trigger("add", s, this, t);
                    (u || k && k.length) && this.trigger("sort", this, t)
                }
                return i ? e[0] : e
            },
            reset: function(e, t) {
                t || (t = {});
                for (var i = 0, r = this.models.length; r > i; i++) this._removeReference(this.models[i], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function(e, t) {
                return this.add(e, n.extend({
                    at: this.length
                }, t))
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return this.add(e, n.extend({
                    at: 0
                }, t))
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function() {
                return a.apply(this.models, arguments)
            },
            get: function(e) {
                return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e, t) {
                return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return n.invoke(this.models, "get", e)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success,
                    i = this;
                return e.success = function(n) {
                    var r = e.reset ? "reset" : "set";
                    i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                }, I(this, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var i = this,
                    r = t.success;
                return t.success = function(e, n) {
                    t.wait && i.add(e, t), r && r(e, n, t)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof f) return e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var i = new this.model(e, t);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
            },
            _addReference: function(e, t) {
                this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function(e, t) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, i) {
                ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            }
        });
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(v, function(e) {
            p.prototype[e] = function() {
                var t = a.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var y = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(y, function(e) {
            p.prototype[e] = function(t, i) {
                var r = n.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return n[e](this.models, r, i)
            }
        });
        var b = t.View = function(e) {
                this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            x = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(b.prototype, s, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = n.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var i = e[t];
                    if (n.isFunction(i) || (i = this[e[t]]), i) {
                        var r = t.match(x),
                            o = r[1],
                            a = r[2];
                        i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === a ? this.$el.on(o, i) : this.$el.on(o, a, i)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(n.result(this, "el"), !1);
                else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(i, !1)
                }
            }
        }), t.sync = function(e, i, r) {
            var o = k[e];
            n.defaults(r || (r = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var a = {
                type: o,
                dataType: "json"
            };
            if (r.url || (a.url = n.result(i, "url") || M()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                    model: a.data
                } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                a.type = "POST", r.emulateJSON && (a.data._method = o);
                var s = r.beforeSend;
                r.beforeSend = function(e) {
                    return e.setRequestHeader("X-HTTP-Method-Override", o), s ? s.apply(this, arguments) : void 0
                }
            }
            "GET" === a.type || r.emulateJSON || (a.processData = !1), "PATCH" === a.type && _ && (a.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = r.xhr = t.ajax(n.extend(a, r));
            return i.trigger("request", i, l, r), l
        };
        var _ = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            k = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var C = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            T = /\((.*?)\)/g,
            E = /(\(\?)?:\w+/g,
            S = /\*\w+/g,
            $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(C.prototype, s, {
            initialize: function() {},
            route: function(e, i, r) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                var o = this;
                return t.history.route(e, function(n) {
                    var a = o._extractParameters(e, n);
                    o.execute(r, a), o.trigger.apply(o, ["route:" + i].concat(a)), o.trigger("route", i, a), t.history.trigger("route", o, i, a)
                }), this
            },
            execute: function(e, t) {
                e && e.apply(this, t)
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function(e) {
                return e = e.replace($, "\\$&").replace(T, "(?:$1)?").replace(E, function(e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(S, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(e, t) {
                var i = e.exec(t).slice(1);
                return n.map(i, function(e, t) {
                    return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var j = t.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            A = /^[#\/]|\s+$/g,
            N = /^\/+|\/+$/g,
            F = /msie [\w.]+/,
            D = /\/$/,
            P = /#.*$/;
        j.started = !1, n.extend(j.prototype, s, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function(e, t) {
                if (null == e)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(D, "");
                        e.indexOf(n) || (e = e.slice(n.length))
                    } else e = this.getHash();
                return e.replace(A, "")
            },
            start: function(e) {
                if (j.started) throw new Error("Backbone.history has already been started");
                j.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    r = document.documentMode,
                    o = F.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
                if (this.root = ("/" + this.root + "/").replace(N, "/"), o && this._wantsHashChange) {
                    var a = t.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                }
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                var s = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(A, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), j.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
            },
            loadUrl: function(e) {
                return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                })
            },
            navigate: function(e, t) {
                if (!j.started) return !1;
                t && t !== !0 || (t = {
                    trigger: !!t
                });
                var n = this.root + (e = this.getFragment(e || ""));
                if (e = e.replace(P, ""), this.fragment !== e) {
                    if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            },
            _updateHash: function(e, t, n) {
                if (n) {
                    var i = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(i + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new j;
        var O = function(e, t) {
            var i, r = this;
            i = e && n.has(e, "constructor") ? e.constructor : function() {
                return r.apply(this, arguments)
            }, n.extend(i, r, t);
            var o = function() {
                this.constructor = i
            };
            return o.prototype = r.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
        };
        f.extend = p.extend = C.extend = b.extend = j.extend = O;
        var M = function() {
                throw new Error('A "url" property or function must be specified')
            },
            I = function(e, t) {
                var n = t.error;
                t.error = function(i) {
                    n && n(e, i, t), e.trigger("error", e, i, t)
                }
            };
        return t
    }), /*! noUiSlider - 7.0.10 - 2014-12-27 14:50:46 */
    function() {
        "use strict";

        function e(e) {
            return e.split("").reverse().join("")
        }

        function t(e, t) {
            return e.substring(0, t.length) === t
        }

        function n(e, t) {
            return e.slice(-1 * t.length) === t
        }

        function i(e, t, n) {
            if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t)
        }

        function r(e) {
            return "number" == typeof e && isFinite(e)
        }

        function o(e, t) {
            var n = Math.pow(10, t);
            return (Math.round(e * n) / n).toFixed(t)
        }

        function a(t, n, i, a, s, l, c, u, d, f, h, p) {
            var m, g, v, y = p,
                b = "",
                x = "";
            return l && (p = l(p)), r(p) ? (t !== !1 && 0 === parseFloat(p.toFixed(t)) && (p = 0), 0 > p && (m = !0, p = Math.abs(p)), t !== !1 && (p = o(p, t)), p = p.toString(), -1 !== p.indexOf(".") ? (g = p.split("."), v = g[0], i && (b = i + g[1])) : v = p, n && (v = e(v).match(/.{1,3}/g), v = e(v.join(e(n)))), m && u && (x += u), a && (x += a), m && d && (x += d), x += v, x += b, s && (x += s), f && (x = f(x, y)), x) : !1
        }

        function s(e, i, o, a, s, l, c, u, d, f, h, p) {
            var m, g = "";
            return h && (p = h(p)), p && "string" == typeof p ? (u && t(p, u) && (p = p.replace(u, ""), m = !0), a && t(p, a) && (p = p.replace(a, "")), d && t(p, d) && (p = p.replace(d, ""), m = !0), s && n(p, s) && (p = p.slice(0, -1 * s.length)), i && (p = p.split(i).join("")), o && (p = p.replace(o, ".")), m && (g += "-"), g += p, g = g.replace(/[^0-9\.\-.]/g, ""), "" === g ? !1 : (g = Number(g), c && (g = c(g)), r(g) ? g : !1)) : !1
        }

        function l(e) {
            var t, n, r, o = {};
            for (t = 0; t < d.length; t += 1)
                if (n = d[t], r = e[n], void 0 === r) "negative" !== n || o.negativeBefore ? "mark" === n && "." !== o.thousand ? o[n] = "." : o[n] = !1 : o[n] = "-";
                else if ("decimals" === n) {
                if (!(r >= 0 && 8 > r)) throw new Error(n);
                o[n] = r
            } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                if ("function" != typeof r) throw new Error(n);
                o[n] = r
            } else {
                if ("string" != typeof r) throw new Error(n);
                o[n] = r
            }
            return i(o, "mark", "thousand"), i(o, "prefix", "negative"), i(o, "prefix", "negativeBefore"), o
        }

        function c(e, t, n) {
            var i, r = [];
            for (i = 0; i < d.length; i += 1) r.push(e[d[i]]);
            return r.push(n), t.apply("", r)
        }

        function u(e) {
            return this instanceof u ? void("object" == typeof e && (e = l(e), this.to = function(t) {
                return c(e, a, t)
            }, this.from = function(t) {
                return c(e, s, t)
            })) : new u(e)
        }
        var d = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
        window.wNumb = u
    }(),
    function(e) {
        "use strict";

        function t(t) {
            return t instanceof e || e.zepto && e.zepto.isZ(t)
        }

        function n(t, n) {
            return "string" == typeof t && 0 === t.indexOf("-inline-") ? (this.method = n || "html", this.target = this.el = e(t.replace("-inline-", "") || "<div/>"), !0) : void 0
        }

        function i(t) {
            if ("string" == typeof t && 0 !== t.indexOf("-")) {
                this.method = "val";
                var n = document.createElement("input");
                return n.name = t, n.type = "hidden", this.target = this.el = e(n), !0
            }
        }

        function r(e) {
            return "function" == typeof e ? (this.target = !1, this.method = e, !0) : void 0
        }

        function o(e, n) {
            return t(e) && !n ? (e.is("input, select, textarea") ? (this.method = "val", this.target = e.on("change.liblink", this.changeHandler)) : (this.target = e, this.method = "html"), !0) : void 0
        }

        function a(e, n) {
            return t(e) && ("function" == typeof n || "string" == typeof n && e[n]) ? (this.method = n, this.target = e, !0) : void 0
        }

        function s(t, n, i) {
            var r = this,
                o = !1;
            if (this.changeHandler = function(t) {
                    var n = r.formatInstance.from(e(this).val());
                    return n === !1 || isNaN(n) ? (e(this).val(r.lastSetValue), !1) : void r.changeHandlerMethod.call("", t, n)
                }, this.el = !1, this.formatInstance = i, e.each(u, function(e, i) {
                    return o = i.call(r, t, n), !o
                }), !o) throw new RangeError("(Link) Invalid Link.")
        }

        function l(e) {
            this.items = [], this.elements = [], this.origin = e
        }

        function c(t, n, i, r) {
            0 === t && (t = this.LinkDefaultFlag), this.linkAPI || (this.linkAPI = {}), this.linkAPI[t] || (this.linkAPI[t] = new l(this));
            var o = new s(n, i, r || this.LinkDefaultFormatter);
            o.target || (o.target = e(this)), o.changeHandlerMethod = this.LinkConfirm(t, o.el), this.linkAPI[t].push(o, o.el), this.LinkUpdate(t)
        }
        var u = [n, i, r, o, a];
        s.prototype.set = function(e) {
            var t = Array.prototype.slice.call(arguments),
                n = t.slice(1);
            this.lastSetValue = this.formatInstance.to(e), n.unshift(this.lastSetValue), ("function" == typeof this.method ? this.method : this.target[this.method]).apply(this.target, n)
        }, l.prototype.push = function(e, t) {
            this.items.push(e), t && this.elements.push(t)
        }, l.prototype.reconfirm = function(e) {
            var t;
            for (t = 0; t < this.elements.length; t += 1) this.origin.LinkConfirm(e, this.elements[t])
        }, l.prototype.remove = function(e) {
            var t;
            for (t = 0; t < this.items.length; t += 1) this.items[t].target.off(".liblink");
            for (t = 0; t < this.elements.length; t += 1) this.elements[t].remove()
        }, l.prototype.change = function(e) {
            if (this.origin.LinkIsEmitting) return !1;
            this.origin.LinkIsEmitting = !0;
            var t, n = Array.prototype.slice.call(arguments, 1);
            for (n.unshift(e), t = 0; t < this.items.length; t += 1) this.items[t].set.apply(this.items[t], n);
            this.origin.LinkIsEmitting = !1
        }, e.fn.Link = function(t) {
            var n = this;
            if (t === !1) return n.each(function() {
                this.linkAPI && (e.map(this.linkAPI, function(e) {
                    e.remove()
                }), delete this.linkAPI)
            });
            if (void 0 === t) t = 0;
            else if ("string" != typeof t) throw new Error("Flag must be string.");
            return {
                to: function(e, i, r) {
                    return n.each(function() {
                        c.call(this, t, e, i, r)
                    })
                }
            }
        }
    }(window.jQuery || window.Zepto),
    function(e) {
        "use strict";

        function t(t) {
            return e.grep(t, function(n, i) {
                return i === e.inArray(n, t)
            })
        }

        function n(e, t) {
            return Math.round(e / t) * t
        }

        function i(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }

        function r(e) {
            var t = Math.pow(10, 7);
            return Number((Math.round(e * t) / t).toFixed(7))
        }

        function o(e, t, n) {
            e.addClass(t), setTimeout(function() {
                e.removeClass(t)
            }, n)
        }

        function a(e) {
            return Math.max(Math.min(e, 100), 0)
        }

        function s(t) {
            return e.isArray(t) ? t : [t]
        }

        function l(e) {
            var t = e.split(".");
            return t.length > 1 ? t[1].length : 0
        }

        function c(e, t) {
            return 100 / (t - e)
        }

        function u(e, t) {
            return 100 * t / (e[1] - e[0])
        }

        function d(e, t) {
            return u(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0])
        }

        function f(e, t) {
            return t * (e[1] - e[0]) / 100 + e[0]
        }

        function h(e, t) {
            for (var n = 1; e >= t[n];) n += 1;
            return n
        }

        function p(e, t, n) {
            if (n >= e.slice(-1)[0]) return 100;
            var i, r, o, a, s = h(n, e);
            return i = e[s - 1], r = e[s], o = t[s - 1], a = t[s], o + d([i, r], n) / c(o, a)
        }

        function m(e, t, n) {
            if (n >= 100) return e.slice(-1)[0];
            var i, r, o, a, s = h(n, t);
            return i = e[s - 1], r = e[s], o = t[s - 1], a = t[s], f([i, r], (n - o) * c(o, a))
        }

        function g(e, t, i, r) {
            if (100 === r) return r;
            var o, a, s = h(r, e);
            return i ? (o = e[s - 1], a = e[s], r - o > (a - o) / 2 ? a : o) : t[s - 1] ? e[s - 1] + n(r - e[s - 1], t[s - 1]) : r
        }

        function v(e, t, n) {
            var r;
            if ("number" == typeof t && (t = [t]), "[object Array]" !== Object.prototype.toString.call(t)) throw new Error("noUiSlider: 'range' contains invalid value.");
            if (r = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e), !i(r) || !i(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
            n.xPct.push(r), n.xVal.push(t[0]), r ? n.xSteps.push(isNaN(t[1]) ? !1 : t[1]) : isNaN(t[1]) || (n.xSteps[0] = t[1])
        }

        function y(e, t, n) {
            return t ? void(n.xSteps[e] = u([n.xVal[e], n.xVal[e + 1]], t) / c(n.xPct[e], n.xPct[e + 1])) : !0
        }

        function b(e, t, n, i) {
            this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.snap = t, this.direction = n;
            var r, o = [];
            for (r in e) e.hasOwnProperty(r) && o.push([e[r], r]);
            for (o.sort(function(e, t) {
                    return e[0] - t[0]
                }), r = 0; r < o.length; r++) v(o[r][1], o[r][0], this);
            for (this.xNumSteps = this.xSteps.slice(0), r = 0; r < this.xNumSteps.length; r++) y(r, this.xNumSteps[r], this)
        }

        function x(e, t) {
            if (!i(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t
        }

        function w(t, n) {
            if ("object" != typeof n || e.isArray(n)) throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === n.min || void 0 === n.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            t.spectrum = new b(n, t.snap, t.dir, t.singleStep)
        }

        function _(t, n) {
            if (n = s(n), !e.isArray(n) || !n.length || n.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
            t.handles = n.length, t.start = n
        }

        function k(e, t) {
            if (e.snap = t, "boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.")
        }

        function C(e, t) {
            if (e.animate = t, "boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.")
        }

        function T(e, t) {
            if ("lower" === t && 1 === e.handles) e.connect = 1;
            else if ("upper" === t && 1 === e.handles) e.connect = 2;
            else if (t === !0 && 2 === e.handles) e.connect = 3;
            else {
                if (t !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                e.connect = 0
            }
        }

        function E(e, t) {
            switch (t) {
                case "horizontal":
                    e.ort = 0;
                    break;
                case "vertical":
                    e.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'orientation' option is invalid.")
            }
        }

        function S(e, t) {
            if (!i(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (e.margin = e.spectrum.getMargin(t), !e.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
        }

        function $(e, t) {
            if (!i(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (e.limit = e.spectrum.getMargin(t), !e.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
        }

        function j(e, t) {
            switch (t) {
                case "ltr":
                    e.dir = 0;
                    break;
                case "rtl":
                    e.dir = 1, e.connect = [0, 2, 1, 3][e.connect];
                    break;
                default:
                    throw new Error("noUiSlider: 'direction' option was not recognized.")
            }
        }

        function A(e, t) {
            if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var n = t.indexOf("tap") >= 0,
                i = t.indexOf("drag") >= 0,
                r = t.indexOf("fixed") >= 0,
                o = t.indexOf("snap") >= 0;
            e.events = {
                tap: n || o,
                drag: i,
                fixed: r,
                snap: o
            }
        }

        function N(e, t) {
            if (e.format = t, "function" == typeof t.to && "function" == typeof t.from) return !0;
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
        }

        function F(t) {
            var n, i = {
                margin: 0,
                limit: 0,
                animate: !0,
                format: J
            };
            return n = {
                step: {
                    r: !1,
                    t: x
                },
                start: {
                    r: !0,
                    t: _
                },
                connect: {
                    r: !0,
                    t: T
                },
                direction: {
                    r: !0,
                    t: j
                },
                snap: {
                    r: !1,
                    t: k
                },
                animate: {
                    r: !1,
                    t: C
                },
                range: {
                    r: !0,
                    t: w
                },
                orientation: {
                    r: !1,
                    t: E
                },
                margin: {
                    r: !1,
                    t: S
                },
                limit: {
                    r: !1,
                    t: $
                },
                behaviour: {
                    r: !0,
                    t: A
                },
                format: {
                    r: !1,
                    t: N
                }
            }, t = e.extend({
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal"
            }, t), e.each(n, function(e, n) {
                if (void 0 === t[e]) {
                    if (n.r) throw new Error("noUiSlider: '" + e + "' is required.");
                    return !0
                }
                n.t(i, t[e])
            }), i.style = i.ort ? "top" : "left", i
        }

        function D(e, t, n) {
            var i = e + t[0],
                r = e + t[1];
            return n ? (0 > i && (r += Math.abs(i)), r > 100 && (i -= r - 100), [a(i), a(r)]) : [i, r]
        }

        function P(e) {
            e.preventDefault();
            var t, n, i = 0 === e.type.indexOf("touch"),
                r = 0 === e.type.indexOf("mouse"),
                o = 0 === e.type.indexOf("pointer"),
                a = e;
            return 0 === e.type.indexOf("MSPointer") && (o = !0), e.originalEvent && (e = e.originalEvent), i && (t = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY), (r || o) && (o || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), t = e.clientX + window.pageXOffset, n = e.clientY + window.pageYOffset), a.points = [t, n], a.cursor = r, a
        }

        function O(t, n) {
            var i = e("<div><div/></div>").addClass(Z[2]),
                r = ["-lower", "-upper"];
            return t && r.reverse(), i.children().addClass(Z[3] + " " + Z[3] + r[n]), i
        }

        function M(e, t, n) {
            switch (e) {
                case 1:
                    t.addClass(Z[7]), n[0].addClass(Z[6]);
                    break;
                case 3:
                    n[1].addClass(Z[6]);
                case 2:
                    n[0].addClass(Z[7]);
                case 0:
                    t.addClass(Z[6])
            }
        }

        function I(e, t, n) {
            var i, r = [];
            for (i = 0; e > i; i += 1) r.push(O(t, i).appendTo(n));
            return r
        }

        function L(t, n, i) {
            return i.addClass([Z[0], Z[8 + t], Z[4 + n]].join(" ")), e("<div/>").appendTo(i).addClass(Z[1])
        }

        function H(t, n, i) {
            function r() {
                return $[["width", "height"][n.ort]]()
            }

            function c(e) {
                var t, n = [A.val()];
                for (t = 0; t < e.length; t += 1) A.trigger(e[t], n)
            }

            function u(e) {
                return 1 === e.length ? e[0] : n.dir ? e.reverse() : e
            }

            function d(e) {
                return function(t, n) {
                    A.val([e ? null : n, e ? n : null], !0)
                }
            }

            function f(t) {
                var n = e.inArray(t, H);
                A[0].linkAPI && A[0].linkAPI[t] && A[0].linkAPI[t].change(O[n], j[n].children(), A)
            }

            function h(t, i) {
                var r = e.inArray(t, H);
                return i && i.appendTo(j[r].children()), n.dir && n.handles > 1 && (r = 1 === r ? 0 : 1), d(r)
            }

            function p() {
                var e, t;
                for (e = 0; e < H.length; e += 1) this.linkAPI && this.linkAPI[t = H[e]] && this.linkAPI[t].reconfirm(t)
            }

            function m(e, t, i, r) {
                return e = e.replace(/\s/g, Q + " ") + Q, t.on(e, function(e) {
                    return A.attr("disabled") ? !1 : A.hasClass(Z[14]) ? !1 : (e = P(e), e.calcPoint = e.points[n.ort], void i(e, r))
                })
            }

            function g(e, t) {
                var n, i = t.handles || j,
                    o = !1,
                    a = 100 * (e.calcPoint - t.start) / r(),
                    s = i[0][0] !== j[0][0] ? 1 : 0;
                n = D(a, t.positions, i.length > 1), o = w(i[0], n[s], 1 === i.length), i.length > 1 && (o = w(i[1], n[s ? 0 : 1], !1) || o), o && c(["slide"])
            }

            function v(t) {
                e("." + Z[15]).removeClass(Z[15]), t.cursor && e("body").css("cursor", "").off(Q), V.off(Q), A.removeClass(Z[12]), c(["set", "change"])
            }

            function y(t, n) {
                1 === n.handles.length && n.handles[0].children().addClass(Z[15]), t.stopPropagation(), m(G.move, V, g, {
                    start: t.calcPoint,
                    handles: n.handles,
                    positions: [N[0], N[j.length - 1]]
                }), m(G.end, V, v, null), t.cursor && (e("body").css("cursor", e(t.target).css("cursor")), j.length > 1 && A.addClass(Z[12]), e("body").on("selectstart" + Q, !1))
            }

            function b(t) {
                var i, a = t.calcPoint,
                    s = 0;
                t.stopPropagation(), e.each(j, function() {
                    s += this.offset()[n.style]
                }), s = s / 2 > a || 1 === j.length ? 0 : 1, a -= $.offset()[n.style], i = 100 * a / r(), n.events.snap || o(A, Z[14], 300), w(j[s], i), c(["slide", "set", "change"]), n.events.snap && y(t, {
                    handles: [j[s]]
                })
            }

            function x(e) {
                var t, n;
                if (!e.fixed)
                    for (t = 0; t < j.length; t += 1) m(G.start, j[t].children(), y, {
                        handles: [j[t]]
                    });
                e.tap && m(G.start, $, b, {
                    handles: j
                }), e.drag && (n = $.find("." + Z[7]).addClass(Z[10]), e.fixed && (n = n.add($.children().not(n).children())), m(G.start, n, y, {
                    handles: j
                }))
            }

            function w(e, t, i) {
                var r = e[0] !== j[0][0] ? 1 : 0,
                    o = N[0] + n.margin,
                    s = N[1] - n.margin,
                    l = N[0] + n.limit,
                    c = N[1] - n.limit;
                return j.length > 1 && (t = r ? Math.max(t, o) : Math.min(t, s)), i !== !1 && n.limit && j.length > 1 && (t = r ? Math.min(t, l) : Math.max(t, c)), t = F.getStep(t), t = a(parseFloat(t.toFixed(7))), t === N[r] ? !1 : (e.css(n.style, t + "%"), e.is(":first-child") && e.toggleClass(Z[17], t > 50), N[r] = t, O[r] = F.fromStepping(t), f(H[r]), !0)
            }

            function _(e, t) {
                var i, r, o;
                for (n.limit && (e += 1), i = 0; e > i; i += 1) r = i % 2, o = t[r], null !== o && o !== !1 && ("number" == typeof o && (o = String(o)), o = n.format.from(o), (o === !1 || isNaN(o) || w(j[r], F.toStepping(o), i === 3 - n.dir) === !1) && f(H[r]))
            }

            function k(e) {
                if (A[0].LinkIsEmitting) return this;
                var t, i = s(e);
                return n.dir && n.handles > 1 && i.reverse(), n.animate && -1 !== N[0] && o(A, Z[14], 300), t = j.length > 1 ? 3 : 1, 1 === i.length && (t = 1), _(t, i), c(["set"]), this
            }

            function C() {
                var e, t = [];
                for (e = 0; e < n.handles; e += 1) t[e] = n.format.to(O[e]);
                return u(t)
            }

            function T() {
                return e(this).off(Q).removeClass(Z.join(" ")).empty(), delete this.LinkUpdate, delete this.LinkConfirm, delete this.LinkDefaultFormatter, delete this.LinkDefaultFlag, delete this.reappend, delete this.vGet, delete this.vSet, delete this.getCurrentStep, delete this.getInfo, delete this.destroy, i
            }

            function E() {
                var t = e.map(N, function(e, t) {
                    var n = F.getApplicableStep(e),
                        i = l(String(n[2])),
                        r = O[t],
                        o = 100 === e ? null : n[2],
                        a = Number((r - n[2]).toFixed(i)),
                        s = 0 === e ? null : a >= n[1] ? n[2] : n[0] || !1;
                    return [
                        [s, o]
                    ]
                });
                return u(t)
            }

            function S() {
                return i
            }
            var $, j, A = e(t),
                N = [-1, -1],
                F = n.spectrum,
                O = [],
                H = ["lower", "upper"].slice(0, n.handles);
            if (n.dir && H.reverse(), t.LinkUpdate = f, t.LinkConfirm = h, t.LinkDefaultFormatter = n.format, t.LinkDefaultFlag = "lower", t.reappend = p, A.hasClass(Z[0])) throw new Error("Slider was already initialized.");
            $ = L(n.dir, n.ort, A), j = I(n.handles, n.dir, $), M(n.connect, A, j), x(n.events), t.vSet = k, t.vGet = C, t.destroy = T, t.getCurrentStep = E, t.getOriginalOptions = S, t.getInfo = function() {
                return [F, n.style, n.ort]
            }, A.val(n.start)
        }

        function R(e) {
            var t = F(e, this);
            return this.each(function() {
                H(this, t, e)
            })
        }

        function q(t) {
            return this.each(function() {
                if (!this.destroy) return void e(this).noUiSlider(t);
                var n = e(this).val(),
                    i = this.destroy(),
                    r = e.extend({}, i, t);
                e(this).noUiSlider(r), this.reappend(), i.start === r.start && e(this).val(n)
            })
        }

        function B() {
            return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
        }

        function z(t, n, i, r) {
            if ("range" === n || "steps" === n) return t.xVal;
            if ("count" === n) {
                var o, a = 100 / (i - 1),
                    s = 0;
                for (i = [];
                    (o = s++ * a) <= 100;) i.push(o);
                n = "positions"
            }
            return "positions" === n ? e.map(i, function(e) {
                return t.fromStepping(r ? t.getStep(e) : e)
            }) : "values" === n ? r ? e.map(i, function(e) {
                return t.fromStepping(t.getStep(t.toStepping(e)))
            }) : i : void 0
        }

        function U(n, i, r, o) {
            var a = n.direction,
                s = {},
                l = n.xVal[0],
                c = n.xVal[n.xVal.length - 1],
                u = !1,
                d = !1,
                f = 0;
            return n.direction = 0, o = t(o.slice().sort(function(e, t) {
                return e - t
            })), o[0] !== l && (o.unshift(l), u = !0), o[o.length - 1] !== c && (o.push(c), d = !0), e.each(o, function(t) {
                var a, l, c, h, p, m, g, v, y, b, x = o[t],
                    w = o[t + 1];
                if ("steps" === r && (a = n.xNumSteps[t]), a || (a = w - x), x !== !1 && void 0 !== w)
                    for (l = x; w >= l; l += a) {
                        for (h = n.toStepping(l), p = h - f, v = p / i, y = Math.round(v), b = p / y, c = 1; y >= c; c += 1) m = f + c * b, s[m.toFixed(5)] = ["x", 0];
                        g = e.inArray(l, o) > -1 ? 1 : "steps" === r ? 2 : 0, !t && u && (g = 0), l === w && d || (s[h.toFixed(5)] = [l, g]), f = h
                    }
            }), n.direction = a, s
        }

        function W(t, n, i, r, o, a) {
            function s(e, t) {
                return ["-normal", "-large", "-sub"][e]
            }

            function l(e, n, i) {
                return 'class="' + n + " " + n + "-" + u + " " + n + s(i[1], i[0]) + '" style="' + t + ": " + e + '%"'
            }

            function c(e, t) {
                i && (e = 100 - e), t[1] = t[1] && o ? o(t[0], t[1]) : t[1], d.append("<div " + l(e, "noUi-marker", t) + "></div>"), t[1] && d.append("<div " + l(e, "noUi-value", t) + ">" + a.to(t[0]) + "</div>")
            }
            var u = ["horizontal", "vertical"][n],
                d = e("<div/>");
            return d.addClass("noUi-pips noUi-pips-" + u), e.each(r, c), d
        }
        var V = e(document),
            X = e.fn.val,
            Q = ".nui",
            G = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            Z = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
        b.prototype.getMargin = function(e) {
            return 2 === this.xPct.length ? u(this.xVal, e) : !1
        }, b.prototype.toStepping = function(e) {
            return e = p(this.xVal, this.xPct, e), this.direction && (e = 100 - e), e
        }, b.prototype.fromStepping = function(e) {
            return this.direction && (e = 100 - e), r(m(this.xVal, this.xPct, e))
        }, b.prototype.getStep = function(e) {
            return this.direction && (e = 100 - e), e = g(this.xPct, this.xSteps, this.snap, e), this.direction && (e = 100 - e), e
        }, b.prototype.getApplicableStep = function(e) {
            var t = h(e, this.xPct),
                n = 100 === e ? 2 : 1;
            return [this.xNumSteps[t - 2], this.xVal[t - n], this.xNumSteps[t - n]]
        }, b.prototype.convert = function(e) {
            return this.getStep(this.toStepping(e))
        };
        var J = {
            to: function(e) {
                return e.toFixed(2)
            },
            from: Number
        };
        e.fn.val = function(t) {
            function n(e) {
                return e.hasClass(Z[0]) ? B : X
            }
            if (!arguments.length) {
                var i = e(this[0]);
                return n(i).call(i)
            }
            var r = e.isFunction(t);
            return this.each(function(i) {
                var o = t,
                    a = e(this);
                r && (o = t.call(this, i, a.val())), n(a).call(a, o)
            })
        }, e.fn.noUiSlider = function(e, t) {
            switch (e) {
                case "step":
                    return this[0].getCurrentStep();
                case "options":
                    return this[0].getOriginalOptions()
            }
            return (t ? q : R).call(this, e)
        }, e.fn.noUiSlider_pips = function(t) {
            var n = t.mode,
                i = t.density || 1,
                r = t.filter || !1,
                o = t.values || !1,
                a = t.format || {
                    to: Math.round
                },
                s = t.stepped || !1;
            return this.each(function() {
                var t = this.getInfo(),
                    l = z(t[0], n, o, s),
                    c = U(t[0], i, n, l);
                return e(this).append(W(t[1], t[2], t[0].direction, c, r, a))
            })
        }
    }(window.jQuery || window.Zepto),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery || Zepto)
    }(function(e) {
        var t = function(t, n, i) {
            t = e(t);
            var r, o = this,
                a = t.val();
            n = "function" == typeof n ? n(t.val(), void 0, t, i) : n;
            var s = {
                invalid: [],
                getCaret: function() {
                    try {
                        var e, n = 0,
                            i = t.get(0),
                            r = document.selection,
                            o = i.selectionStart;
                        return r && -1 === navigator.appVersion.indexOf("MSIE 10") ? (e = r.createRange(), e.moveStart("character", t.is("input") ? -t.val().length : -t.text().length), n = e.text.length) : (o || "0" === o) && (n = o), n
                    } catch (a) {}
                },
                setCaret: function(e) {
                    try {
                        if (t.is(":focus")) {
                            var n, i = t.get(0);
                            i.setSelectionRange ? i.setSelectionRange(e, e) : i.createTextRange && (n = i.createTextRange(), n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
                        }
                    } catch (r) {}
                },
                events: function() {
                    t.on("input.mask keyup.mask", s.behaviour).on("paste.mask drop.mask", function() {
                        setTimeout(function() {
                            t.keydown().keyup()
                        }, 100)
                    }).on("change.mask", function() {
                        t.data("changed", !0)
                    }).on("blur.mask", function() {
                        a === t.val() || t.data("changed") || t.triggerHandler("change"), t.data("changed", !1)
                    }).on("blur.mask", function() {
                        a = t.val()
                    }).on("focus.mask", function(t) {
                        i.selectOnFocus === !0 && e(t.target).select()
                    }).on("focusout.mask", function() {
                        i.clearIfNotMatch && !r.test(s.val()) && s.val("")
                    })
                },
                getRegexMask: function() {
                    for (var e, t, i, r, a, s, l = [], c = 0; c < n.length; c++) e = o.translation[n.charAt(c)], e ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, r = e.recursive, r ? (l.push(n.charAt(c)), a = {
                        digit: n.charAt(c),
                        pattern: t
                    }) : l.push(i || r ? t + "?" : t)) : l.push(n.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                    return s = l.join(""), a && (s = s.replace(new RegExp("(" + a.digit + "(.*" + a.digit + ")?)"), "($1)?").replace(new RegExp(a.digit, "g"), a.pattern)), new RegExp(s)
                },
                destroyEvents: function() {
                    t.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
                },
                val: function(e) {
                    var n, i = t.is("input"),
                        r = i ? "val" : "text";
                    return arguments.length > 0 ? (t[r]() !== e && t[r](e), n = t) : n = t[r](), n
                },
                getMCharsBeforeCount: function(e, t) {
                    for (var i = 0, r = 0, a = n.length; a > r && e > r; r++) o.translation[n.charAt(r)] || (e = t ? e + 1 : e, i++);
                    return i
                },
                caretPos: function(e, t, i, r) {
                    var a = o.translation[n.charAt(Math.min(e - 1, n.length - 1))];
                    return a ? Math.min(e + i - t - r, i) : s.caretPos(e + 1, t, i, r)
                },
                behaviour: function(t) {
                    t = t || window.event, s.invalid = [];
                    var n = t.keyCode || t.which;
                    if (-1 === e.inArray(n, o.byPassKeys)) {
                        var i = s.getCaret(),
                            r = s.val(),
                            a = r.length,
                            l = a > i,
                            c = s.getMasked(),
                            u = c.length,
                            d = s.getMCharsBeforeCount(u - 1) - s.getMCharsBeforeCount(a - 1);
                        return s.val(c), !l || 65 === n && t.ctrlKey || (8 !== n && 46 !== n && (i = s.caretPos(i, a, u, d)), s.setCaret(i)), s.callbacks(t)
                    }
                },
                getMasked: function(e) {
                    var t, r, a = [],
                        l = s.val(),
                        c = 0,
                        u = n.length,
                        d = 0,
                        f = l.length,
                        h = 1,
                        p = "push",
                        m = -1;
                    for (i.reverse ? (p = "unshift", h = -1, t = 0, c = u - 1, d = f - 1, r = function() {
                            return c > -1 && d > -1
                        }) : (t = u - 1, r = function() {
                            return u > c && f > d
                        }); r();) {
                        var g = n.charAt(c),
                            v = l.charAt(d),
                            y = o.translation[g];
                        y ? (v.match(y.pattern) ? (a[p](v), y.recursive && (-1 === m ? m = c : c === t && (c = m - h), t === m && (c -= h)), c += h) : y.optional ? (c += h, d -= h) : y.fallback ? (a[p](y.fallback), c += h, d -= h) : s.invalid.push({
                            p: d,
                            v: v,
                            e: y.pattern
                        }), d += h) : (e || a[p](g), v === g && (d += h), c += h)
                    }
                    var b = n.charAt(t);
                    return u !== f + 1 || o.translation[b] || a.push(b), a.join("")
                },
                callbacks: function(e) {
                    var r = s.val(),
                        o = r !== a,
                        l = [r, e, t, i],
                        c = function(e, t, n) {
                            "function" == typeof i[e] && t && i[e].apply(this, n)
                        };
                    c("onChange", o === !0, l), c("onKeyPress", o === !0, l), c("onComplete", r.length === n.length, l), c("onInvalid", s.invalid.length > 0, [r, e, t, s.invalid, i])
                }
            };
            o.mask = n, o.options = i, o.remove = function() {
                var e = s.getCaret();
                return s.destroyEvents(), s.val(o.getCleanVal()), s.setCaret(e - s.getMCharsBeforeCount(e)), t
            }, o.getCleanVal = function() {
                return s.getMasked(!0)
            }, o.init = function(n) {
                if (n = n || !1, i = i || {}, o.byPassKeys = e.jMaskGlobals.byPassKeys, o.translation = e.jMaskGlobals.translation, o.translation = e.extend({}, o.translation, i.translation), o = e.extend(!0, {}, o, i), r = s.getRegexMask(), n === !1) {
                    i.placeholder && t.attr("placeholder", i.placeholder), e("input").length && "oninput" in e("input")[0] == !1 && "on" === t.attr("autocomplete") && t.attr("autocomplete", "off"), s.destroyEvents(), s.events();
                    var a = s.getCaret();
                    s.val(s.getMasked()), s.setCaret(a + s.getMCharsBeforeCount(a, !0))
                } else s.events(), s.val(s.getMasked())
            }, o.init(!t.is("input"))
        };
        e.maskWatchers = {};
        var n = function() {
                var n = e(this),
                    r = {},
                    o = "data-mask-",
                    a = n.attr("data-mask");
                return n.attr(o + "reverse") && (r.reverse = !0), n.attr(o + "clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === n.attr(o + "selectonfocus") && (r.selectOnFocus = !0), i(n, a, r) ? n.data("mask", new t(this, a, r)) : void 0
            },
            i = function(t, n, i) {
                i = i || {};
                var r = e(t).data("mask"),
                    o = JSON.stringify,
                    a = e(t).val() || e(t).text();
                try {
                    return "function" == typeof n && (n = n(a)), "object" != typeof r || o(r.options) !== o(i) || r.mask !== n
                } catch (s) {}
            };
        e.fn.mask = function(n, r) {
            r = r || {};
            var o = this.selector,
                a = e.jMaskGlobals,
                s = e.jMaskGlobals.watchInterval,
                l = function() {
                    return i(this, n, r) ? e(this).data("mask", new t(this, n, r)) : void 0
                };
            return e(this).each(l), o && "" !== o && a.watchInputs && (clearInterval(e.maskWatchers[o]), e.maskWatchers[o] = setInterval(function() {
                e(document).find(o).each(l)
            }, s)), this
        }, e.fn.unmask = function() {
            return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function() {
                var t = e(this).data("mask");
                t && t.remove().removeData("mask")
            })
        }, e.fn.cleanVal = function() {
            return this.data("mask").getCleanVal()
        }, e.applyDataMask = function(t) {
            t = t || e.jMaskGlobals.maskElements;
            var i = t instanceof e ? t : e(t);
            i.filter(e.jMaskGlobals.dataMaskAttr).each(n)
        };
        var r = {
            maskElements: "input,td,span,div",
            dataMaskAttr: "*[data-mask]",
            dataMask: !0,
            watchInterval: 300,
            watchInputs: !0,
            watchDataMask: !1,
            byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
            translation: {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }
        };
        e.jMaskGlobals = e.jMaskGlobals || {}, r = e.jMaskGlobals = e.extend(!0, {}, r, e.jMaskGlobals), r.dataMask && e.applyDataMask(), setInterval(function() {
            e.jMaskGlobals.watchDataMask && e.applyDataMask()
        }, r.watchInterval)
    }),
    function(e) {
        var t = -1,
            n = -1,
            i = function(t) {
                var n = 1,
                    i = e(t),
                    o = null,
                    a = [];
                return i.each(function() {
                    var t = e(this),
                        i = t.offset().top - r(t.css("margin-top")),
                        s = a.length > 0 ? a[a.length - 1] : null;
                    null === s ? a.push(t) : Math.floor(Math.abs(o - i)) <= n ? a[a.length - 1] = s.add(t) : a.push(t), o = i
                }), a
            },
            r = function(e) {
                return parseFloat(e) || 0
            },
            o = e.fn.matchHeight = function(t) {
                if ("remove" === t) {
                    var n = this;
                    return this.css("height", ""), e.each(o._groups, function(e, t) {
                        t.elements = t.elements.not(n)
                    }), this
                }
                return this.length <= 1 ? this : (t = "undefined" != typeof t ? t : !0, o._groups.push({
                    elements: this,
                    byRow: t
                }), o._apply(this, t), this)
            };
        o._groups = [], o._throttle = 80, o._maintainScroll = !1, o._beforeUpdate = null, o._afterUpdate = null, o._apply = function(t, n) {
            var a = e(t),
                s = [a],
                l = e(window).scrollTop(),
                c = e("html").outerHeight(!0),
                u = a.parents().filter(":hidden");
            return u.css("display", "block"), n && (a.each(function() {
                var t = e(this),
                    n = "inline-block" === t.css("display") ? "inline-block" : "block";
                t.data("style-cache", t.attr("style")), t.css({
                    display: n,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px"
                })
            }), s = i(a), a.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || "").css("height", "")
            })), e.each(s, function(t, i) {
                var o = e(i),
                    a = 0;
                n && o.length <= 1 || (o.each(function() {
                    var t = e(this),
                        n = "inline-block" === t.css("display") ? "inline-block" : "block";
                    t.css({
                        display: n,
                        height: ""
                    }), t.outerHeight(!1) > a && (a = t.outerHeight(!1)), t.css("display", "")
                }), o.each(function() {
                    var t = e(this),
                        n = 0;
                    "border-box" !== t.css("box-sizing") && (n += r(t.css("border-top-width")) + r(t.css("border-bottom-width")), n += r(t.css("padding-top")) + r(t.css("padding-bottom"))), t.css("height", a - n)
                }))
            }), u.css("display", ""), o._maintainScroll && e(window).scrollTop(l / c * e("html").outerHeight(!0)), this
        }, o._applyDataApi = function() {
            var t = {};
            e("[data-match-height], [data-mh]").each(function() {
                var n = e(this),
                    i = n.attr("data-match-height") || n.attr("data-mh");
                i in t ? t[i] = t[i].add(n) : t[i] = n
            }), e.each(t, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(t) {
            o._beforeUpdate && o._beforeUpdate(t, o._groups), e.each(o._groups, function() {
                o._apply(this.elements, this.byRow)
            }), o._afterUpdate && o._afterUpdate(t, o._groups)
        };
        o._update = function(i, r) {
            if (r && "resize" === r.type) {
                var s = e(window).width();
                if (s === t) return;
                t = s
            }
            i ? -1 === n && (n = setTimeout(function() {
                a(r), n = -1
            }, o._throttle)) : a(r)
        }, e(o._applyDataApi), e(window).bind("load", function(e) {
            o._update(!1, e)
        }), e(window).bind("resize orientationchange", function(e) {
            o._update(!0, e)
        })
    }(jQuery),
    function(e) {
        e.fn.swipeEvents = function() {
            return this.each(function() {
                function t(e) {
                    var t = e.originalEvent.touches;
                    t && t.length && (r = t[0].pageX, o = t[0].pageY, a.bind("touchmove", n), a.bind("touchend", i))
                }

                function n(e) {
                    var t = e.originalEvent.touches;
                    if (t && t.length) {
                        var s = r - t[0].pageX,
                            l = o - t[0].pageY;
                        s >= 50 && a.trigger("swipeLeft"), -50 >= s && a.trigger("swipeRight"), l >= 50 && a.trigger("swipeUp"), -50 >= l && a.trigger("swipeDown"), (Math.abs(s) >= 50 || Math.abs(l) >= 50) && (a.unbind("touchmove", n), a.unbind("touchend", i))
                    }
                }

                function i(e) {
                    a.unbind("touchmove", n)
                }
                var r, o, a = e(this);
                a.bind("touchstart", t)
            })
        }
    }(jQuery), $.fn.extend({
        backspace: function(e, t) {
            var n;
            return n = $.extend({
                callback: function() {},
                keypress: function() {},
                t: 100,
                e: .04
            }, t), this.each(function() {
                var t;
                t = this, $(t).queue(function() {
                    var i, r;
                    r = function(e, i) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] = t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"].slice(0, -1), n.keypress.call(t), setTimeout(function() {
                            r(e - 1, i)
                        }, n.t)) : (n.callback.call(t), $(t).dequeue())
                    }, i = function(e, r) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] += e[0], n.keypress.call(t), setTimeout(function() {
                            i(e.slice(1), r)
                        }, n.t)) : r()
                    }, r(e)
                })
            })
        },
        typetype: function(e, t) {
            var n;
            return n = $.extend({
                callback: function() {},
                keypress: function() {},
                t: 100,
                e: .04
            }, t), this.each(function() {
                var t;
                t = this, $(t).queue(function() {
                    var i, r, o;
                    r = function(e, i) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] = t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"].slice(0, -1), n.keypress.call(t), setTimeout(function() {
                            r(e - 1, i)
                        }, n.t)) : i()
                    }, i = function(e, r) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] += e[0], n.keypress.call(t), setTimeout(function() {
                            i(e.slice(1), r)
                        }, n.t)) : r()
                    }, (o = function(a) {
                        var s, l;
                        s = function() {
                            return setTimeout(function() {
                                o(a)
                            }, Math.random() * n.t * (e[a - 1] === e[a] ? 1.6 : "." === e[a - 1] ? 12 : "!" === e[a - 1] ? 12 : "?" === e[a - 1] ? 12 : "\n" === e[a - 1] ? 12 : "," === e[a - 1] ? 8 : ";" === e[a - 1] ? 8 : ":" === e[a - 1] ? 8 : " " === e[a - 1] ? 3 : 2))
                        }, l = Math.random() / n.e, e.length >= a ? .3 > l && e[a - 1] !== e[a] && e.length > a + 4 ? i(e.slice(a, a + 4), function() {
                            r(4, s)
                        }) : .7 > l && a > 1 && /[A-Z]/.test(e[a - 2] && e.length > a + 4) ? i(e[a - 1].toUpperCase() + e.slice(a, a + 4), function() {
                            r(5, s)
                        }) : .5 > l && e[a - 1] !== e[a] && e.length > a ? i(e[a], function() {
                            r(1, s)
                        }) : 1 > l && e[a - 1] !== e[a] && e.length > a ? i(e[a] + e[a - 1], function() {
                            r(2, s)
                        }) : .5 > l && /[A-Z]/.test(e[a]) ? i(e[a].toLowerCase(), function() {
                            r(1, s)
                        }) : (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] += e[a - 1], n.keypress.call(t), setTimeout(function() {
                            o(a + 1)
                        }, Math.random() * n.t * (e[a - 1] === e[a] ? 1.6 : "." === e[a - 1] ? 12 : "!" === e[a - 1] ? 12 : "?" === e[a - 1] ? 12 : "\n" === e[a - 1] ? 12 : "," === e[a - 1] ? 8 : ";" === e[a - 1] ? 8 : ":" === e[a - 1] ? 8 : " " === e[a - 1] ? 3 : 2))) : (n.callback.call(t), $(t).dequeue())
                    })(1)
                })
            })
        }
    }),
    function() {
        var e, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        n = Math.random, t = Math.floor, e = function() {
            function e(t, n, r) {
                var o, a, s, l;
                return this.el = t, this.text = n, this.options = null != r ? r : {}, this.type = i(this.type, this), this instanceof e ? ("string" == typeof this.el && (this.el = document.querySelector(this.el)), this.len = this.text.length, this.i = 0, l = this.options, o = l.accuracy, a = l.interval, this.callback = l.callback, this.accuracy = null != o ? o : this.accuracy, this["int"] = null != a ? a : this["int"], (s = "textarea" === this.el.tagName.toLowerCase() || "input" === s) ? (this.attr = "value", this.el.focus()) : this.attr = "innerText", void this.type()) : new e(this.el, this.text, this.options)
            }
            return e.prototype["int"] = 100, e.prototype.accuracy = .95, e.prototype.keys = "qwertyuiopasdfghjklzxcvbnm,./;-=[]".split(""), e.prototype.type = function() {
                return this.i === this.len ? "function" == typeof this.callback ? this.callback() : void 0 : n() > this.accuracy ? (this.el[this.attr] = this.text.slice(0, this.i) + this.keys[t(n() * this.keys.length)], this.timer = setTimeout(function(e) {
                    return function() {
                        return e.el[e.attr] = e.text.slice(0, e.i), e.timer = setTimeout(e.type, n() * e["int"] + .8 * e["int"])
                    }
                }(this), 1.5 * this["int"])) : (this.el[this.attr] = this.text.slice(0, this.i++), this.timer = setTimeout(this.type, function(e) {
                    return function() {
                        var t;
                        return t = n() * e["int"] + .1 * e["int"], " " === e.text[e.i] && (t += n() * e["int"]), ("." === e.text[e.i] || "," === e.text[e.i]) && (t += n() * e["int"] * 3), n() > .97 && (t += 2 * e["int"]), n() > .95 && (t += e["int"]), t
                    }
                }(this)()))
            }, e.prototype.pause = function() {
                return clearTimeout(this.timer), this.el[this.attr]
            }, e
        }(), ("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = e : ("undefined" != typeof define && null !== define ? define.amd : void 0) ? define(function() {
            return e
        }) : window.TuringType = e
    }.call(this), /*! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
    function(e, t, n, i) {
        var r = n(e),
            o = n(t),
            a = n.fancybox = function() {
                a.open.apply(this, arguments)
            },
            s = navigator.userAgent.match(/msie/),
            l = null,
            c = t.createTouch !== i,
            u = function(e) {
                return e && e.hasOwnProperty && e instanceof n
            },
            d = function(e) {
                return e && "string" === n.type(e)
            },
            f = function(e) {
                return d(e) && 0 < e.indexOf("%")
            },
            h = function(e, t) {
                var n = parseInt(e, 10) || 0;
                return t && f(e) && (n *= a.getViewport()[t] / 100), Math.ceil(n)
            },
            p = function(e, t) {
                return h(e, t) + "px"
            };
        n.extend(a, {
            version: "2.1.4",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !c,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (s ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeChange: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                return e && (n.isPlainObject(t) || (t = {}), !1 !== a.close(!0)) ? (n.isArray(e) || (e = u(e) ? n(e).get() : [e]), n.each(e, function(r, o) {
                    var s, l, c, f, h, p = {};
                    "object" === n.type(o) && (o.nodeType && (o = n(o)), u(o) ? (p = {
                        href: o.data("fancybox-href") || o.attr("href"),
                        title: o.data("fancybox-title") || o.attr("title"),
                        isDom: !0,
                        element: o
                    }, n.metadata && n.extend(!0, p, o.metadata())) : p = o), s = t.href || p.href || (d(o) ? o : null), l = t.title !== i ? t.title : p.title || "", f = (c = t.content || p.content) ? "html" : t.type || p.type, !f && p.isDom && (f = o.data("fancybox-type"), f || (f = (f = o.prop("class").match(/fancybox\.(\w+)/)) ? f[1] : null)), d(s) && (f || (a.isImage(s) ? f = "image" : a.isSWF(s) ? f = "swf" : "#" === s.charAt(0) ? f = "inline" : d(o) && (f = "html", c = o)), "ajax" === f && (h = s.split(/\s+/, 2), s = h.shift(), h = h.shift())), c || ("inline" === f ? s ? c = n(d(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : p.isDom && (c = o) : "html" === f ? c = s : !f && !s && p.isDom && (f = "inline", c = o)), n.extend(p, {
                        href: s,
                        type: f,
                        content: c,
                        title: l,
                        selector: h
                    }), e[r] = p
                }), a.opts = n.extend(!0, {}, a.defaults, t), t.keys !== i && (a.opts.keys = t.keys ? n.extend({}, a.defaults.keys, t.keys) : !1), a.group = e, a._start(a.opts.index)) : void 0
            },
            cancel: function() {
                var e = a.coming;
                e && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e))
            },
            close: function(e) {
                a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && !0 !== e ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(a.player.timer)
                    },
                    i = function() {
                        t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                    },
                    r = function() {
                        t(), n("body").unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
                    };
                !0 === e || !a.player.isActive && !1 !== e ? a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, n("body").bind({
                    "afterShow.player onUpdate.player": i,
                    "onCancel.player beforeClose.player": r,
                    "beforeLoad.player": t
                }), i(), a.trigger("onPlayStart")) : r()
            },
            next: function(e) {
                var t = a.current;
                t && (d(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = a.current;
                t && (d(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, n) {
                var r = a.current;
                r && (e = h(e), a.direction = t || r.direction[e >= r.index ? "next" : "prev"], a.router = n || "jumpto", r.loop && (0 > e && (e = r.group.length + e % r.group.length), e %= r.group.length), r.group[e] !== i && (a.cancel(), a._start(e)))
            },
            reposition: function(e, t) {
                var i, r = a.current,
                    o = r ? r.wrap : null;
                o && (i = a._getPosition(t), e && "scroll" === e.type ? (delete i.position, o.stop(!0, !0).animate(i, 200)) : (o.css(i), r.pos = n.extend({}, r.dim, i)))
            },
            update: function(e) {
                var t = e && e.type,
                    n = !t || "orientationchange" === t;
                n && (clearTimeout(l), l = null), a.isOpen && !l && (l = setTimeout(function() {
                    var i = a.current;
                    i && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && a._setDimension(), "scroll" === t && i.canShrink || a.reposition(e), a.trigger("onUpdate"), l = null)
                }, n && !c ? 0 : 300))
            },
            toggle: function(e) {
                a.isOpen && (a.current.fitToView = "boolean" === n.type(e) ? e : !a.current.fitToView, c && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
            },
            hideLoading: function() {
                o.unbind(".loading"), n("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                a.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), o.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
                }), a.defaults.fixed || (t = a.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = a.current && a.current.locked || !1,
                    n = {
                        x: r.scrollLeft(),
                        y: r.scrollTop()
                    };
                return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = c && e.innerWidth ? e.innerWidth : r.width(), n.h = c && e.innerHeight ? e.innerHeight : r.height()), n
            },
            unbindEvents: function() {
                a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), o.unbind(".fb"), r.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = a.current;
                t && (r.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), (e = t.keys) && o.bind("keydown.fb", function(r) {
                    var o = r.which || r.keyCode,
                        s = r.target || r.srcElement;
                    return 27 === o && a.coming ? !1 : void(!r.ctrlKey && !r.altKey && !r.shiftKey && !r.metaKey && (!s || !s.type && !n(s).is("[contenteditable]")) && n.each(e, function(e, s) {
                        return 1 < t.group.length && s[o] !== i ? (a[e](s[o]), r.preventDefault(), !1) : -1 < n.inArray(o, s) ? (a[e](), r.preventDefault(), !1) : void 0
                    }))
                }), n.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function(e, i, r, o) {
                    for (var s = n(e.target || null), l = !1; s.length && !l && !s.is(".fancybox-skin") && !s.is(".fancybox-wrap");) l = s[0] && !(s[0].style.overflow && "hidden" === s[0].style.overflow) && (s[0].clientWidth && s[0].scrollWidth > s[0].clientWidth || s[0].clientHeight && s[0].scrollHeight > s[0].clientHeight), s = n(s).parent();
                    0 !== i && !l && 1 < a.group.length && !t.canShrink && (o > 0 || r > 0 ? a.prev(o > 0 ? "down" : "left") : (0 > o || 0 > r) && a.next(0 > o ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var i, r = t || a.coming || a.current;
                if (r) {
                    if (n.isFunction(r[e]) && (i = r[e].apply(r, Array.prototype.slice.call(arguments, 1))), !1 === i) return !1;
                    r.helpers && n.each(r.helpers, function(t, i) {
                        i && a.helpers[t] && n.isFunction(a.helpers[t][e]) && (i = n.extend(!0, {}, a.helpers[t].defaults, i), a.helpers[t][e](i, r))
                    }), n.event.trigger(e + ".fb")
                }
            },
            isImage: function(e) {
                return d(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return d(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, i, r = {};
                if (e = h(e), t = a.group[e] || null, !t) return !1;
                if (r = n.extend(!0, {}, a.opts, t), t = r.margin, i = r.padding, "number" === n.type(t) && (r.margin = [t, t, t, t]), "number" === n.type(i) && (r.padding = [i, i, i, i]), r.modal && n.extend(!0, r, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), r.autoSize && (r.autoWidth = r.autoHeight = !0), "auto" === r.width && (r.autoWidth = !0), "auto" === r.height && (r.autoHeight = !0), r.group = a.group, r.index = e, a.coming = r, !1 === a.trigger("beforeLoad")) a.coming = null;
                else {
                    if (i = r.type, t = r.href, !i) return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = e, a[a.router](a.direction)) : !1;
                    if (a.isActive = !0, ("image" === i || "swf" === i) && (r.autoHeight = r.autoWidth = !1, r.scrolling = "visible"), "image" === i && (r.aspectRatio = !0), "iframe" === i && c && (r.scrolling = "scroll"), r.wrap = n(r.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + r.wrapCSS).appendTo(r.parent || "body"), n.extend(r, {
                            skin: n(".fancybox-skin", r.wrap),
                            outer: n(".fancybox-outer", r.wrap),
                            inner: n(".fancybox-inner", r.wrap)
                        }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                            r.skin.css("padding" + t, p(r.padding[e]))
                        }), a.trigger("onReady"), "inline" === i || "html" === i) {
                        if (!r.content || !r.content.length) return a._error("content")
                    } else if (!t) return a._error("href");
                    "image" === i ? a._loadImage() : "ajax" === i ? a._loadAjax() : "iframe" === i ? a._loadIframe() : a._afterLoad()
                }
            },
            _error: function(e) {
                n.extend(a.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: a.coming.tpl.error
                }), a._afterLoad()
            },
            _loadImage: function() {
                var e = a.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, a.coming.width = this.width, a.coming.height = this.height, a._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, a._error("image")
                }, e.src = a.coming.href, !0 !== e.complete && a.showLoading()
            },
            _loadAjax: function() {
                var e = a.coming;
                a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
                    },
                    success: function(t, n) {
                        "success" === n && (e.content = t, a._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = a.coming,
                    t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
                n(e.wrap).bind("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (a.showLoading(), t.one("load", function() {
                    n(this).data("ready", 1), c || n(this).bind("load.fb", a.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
            },
            _preloadImages: function() {
                var e, t, n = a.group,
                    i = a.current,
                    r = n.length,
                    o = i.preload ? Math.min(i.preload, r - 1) : 0;
                for (t = 1; o >= t; t += 1) e = n[(i.index + t) % r], "image" === e.type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, i, r, o, s = a.coming,
                    l = a.current;
                if (a.hideLoading(), s && !1 !== a.isActive)
                    if (!1 === a.trigger("afterLoad", s, l)) s.wrap.stop(!0).trigger("onReset").remove(), a.coming = null;
                    else {
                        switch (l && (a.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), e = s.content, t = s.type, i = s.scrolling, n.extend(a, {
                            wrap: s.wrap,
                            skin: s.skin,
                            outer: s.outer,
                            inner: s.inner,
                            current: s,
                            previous: l
                        }), r = s.href, t) {
                            case "inline":
                            case "ajax":
                            case "html":
                                s.selector ? e = n("<div>").html(e).find(s.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), s.wrap.bind("onReset", function() {
                                    n(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                                break;
                            case "image":
                                e = s.tpl.image.replace("{href}", r);
                                break;
                            case "swf":
                                e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', o = "", n.each(s.swf, function(t, n) {
                                    e += '<param name="' + t + '" value="' + n + '"></param>', o += " " + t + '="' + n + '"'
                                }), e += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                        }(!u(e) || !e.parent().is(s.inner)) && s.inner.append(e), a.trigger("beforeShow"), s.inner.css("overflow", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? l.prevMethod && a.transitions[l.prevMethod]() : n(".fancybox-wrap").not(s.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? s.nextMethod : s.openMethod](), a._preloadImages()
                    }
            },
            _setDimension: function() {
                var e, t, i, r, o, s, l, c, u, d = a.getViewport(),
                    m = 0,
                    g = !1,
                    v = !1,
                    g = a.wrap,
                    y = a.skin,
                    b = a.inner,
                    x = a.current,
                    v = x.width,
                    w = x.height,
                    _ = x.minWidth,
                    k = x.minHeight,
                    C = x.maxWidth,
                    T = x.maxHeight,
                    E = x.scrolling,
                    S = x.scrollOutside ? x.scrollbarWidth : 0,
                    $ = x.margin,
                    j = h($[1] + $[3]),
                    A = h($[0] + $[2]);
                if (g.add(y).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), $ = h(y.outerWidth(!0) - y.width()), e = h(y.outerHeight(!0) - y.height()), t = j + $, i = A + e, r = f(v) ? (d.w - t) * h(v) / 100 : v, o = f(w) ? (d.h - i) * h(w) / 100 : w, "iframe" === x.type) {
                    if (u = x.content, x.autoHeight && 1 === u.data("ready")) try {
                        u[0].contentWindow.document.location && (b.width(r).height(9999), s = u.contents().find("body"), S && s.css("overflow-x", "hidden"), o = s.height())
                    } catch (N) {}
                } else(x.autoWidth || x.autoHeight) && (b.addClass("fancybox-tmp"), x.autoWidth || b.width(r), x.autoHeight || b.height(o), x.autoWidth && (r = b.width()), x.autoHeight && (o = b.height()), b.removeClass("fancybox-tmp"));
                if (v = h(r), w = h(o), c = r / o, _ = h(f(_) ? h(_, "w") - t : _), C = h(f(C) ? h(C, "w") - t : C), k = h(f(k) ? h(k, "h") - i : k), T = h(f(T) ? h(T, "h") - i : T), s = C, l = T, x.fitToView && (C = Math.min(d.w - t, C), T = Math.min(d.h - i, T)), t = d.w - j, A = d.h - A, x.aspectRatio ? (v > C && (v = C, w = h(v / c)), w > T && (w = T, v = h(w * c)), _ > v && (v = _, w = h(v / c)), k > w && (w = k, v = h(w * c))) : (v = Math.max(_, Math.min(v, C)), x.autoHeight && "iframe" !== x.type && (b.width(v), w = b.height()), w = Math.max(k, Math.min(w, T))), x.fitToView)
                    if (b.width(v).height(w), g.width(v + $), d = g.width(), j = g.height(), x.aspectRatio)
                        for (;
                            (d > t || j > A) && v > _ && w > k && !(19 < m++);) w = Math.max(k, Math.min(T, w - 10)), v = h(w * c), _ > v && (v = _, w = h(v / c)), v > C && (v = C, w = h(v / c)), b.width(v).height(w), g.width(v + $), d = g.width(), j = g.height();
                    else v = Math.max(_, Math.min(v, v - (d - t))), w = Math.max(k, Math.min(w, w - (j - A)));
                S && "auto" === E && o > w && t > v + $ + S && (v += S), b.width(v).height(w), g.width(v + $), d = g.width(), j = g.height(), g = (d > t || j > A) && v > _ && w > k, v = x.aspectRatio ? s > v && l > w && r > v && o > w : (s > v || l > w) && (r > v || o > w), n.extend(x, {
                    dim: {
                        width: p(d),
                        height: p(j)
                    },
                    origWidth: r,
                    origHeight: o,
                    canShrink: g,
                    canExpand: v,
                    wPadding: $,
                    hPadding: e,
                    wrapSpace: j - y.outerHeight(!0),
                    skinSpace: y.height() - w
                }), !u && x.autoHeight && w > k && T > w && !v && b.height("auto")
            },
            _getPosition: function(e) {
                var t = a.current,
                    n = a.getViewport(),
                    i = t.margin,
                    r = a.wrap.width() + i[1] + i[3],
                    o = a.wrap.height() + i[0] + i[2],
                    i = {
                        position: "absolute",
                        top: i[0],
                        left: i[3]
                    };
                return t.autoCenter && t.fixed && !e && o <= n.h && r <= n.w ? i.position = "fixed" : t.locked || (i.top += n.y, i.left += n.x), i.top = p(Math.max(i.top, i.top + (n.h - o) * t.topRatio)), i.left = p(Math.max(i.left, i.left + (n.w - r) * t.leftRatio)), i
            },
            _afterZoomIn: function() {
                var e = a.current;
                e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (e.closeClick || e.nextClick && 1 < a.group.length) && a.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && n(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(e) {
                    e.preventDefault(), a.close()
                }), e.arrows && 1 < a.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && n(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || a.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(a, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), a.trigger("afterClose", e)
            }
        }), a.transitions = {
            getOrigPosition: function() {
                var e = a.current,
                    t = e.element,
                    n = e.orig,
                    i = {},
                    r = 50,
                    o = 50,
                    s = e.hPadding,
                    l = e.wPadding,
                    c = a.getViewport();
                return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), u(n) ? (i = n.offset(), n.is("img") && (r = n.outerWidth(), o = n.outerHeight())) : (i.top = c.y + (c.h - o) * e.topRatio, i.left = c.x + (c.w - r) * e.leftRatio), ("fixed" === a.wrap.css("position") || e.locked) && (i.top -= c.y, i.left -= c.x), i = {
                    top: p(i.top - s * e.topRatio),
                    left: p(i.left - l * e.leftRatio),
                    width: p(r + l),
                    height: p(o + s)
                }
            },
            step: function(e, t) {
                var n, i, r = t.prop;
                i = a.current;
                var o = i.wrapSpace,
                    s = i.skinSpace;
                ("width" === r || "height" === r) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (n = 1 - n), i = "width" === r ? i.wPadding : i.hPadding, i = e - i, a.skin[r](h("width" === r ? i : i - o * n)), a.inner[r](h("width" === r ? i : i - o * n - s * n)))
            },
            zoomIn: function() {
                var e = a.current,
                    t = e.pos,
                    i = e.openEffect,
                    r = "elastic" === i,
                    o = n.extend({
                        opacity: 1
                    }, t);
                delete o.position, r ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), a.wrap.css(t).animate(o, {
                    duration: "none" === i ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: r ? this.step : null,
                    complete: a._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = a.current,
                    t = e.closeEffect,
                    n = "elastic" === t,
                    i = {
                        opacity: .1
                    };
                n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), a.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: n ? this.step : null,
                    complete: a._afterZoomOut
                })
            },
            changeIn: function() {
                var e, t = a.current,
                    n = t.nextEffect,
                    i = t.pos,
                    r = {
                        opacity: 1
                    },
                    o = a.direction;
                i.opacity = .1, "elastic" === n && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (i[e] = p(h(i[e]) - 200), r[e] = "+=200px") : (i[e] = p(h(i[e]) + 200), r[e] = "-=200px")), "none" === n ? a._afterZoomIn() : a.wrap.css(i).animate(r, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: a._afterZoomIn
                })
            },
            changeOut: function() {
                var e = a.previous,
                    t = e.prevEffect,
                    i = {
                        opacity: .1
                    },
                    r = a.direction;
                "elastic" === t && (i["down" === r || "up" === r ? "top" : "left"] = ("up" === r || "left" === r ? "-" : "+") + "=200px"), e.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        n(this).trigger("onReset").remove()
                    }
                })
            }
        }, a.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !c,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            create: function(e) {
                e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo("body"), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (r.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    n(e.target).hasClass("fancybox-overlay") && (a.isActive ? a.close() : t.close())
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                n(".fancybox-overlay").remove(), r.unbind("resize.overlay"), this.overlay = null, !1 !== this.margin && (n("body").css("margin-right", this.margin), this.margin = !1), this.el && this.el.removeClass("fancybox-lock")
            },
            update: function() {
                var e, n = "100%";
                this.overlay.width(n).height("100%"), s ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (n = o.width())) : o.width() > r.width() && (n = o.width()), this.overlay.width(n).height(o.height())
            },
            onReady: function(e, i) {
                n(".fancybox-overlay").stop(!0, !0), this.overlay || (this.margin = o.height() > r.height() || "scroll" === n("body").css("overflow-y") ? n("body").css("margin-right") : !1, this.el = n(t.all && !t.querySelector ? "html" : "body"), this.create(e)), e.locked && this.fixed && (i.locked = this.overlay.append(i.wrap), i.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                t.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && n("body").css("margin-right", h(this.margin) + t.scrollbarWidth)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !a.isActive && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
            }
        }, a.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t = a.current,
                    i = t.title,
                    r = e.type;
                if (n.isFunction(i) && (i = i.call(t.element, t)), d(i) && "" !== n.trim(i)) {
                    switch (t = n('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + i + "</div>"), r) {
                        case "inside":
                            r = a.skin;
                            break;
                        case "outside":
                            r = a.wrap;
                            break;
                        case "over":
                            r = a.inner;
                            break;
                        default:
                            r = a.skin, t.appendTo("body"), s && t.width(t.width()), t.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(h(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](r)
                }
            }
        }, n.fn.fancybox = function(e) {
            var t, i = n(this),
                r = this.selector || "",
                s = function(o) {
                    var s, l, c = n(this).blur(),
                        u = t;
                    !o.ctrlKey && !o.altKey && !o.shiftKey && !o.metaKey && !c.is(".fancybox-wrap") && (s = e.groupAttr || "data-fancybox-group", l = c.attr(s), l || (s = "rel", l = c.get(0)[s]), l && "" !== l && "nofollow" !== l && (c = r.length ? n(r) : i, c = c.filter("[" + s + '="' + l + '"]'), u = c.index(this)), e.index = u, !1 !== a.open(c, e) && o.preventDefault())
                };
            return e = e || {}, t = e.index || 0, r && !1 !== e.live ? o.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : i.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, o.ready(function() {
            if (n.scrollbarWidth === i && (n.scrollbarWidth = function() {
                    var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        t = e.children(),
                        t = t.innerWidth() - t.height(99).innerWidth();
                    return e.remove(), t
                }), n.support.fixedPosition === i) {
                var e = n.support,
                    t = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    r = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                t.remove(), e.fixedPosition = r
            }
            n.extend(a.defaults, {
                scrollbarWidth: n.scrollbarWidth(),
                fixed: n.support.fixedPosition,
                parent: n("body")
            })
        })
    }(window, document, jQuery),
    /**
     * Featherlight - ultra slim jQuery lightbox
     * Version 1.3.4 - http://noelboss.github.io/featherlight/
     *
     * Copyright 2015, Noël Raoul Bossart (http://www.noelboss.com)
     * MIT Licensed.
     **/
    function(e) {
        "use strict";

        function t(e, n) {
            if (!(this instanceof t)) {
                var i = new t(e, n);
                return i.open(), i
            }
            this.id = t.id++, this.setup(e, n), this.chainCallbacks(t._callbackChain)
        }
        if ("undefined" == typeof e) return void("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
        var n = [],
            i = function(t) {
                return n = e.grep(n, function(e) {
                    return e !== t && e.$instance.closest("body").length > 0
                })
            },
            r = function(e, t) {
                var n = {},
                    i = new RegExp("^" + t + "([A-Z])(.*)");
                for (var r in e) {
                    var o = r.match(i);
                    if (o) {
                        var a = (o[1] + o[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                        n[a] = e[r]
                    }
                }
                return n
            },
            o = {
                keyup: "onKeyUp",
                resize: "onResize"
            },
            a = function(n) {
                e.each(t.opened().reverse(), function() {
                    return n.isDefaultPrevented() || !1 !== this[o[n.type]](n) ? void 0 : (n.preventDefault(), n.stopPropagation(), !1)
                })
            },
            s = function(n) {
                if (n !== t._globalHandlerInstalled) {
                    t._globalHandlerInstalled = n;
                    var i = e.map(o, function(e, n) {
                        return n + "." + t.prototype.namespace
                    }).join(" ");
                    e(window)[n ? "on" : "off"](i, a)
                }
            };
        t.prototype = {
            constructor: t,
            namespace: "featherlight",
            targetAttr: "data-featherlight",
            variant: null,
            resetCss: !1,
            background: null,
            openTrigger: "click",
            closeTrigger: "click",
            filter: null,
            root: "body",
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "background",
            closeOnEsc: !0,
            closeIcon: "&#10005;",
            loading: "",
            persist: !1,
            otherClose: null,
            beforeOpen: e.noop,
            beforeContent: e.noop,
            beforeClose: e.noop,
            afterOpen: e.noop,
            afterContent: e.noop,
            afterClose: e.noop,
            onKeyUp: e.noop,
            onResize: e.noop,
            type: null,
            contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
            setup: function(t, n) {
                "object" != typeof t || t instanceof e != !1 || n || (n = t, t = void 0);
                var i = e.extend(this, n, {
                        target: t
                    }),
                    r = i.resetCss ? i.namespace + "-reset" : i.namespace,
                    o = e(i.background || ['<div class="' + r + "-loading " + r + '">', '<div class="' + r + '-content">', '<span class="' + r + "-close-icon " + i.namespace + '-close">', i.closeIcon, "</span>", '<div class="' + i.namespace + '-inner">' + i.loading + "</div>", "</div>", "</div>"].join("")),
                    a = "." + i.namespace + "-close" + (i.otherClose ? "," + i.otherClose : "");
                return i.$instance = o.clone().addClass(i.variant), i.$instance.on(i.closeTrigger + "." + i.namespace, function(t) {
                    var n = e(t.target);
                    ("background" === i.closeOnClick && n.is("." + i.namespace) || "anywhere" === i.closeOnClick || n.closest(a).length) && (t.preventDefault(), i.close())
                }), this
            },
            getContent: function() {
                if (this.persist !== !1 && this.$content) return this.$content;
                var t = this,
                    n = this.constructor.contentFilters,
                    i = function(e) {
                        return t.$currentTarget && t.$currentTarget.attr(e)
                    },
                    r = i(t.targetAttr),
                    o = t.target || r || "",
                    a = n[t.type];
                if (!a && o in n && (a = n[o], o = t.target && r), o = o || i("href") || "", !a)
                    for (var s in n) t[s] && (a = n[s], o = t[s]);
                if (!a) {
                    var l = o;
                    if (o = null, e.each(t.contentFilters, function() {
                            return a = n[this], a.test && (o = a.test(l)), !o && a.regex && l.match && l.match(a.regex) && (o = l), !o
                        }), !o) return "console" in window && window.console.error("Featherlight: no content filter found " + (l ? ' for "' + l + '"' : " (no target specified)")), !1
                }
                return a.process.call(t, o)
            },
            setContent: function(t) {
                var n = this;
                return (t.is("iframe") || e("iframe", t).length > 0) && n.$instance.addClass(n.namespace + "-iframe"), n.$instance.removeClass(n.namespace + "-loading"), n.$instance.find("." + n.namespace + "-inner").not(t).slice(1).remove().end().replaceWith(e.contains(n.$instance[0], t[0]) ? "" : t), n.$content = t.addClass(n.namespace + "-inner"), n
            },
            open: function(t) {
                var i = this;
                if (i.$instance.hide().appendTo(i.root), !(t && t.isDefaultPrevented() || i.beforeOpen(t) === !1)) {
                    t && t.preventDefault();
                    var r = i.getContent();
                    if (r) return n.push(i), s(!0), i.$instance.fadeIn(i.openSpeed), i.beforeContent(t), e.when(r).always(function(e) {
                        i.setContent(e), i.afterContent(t)
                    }).then(i.$instance.promise()).done(function() {
                        i.afterOpen(t)
                    })
                }
                return i.$instance.detach(), e.Deferred().reject().promise()
            },
            close: function(t) {
                var n = this,
                    r = e.Deferred();
                return n.beforeClose(t) === !1 ? r.reject() : (0 === i(n).length && s(!1), n.$instance.fadeOut(n.closeSpeed, function() {
                    n.$instance.detach(), n.afterClose(t), r.resolve()
                })), r.promise()
            },
            chainCallbacks: function(t) {
                for (var n in t) this[n] = e.proxy(t[n], this, e.proxy(this[n], this))
            }
        }, e.extend(t, {
            id: 0,
            autoBind: "[data-featherlight]",
            defaults: t.prototype,
            contentFilters: {
                jquery: {
                    regex: /^[#.]\w/,
                    test: function(t) {
                        return t instanceof e && t
                    },
                    process: function(t) {
                        return this.persist !== !1 ? e(t) : e(t).clone(!0)
                    }
                },
                image: {
                    regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,
                    process: function(t) {
                        var n = this,
                            i = e.Deferred(),
                            r = new Image,
                            o = e('<img src="' + t + '" alt="" class="' + n.namespace + '-image" />');
                        return r.onload = function() {
                            o.naturalWidth = r.width, o.naturalHeight = r.height, i.resolve(o)
                        }, r.onerror = function() {
                            i.reject(o)
                        }, r.src = t, i.promise()
                    }
                },
                html: {
                    regex: /^\s*<[\w!][^<]*>/,
                    process: function(t) {
                        return e(t)
                    }
                },
                ajax: {
                    regex: /./,
                    process: function(t) {
                        var n = e.Deferred(),
                            i = e("<div></div>").load(t, function(e, t) {
                                "error" !== t && n.resolve(i.contents()), n.fail()
                            });
                        return n.promise()
                    }
                },
                iframe: {
                    process: function(t) {
                        var n = new e.Deferred,
                            i = e("<iframe/>").hide().attr("src", t).css(r(this, "iframe")).on("load", function() {
                                n.resolve(i.show())
                            }).appendTo(this.$instance.find("." + this.namespace + "-content"));
                        return n.promise()
                    }
                },
                text: {
                    process: function(t) {
                        return e("<div>", {
                            text: t
                        })
                    }
                }
            },
            functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
            readElementConfig: function(t, n) {
                var i = this,
                    r = new RegExp("^data-" + n + "-(.*)"),
                    o = {};
                return t && t.attributes && e.each(t.attributes, function() {
                    var t = this.name.match(r);
                    if (t) {
                        var n = this.value,
                            a = e.camelCase(t[1]);
                        if (e.inArray(a, i.functionAttributes) >= 0) n = new Function(n);
                        else try {
                            n = e.parseJSON(n)
                        } catch (s) {}
                        o[a] = n
                    }
                }), o
            },
            extend: function(t, n) {
                var i = function() {
                    this.constructor = t
                };
                return i.prototype = this.prototype, t.prototype = new i, t.__super__ = this.prototype, e.extend(t, this, n), t.defaults = t.prototype, t
            },
            attach: function(t, n, i) {
                var r = this;
                "object" != typeof n || n instanceof e != !1 || i || (i = n, n = void 0), i = e.extend({}, i);
                var o, a = i.namespace || r.defaults.namespace,
                    s = e.extend({}, r.defaults, r.readElementConfig(t[0], a), i);
                return t.on(s.openTrigger + "." + s.namespace, s.filter, function(a) {
                    var l = e.extend({
                            $source: t,
                            $currentTarget: e(this)
                        }, r.readElementConfig(t[0], s.namespace), r.readElementConfig(this, s.namespace), i),
                        c = o || e(this).data("featherlight-persisted") || new r(n, l);
                    "shared" === c.persist ? o = c : c.persist !== !1 && e(this).data("featherlight-persisted", c), l.$currentTarget.blur(), c.open(a)
                }), t
            },
            current: function() {
                var e = this.opened();
                return e[e.length - 1] || null
            },
            opened: function() {
                var t = this;
                return i(), e.grep(n, function(e) {
                    return e instanceof t
                })
            },
            close: function() {
                var e = this.current();
                return e ? e.close() : void 0
            },
            _onReady: function() {
                var t = this;
                t.autoBind && (e(t.autoBind).each(function() {
                    t.attach(e(this))
                }), e(document).on("click", t.autoBind, function(n) {
                    n.isDefaultPrevented() || (n.preventDefault(), t.attach(e(n.currentTarget)), e(n.target).click())
                }))
            },
            _callbackChain: {
                onKeyUp: function(e, t) {
                    return 27 === t.keyCode ? (this.closeOnEsc && this.$instance.find("." + this.namespace + "-close:first").click(), !1) : e(t)
                },
                onResize: function(e, t) {
                    if (this.$content.naturalWidth) {
                        var n = this.$content.naturalWidth,
                            i = this.$content.naturalHeight;
                        this.$content.css("width", "").css("height", "");
                        var r = Math.max(n / parseInt(this.$content.parent().css("width"), 10), i / parseInt(this.$content.parent().css("height"), 10));
                        r > 1 && this.$content.css("width", "" + n / r + "px").css("height", "" + i / r + "px")
                    }
                    return e(t)
                },
                afterContent: function(e, t) {
                    var n = e(t);
                    return this.onResize(t), n
                }
            }
        }), e.featherlight = t, e.fn.featherlight = function(e, n) {
            return t.attach(this, e, n)
        }, e(document).ready(function() {
            t._onReady()
        })
    }(jQuery),
    /*!
     * Copyright (c) 2015 Chris O'Hara <cohara87@gmail.com>
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    function(e, t) {
        "undefined" != typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
    }("validator", function(e) {
        "use strict";

        function t(e) {
            var t = e.match(N);
            if (!t) return (new Date).getTimezoneOffset();
            var n = t[21];
            if (!n || "z" === n || "Z" === n) return 0;
            var i, r, o = t[22];
            return -1 !== n.indexOf(":") ? (i = parseInt(t[23]), r = parseInt(t[24])) : (i = 0, r = parseInt(t[23])), (60 * i + r) * ("-" === o ? 1 : -1)
        }

        function n(e, t) {
            e = e || {};
            for (var n in t) "undefined" == typeof e[n] && (e[n] = t[n]);
            return e
        }

        function i(e) {
            var t = "(\\" + e.symbol.replace(/\./g, "\\.") + ")" + (e.require_symbol ? "" : "?"),
                n = "-?",
                i = "[1-9]\\d*",
                r = "[1-9]\\d{0,2}(\\" + e.thousands_separator + "\\d{3})*",
                o = ["0", i, r],
                a = "(" + o.join("|") + ")?",
                s = "(\\" + e.decimal_separator + "\\d{2})?",
                l = a + s;
            return e.allow_negatives && !e.parens_for_negatives && (e.negative_sign_after_digits ? l += n : e.negative_sign_before_digits && (l = n + l)), e.allow_negative_sign_placeholder ? l = "( (?!\\-))?" + l : e.allow_space_after_symbol ? l = " ?" + l : e.allow_space_after_digits && (l += "( (?!$))?"), e.symbol_after_digits ? l += t : l = t + l, e.allow_negatives && (e.parens_for_negatives ? l = "(\\(" + l + "\\)|" + l + ")" : e.negative_sign_before_digits || e.negative_sign_after_digits || (l = n + l)), new RegExp("^(?!-? )(?=.*\\d)" + l + "$")
        }
        e = {
            version: "4.2.0"
        };
        var r = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
            o = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
            a = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
            s = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
            l = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,
            c = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            u = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/,
            d = /^(?:[0-9]{9}X|[0-9]{10})$/,
            f = /^(?:[0-9]{13})$/,
            h = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/,
            p = /^[0-9A-F]{1,4}$/i,
            m = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
            },
            g = /^[A-Z]+$/i,
            v = /^[0-9A-Z]+$/i,
            y = /^[-+]?[0-9]+$/,
            b = /^(?:[-+]?(?:0|[1-9][0-9]*))$/,
            x = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
            w = /^[0-9A-F]+$/i,
            _ = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
            k = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
            C = /^[\x00-\x7F]+$/,
            T = /[^\x00-\x7F]/,
            E = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
            S = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
            $ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/,
            j = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i,
            A = {
                "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
                "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
                "en-ZA": /^(\+?27|0)\d{9}$/,
                "en-AU": /^(\+?61|0)4\d{8}$/,
                "en-HK": /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
                "fr-FR": /^(\+?33|0)[67]\d{8}$/,
                "pt-PT": /^(\+351)?9[1236]\d{7}$/,
                "el-GR": /^(\+30)?((2\d{9})|(69\d{8}))$/,
                "en-GB": /^(\+?44|0)7\d{9}$/,
                "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
                "en-ZM": /^(\+26)?09[567]\d{7}$/,
                "ru-RU": /^(\+?7|8)?9\d{9}$/,
                "nb-NO": /^(\+?47)?[49]\d{7}$/,
                "nn-NO": /^(\+?47)?[49]\d{7}$/
            },
            N = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
        e.extend = function(t, n) {
            e[t] = function() {
                var t = Array.prototype.slice.call(arguments);
                return t[0] = e.toString(t[0]), n.apply(e, t)
            }
        }, e.init = function() {
            for (var t in e) "function" == typeof e[t] && "toString" !== t && "toDate" !== t && "extend" !== t && "init" !== t && e.extend(t, e[t])
        }, e.toString = function(e) {
            return "object" == typeof e && null !== e && e.toString ? e = e.toString() : (null === e || "undefined" == typeof e || isNaN(e) && !e.length) && (e = ""), "" + e
        }, e.toDate = function(e) {
            return "[object Date]" === Object.prototype.toString.call(e) ? e : (e = Date.parse(e), isNaN(e) ? null : new Date(e))
        }, e.toFloat = function(e) {
            return parseFloat(e)
        }, e.toInt = function(e, t) {
            return parseInt(e, t || 10)
        }, e.toBoolean = function(e, t) {
            return t ? "1" === e || "true" === e : "0" !== e && "false" !== e && "" !== e
        }, e.equals = function(t, n) {
            return t === e.toString(n)
        }, e.contains = function(t, n) {
            return t.indexOf(e.toString(n)) >= 0
        }, e.matches = function(e, t, n) {
            return "[object RegExp]" !== Object.prototype.toString.call(t) && (t = new RegExp(t, n)), t.test(e)
        };
        var F = {
            allow_display_name: !1,
            allow_utf8_local_part: !0,
            require_tld: !0
        };
        e.isEmail = function(t, i) {
            if (i = n(i, F), i.allow_display_name) {
                var c = t.match(l);
                c && (t = c[1])
            }
            var u = t.split("@"),
                d = u.pop(),
                f = u.join("@"),
                h = d.toLowerCase();
            if (("gmail.com" === h || "googlemail.com" === h) && (f = f.replace(/\./g, "").toLowerCase()), !e.isByteLength(f, 0, 64) || !e.isByteLength(d, 0, 256)) return !1;
            if (!e.isFQDN(d, {
                    require_tld: i.require_tld
                })) return !1;
            if ('"' === f[0]) return f = f.slice(1, f.length - 1), i.allow_utf8_local_part ? s.test(f) : o.test(f);
            for (var p = i.allow_utf8_local_part ? a : r, m = f.split("."), g = 0; g < m.length; g++)
                if (!p.test(m[g])) return !1;
            return !0
        };
        var D = {
            protocols: ["http", "https", "ftp"],
            require_tld: !0,
            require_protocol: !1,
            require_valid_protocol: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_protocol_relative_urls: !1
        };
        e.isURL = function(t, i) {
            if (!t || t.length >= 2083 || /\s/.test(t)) return !1;
            if (0 === t.indexOf("mailto:")) return !1;
            i = n(i, D);
            var r, o, a, s, l, c, u;
            if (u = t.split("://"), u.length > 1) {
                if (r = u.shift(), i.require_valid_protocol && -1 === i.protocols.indexOf(r)) return !1
            } else {
                if (i.require_protocol) return !1;
                i.allow_protocol_relative_urls && "//" === t.substr(0, 2) && (u[0] = t.substr(2))
            }
            return t = u.join("://"), u = t.split("#"), t = u.shift(), u = t.split("?"), t = u.shift(), u = t.split("/"), t = u.shift(), u = t.split("@"), u.length > 1 && (o = u.shift(), o.indexOf(":") >= 0 && o.split(":").length > 2) ? !1 : (s = u.join("@"), u = s.split(":"), a = u.shift(), u.length && (c = u.join(":"), l = parseInt(c, 10), !/^[0-9]+$/.test(c) || 0 >= l || l > 65535) ? !1 : e.isIP(a) || e.isFQDN(a, i) || "localhost" === a ? i.host_whitelist && -1 === i.host_whitelist.indexOf(a) ? !1 : i.host_blacklist && -1 !== i.host_blacklist.indexOf(a) ? !1 : !0 : !1)
        }, e.isIP = function(t, n) {
            if (n = e.toString(n), !n) return e.isIP(t, 4) || e.isIP(t, 6);
            if ("4" === n) {
                if (!h.test(t)) return !1;
                var i = t.split(".").sort(function(e, t) {
                    return e - t
                });
                return i[3] <= 255
            }
            if ("6" === n) {
                var r = t.split(":"),
                    o = !1,
                    a = e.isIP(r[r.length - 1], 4),
                    s = a ? 7 : 8;
                if (r.length > s) return !1;
                if ("::" === t) return !0;
                "::" === t.substr(0, 2) ? (r.shift(), r.shift(), o = !0) : "::" === t.substr(t.length - 2) && (r.pop(), r.pop(), o = !0);
                for (var l = 0; l < r.length; ++l)
                    if ("" === r[l] && l > 0 && l < r.length - 1) {
                        if (o) return !1;
                        o = !0
                    } else if (a && l == r.length - 1);
                else if (!p.test(r[l])) return !1;
                return o ? r.length >= 1 : r.length === s
            }
            return !1
        };
        var P = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1
        };
        e.isFQDN = function(e, t) {
            t = n(t, P), t.allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
            var i = e.split(".");
            if (t.require_tld) {
                var r = i.pop();
                if (!i.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(r)) return !1
            }
            for (var o, a = 0; a < i.length; a++) {
                if (o = i[a], t.allow_underscores) {
                    if (o.indexOf("__") >= 0) return !1;
                    o = o.replace(/_/g, "")
                }
                if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(o)) return !1;
                if (/[\uff01-\uff5e]/.test(o)) return !1;
                if ("-" === o[0] || "-" === o[o.length - 1] || o.indexOf("---") >= 0) return !1
            }
            return !0
        }, e.isBoolean = function(e) {
            return ["true", "false", "1", "0"].indexOf(e) >= 0
        }, e.isAlpha = function(e) {
            return g.test(e)
        }, e.isAlphanumeric = function(e) {
            return v.test(e)
        }, e.isNumeric = function(e) {
            return y.test(e)
        }, e.isDecimal = function(e) {
            return "" !== e && _.test(e)
        }, e.isHexadecimal = function(e) {
            return w.test(e)
        }, e.isHexColor = function(e) {
            return k.test(e)
        }, e.isLowercase = function(e) {
            return e === e.toLowerCase()
        }, e.isUppercase = function(e) {
            return e === e.toUpperCase()
        }, e.isInt = function(e, t) {
            return t = t || {}, b.test(e) && (!t.hasOwnProperty("min") || e >= t.min) && (!t.hasOwnProperty("max") || e <= t.max)
        }, e.isFloat = function(e, t) {
            return t = t || {}, "" === e || "." === e ? !1 : x.test(e) && (!t.hasOwnProperty("min") || e >= t.min) && (!t.hasOwnProperty("max") || e <= t.max)
        }, e.isDivisibleBy = function(t, n) {
            return e.toFloat(t) % e.toInt(n) === 0
        }, e.isNull = function(e) {
            return 0 === e.length
        }, e.isLength = function(e, t, n) {
            var i = e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
                r = e.length - i.length;
            return r >= t && ("undefined" == typeof n || n >= r)
        }, e.isByteLength = function(e, t, n) {
            var i = encodeURI(e).split(/%..|./).length - 1;
            return i >= t && ("undefined" == typeof n || n >= i)
        }, e.isUUID = function(e, t) {
            var n = m[t ? t : "all"];
            return n && n.test(e)
        }, e.isDate = function(e) {
            var n = new Date(new Date(e).toUTCString()),
                i = String(n.getUTCDate()),
                r = n.getTimezoneOffset() - t(e);
            n = new Date(n.getTime() + 6e4 * r);
            var o, a, s, l = String(n.getDate());
            return isNaN(Date.parse(n)) ? !1 : (a = e.match(/(^|[^:\d])[23]\d([^:\d]|$)/g)) ? (o = a.map(function(e) {
                return e.match(/\d+/g)[0]
            }).join("/"), s = String(n.getFullYear()).slice(-2), o === l || o === i || o === s ? !0 : o === l + "/" + s || o === s + "/" + l ? !0 : o === i + "/" + s || o === s + "/" + i ? !0 : !1) : !0
        }, e.isAfter = function(t, n) {
            var i = e.toDate(n || new Date),
                r = e.toDate(t);
            return !!(r && i && r > i)
        }, e.isBefore = function(t, n) {
            var i = e.toDate(n || new Date),
                r = e.toDate(t);
            return !!(r && i && i > r)
        }, e.isIn = function(t, n) {
            var i;
            if ("[object Array]" === Object.prototype.toString.call(n)) {
                var r = [];
                for (i in n) r[i] = e.toString(n[i]);
                return r.indexOf(t) >= 0
            }
            return "object" == typeof n ? n.hasOwnProperty(t) : n && "function" == typeof n.indexOf ? n.indexOf(t) >= 0 : !1
        }, e.isCreditCard = function(e) {
            var t = e.replace(/[^0-9]+/g, "");
            if (!c.test(t)) return !1;
            for (var n, i, r, o = 0, a = t.length - 1; a >= 0; a--) n = t.substring(a, a + 1), i = parseInt(n, 10), r ? (i *= 2, o += i >= 10 ? i % 10 + 1 : i) : o += i, r = !r;
            return !!(o % 10 === 0 ? t : !1)
        }, e.isISIN = function(e) {
            if (!u.test(e)) return !1;
            for (var t, n, i = e.replace(/[A-Z]/g, function(e) {
                    return parseInt(e, 36)
                }), r = 0, o = !0, a = i.length - 2; a >= 0; a--) t = i.substring(a, a + 1), n = parseInt(t, 10), o ? (n *= 2, r += n >= 10 ? n + 1 : n) : r += n, o = !o;
            return parseInt(e.substr(e.length - 1), 10) === (1e4 - r) % 10
        }, e.isISBN = function(t, n) {
            if (n = e.toString(n), !n) return e.isISBN(t, 10) || e.isISBN(t, 13);
            var i, r = t.replace(/[\s-]+/g, ""),
                o = 0;
            if ("10" === n) {
                if (!d.test(r)) return !1;
                for (i = 0; 9 > i; i++) o += (i + 1) * r.charAt(i);
                if (o += "X" === r.charAt(9) ? 100 : 10 * r.charAt(9), o % 11 === 0) return !!r
            } else if ("13" === n) {
                if (!f.test(r)) return !1;
                var a = [1, 3];
                for (i = 0; 12 > i; i++) o += a[i % 2] * r.charAt(i);
                if (r.charAt(12) - (10 - o % 10) % 10 === 0) return !!r
            }
            return !1
        }, e.isMobilePhone = function(e, t) {
            return t in A ? A[t].test(e) : !1
        };
        var O = {
            symbol: "$",
            require_symbol: !1,
            allow_space_after_symbol: !1,
            symbol_after_digits: !1,
            allow_negatives: !0,
            parens_for_negatives: !1,
            negative_sign_before_digits: !1,
            negative_sign_after_digits: !1,
            allow_negative_sign_placeholder: !1,
            thousands_separator: ",",
            decimal_separator: ".",
            allow_space_after_digits: !1
        };
        e.isCurrency = function(e, t) {
            return t = n(t, O), i(t).test(e)
        }, e.isJSON = function(e) {
            try {
                var t = JSON.parse(e);
                return !!t && "object" == typeof t
            } catch (n) {}
            return !1
        }, e.isMultibyte = function(e) {
            return T.test(e)
        }, e.isAscii = function(e) {
            return C.test(e)
        }, e.isFullWidth = function(e) {
            return E.test(e)
        }, e.isHalfWidth = function(e) {
            return S.test(e)
        }, e.isVariableWidth = function(e) {
            return E.test(e) && S.test(e)
        }, e.isSurrogatePair = function(e) {
            return $.test(e)
        }, e.isBase64 = function(e) {
            return j.test(e)
        }, e.isMongoId = function(t) {
            return e.isHexadecimal(t) && 24 === t.length
        }, e.isISO8601 = function(e) {
            return N.test(e)
        }, e.ltrim = function(e, t) {
            var n = t ? new RegExp("^[" + t + "]+", "g") : /^\s+/g;
            return e.replace(n, "")
        }, e.rtrim = function(e, t) {
            var n = t ? new RegExp("[" + t + "]+$", "g") : /\s+$/g;
            return e.replace(n, "")
        }, e.trim = function(e, t) {
            var n = t ? new RegExp("^[" + t + "]+|[" + t + "]+$", "g") : /^\s+|\s+$/g;
            return e.replace(n, "")
        }, e.escape = function(e) {
            return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\`/g, "&#96;")
        }, e.stripLow = function(t, n) {
            var i = n ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
            return e.blacklist(t, i)
        }, e.whitelist = function(e, t) {
            return e.replace(new RegExp("[^" + t + "]+", "g"), "")
        }, e.blacklist = function(e, t) {
            return e.replace(new RegExp("[" + t + "]+", "g"), "")
        };
        var M = {
            lowercase: !0
        };
        return e.normalizeEmail = function(t, i) {
            if (i = n(i, M), !e.isEmail(t)) return !1;
            var r = t.split("@", 2);
            if (r[1] = r[1].toLowerCase(), "gmail.com" === r[1] || "googlemail.com" === r[1]) {
                if (r[0] = r[0].toLowerCase().replace(/\./g, ""), "+" === r[0][0]) return !1;
                r[0] = r[0].split("+")[0], r[1] = "gmail.com"
            } else i.lowercase && (r[0] = r[0].toLowerCase());
            return r.join("@")
        }, e.init(), e
    }),
    function(e, t, n) {
        function i(t, n) {
            this.bodyOverflowX, this.callbacks = {
                hide: [],
                show: []
            }, this.checkInterval = null, this.Content, this.$el = e(t), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = e.extend({}, l, n), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
        }

        function r(t, n) {
            var i = !0;
            return e.each(t, function(e, r) {
                return "undefined" == typeof n[e] || t[e] !== n[e] ? (i = !1, !1) : void 0
            }), i
        }

        function o() {
            return !u && c
        }

        function a() {
            var e = n.body || n.documentElement,
                t = e.style,
                i = "transition";
            if ("string" == typeof t[i]) return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1);
            for (var r = 0; r < v.length; r++)
                if ("string" == typeof t[v[r] + i]) return !0;
            return !1
        }
        var s = "tooltipster",
            l = {
                animation: "fade",
                arrow: !0,
                arrowColor: "",
                autoClose: !0,
                content: null,
                contentAsHTML: !1,
                contentCloning: !0,
                debug: !0,
                delay: 200,
                minWidth: 0,
                maxWidth: null,
                functionInit: function(e, t) {},
                functionBefore: function(e, t) {
                    t()
                },
                functionReady: function(e, t) {},
                functionAfter: function(e) {},
                hideOnClick: !1,
                icon: "(?)",
                iconCloning: !0,
                iconDesktop: !1,
                iconTouch: !1,
                iconTheme: "tooltipster-icon",
                interactive: !1,
                interactiveTolerance: 350,
                multiple: !1,
                offsetX: 0,
                offsetY: 0,
                onlyOne: !1,
                position: "top",
                positionTracker: !1,
                positionTrackerCallback: function(e) {
                    "hover" == this.option("trigger") && this.option("autoClose") && this.hide()
                },
                restoration: "current",
                speed: 350,
                timer: 0,
                theme: "tooltipster-default",
                touchDevices: !0,
                trigger: "hover",
                updateAnimation: !0
            };
        i.prototype = {
            _init: function() {
                var t = this;
                if (n.querySelector) {
                    var i = null;
                    void 0 === t.$el.data("tooltipster-initialTitle") && (i = t.$el.attr("title"), void 0 === i && (i = null), t.$el.data("tooltipster-initialTitle", i)), null !== t.options.content ? t._content_set(t.options.content) : t._content_set(i);
                    var r = t.options.functionInit.call(t.$el, t.$el, t.Content);
                    "undefined" != typeof r && t._content_set(r), t.$el.removeAttr("title").addClass("tooltipstered"), !c && t.options.iconDesktop || c && t.options.iconTouch ? ("string" == typeof t.options.icon ? (t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.options.iconCloning ? t.$elProxy = t.options.icon.clone(!0) : t.$elProxy = t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, "hover" == t.options.trigger ? (t.$elProxy.on("mouseenter." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !0, t._show())
                    }).on("mouseleave." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !1)
                    }), c && t.options.touchDevices && t.$elProxy.on("touchstart." + t.namespace, function() {
                        t._showNow()
                    })) : "click" == t.options.trigger && t.$elProxy.on("click." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && t._show()
                    })
                }
            },
            _show: function() {
                var e = this;
                "shown" != e.Status && "appearing" != e.Status && (e.options.delay ? e.timerShow = setTimeout(function() {
                    ("click" == e.options.trigger || "hover" == e.options.trigger && e.mouseIsOverProxy) && e._showNow()
                }, e.options.delay) : e._showNow())
            },
            _showNow: function(n) {
                var i = this;
                i.options.functionBefore.call(i.$el, i.$el, function() {
                    if (i.enabled && null !== i.Content) {
                        n && i.callbacks.show.push(n), i.callbacks.hide = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null, i.options.onlyOne && e(".tooltipstered").not(i.$el).each(function(t, n) {
                            var i = e(n),
                                r = i.data("tooltipster-ns");
                            e.each(r, function(e, t) {
                                var n = i.data(t),
                                    r = n.status(),
                                    o = n.option("autoClose");
                                "hidden" !== r && "disappearing" !== r && o && n.hide()
                            })
                        });
                        var r = function() {
                            i.Status = "shown", e.each(i.callbacks.show, function(e, t) {
                                t.call(i.$el)
                            }), i.callbacks.show = []
                        };
                        if ("hidden" !== i.Status) {
                            var o = 0;
                            "disappearing" === i.Status ? (i.Status = "appearing", a() ? (i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + i.options.animation + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(r)) : i.$tooltip.stop().fadeIn(r)) : "shown" === i.Status && r()
                        } else {
                            i.Status = "appearing";
                            var o = i.options.speed;
                            i.bodyOverflowX = e("body").css("overflow-x"), e("body").css("overflow-x", "hidden");
                            var s = "tooltipster-" + i.options.animation,
                                l = "-webkit-transition-duration: " + i.options.speed + "ms; -webkit-animation-duration: " + i.options.speed + "ms; -moz-transition-duration: " + i.options.speed + "ms; -moz-animation-duration: " + i.options.speed + "ms; -o-transition-duration: " + i.options.speed + "ms; -o-animation-duration: " + i.options.speed + "ms; -ms-transition-duration: " + i.options.speed + "ms; -ms-animation-duration: " + i.options.speed + "ms; transition-duration: " + i.options.speed + "ms; animation-duration: " + i.options.speed + "ms;",
                                u = i.options.minWidth ? "min-width:" + Math.round(i.options.minWidth) + "px;" : "",
                                d = i.options.maxWidth ? "max-width:" + Math.round(i.options.maxWidth) + "px;" : "",
                                f = i.options.interactive ? "pointer-events: auto;" : "";
                            if (i.$tooltip = e('<div class="tooltipster-base ' + i.options.theme + '" style="' + u + " " + d + " " + f + " " + l + '"><div class="tooltipster-content"></div></div>'), a() && i.$tooltip.addClass(s), i._content_insert(), i.$tooltip.appendTo("body"), i.reposition(), i.options.functionReady.call(i.$el, i.$el, i.$tooltip), a() ? (i.$tooltip.addClass(s + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(r)) : i.$tooltip.css("display", "none").fadeIn(i.options.speed, r), i._interval_set(), e(t).on("scroll." + i.namespace + " resize." + i.namespace, function() {
                                    i.reposition()
                                }), i.options.autoClose)
                                if (e("body").off("." + i.namespace), "hover" == i.options.trigger) {
                                    if (c && setTimeout(function() {
                                            e("body").on("touchstart." + i.namespace, function() {
                                                i.hide()
                                            })
                                        }, 0), i.options.interactive) {
                                        c && i.$tooltip.on("touchstart." + i.namespace, function(e) {
                                            e.stopPropagation()
                                        });
                                        var h = null;
                                        i.$elProxy.add(i.$tooltip).on("mouseleave." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h), h = setTimeout(function() {
                                                i.hide()
                                            }, i.options.interactiveTolerance)
                                        }).on("mouseenter." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h)
                                        })
                                    } else i.$elProxy.on("mouseleave." + i.namespace + "-autoClose", function() {
                                        i.hide()
                                    });
                                    i.options.hideOnClick && i.$elProxy.on("click." + i.namespace + "-autoClose", function() {
                                        i.hide()
                                    })
                                } else "click" == i.options.trigger && (setTimeout(function() {
                                    e("body").on("click." + i.namespace + " touchstart." + i.namespace, function() {
                                        i.hide()
                                    })
                                }, 0), i.options.interactive && i.$tooltip.on("click." + i.namespace + " touchstart." + i.namespace, function(e) {
                                    e.stopPropagation()
                                }))
                        }
                        i.options.timer > 0 && (i.timerHide = setTimeout(function() {
                            i.timerHide = null, i.hide()
                        }, i.options.timer + o))
                    }
                })
            },
            _interval_set: function() {
                var t = this;
                t.checkInterval = setInterval(function() {
                    if (0 === e("body").find(t.$el).length || 0 === e("body").find(t.$elProxy).length || "hidden" == t.Status || 0 === e("body").find(t.$tooltip).length)("shown" == t.Status || "appearing" == t.Status) && t.hide(), t._interval_cancel();
                    else if (t.options.positionTracker) {
                        var n = t._repositionInfo(t.$elProxy),
                            i = !1;
                        r(n.dimension, t.elProxyPosition.dimension) && ("fixed" === t.$elProxy.css("position") ? r(n.position, t.elProxyPosition.position) && (i = !0) : r(n.offset, t.elProxyPosition.offset) && (i = !0)), i || (t.reposition(), t.options.positionTrackerCallback.call(t, t.$el))
                    }
                }, 200)
            },
            _interval_cancel: function() {
                clearInterval(this.checkInterval), this.checkInterval = null
            },
            _content_set: function(e) {
                "object" == typeof e && null !== e && this.options.contentCloning && (e = e.clone(!0)), this.Content = e
            },
            _content_insert: function() {
                var e = this,
                    t = this.$tooltip.find(".tooltipster-content");
                "string" != typeof e.Content || e.options.contentAsHTML ? t.empty().append(e.Content) : t.text(e.Content)
            },
            _update: function(e) {
                var t = this;
                t._content_set(e), null !== t.Content ? "hidden" !== t.Status && (t._content_insert(), t.reposition(), t.options.updateAnimation && (a() ? (t.$tooltip.css({
                    width: "",
                    "-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                }).addClass("tooltipster-content-changing"), setTimeout(function() {
                    "hidden" != t.Status && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() {
                        "hidden" !== t.Status && t.$tooltip.css({
                            "-webkit-transition": t.options.speed + "ms",
                            "-moz-transition": t.options.speed + "ms",
                            "-o-transition": t.options.speed + "ms",
                            "-ms-transition": t.options.speed + "ms",
                            transition: t.options.speed + "ms"
                        })
                    }, t.options.speed))
                }, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function() {
                    "hidden" != t.Status && t.$tooltip.fadeTo(t.options.speed, 1)
                }))) : t.hide()
            },
            _repositionInfo: function(e) {
                return {
                    dimension: {
                        height: e.outerHeight(!1),
                        width: e.outerWidth(!1)
                    },
                    offset: e.offset(),
                    position: {
                        left: parseInt(e.css("left")),
                        top: parseInt(e.css("top"))
                    }
                }
            },
            hide: function(n) {
                var i = this;
                n && i.callbacks.hide.push(n), i.callbacks.show = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null;
                var r = function() {
                    e.each(i.callbacks.hide, function(e, t) {
                        t.call(i.$el)
                    }), i.callbacks.hide = []
                };
                if ("shown" == i.Status || "appearing" == i.Status) {
                    i.Status = "disappearing";
                    var o = function() {
                        i.Status = "hidden", "object" == typeof i.Content && null !== i.Content && i.Content.detach(), i.$tooltip.remove(), i.$tooltip = null, e(t).off("." + i.namespace), e("body").off("." + i.namespace).css("overflow-x", i.bodyOverflowX), e("body").off("." + i.namespace), i.$elProxy.off("." + i.namespace + "-autoClose"), i.options.functionAfter.call(i.$el, i.$el), r()
                    };
                    a() ? (i.$tooltip.clearQueue().removeClass("tooltipster-" + i.options.animation + "-show").addClass("tooltipster-dying"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(o)) : i.$tooltip.stop().fadeOut(i.options.speed, o)
                } else "hidden" == i.Status && r();
                return i
            },
            show: function(e) {
                return this._showNow(e), this
            },
            update: function(e) {
                return this.content(e)
            },
            content: function(e) {
                return "undefined" == typeof e ? this.Content : (this._update(e), this)
            },
            reposition: function() {
                function n() {
                    var n = e(t).scrollLeft();
                    0 > $ - n && (o = $ - n, $ = n), $ + l - n > a && (o = $ - (a + n - l), $ = a + n - l)
                }

                function i(n, i) {
                    s.offset.top - e(t).scrollTop() - c - N - 12 < 0 && i.indexOf("top") > -1 && (D = n), s.offset.top + s.dimension.height + c + 12 + N > e(t).scrollTop() + e(t).height() && i.indexOf("bottom") > -1 && (D = n, A = s.offset.top - c - N - 12)
                }
                var r = this;
                if (0 !== e("body").find(r.$tooltip).length) {
                    r.$tooltip.css("width", ""), r.elProxyPosition = r._repositionInfo(r.$elProxy);
                    var o = null,
                        a = e(t).width(),
                        s = r.elProxyPosition,
                        l = r.$tooltip.outerWidth(!1),
                        c = (r.$tooltip.innerWidth() + 1, r.$tooltip.outerHeight(!1));
                    if (r.$elProxy.is("area")) {
                        var u = r.$elProxy.attr("shape"),
                            d = r.$elProxy.parent().attr("name"),
                            f = e('img[usemap="#' + d + '"]'),
                            h = f.offset().left,
                            p = f.offset().top,
                            m = void 0 !== r.$elProxy.attr("coords") ? r.$elProxy.attr("coords").split(",") : void 0;
                        if ("circle" == u) {
                            var g = parseInt(m[0]),
                                v = parseInt(m[1]),
                                y = parseInt(m[2]);
                            s.dimension.height = 2 * y, s.dimension.width = 2 * y, s.offset.top = p + v - y, s.offset.left = h + g - y
                        } else if ("rect" == u) {
                            var g = parseInt(m[0]),
                                v = parseInt(m[1]),
                                b = parseInt(m[2]),
                                x = parseInt(m[3]);
                            s.dimension.height = x - v, s.dimension.width = b - g, s.offset.top = p + v, s.offset.left = h + g
                        } else if ("poly" == u) {
                            for (var w = 0, _ = 0, k = 0, C = 0, T = "even", E = 0; E < m.length; E++) {
                                var S = parseInt(m[E]);
                                "even" == T ? (S > k && (k = S, 0 === E && (w = k)), w > S && (w = S), T = "odd") : (S > C && (C = S, 1 == E && (_ = C)), _ > S && (_ = S), T = "even")
                            }
                            s.dimension.height = C - _, s.dimension.width = k - w, s.offset.top = p + _, s.offset.left = h + w
                        } else s.dimension.height = f.outerHeight(!1), s.dimension.width = f.outerWidth(!1), s.offset.top = p, s.offset.left = h
                    }
                    var $ = 0,
                        j = 0,
                        A = 0,
                        N = parseInt(r.options.offsetY),
                        F = parseInt(r.options.offsetX),
                        D = r.options.position;
                    if ("top" == D) {
                        var P = s.offset.left + l - (s.offset.left + s.dimension.width);
                        $ = s.offset.left + F - P / 2, A = s.offset.top - c - N - 12, n(), i("bottom", "top")
                    }
                    if ("top-left" == D && ($ = s.offset.left + F, A = s.offset.top - c - N - 12, n(), i("bottom-left", "top-left")), "top-right" == D && ($ = s.offset.left + s.dimension.width + F - l, A = s.offset.top - c - N - 12, n(), i("bottom-right", "top-right")), "bottom" == D) {
                        var P = s.offset.left + l - (s.offset.left + s.dimension.width);
                        $ = s.offset.left - P / 2 + F, A = s.offset.top + s.dimension.height + N + 12, n(), i("top", "bottom")
                    }
                    if ("bottom-left" == D && ($ = s.offset.left + F, A = s.offset.top + s.dimension.height + N + 12, n(), i("top-left", "bottom-left")), "bottom-right" == D && ($ = s.offset.left + s.dimension.width + F - l, A = s.offset.top + s.dimension.height + N + 12, n(), i("top-right", "bottom-right")), "left" == D) {
                        $ = s.offset.left - F - l - 12, j = s.offset.left + F + s.dimension.width + 12;
                        var O = s.offset.top + c - (s.offset.top + s.dimension.height);
                        if (A = s.offset.top - O / 2 - N, 0 > $ && j + l > a) {
                            var M = 2 * parseFloat(r.$tooltip.css("border-width")),
                                I = l + $ - M;
                            r.$tooltip.css("width", I + "px"), c = r.$tooltip.outerHeight(!1), $ = s.offset.left - F - I - 12 - M, O = s.offset.top + c - (s.offset.top + s.dimension.height), A = s.offset.top - O / 2 - N
                        } else 0 > $ && ($ = s.offset.left + F + s.dimension.width + 12, o = "left")
                    }
                    if ("right" == D) {
                        $ = s.offset.left + F + s.dimension.width + 12, j = s.offset.left - F - l - 12;
                        var O = s.offset.top + c - (s.offset.top + s.dimension.height);
                        if (A = s.offset.top - O / 2 - N, $ + l > a && 0 > j) {
                            var M = 2 * parseFloat(r.$tooltip.css("border-width")),
                                I = a - $ - M;
                            r.$tooltip.css("width", I + "px"), c = r.$tooltip.outerHeight(!1), O = s.offset.top + c - (s.offset.top + s.dimension.height), A = s.offset.top - O / 2 - N
                        } else $ + l > a && ($ = s.offset.left - F - l - 12, o = "right")
                    }
                    if (r.options.arrow) {
                        var L = "tooltipster-arrow-" + D;
                        if (r.options.arrowColor.length < 1) var H = r.$tooltip.css("background-color");
                        else var H = r.options.arrowColor;
                        if (o ? "left" == o ? (L = "tooltipster-arrow-right", o = "") : "right" == o ? (L = "tooltipster-arrow-left", o = "") : o = "left:" + Math.round(o) + "px;" : o = "", "top" == D || "top-left" == D || "top-right" == D) var R = parseFloat(r.$tooltip.css("border-bottom-width")),
                            q = r.$tooltip.css("border-bottom-color");
                        else if ("bottom" == D || "bottom-left" == D || "bottom-right" == D) var R = parseFloat(r.$tooltip.css("border-top-width")),
                            q = r.$tooltip.css("border-top-color");
                        else if ("left" == D) var R = parseFloat(r.$tooltip.css("border-right-width")),
                            q = r.$tooltip.css("border-right-color");
                        else if ("right" == D) var R = parseFloat(r.$tooltip.css("border-left-width")),
                            q = r.$tooltip.css("border-left-color");
                        else var R = parseFloat(r.$tooltip.css("border-bottom-width")),
                            q = r.$tooltip.css("border-bottom-color");
                        R > 1 && R++;
                        var B = "";
                        if (0 !== R) {
                            var z = "",
                                U = "border-color: " + q + ";"; - 1 !== L.indexOf("bottom") ? z = "margin-top: -" + Math.round(R) + "px;" : -1 !== L.indexOf("top") ? z = "margin-bottom: -" + Math.round(R) + "px;" : -1 !== L.indexOf("left") ? z = "margin-right: -" + Math.round(R) + "px;" : -1 !== L.indexOf("right") && (z = "margin-left: -" + Math.round(R) + "px;"), B = '<span class="tooltipster-arrow-border" style="' + z + " " + U + ';"></span>'
                        }
                        r.$tooltip.find(".tooltipster-arrow").remove();
                        var W = '<div class="' + L + ' tooltipster-arrow" style="' + o + '">' + B + '<span style="border-color:' + H + ';"></span></div>';
                        r.$tooltip.append(W)
                    }
                    r.$tooltip.css({
                        top: Math.round(A) + "px",
                        left: Math.round($) + "px"
                    })
                }
                return r
            },
            enable: function() {
                return this.enabled = !0, this
            },
            disable: function() {
                return this.hide(), this.enabled = !1, this
            },
            destroy: function() {
                var t = this;
                t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace);
                var n = t.$el.data("tooltipster-ns");
                if (1 === n.length) {
                    var i = null;
                    "previous" === t.options.restoration ? i = t.$el.data("tooltipster-initialTitle") : "current" === t.options.restoration && (i = "string" == typeof t.Content ? t.Content : e("<div></div>").append(t.Content).html()), i && t.$el.attr("title", i), t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
                } else n = e.grep(n, function(e, n) {
                    return e !== t.namespace
                }), t.$el.data("tooltipster-ns", n);
                return t
            },
            elementIcon: function() {
                return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
            },
            elementTooltip: function() {
                return this.$tooltip ? this.$tooltip[0] : void 0
            },
            option: function(e, t) {
                return "undefined" == typeof t ? this.options[e] : (this.options[e] = t, this)
            },
            status: function() {
                return this.Status
            }
        }, e.fn[s] = function() {
            var t = arguments;
            if (0 === this.length) {
                if ("string" == typeof t[0]) {
                    var n = !0;
                    switch (t[0]) {
                        case "setDefaults":
                            e.extend(l, t[1]);
                            break;
                        default:
                            n = !1
                    }
                    return n ? !0 : this
                }
                return this
            }
            if ("string" == typeof t[0]) {
                var r = "#*$~&";
                return this.each(function() {
                    var n = e(this).data("tooltipster-ns"),
                        i = n ? e(this).data(n[0]) : null;
                    if (!i) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
                    if ("function" != typeof i[t[0]]) throw new Error('Unknown method .tooltipster("' + t[0] + '")');
                    var o = i[t[0]](t[1], t[2]);
                    return o !== i ? (r = o, !1) : void 0
                }), "#*$~&" !== r ? r : this
            }
            var o = [],
                a = t[0] && "undefined" != typeof t[0].multiple,
                s = a && t[0].multiple || !a && l.multiple,
                c = t[0] && "undefined" != typeof t[0].debug,
                u = c && t[0].debug || !c && l.debug;
            return this.each(function() {
                var n = !1,
                    r = e(this).data("tooltipster-ns"),
                    a = null;
                r ? s ? n = !0 : u && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : n = !0, n && (a = new i(this, t[0]), r || (r = []), r.push(a.namespace), e(this).data("tooltipster-ns", r), e(this).data(a.namespace, a)), o.push(a)
            }), s ? o : this
        };
        var c = !!("ontouchstart" in t),
            u = !1;
        e("body").one("mousemove", function() {
            u = !0
        })
    }(jQuery, window, document),
    function(e) {
        e.fn.niceSelect = function() {
            this.hide(), this.each(function() {
                var t = e(this);
                if (!t.next().hasClass("nice-select")) {
                    t.after('<div class="nice-select' + (" " + t.attr("class") || "") + (t.attr("disabled") ? " disabled" : '" tabindex="0') + '"><span class="current"></span><ul class="list"></ul></div>');
                    var n = t.next(),
                        i = t.find("option"),
                        r = t.find("option:selected");
                    n.find(".current").html(r.data("display") || r.text()), i.each(function() {
                        var t = e(this).data("display");
                        n.find("ul").append('<li class="option' + (e(this).is(":selected") ? " selected" : "") + (e(this).is(":disabled") ? " disabled" : "") + '" data-value="' + e(this).val() + '"' + (t ? ' data-display="' + t : "") + '">' + e(this).text() + "</li>")
                    })
                }
            }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
                var n = e(this);
                e(".nice-select").not(n).removeClass("open"), n.toggleClass("open"), n.hasClass("open") ? (n.find(".option"), n.find(".focus").removeClass("focus"), n.find(".selected").addClass("focus")) : n.focus()
            }), e(document).on("click.nice_select", function(t) {
                0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
            }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
                var n = e(this),
                    i = n.closest(".nice-select");
                i.find(".selected").removeClass("selected"), n.addClass("selected");
                var r = n.data("display") || n.text();
                i.find(".current").text(r), i.prev("select").val(n.data("value")).trigger("change")
            }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
                var n = e(this),
                    i = e(n.find(".focus") || n.find(".list .option.selected"));
                if (32 == t.keyCode || 13 == t.keyCode) return n.hasClass("open") ? i.trigger("click") : n.trigger("click"), !1;
                if (40 == t.keyCode) {
                    if (n.hasClass("open")) {
                        var r = i.nextAll(".option:not(.disabled)").first();
                        r.length > 0 && (n.find(".focus").removeClass("focus"), r.addClass("focus"))
                    } else n.trigger("click");
                    return !1
                }
                if (38 == t.keyCode) {
                    if (n.hasClass("open")) {
                        var o = i.prevAll(".option:not(.disabled)").first();
                        o.length > 0 && (n.find(".focus").removeClass("focus"), o.addClass("focus"))
                    } else n.trigger("click");
                    return !1
                }
                if (27 == t.keyCode) n.hasClass("open") && n.trigger("click");
                else if (9 == t.keyCode && n.hasClass("open")) return !1
            });
            var t = document.createElement("a").style;
            t.cssText = "pointer-events:auto", "auto" !== t.pointerEvents && e("html").addClass("no-csspointerevents")
        }
    }(jQuery),
    function(e, t) {
        "use strict";
        var n = e.App = {
            fn: {},
            events: {},
            settings: {}
        };
        n.settings = {
            sm: 480,
            md: 767,
            lg: 1024,
            xlg: 1364
        }, n.util = {
            width: function() {
                return e.innerWidth || $(e).width()
            },
            y: function() {
                return e.pageYOffset !== t ? e.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
            },
            emailRegexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }, n.environment = {
            production: !0,
            staging: !1,
            development: !1
        }, n.query = function(t) {
            return "retina" === t ? e.devicePixelRatio > 1 : n.util.width() <= n.settings[t]
        }
    }(this),
    function(e, t, n, i) {
        "use strict";
        var r = t.App;
        r.callbacks = {}, r.callbacks.elementLoaded = function() {
            e('[data-callback="elementLoaded"]').parent().addClass("element-loaded")
        }
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        var r = t.App;
        r.events.resize = [];
        var o, a = 500;
        e(t).on("resize.app", function() {
            t.clearTimeout(o), o = t.setTimeout(function() {
                e.each(r.events.resize, function(n, i) {
                    i(e(t).outerWidth(), e(t).outerHeight())
                })
            }, a)
        })
    }(this.jQuery, this, this.document),
    function(e, t, n) {
        "use strict";

        function i() {
            var e = void 0 !== t.pageYOffset ? t.pageYOffset : (n.documentElement || n.body.parentNode || n.body).scrollTop;
            o.recalculateAll(), o.scrollCheck(e)
        }
        var r = function(e, t, n) {
                var i;
                return function() {
                    var r = this,
                        o = arguments,
                        a = function() {
                            i = null, n || e.apply(r, o)
                        },
                        s = n && !i;
                    clearTimeout(i), i = setTimeout(a, t), s && e.apply(r, o)
                }
            },
            o = {
                bindings: {},
                counter: 0
            };
        ! function(e) {
            function i(e) {
                return parseInt(e, 10) / 100
            }
            var r = 0;
            e.add = function(t, n, i, r) {
                void 0 === i && (i = "25%"), void 0 === r && (r = !1), e.bindings[e.counter] = {
                    el: t,
                    fn: n,
                    visible: i,
                    remove: r
                }, e.refreshScrollInfo(e.counter), e.counter += 1
            }, e.remove = function(t) {
                delete e.bindings[t]
            }, e.refreshScrollInfo = function(t) {
                var n = e.bindings[t];
                n.height = n.el.outerHeight(), n.top = n.el.offset().top, "string" == typeof n.visible ? n.visiblePixels = n.height * i(n.visible) : n.visiblePixels = n.visible, n.scrolledToFromBottomPoint = Math.floor(n.top + n.visiblePixels), n.scrolledToFromTopPoint = Math.floor(n.top + n.height - n.visiblePixels)
            }, e.recalculateAll = function() {
                e.recalculateBrowserHeight();
                for (var t in e.bindings) e.refreshScrollInfo(t)
            }, e.recalculateBrowserHeight = function() {
                r = t.innerHeight || n.documentElement.clientHeight || n.getElementsByTagName("body")[0].clientHeight
            }, e.inView = function(e, t) {
                var n = e.top < t + .2 * r && e.top + e.visiblePixels > t + .8 * r,
                    i = t + r > e.scrolledToFromBottomPoint,
                    o = t < e.scrolledToFromTopPoint;
                return n || o && i
            }, e.scrollCheck = function(t) {
                var n;
                for (var i in e.bindings) n = e.bindings[i], e.inView(n, t) && (n.fn(n.el), n.remove && e.remove(i))
            }
        }(o);
        var a = function(t, n, i) {
            t = e(t), 0 !== t.length && o.add(t, n, i)
        };
        e(t).on("resize", r(function() {
            o.recalculateAll()
        }, 250)), e(n).on("ready", function() {
            o.recalculateBrowserHeight(), i()
        }), e(t).on("load", i).on("scroll", r(i, 50)), t.App.fn.inView = a
    }(jQuery, window, document),
    function(e, t, n) {
        "use strict";

        function i(t) {
            var n = e.Deferred();
            return e("<img>").attr({
                src: t
            }).load(n.resolve), n
        }

        function r(n) {
            var i = e.Deferred();
            return t.setInterval(i.resolve, n), i
        }

        function o(t) {
            if (!t.data("loaded") && t.data("gif")) {
                t.data("loaded", !0);
                var n = t.siblings("img.gif-placeholder").attr("src"),
                    o = t.data("delay") || 500,
                    a = i(n),
                    s = r(o);
                return e.when(a, s).then(function() {
                    t.attr("src", n)
                })
            }
        }
        var a = t.App;
        e("[data-gif]").each(function() {
            var t = e(this);
            a.fn.inView(this, function() {
                o(t)
            }, "100%")
        }), a.fn.gif = o
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        var r, o, a, s = t.App,
            l = s.fn.video = {},
            c = s.query("md");
        e("video").on("ended", function() {
            this.setAttribute("data:hasPlayed", "true")
        }), l.play = function(t) {
            e(t).length && ("undefined" != typeof r && "function" == typeof r.get && "function" == typeof r.get(0).pause && r.each(function(e) {
                this.pause()
            }), r = e(t).get(0), a = r.hasAttribute("loop"), o = "true" === r.getAttribute("data:hasPlayed"), c || !a && o || (r = e(t), r.each(function(e) {
                this.play()
            })))
        }, l.load = function() {
            s.query("md") || e("video source[data-src]").each(function() {
                var t = e(this),
                    n = t.data("src"),
                    i = t.parent().data("poster"),
                    r = t.parent().attr("retina"),
                    o = t.attr("type");
                s.query("retina") && r && (n = r), "video/mp4" !== o || c || t.parent().attr("src", n).attr("poster", i).removeAttr("data-poster"), t.remove()
            })
        }, l.load(), s.events.resize.push(l.load), e('video[data-autoplay="this"]').each(function() {
            var t = e(this).data("autoplayShownAmount");
            t === i && (t = "100%"), s.fn.inView(this, function(e) {
                l.play(e)
            }, t)
        })
    }(this.jQuery, this, this.document),
    function(e, t) {
        "use strict";
        var n = e.App;
        t.fn.lazyLoad = function() {
            function i(e, t) {
                return -1 !== t.indexOf("placehold.it") ? e.data(t) : e.data(t + s) || e.data(t)
            }

            function r(e, i) {
                e && n.callbacks && n.callbacks[i] && "function" == typeof n.callbacks[i] && t("<img/>").attr("src", e).load(n.callbacks[i])
            }

            function o() {
                a.each(function() {
                    var e = t(this),
                        o = i(e, "large");
                    if (n.query("md") && (o = i(e, "medium")), n.query("sm") && (o = i(e, "small") || i(e, "medium")), o) {
                        var a = o.split("#");
                        r(a[0], e.data("callback")), a[1] ? (e.attr("src", a[0]), e.attr("width", a[1])) : -1 !== a[0].indexOf("-2x") ? t("<img/>").attr("src", a[0]).load(function() {
                            e.attr("width", Math.floor(this.width / 2)), e.attr("src", a[0])
                        }) : e.attr("src", a[0])
                    }
                })
            }
            var a = this,
                s = n.query("retina") ? "2x" : "";
            return t(e).on("resize.lazy", o), o(), a
        }, t('img[data-lazy-load="true"]').lazyLoad()
    }(this, this.jQuery),
    function(e, t, n, i) {
        "use strict";

        function r(n) {
            var i = e.Deferred();
            return t.setTimeout(i.resolve, n), i
        }
        var o, a = t.App;
        a.fn.animations = function() {
            function n(e, t) {
                var n = e.closest(".container").length ? e.closest(".container") : e.closest('[data-carousel="wrap"]'),
                    i = n.find(".active[data-show]"),
                    r = i.parent()[t]().find("[data-show]");
                r.length ? r.trigger("click.app") : "prev" === t ? i.parent().siblings(":last").find("[data-show]").trigger("click.app") : "next" === t && i.parent().siblings(":first").find("[data-show]").trigger("click.app")
            }
            e("[data-show], [data-control]").on("click.user", function() {
                o && t.clearInterval(o)
            }), e("[data-show]").on("click.app", function(n) {
                n.preventDefault();
                var i = e(this),
                    o = i.closest(".container").length ? i.closest(".container") : i.closest('[data-carousel="wrap"]'),
                    s = o.find("[data-item]"),
                    l = o.find("[data-show]"),
                    c = i.data("show"),
                    u = s.filter('[data-item="' + c + '"]');
                l.removeClass("active"), i.addClass("active"), u.hasClass("u__hidden") && (s.addClass("u__fading-out"), r(200).then(function() {
                    return s.addClass("u__hidden"), u.removeClass("u__hidden"), a.wisUtils.pauseLatest(), r(10)
                }).then(function() {
                    u.addClass("u__fading-in");
                    var e = u.find(".wistia__video");
                    return e.length && a.wisUtils.play(new a.wisUtils.vidObj(e)), r(200)
                }).then(function() {
                    u.removeClass("u__fading-in u__fading-out"), a.fn.video.play(u.find("video")), e(t).trigger("scroll")
                }))
            }), e("[data-item]").swipeEvents().on("swipeLeft", function() {
                n(e(this), "next")
            }).on("swipeRight", function() {
                n(e(this), "prev")
            }), e("[data-control]").on("click.app", function(t) {
                t.preventDefault();
                var i = e(this),
                    r = i.data("control");
                n(i, r)
            });
            var i = e("[data-carousel-init]");
            if (i.length) {
                var s = i.data("carouselInit");
                o = t.setInterval(function() {
                    e("[data-carousel]:hover").length || e('[data-control="next"]').trigger("click.app")
                }, s)
            }
            e("[data-toggle]").on("click.app", function(t) {
                t.preventDefault();
                var n = e(this);
                e('[data-toggle-wrap="' + n.data("toggle") + '"]').toggleClass("u__hidden"), n.toggleClass("toggled")
            })
        }, a.fn.animations()
    }(this.jQuery, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.cta = {}, a.cta.EmailAddressValidator = t.Model.extend({
            validateEmail: function(e) {
                return a.util.emailRegexp.test(e)
            },
            validate: function(e, t) {
                return this.validateEmail(e.email) ? void 0 : {
                    invalid_email: !0
                }
            }
        }), a.cta.CtaView = t.View.extend({
            events: {
                submit: "validateEmailAddressValidatorAndRedirect"
            },
            initialize: function() {
                this.$submit = e('[type="submit"]', this.$el), this.$email = e('[data-signup="email"]', this.$el), this.$errors = e("[data-errors]", this.$el), this.$form = this.$el.hasClass("cta__form") ? this.$el : e(".cta__form", this.$el)
            },
            isLoading: function() {
                return this.$submit.hasClass("loading")
            },
            validateEmailAddressValidatorAndRedirect: function(e) {
                e.preventDefault(), this.isLoading() || (this.$form.removeClass("error"), this.$submit.addClass("loading"), this.$email.removeClass("error"), this.$errors.html(""), this.onboarding_email_address = new a.cta.EmailAddressValidator({
                    email: this.$email.val()
                }), this.onboarding_email_address.isValid() ? this.successHandler() : this.errorHandler())
            },
            errorHandler: function() {
                i.setTimeout(function() {
                    this.$form.addClass("error")
                }.bind(this), 0), this.$email.focus().addClass("error"), this.$submit.removeClass("loading")
            },
            outputErrors: function(t) {
                var n;
                try {
                    n = t.responseText ? i.JSON.parse(t.responseText).errors : {}
                } catch (r) {
                    n = {
                        base: ["We could not process your request. Please try again."]
                    }
                }
                if (this.$errors.html(""), n)
                    for (var r in n) e('input[name="' + r + '"]', this.$el).addClass("error"), this.$errors.append('<p class="info__error">' + n[r].join('</p><p class="info__error">') + "</p>");
                this.$submit.removeClass("loading")
            },
            transition: function(t, n, i) {
                "function" != typeof i && (i = o), e('[data-signup="' + t + '"]', this.$el).stop().fadeOut(400, function() {
                    e('[data-signup="' + n + '"]', this.$el).stop().fadeIn(400, i)
                }.bind(this))
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.cta.OnboardingView = a.cta.CtaView.extend({
            successHandler: function() {
                var e = this.$email.val();
                return i.IntercomOutageMode && i.submitOnboardEmailDuringOutage ? i.submitOnboardEmailDuringOutage(e) : void(a.query("md") ? this.sendEmailForMobile(e) : this.recordEmailSubmission(e, function(t) {
                    this.prepareRedirect(e, t)
                }.bind(this)))
            },
            prepareRedirect: function(t, r) {
                var a = "https://app.intercom.io/admins/sign_up",
                    s = {
                        email: t,
                        product: this.$el.data("package"),
                        plan: this.$el.data("plan"),
                        user_count: i.slider_user_count,
                        email_submission_id: r
                    };
                n.each(s, function(e, t) {
                    (e === o || "" === e) && delete s[t]
                });
                var l = e.param(s);
                this.redirect(a + "?" + l)
            },
            redirect: function(e) {
                i.location.href = e
            },
            sendEmail: function(t) {
                e.ajax({
                    url: "/mobile-signup",
                    type: "POST",
                    data: {
                        email: t
                    }
                }).then(function() {
                    this.transition("inputs", "success"), e.ajax({
                        url: "https://app.intercom.io/marketing_onboarding/onboarding_email_addresses",
                        type: "POST",
                        data: {
                            email: t
                        }
                    })
                }.bind(this), this.errorHandler.bind(this)), i.ga("send", "event", "button", "click", "open_installer_mobile")
            },
            recordEmailSubmission: function(e, t) {
                this.fireThirdPartyEvents(), setTimeout(function() {
                    if (i.IntercomGTM) {
                        var n = !0;
                        return i.IntercomGTM.recordEmailSubmission(e, n, i.IntercomGTM.pageviewId, t)
                    }
                    return t()
                }, 1)
            },
            sendEmailForMobile: function(e) {
                i.IntercomGTM ? this.recordEmailSubmission(e, this.sendEmail(e)) : (this.fireThirdPartyEvents(), this.sendEmail(e))
            },
            fireThirdPartyEvents: function() {
                if (i.App.environment.production) {
                    i.fbq && i.fbq("track", "InitiateCheckout");
                    var e = new Image(1, 1);
                    e.src = "//www.googleadservices.com/pagead/conversion/967943485/?label=UutXCOvj9WQQvcrGzQM&amp;guid=ON&amp;script=0"
                }
            }
        }), a.cta.OnboardingsView = t.View.extend({
            el: "body",
            initialize: function() {
                this.bindOnboardingEmailAddressForms()
            },
            bindOnboardingEmailAddressForms: function() {
                this.onboarding_email_address_form_views = [], n.each(e('[data-signup="form"]'), function(t) {
                    var n = new a.cta.OnboardingView({
                        el: e(t)
                    });
                    this.onboarding_email_address_form_views.push(n)
                }.bind(this))
            }
        }), e(function() {
            a.cta.OnboardingInit = new a.cta.OnboardingsView
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.Book = {}, a.Book.Instances = {}, a.Book.CSBook = a.cta.CtaView.extend({
            successHandler: function() {
                var e = new this.model({
                    email: this.$email.val()
                }).save();
                i.IntercomGTM && i.IntercomGTM.recordEmailSubmission(this.$email.val()), e.done(this.transition.bind(this, "initial", "success")).error(this.outputErrors.bind(this))
            },
            model: t.Model.extend({
                urlRoot: "/books/customer-support-email",
                defaults: {
                    email: ""
                }
            })
        }), e(function() {
            var t = e('[data-book="customer-support"]');
            t.length && (a.Book.Instances.CS = new a.Book.CSBook({
                el: t
            }))
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.Book.JTBDBook = a.cta.CtaView.extend({
            successHandler: function() {
                var t = new this.model({
                    email: this.$email.val()
                }).save();
                a.Book.email = this.$email.val(), i.ga("send", "event", "button", "click", "jtbd_book-original-email"), i.IntercomGTM && i.IntercomGTM.recordEmailSubmission(a.Book.email), t.done(function() {
                    this.transition("initial", "success"), e("[data-book-init]", this.$el).on("click.book", function(t) {
                        var n = e(t.currentTarget),
                            i = n.data("bookInit");
                        e.featherlight(e('[data-book="' + i + '"]').html(), {
                            filter: null,
                            type: "html",
                            afterOpen: function() {
                                a.Book.Instances[i] = new a.Book[i]({
                                    el: e(".featherlight-inner")
                                })
                            }.bind(this)
                        })
                    }.bind(this))
                }.bind(this)).error(this.outputErrors.bind(this))
            },
            model: t.Model.extend({
                urlRoot: "/books/jtbd-save-user",
                defaults: {
                    email: ""
                }
            })
        }), e(function() {
            var t = e('[data-book="jtbd"]');
            t.length && (a.Book.Instances.JTBD = new a.Book.JTBDBook({
                el: t
            }))
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App,
            s = a.Book,
            l = i.validator;
        s.Base = t.View.extend({
            events: {
                submit: "handleSubmit"
            },
            validateInput: function(t) {
                var n = !1,
                    i = t.data("validate").split(","),
                    r = t.data("notEqual");
                return i.forEach(function(i) {
                    var o = i.split(":"),
                        a = o[0],
                        s = [t.val()];
                    s.push(o[1]), l["is" + a].apply(null, s) ? t.removeClass("error") : (t.addClass("error"), n = !0), r && l.equals(t.val(), e('[name="' + r + '"]', this.$el).val()) && (t.addClass("error"), n = !0)
                }.bind(this)), n
            },
            validateAll: function() {
                var t = !1;
                this.liveEdit(), e("input", this.$el).each(function(n, i) {
                    this.validateInput(e(i)) && (t = !0)
                }.bind(this)), this.$el.toggleClass("error", t)
            },
            isValidForm: function() {
                return !this.$el.hasClass("error")
            },
            liveEdit: function() {
                this.live !== !0 && (this.live = !0, e("input", this.$el).on("keyup.book", function(t) {
                    this.validateInput(e(t.currentTarget))
                }.bind(this)))
            },
            saveData: function(t, n) {
                return new t(n).save({
                    beforeSend: function(t) {
                        t.setRequestHeader("X-CSRF-Token", e('meta[name="csrf-token"]').attr("content"))
                    }
                })
            },
            serialize: function() {
                var e = {};
                return this.$el.serializeArray().forEach(function(t) {
                    e[t.name] = t.value
                }), e
            },
            success: function() {
                e('[type="submit"]', this.$el).removeClass("loading"), e("[data-success]", this.$el).removeClass("u__hidden"), e("[data-content]", this.$el).addClass("u__hidden"), this.clearErrors(), this.tag(), i.App.fn.popups()
            },
            clearErrors: function() {
                e("[data-errors]", this.$el).html("")
            },
            error: function(t) {
                e('[type="submit"]').removeClass("loading"), this.clearErrors();
                var n;
                try {
                    n = t.responseText ? i.JSON.parse(t.responseText).errors : {}
                } catch (r) {
                    n = {
                        base: ["We could not process your request for the book. Please try again."]
                    }
                }
                if (e("[data-errors]", this.$el).html(""), n)
                    for (var r in n) e('input[name="' + r + '"]', this.$el).addClass("error"), e("[data-errors]", this.$el).append('<p class="info__error">' + n[r].join('</p><p class="info__error">') + "</p>")
            },
            tag: function() {
                var e = this.$el.data("tag");
                e && i.ga && i.ga("book.send", "event", "button", "click", e)
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App,
            s = a.Book;
        s.Friends = s.Base.extend({
            initialize: function() {
                e("[data-success]", this.$el).addClass("u__hidden"), e("[data-content]", this.$el).removeClass("u__hidden")
            },
            handleSubmit: function(n) {
                if (n.preventDefault(), this.validateAll(), i.ga("send", "event", "button", "click", "jtbd_book-submission-share"), this.isValidForm()) {
                    e('[type="submit"]', this.$el).addClass("loading");
                    var r = this.serialize();
                    r.email = a.Book.email, r.type = "friend", this.saveData(t.Model.extend({
                        urlRoot: this.$el.data("model")
                    }), r).done(this.success.bind(this)).error(this.error.bind(this))
                }
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App,
            s = a.Book;
        s.Charity = s.Base.extend({
            initialize: function() {
                var t = this.$el;
                a.fn.tooltips(t), e("[data-success]", t).addClass("u__hidden"), e("[data-content]", t).removeClass("u__hidden"), e('[name="credit-card"]', t).mask("0000 0000 0000 0000"), e('[name="cvc"]', t).mask("0000"), e('[name="expiry-month"]', t).mask("00"), e('[name="expiry-year"]', t).mask("00"), e('[name="credit-card"]', t).on("keyup", function() {
                    19 === e(this).val().length && e('[name="expiry-month"]', t).trigger("focus")
                }), e('[name="expiry-month"]', t).on("keyup", function() {
                    2 === e(this).val().length && e('[name="expiry-year"]', t).trigger("focus")
                }), e('[name="expiry-year"]', t).on("keyup", function() {
                    2 === e(this).val().length && e('[name="cvc"]', t).trigger("focus")
                })
            },
            getToken: function(t) {
                i.Stripe.setPublishableKey(i.stripeApiKey), i.Stripe.card.createToken({
                    number: e('[name="credit-card"]', this.$el).val(),
                    cvc: e('[name="cvc"]', this.$el).val(),
                    exp_month: e('[name="expiry-month"]', this.$el).val(),
                    exp_year: "20" + e('[name="expiry-year"]', this.$el).val()
                }, t)
            },
            handleSubmit: function(n) {
                if (n.preventDefault(), this.validateAll(), i.ga("send", "event", "button", "click", "jtbd_book-submission-charity"), this.isValidForm()) {
                    e('[type="submit"]', this.$el).addClass("loading");
                    var r = {
                        email: a.Book.email,
                        type: "charity"
                    };
                    this.getToken(function(n, i) {
                        200 === n ? (r.stripeToken = i.id, this.saveData(t.Model.extend({
                            urlRoot: this.$el.data("model")
                        }), r).done(this.success.bind(this)).error(this.error.bind(this))) : (this.clearErrors(), e('[type="submit"]').removeClass("loading"), e("[data-errors]", this.$el).append('<p class="info__error">' + i.error.message + "</p>"))
                    }.bind(this))
                }
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n) {
        "use strict";
        e('[data-fancybox="video"]').each(function() {
            var t = e(this);
            t.fancybox({
                autosize: !1,
                type: "iframe",
                prevEffect: "none",
                nextEffect: "none",
                padding: 0,
                margin: 0,
                height: t.data("height") || 530,
                width: t.data("width") || 896,
                helpers: {
                    media: {},
                    overlay: {
                        css: {
                            background: "rgba(255, 255, 255, 0.95)"
                        }
                    }
                },
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
                }
            })
        })
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        e("[data-blog-config]").each(function() {
            var t = e(this),
                n = t.find("[data-blog-spinner]"),
                i = t.data("blogConfig"),
                r = "",
                o = "";
            e.ajax({
                url: "/blog-posts",
                method: "GET",
                data: i
            }).done(function(i) {
                e.each(i, function(e, t) {
                    o === t.date ? t.date = "" : o = t.date, r += '<div class="f__up f__bold footer__blog-date">' + t.date + "</div>", r += '<div class="footer__link"><a href="' + t.link + '">' + t.title + "</a></div>"
                }), n.addClass("hidden"), t.html(r).removeClass("hidden").removeClass("u__hidden")
            })
        })
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        var r = t.App;
        e("[data-visible]").each(function() {
            var t = e(this).data("visible") || "100%";
            r.fn.inView(this, function(t) {
                e(t).addClass("element-visible")
            }, t)
        }), e(".same-height").matchHeight(), r.fn.tooltips = function(n) {
            e('[data-tooltip="trigger"]', n).each(function() {
                var n = e(this);
                n.tooltipster({
                    delay: 0,
                    content: n.html(),
                    contentAsHTML: !0,
                    interactive: !0,
                    interactiveTolerance: 10,
                    maxWidth: "180",
                    positionTracker: !0,
                    position: r.query("md") ? "top" : "left",
                    speed: 0,
                    timer: 0,
                    trigger: t.Modernizr.touch ? "click" : "hover"
                })
            })
        }, r.fn.tooltips(n), e(".select").niceSelect();
        var o;
        if (e("[data-inline-wistia]").each(function() {
                var n = e(this),
                    i = n.data("inlineWistia");
                n.attr("id", "wistia_" + i), o = t.Wistia.embed(i, {
                    videoQuality: "hd-only"
                })
            }), e("[data-play]").on("click.play", function() {
                var n = e(this),
                    i = n.parent(),
                    r = i.find(".design__video-youtube");
                o && o.play && o.play(), r.length && r.attr("src", r.attr("src") + "?autoplay=1"), "wrap" !== e(this).data("play") ? n.addClass("u__hidden") : t.setTimeout(function() {
                    i.find(".design__video-overlay").addClass("u__hidden")
                }, 300), i.find(".design__video-player").removeClass("u__hidden"), n.addClass("design__video-enabled"), n.off("click.play")
            }), e(".language-banner").length) {
            var a = e(".home-banner-link");
            a.on("click", function(e) {
                e.preventDefault(), t.ga("send", "event", "button", "click", "language-banner", a.attr("data-locale")), t.location.assign(a.attr("data-href"))
            })
        }
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";

        function r() {
            f.length && (c = f.offset().top)
        }

        function o() {
            var t = e('[data-subnav="sticky"]');
            t.length && (m = t.offset().top)
        }
        var a, s, l, c, u = t.App,
            d = e("body"),
            f = e(".nav__primary"),
            h = e(".nav__subnav").length,
            p = e("[data-nav]"),
            m = e("[data-subnavHeight]").attr("data-subnavHeight") || 1e3,
            g = null,
            v = !1,
            y = {
                settings: function() {
                    a = s.data("nav"), p.removeClass("active"), d.attr("data-nav-active", a), u.query("md") && e(".nav__content").css("max-height", "")
                },
                show: function() {
                    d.addClass("nav__open"), s.addClass("active"), u.query("md") && e(".nav__content").css("max-height", t.innerHeight - 60 + "px")
                },
                hide: function() {
                    d.removeClass("nav__open")
                },
                close: function() {
                    t.setTimeout(function() {
                        s.one("click.navigation.close", function() {
                            p.removeClass("active"), y.hide()
                        })
                    }, 500)
                },
                leave: function() {
                    e(".nav__link:not([data-nav]), .nav__cta, .nav__logo").off("mouseover.navigation").on("mouseover.navigation", function(e) {
                        p.removeClass("active"), y.hide(), s.off("click.navigation.close")
                    }), e(".nav__top").off("mouseover.navigation").on("mouseover.navigation", function(n) {
                        l = t.setTimeout(function() {
                            n.pageX < e('[data-nav="products"]').offset().left && (p.removeClass("active"), y.hide(), s.off("click.navigation.close"))
                        }, 400)
                    }), e(".nav__content").off("mouseover.navigation").on("mouseover.navigation", function(e) {
                        t.clearTimeout(l)
                    })
                },
                click: function() {
                    p.on("click.navigation", function() {
                        s = e(this), y.settings(), a === g && d.hasClass("nav__open") ? y.hide() : y.show(), g = a
                    })
                }
            };
        p.on("click.navigation", function(e) {
            e.preventDefault()
        }), t.Modernizr.touch || u.query("md") || "#nav" === t.location.hash ? y.click() : (p.on("mouseover.navigation", function() {
            s = e(this), y.settings(), t.clearTimeout(l), y.close(), y.leave(), y.show(), g = a
        }), e(".nav__bg").on("mouseleave.navigation", function() {
            l = t.setTimeout(function() {
                p.removeClass("active"), y.hide()
            }, 300), s && s.off("click.navigation.close")
        }), e(n).keyup(function(e) {
            27 === e.keyCode && (p.removeClass("active"), y.hide(), s && s.off("click.navigation.close"))
        })), h && e(t).on("scroll", function() {
            d.toggleClass("nav__subnav-active", u.util.y() > m)
        }), o(), e(t).on("load", o), u.events.resize.push(o), d.hasClass("nav__fixed") || d.hasClass("nav__disabled-scroll") || h || (e(t).on("scroll", function(e) {
            var t = u.util.y();
            v && c >= t ? (d.removeClass("nav__fixed"), v = !1) : t > c && (d.addClass("nav__fixed"), v = !0)
        }), r(), e(t).on("load", r), u.events.resize.push(r))
    }(this.jQuery, this, this.document), $(function() {
        "use strict";

        function e() {
            var e = $('[data-active-link="true"]'),
                r = {};
            e.length && (e.each(function() {
                var e = $(this).attr("href").replace(/^\//, ""),
                    t = $(e);
                t.offset() && (r[e] = {
                    $el: $(this),
                    start: window.Math.floor(t.offset().top) - (i + 2),
                    stop: window.Math.floor(t.offset().top + t.outerHeight()) - (i + 2)
                })
            }), t = function(t) {
                e.removeClass("active"), $.each(r, function(i, r) {
                    r.start < t && r.stop > t && (e.removeClass("active"), r.$el.addClass("active"), n.events.activeLinksCb && n.events.activeLinksCb.call(r.$el))
                })
            })
        }
        var t, n = window.App,
            i = 60 + (n.headerOffset || 0);
        $("[data-scroll=true]").on("click", function(e) {
            var t = this.href.split("#")[1],
                n = "#" + t,
                r = $(n);
            r.length && ($("html, body").animate({
                scrollTop: r.offset().top - i
            }, 500, function() {
                window.location.hash = n
            }), e.preventDefault())
        }), window.App.fn.initActiveLinks = e, window.setTimeout(e, 3e3), $(window).on("load", e), n.events.resize.push(e), e(), $(window).on("scroll", function(e) {
            t && t(n.util.y())
        })
    }),
    function(e, t, n) {
        "use strict";

        function i() {
            o.numberCtaEvents(), t.analytics = {}, t.analytics.GTMEventList = [], a.scroll(), a.click()
        }
        t.ga = t.ga || function() {
            (t.ga.q = t.ga.q || []).push(arguments)
        };
        var r = {
                scrollMaxPercent: 0,
                arrScrollTier: [-25, 0],
                scrollTier: 0
            },
            o = {
                gatherData: function(e) {
                    var t = e.data("track").split(",");
                    return e.data("trackCta") && (t[1] += "-" + e.data("trackCta")), t
                },
                numberCtaEvents: function() {
                    e(".cta").each(function(t) {
                        e("[data-track]", e(this)).data("trackCta", t + 1), t += 1
                    })
                },
                findScrollPercent: function() {
                    var i = e(t).scrollTop(),
                        r = e(n).height(),
                        o = e(t).height(),
                        a = i / (r - o);
                    return a = Math.round(100 * a)
                },
                findScrollTier: function() {
                    var e = r.scrollMaxPercent,
                        t = 0;
                    switch (!0) {
                        case e > 25 && 50 >= e:
                            t = 25;
                            break;
                        case e > 50 && 75 >= e:
                            t = 50;
                            break;
                        case e > 75 && 100 >= e:
                            t = 75;
                            break;
                        default:
                            t = 0
                    }
                    return t
                },
                updateScrollPercent: function() {
                    return o.findScrollPercent() > r.scrollMaxPercent ? (r.scrollMaxPercent = o.findScrollPercent(), !0) : !1
                },
                updateScrollTier: function() {
                    return r.scrollMaxPercent > r.arrScrollTier[1] ? (r.arrScrollTier[0] += 25, r.arrScrollTier[1] += 25, r.scrollTier = o.findScrollTier(), !0) : !1
                }
            },
            a = {
                scroll: function() {
                    e(t).scroll(function() {
                        s.pageScroll()
                    })
                },
                click: function() {
                    e("[data-track]").click(function() {
                        var t = o.gatherData(e(this));
                        s.clickEvent(t)
                    }), e("[data-track-gtm]").click(function() {
                        s.gtmEvent(e(this).data("track-gtm"))
                    })
                }
            },
            s = {
                pageScroll: function() {
                    o.updateScrollPercent() && (t.ga("send", "event", "page", "scroll", "percent", r.scrollMaxPercent), o.updateScrollTier() && t.ga("send", "event", "page", "scroll", "tier", r.scrollTier))
                },
                clickEvent: function(e) {
                    t.ga("send", "event", e[0], "click", e[1].trim())
                },
                gtmEvent: function(e) {
                    t.Intercom && t.IntercomGTM && -1 === _.indexOf(t.analytics.GTMEventList, e) && (t.IntercomGTM.recordEvent(e.trim(), t.IntercomGTM.pageviewId), t.analytics.GTMEventList.push(e))
                }
            };
        i()
    }(jQuery, window, document);
var _wq = window._wq || [];
! function(e, t, n, i) {
    "use strict";

    function r(e) {
        this.$node = e, this.wisId = e.data("wistia"), this.$wisNode = e.closest(".wistia_embed"), this.autoplay = e.data("autoplay"), this.playCount = 0, this.loop = e.data("loop"), this.quality = e.data("quality")
    }

    function o() {
        f.collectVids(), f.addVidOptions(), a(), s()
    }

    function a() {
        e("[data-wistia]").length && e("body").append(e("<script/>", {
            src: "//fast.wistia.net/assets/external/E-v1.js"
        }))
    }

    function s() {
        e(".wistia__video-iframe").each(function() {
            var t = e("iframe", this);
            t.data("autoplay") && u.fn.inView(t, l.bind(null, t), "100%")
        })
    }

    function l(e) {
        !t.Wistia || e.data("played") === !0 && e.data("loop") !== !0 || (f.pauseLatest(), c = t.Wistia.api(e.data("wistia")), c.play(), c.bind("end", e.data.bind(e, "played", !0)))
    }
    var c, u = t.App,
        d = [],
        f = {
            collectVids: function() {
                e("[data-wistia]").each(function() {
                    var t = new r(e(this));
                    d.push(t)
                })
            },
            addToEventQueue: function(e, t) {
                var n = {};
                n[e] = t, _wq.push(n)
            },
            addVidOptions: function() {
                for (var e = 0; e < d.length; e++) {
                    var t = d[e];
                    t.autoplay && f.playOnView(t)
                }
            },
            play: function(e) {
                var t = function(t) {
                    c && c.pause(), t.play(), e.playCount += 1, c = t
                };
                (e.loop || e.playCount < 1) && f.addToEventQueue(e.wisId, t)
            },
            pauseLatest: function() {
                c && c.pause()
            },
            playOnView: function(e) {
                u.fn.inView(e.$node, f.play.bind(f, e), "100%")
            },
            vidObj: r
        };
    u.wisUtils = f, o()
}(this.jQuery, this, this.document),
function(e, t, n) {
    "use strict";

    function i() {
        var e = f.width(),
            t = f.height(),
            n = 1.77866;
        t * n > e ? (h.attr("height", t), h.attr("width", t * n), h.css("left", -(t * n - e) / 2)) : (h.attr("height", e / n), h.attr("width", e), h.css("top", -(e / n - t) / 2)), h.addClass("loaded")
    }

    function r() {
        p || s.query("md") || h[0].play()
    }

    function o() {
        s.query("md") || h[0].pause()
    }
    var a, s = t.App;
    if (e('[data-event="init"]').length) {
        e("[data-event-filter]").on("change", function() {
            var t = e('[data-event-filter="location"]').val();
            e("[data-event-location], .events__feed-month").removeClass("u__hidden"), "all" !== t && e('.event__feed-item[data-event-location!="' + t + '"]').addClass("u__hidden"), e(".events__feed-month").each(function() {
                var t = e(this),
                    n = t.text();
                e('[data-event-month="' + n + '"]:visible').length || t.addClass("u__hidden")
            })
        });
        var l = e(t).height(),
            c = e("body");
        e(t).on("scroll", function(e) {
            c.toggleClass("event__scrolling", t.App.util.y() > l / 2)
        });
        var u = t.App.cta.CtaView.extend({
                successHandler: function() {
                    var e = new this.model({
                        email: this.$email.val(),
                        tag: a
                    }).save();
                    e.done(this.transition.bind(this, "inputs", "success")).error(this.outputErrors.bind(this))
                },
                model: t.Backbone.Model.extend({
                    urlRoot: "/insideintercom",
                    defaults: {
                        email: "",
                        tag: ""
                    }
                })
            }),
            d = e('[data-event-layout="inline"]');
        d.length && (a = d.data("eventType"), new u({
            el: d
        })), e('[data-event="open-popup"]').on("click", function(t) {
            t.preventDefault(), a = e(this).data("eventType");
            var n;
            if (e(this).data("popupTarget")) {
                var i = e(this).data("popupTarget");
                n = e("[data-popup=" + i + "]")
            } else n = e(e(this).data("waiting") ? '[data-event="popup-waiting"]' : '[data-event="popup"]');
            e.featherlight(n.html(), {
                filter: null,
                type: "html",
                afterOpen: function() {
                    new u({
                        el: e(".featherlight-inner")
                    })
                }
            })
        });
        var f = e(".events__video"),
            h = e("video", f),
            p = !1;
        h.length && (i(), s.events.resize.push(i), e('[data-events="video-play"]').on("click", function(t) {
            t.preventDefault(), e.featherlight('<div class="events__video-iframe"><iframe src="https://www.youtube.com/embed/WD1u8rTbQMA?autoplay=1&hd=1&rel=0" frameborder="0" allowfullscreen></iframe></div>', {
                filter: null,
                type: "html",
                afterOpen: function() {
                    p = !0, o()
                },
                afterClose: function() {
                    p = !1, r()
                }
            })
        }), e(t).load(r), t.setTimeout(r, 3e3))
    }
}(this.jQuery, this, this.document),
function(e, t, n) {
    "use strict";
    if (e("body.redesign-about").length) {
        var i = function() {
                a.leadershipPopup(), a.slideChange()
            },
            r = {
                slideChange: function(e) {
                    var t = e.data("slideChange"),
                        n = e.closest('[data-carousel="wrap"]'),
                        i = n.find(".active[data-show]"),
                        r = this.getNextSlide(i, t);
                    r.trigger("click.app")
                },
                getNextSlide: function(e, t) {
                    var n = e.index() + 1,
                        i = e.siblings(":nth-child(" + (n + 1) + ")"),
                        r = e.siblings(":nth-child(" + (n - 1) + ")");
                    return e.is(":last-child") && (i = e.siblings(":first-child")), e.is(":first-child") && (r = e.siblings(":last-child")), "next" === t ? i : r
                }
            },
            o = {
                openLeadershipPopup: function(n) {
                    var i = e('[data-popup="leadership"]'),
                        r = n.data("slideTarget");
                    e.featherlight(i.html(), {
                        filter: null,
                        type: "html",
                        afterOpen: function() {
                            t.App.fn.animations(), a.slideChange(), o.goToSlide(r)
                        }
                    })
                },
                goToSlide: function(t) {
                    var n = e(".featherlight-content");
                    e('.about__leadership-slide[data-item="' + t + '"]', n).removeClass("u__hidden").addClass("active"), e('.about__leadership-slider-dot[data-show="' + t + '"]', n).addClass("active")
                }
            },
            a = {
                leadershipPopup: function() {
                    e('[data-event="open-popup"]').on("click", function(t) {
                        t.preventDefault(), o.openLeadershipPopup(e(this))
                    })
                },
                slideChange: function() {
                    e("[data-slide-change]").on("click", function(t) {
                        t.preventDefault(), r.slideChange(e(this))
                    })
                }
            };
        i()
    }
}(this.jQuery, this, this.document), $(window).load(function() {
        "use strict";

        function e(e, t, n) {
            $(e).removeClass("active"), window.setTimeout(function() {
                $(e).addClass("u__hidden"), $(t).removeClass("u__hidden"), window.setTimeout(function() {
                    $(t).addClass("active")
                }, 1)
            }, n)
        }

        function t() {
            e(".explain__step-1", ".explain__step-2", 500), window.particles(), window.setTimeout(function() {
                $(".explain__particles").addClass("active"), new window.TuringType($(".explain__step-2 .explain__typing")[0], "Help content completely reimagined... ", {
                    accuracy: 1,
                    interval: 40,
                    callback: function() {
                        window.setTimeout(n, 2e3)
                    }
                })
            }, 100)
        }

        function n() {
            e(".explain__step-2", ".explain__step-3", 500), window.setTimeout(function() {
                $(".explain__particles").addClass("active"), new window.TuringType($(".explain__step-3 .explain__typing")[0], "Get ready for a new product from Intercom ", {
                    accuracy: 1,
                    interval: 40,
                    callback: function() {
                        window.setTimeout(i, 2e3)
                    }
                })
            }, 1e3)
        }

        function i() {
            e(".explain__step-3", ".explain__step-4", 500), window.setTimeout(function() {
                $(".explain__particles").addClass("active"), new window.TuringType($(".explain__step-4 .explain__typing")[0], "Be the first to know. Sign up to get one month free. ", {
                    accuracy: 1,
                    interval: 40,
                    callback: function() {
                        $(".explain__cta").addClass("active")
                    }
                })
            }, 1e3)
        }
        window.setTimeout(function() {
            $(".explain__step-1").addClass("active")
        }, 500), window.setTimeout(function() {
            $(".explain__search-input").typetype("What if you could better support your users without growing your team?", {
                e: 0,
                t: 20,
                keypress: function() {
                    var e = window.scrollX,
                        t = window.scrollY,
                        n = $(this);
                    this.selectionStart = this.selectionEnd = this.value.length, n.trigger("focus").trigger("blur").trigger("focus"), window.scrollTo(e, t)
                },
                callback: function() {
                    $(".explain__step-1").addClass("explain__pulse")
                }
            })
        }, 1e3), $(".explain__submit").on("click", function(e) {
            e.preventDefault(), $(".explain__step-1").addClass("explain__zoom-out"), window.setTimeout(t, 500)
        });
        var r = window.App.cta.CtaView.extend({
            successHandler: function() {
                window.alert("success")
            },
            model: window.Backbone.Model.extend({
                urlRoot: "/api/explain",
                defaults: {
                    email: ""
                }
            })
        });
        new r({
            el: $(".explain__form")
        })
    }),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = function(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            s = function(e) {
                return a(e)
            },
            l = t.Model.extend({
                PRICE_DATA_FOR_USER_TIER: {
                    250: {
                        requiresSales: !1,
                        fixedPrices: {
                            base: 45,
                            variable: .4,
                            base_pro: 27.45,
                            variable_pro: .2
                        },
                        marginalPrices: {
                            observe: {
                                base: -45,
                                variable: -.4,
                                base_pro: -27.45,
                                variable_pro: -.2
                            },
                            learn: {
                                base: 4,
                                variable: .3,
                                base_pro: 2.45,
                                variable_pro: .2
                            },
                            support: {
                                base: 4,
                                variable: .5,
                                base_pro: 2.45,
                                variable_pro: .3
                            },
                            engage: {
                                base: 4,
                                variable: .7,
                                base_pro: 2.45,
                                variable_pro: .4
                            },
                            acquire: {
                                base: 4,
                                variable: .6,
                                base_pro: -3.66,
                                variable_pro: .41
                            },
                            combination: {
                                base: 12,
                                variable: 1.5,
                                base_pro: 7.35,
                                variable_pro: .9
                            }
                        },
                        variableLotSize: 50
                    },
                    1e3: {
                        requiresSales: !1,
                        fixedPrices: {
                            base: 48,
                            variable: 2.8,
                            base_pro: 29,
                            variable_pro: 1.7
                        },
                        marginalPrices: {
                            observe: {
                                base: -48,
                                variable: -2.8,
                                base_pro: -29,
                                variable_pro: -1.7
                            },
                            learn: {
                                base: 11,
                                variable: .4,
                                base_pro: 6.7,
                                variable_pro: .2
                            },
                            support: {
                                base: 13,
                                variable: 1,
                                base_pro: 7.9,
                                variable_pro: .6
                            },
                            engage: {
                                base: 15,
                                variable: 2.4,
                                base_pro: 9.1,
                                variable_pro: 1.5
                            },
                            acquire: {
                                base: 16,
                                variable: .2,
                                base_pro: 3.94,
                                variable_pro: .13
                            },
                            combination: {
                                base: 39,
                                variable: 3.8,
                                base_pro: 23.7,
                                variable_pro: 2.3
                            }
                        },
                        variableLotSize: 500
                    },
                    1e4: {
                        requiresSales: !1,
                        fixedPrices: {
                            base: 70,
                            variable: 34,
                            base_pro: 42.7,
                            variable_pro: 20.7
                        },
                        marginalPrices: {
                            observe: {
                                base: -70,
                                variable: -34,
                                base_pro: -42.7,
                                variable_pro: -20.7
                            },
                            learn: {
                                base: 15,
                                variable: 7,
                                base_pro: 9.1,
                                variable_pro: 4.3
                            },
                            support: {
                                base: 25,
                                variable: 17,
                                base_pro: 15.3,
                                variable_pro: 10.4
                            },
                            engage: {
                                base: 30,
                                variable: 27,
                                base_pro: 18.3,
                                variable_pro: 16.5
                            },
                            acquire: {
                                base: 38,
                                variable: 4,
                                base_pro: 23.18,
                                variable_pro: 2.48
                            },
                            combination: {
                                base: 70,
                                variable: 51,
                                base_pro: 42.7,
                                variable_pro: 31.2
                            }
                        },
                        variableLotSize: 5e3
                    },
                    5e4: {
                        requiresSales: !0
                    }
                },
                DEFAULT_USER_COUNT: 250,
                initialize: function() {
                    this.set("userCount", this.DEFAULT_USER_COUNT), this.set("userCountDragging", !1), this.set("userCountEverDragged", !1), this.set("hasPro", !1), this.updatePrice(), this.listenTo(this, "change:userCount", this.updatePrice), this.listenTo(this, "change:packageName", this.updatePrice), this.listenTo(this, "change:hasPro", this.updatePrice), this.listenTo(this, "change:userCountDragging", this.updateEverDragged)
                },
                updatePrice: function() {
                    var e = this.get("userCount"),
                        t = this.get("packageName"),
                        n = this.get("hasPro"),
                        i = this.calculatePrice(e, t, n);
                    i !== o && this.set("price", i), this.get("upsell_price_models") && this.get("upsell_price_models").length && this.get("upsell_price_models").map(function(t) {
                        t.set("hasPro", n), t.set("userCount", e)
                    })
                },
                calculatePrice: function(e, t, n) {
                    if (isNaN(parseInt(e, 10)) || !t) return o;
                    if ("observe" === t) return 0;
                    var i = this.userTierForCount(e),
                        r = this.PRICE_DATA_FOR_USER_TIER[i],
                        a = this.get("use_addon_pricing");
                    if (r.requiresSales) return "custom";
                    var s = r.fixedPrices,
                        l = r.marginalPrices[t],
                        c = l.base,
                        u = l.variable;
                    a || (c += s.base, u += s.variable), n && (u += l.variable_pro, c += l.base_pro, a || (u += s.variable_pro, c += s.base_pro));
                    var d = Math.ceil((e - i) / r.variableLotSize);
                    return 0 > d && (d = 0), c + u * d
                },
                userTierForCount: function(e) {
                    return 1e3 >= e ? 250 : 1e4 >= e ? 1e3 : 5e4 >= e ? 1e4 : 5e4
                },
                addUpsellPriceModel: function(e) {
                    var t = this.get("upsell_price_models") || [];
                    t.push(e), this.set("upsell_price_models", t)
                },
                updateEverDragged: function() {
                    this.set("userCountEverDragged", !0)
                }
            }),
            c = t.View.extend({
                initialize: function() {
                    this.listenTo(this.model, "change:userCount", this.renderUserCount), this.listenTo(this.model, "change:userCount", this.renderSliderUserCount), this.listenTo(this.model, "change:hasPro", this.renderPlan), this.listenTo(this.model, "change:price", this.renderPrice), this.listenTo(this.model, "change:userCountEverDragged", this.renderMessageUpdate), this.renderUserCount(), this.renderSliderUserCount(), this.renderPlan(), this.renderPrice(), this.renderMessageUpdate()
                },
                renderUserCount: function() {
                    var t = this.model.get("userCount");
                    e('[data-js~="user_count"]').text(s(t))
                },
                renderSliderUserCount: function() {
                    var e = this.model.get("userCount");
                    i.slider_user_count = e
                },
                renderPlan: function() {
                    var t = this.model.get("hasPro"),
                        n = t ? "pro" : "basic";
                    this.$el.find('[data-js~="add_plan"]').data("plan", n), e("[data-plan]").data("plan", n), e('[data-js~="selected_plan"]').text(t ? "Standard" : "Lite")
                },
                renderPrice: function() {
                    var t = this.model.get("price");
                    this.$el.find('[data-js~="hide_unless_custom"]').toggleClass("u__hidden", 5e4 !== Number(this.model.get("userCount"))), t && t.toFixed ? (t = a(Math.ceil(t)), this.$el.find('[data-js~="contact_sales_message"]').addClass("hidden"), this.$el.find('[data-js~="monthly_price_container"]').removeClass("hidden")) : (this.$el.find('[data-js~="monthly_price_container"]').addClass("hidden"), this.$el.find('[data-js~="contact_sales_message"]').removeClass("hidden")), "custom" === t ? (this.$el.find('[data-js~="hide_for_custom"]').add(this.$el.filter('[data-js~="hide_for_custom"]')).addClass("hidden"), this.$el.find('[data-js~="hide_unless_custom"]').removeClass("hidden")) : (this.$el.find('[data-js~="hide_for_custom"]').add(this.$el.filter('[data-js~="hide_for_custom"]')).removeClass("hidden"), this.$el.find('[data-js~="hide_unless_custom"]').addClass("hidden")), this.model.get("addon_price") ? this.$el.find('[data-js~="addon_monthly_price"]').text(t) : e('[data-js~="monthly_price"]').text(t)
                },
                renderMessageUpdate: function() {
                    var e = this.model.get("userCountEverDragged");
                    e ? this.$el.find('[data-js~="drag_message"]').addClass("hidden") : this.$el.find('[data-js~="drag_message"]').removeClass("hidden")
                }
            }),
            u = t.View.extend({
                RANGES: {
                    min: [250, 50],
                    "36.58%": [1e3, 500],
                    "80.48%": [1e4, 5e3],
                    max: [5e4]
                },
                initialize: function() {
                    this.setupPricingSlider(this.RANGES), this.$el.on({
                        slide: this._onSlide.bind(this),
                        set: this._onSet.bind(this)
                    }), this.listenTo(this.model, "change:userCount", this._onUserCountChange)
                },
                setupPricingSlider: function(e) {
                    this.model.set("userCount", e.min[0]), this.$el.noUiSlider({
                        range: e,
                        stepped: !0,
                        start: [e.min[0]]
                    }).noUiSlider_pips({
                        mode: "steps",
                        filter: function(e) {
                            return 250 === e || 5e4 === e ? 1 : 2
                        },
                        format: wNumb({
                            decimals: 0,
                            edit: function(e) {
                                return e > 250 && 5e4 > e ? "" : e >= 1e3 ? e / 1e3 + "k" : e
                            }
                        })
                    })
                },
                _onSlide: function(e, t) {
                    this.model.get("userCountDragging") || this.model.set("userCountDragging", !0), this.model.set("userCount", Math.floor(t))
                },
                _onSet: function() {
                    this.model.set("userCountDragging", !1)
                },
                _onUserCountChange: function() {
                    this.model.get("userCountDragging") || this.$el.val(this.model.get("userCount"))
                }
            }),
            d = t.View.extend({
                events: {
                    "change select": "onUserCountChange"
                },
                initialize: function() {
                    this.listenTo(this.model, "change:userCount", this.renderUserCount)
                },
                onUserCountChange: function() {
                    var t = this.$el.find("select").val();
                    this.model.set("userCount", t), e('[data-js~="price_prefix"]').text("Price")
                },
                renderUserCount: function() {
                    this.$el.find("select").val(this.model.get("userCount"))
                }
            }),
            f = t.View.extend({
                events: {
                    'click [data-js~="basic_plan"]': "removePro",
                    'click [data-js~="pro_plan"]': "addPro"
                },
                initialize: function() {
                    this.listenTo(this.model, "change:hasPro", this.renderPlanOptions), this.renderPlanOptions()
                },
                renderPlanOptions: function() {
                    this.model.get("hasPro") ? (e('[data-js~="pro_plan"]').removeClass("inactive"), e('[data-js~="basic_plan"]').addClass("inactive")) : (e('[data-js~="basic_plan"]').removeClass("inactive"), e('[data-js~="pro_plan"]').addClass("inactive"))
                },
                addPro: function() {
                    this.model.set("hasPro", !0)
                },
                removePro: function() {
                    this.model.set("hasPro", !1)
                }
            }),
            h = t.View.extend({
                initialize: function() {
                    this.listenTo(this.model, "change:price", this.renderHidden), this.renderHidden(), this.$el.find("form").on("submit", this.resetForm.bind(this)).on("ajax:success", this.onFormSuccess.bind(this)).on("ajax:error", this.onFormError.bind(this))
                },
                renderHidden: function() {
                    "custom" === this.model.get("price") ? (this.$el.removeClass("hidden"), this.$el.closest("[data-package]").addClass("contact_sales_active")) : (this.$el.addClass("hidden"), this.$el.closest("[data-package]").removeClass("contact_sales_active"))
                },
                resetForm: function() {
                    this.$el.find('[data-js~="contact_errors"]').addClass("hidden")
                },
                onFormSuccess: function() {
                    this.$el.find('[data-js~="contact_form"]').addClass("hidden"), this.$el.find('[data-js~="contact_success_message"]').removeClass("hidden"), i.ga("send", "event", "button", "click", "contact_us-submission")
                },
                onFormError: function(e, t) {
                    this.$el.find('[data-js~="contact_errors"]').removeClass("hidden").text(t.responseText)
                }
            });
        e(r).ready(function() {
            var t = e('[data-js="pricing_options_header"]');
            if (t.length) {
                var n = 1,
                    r = 1,
                    o = e(".pricing_nav"),
                    a = e(".pricing_nav").offset().top,
                    s = e(".pricing_nav").height(),
                    l = e(".option_b_scroll_point").offset().top - s,
                    c = e("#pricing-info").offset().top - s,
                    u = e(".pricing_nav_option_a"),
                    d = e(".pricing_nav_option_b");
                e(i).on("scroll", function(t) {
                    if (i.innerWidth > 860) {
                        var f = e(i).scrollTop();
                        a > f ? r = 1 : f >= a && l > f ? r = 2 : f >= l && c > f ? r = 3 : f > c && (r = 4), r >= 2 && 2 > n && (o.addClass("pricing_nav_sticky"), e("#pricing-options").css("padding-top", s)), r >= 3 && 3 > n && (u.removeClass("selected"), d.addClass("selected")), r >= 4 && 4 > n && o.addClass("pricing_nav_sticky_animate_out"), 3 >= r && n > 3 && o.removeClass("pricing_nav_sticky_animate_out"), 2 >= r && n > 2 && (d.removeClass("selected"), u.addClass("selected")), 1 >= r && n > 1 && (o.removeClass("pricing_nav_sticky"), e("#pricing-options").css("padding-top", 0)), n = r
                    }
                })
            }
            var f = e('[data-js="sticky_pricing_sidebar"]'),
                h = f.width();
            if (f.length) {
                var p = e(".pricing_calculator"),
                    m = 45,
                    g = p.offset().top,
                    v = p.offset().top + p.outerHeight() - f.outerHeight() - 2 * m,
                    y = function() {
                        if (i.innerWidth >= 1025) {
                            var t = e(i).scrollTop();
                            t > v ? f.css("position", "absolute").css("top", v + m) : t > g ? f.css("position", "fixed").css("top", m + "px").css("width", h + "px") : f.css("position", "relative").css("top", 0)
                        }
                    };
                e(i).on("scroll", y), y()
            }
        }), e(r).ready(function() {
            var t = e('[data-js-init="pricing"]');
            if (t.length) {
                var n = t.data("package"),
                    i = new l({
                        packageName: n
                    });
                e('[data-js-attach="user_slider"]').each(function() {
                    new u({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="user_dropdown"]').each(function() {
                    new d({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="user_count_and_price"]').each(function() {
                    new c({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="plan_chooser"]').each(function() {
                    new f({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="contact_sales"]').each(function() {
                    new h({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="add_on_price"]').each(function() {
                    var t = e(this),
                        r = t.data("package"),
                        o = new l({
                            packageName: r,
                            addon_price: !0,
                            use_addon_pricing: "acquire" !== r && "acquire" !== n
                        });
                    i.addUpsellPriceModel(o), new c({
                        el: t,
                        model: o
                    })
                })
            }
        }), e(function() {
            e('[data-js~="expand_content"] .js-trigger').click(function() {
                console.log(e(this)), e(this).next(".js-target").slideToggle(200, function() {
                    e(this).parent().toggleClass("expanded")
                }.bind(this))
            }), e("[data-js-scroll]").click(function(t) {
                var n = "." + e(this).data("jsScroll"),
                    i = e(n).offset().top;
                i -= i > 550 ? 230 : 130, e("html, body").stop().animate({
                    scrollTop: i
                }, 500, "swing", function() {
                    e(".pricing_nav_option").removeClass("selected"), e(this).addClass("selected")
                }.bind(this))
            })
        })
    }(this.jQuery, this.Backbone, this._, this, this.document), $(function() {
        "use strict";
        window.App.fn.popups = function() {
            $("[data-popup]").off("click.popup").on("click.popup", function(e) {
                e.preventDefault();
                var t = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - 275,
                    n = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - 250;
                window.open($(this).attr("href"), $(this).data("share"), "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=550, height=500, top=" + n + ", left=" + t)
            })
        }, window.App.fn.popups(), window.App.fn.socialCount = function() {
            function e(e) {
                return $.ajax({
                    url: e,
                    dataType: "jsonp",
                    timeout: 1500
                })
            }
            $(".twitter[data-url]").each(function() {
                var t = $(this);
                e("https://cdn.api.twitter.com/1/urls/count.json?url=" + t.data("url")).done(function(e) {
                    t.text(e.count || 0)
                }).fail(function() {
                    t.text("share")
                })
            }), $(".facebook[data-url]").each(function() {
                var t = $(this);
                e("https://graph.facebook.com/?id=" + t.data("url")).done(function(e) {
                    t.text(e.shares || 0)
                }).fail(function() {
                    t.text("share")
                })
            })
        }, window.App.fn.socialCount()
    }),
    function(e, t, n) {
        "use strict";
        e(function() {
            e('[data-js~="open-product-store"]').click(function() {
                t.ProductStore["default"].open(void 0, e(this).data().jsProductName, void 0, void 0, void 0, void 0, "add", e(this).data().jsBundleName)
            })
        })
    }(this.jQuery, this, this.document);

function waitAndRecordAbTestImpression(e, t) {
    var n = 0,
        i = setInterval(function() {
            5 === ++n && window.clearInterval(i), window.IntercomGTM && window.IntercomGTM.pageviewId && (window.clearInterval(i), window.IntercomGTM.recordAbTestImpression(window.IntercomGTM.pageviewId, e, t))
        }, 500)
}
window.Modernizr = function(e, t, n) {
        function i(e) {
            y.cssText = e
        }

        function r(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var i in e) {
                var r = e[i];
                if (!o(r, "-") && y[r] !== n) return "pfx" == t ? r : !0
            }
            return !1
        }

        function s(e, t, i) {
            for (var o in e) {
                var a = t[e[o]];
                if (a !== n) return i === !1 ? e[o] : r(a, "function") ? a.bind(i || t) : a
            }
            return !1
        }

        function l(e, t, n) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + w.join(i + " ") + i).split(" ");
            return r(t, "string") || r(t, "undefined") ? a(o, t) : (o = (e + " " + _.join(i + " ") + i).split(" "), s(o, t, n))
        }
        var c, u, d, f = "2.8.3",
            h = {},
            p = !0,
            m = t.documentElement,
            g = "modernizr",
            v = t.createElement(g),
            y = v.style,
            b = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            x = "Webkit Moz O ms",
            w = x.split(" "),
            _ = x.toLowerCase().split(" "),
            k = {},
            C = [],
            T = C.slice,
            E = function(e, n, i, r) {
                var o, a, s, l, c = t.createElement("div"),
                    u = t.body,
                    d = u || t.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = t.createElement("div"), s.id = r ? r[i] : g + (i + 1), c.appendChild(s);
                return o = ["&#173;", '<style id="s', g, '">', e, "</style>"].join(""), c.id = g, (u ? c : d).innerHTML += o, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)), a = n(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), m.style.overflow = l), !!a
            },
            S = function() {
                function e(e, o) {
                    o = o || t.createElement(i[e] || "div"), e = "on" + e;
                    var a = e in o;
                    return a || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), a = r(o[e], "function"), r(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, a
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return e
            }(),
            $ = {}.hasOwnProperty;
        d = r($, "undefined") || r($.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return $.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = T.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var r = function() {};
                        r.prototype = t.prototype;
                        var o = new r,
                            a = t.apply(o, n.concat(T.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, n.concat(T.call(arguments)))
                };
            return i
        }), k.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : E(["@media (", b.join("touch-enabled),("), g, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, k.cssanimations = function() {
            return l("animationName")
        }, k.csstransforms = function() {
            return !!l("transform")
        }, k.csstransforms3d = function() {
            var e = !!l("perspective");
            return e && "webkitPerspective" in m.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
                e = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), e
        }, k.csstransitions = function() {
            return l("transition")
        };
        for (var j in k) d(k, j) && (u = j.toLowerCase(), h[u] = k[j](), C.push((h[u] ? "" : "no-") + u));
        return h.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var i in e) d(e, i) && h.addTest(i, e[i]);
                else {
                    if (e = e.toLowerCase(), h[e] !== n) return h;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof p && p && (m.className += " " + (t ? "" : "no-") + e), h[e] = t
                }
                return h
            }, i(""), v = c = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        i = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function r(e) {
                    var t = v[e[m]];
                    return t || (t = {}, g++, e[m] = g, v[g] = t), t
                }

                function o(e, n, i) {
                    if (n || (n = t), u) return n.createElement(e);
                    i || (i = r(n));
                    var o;
                    return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !o.canHaveChildren || h.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
                }

                function a(e, n) {
                    if (e || (e = t), u) return e.createDocumentFragment();
                    n = n || r(e);
                    for (var o = n.frag.cloneNode(), a = 0, s = i(), l = s.length; l > a; a++) o.createElement(s[a]);
                    return o
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var i = r(e);
                    return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || s(e, i), e
                }
                var c, u, d = "3.7.0",
                    f = e.html5 || {},
                    h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, u = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        c = !0, u = !0
                    }
                }();
                var y = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: a
                };
                e.html5 = y, l(t)
            }(this, t), h._version = f, h._prefixes = b, h._domPrefixes = _, h._cssomPrefixes = w, h.hasEvent = S, h.testProp = function(e) {
                return a([e])
            }, h.testAllProps = l, h.testStyles = E, h.prefixed = function(e, t, n) {
                return t ? l(e, t, n) : l(e, "pfx")
            }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + C.join(" ") : ""), h
    }(this, this.document),
    function(e, t, n) {
        function i(e) {
            return "[object Function]" == g.call(e)
        }

        function r(e) {
            return "string" == typeof e
        }

        function o() {}

        function a(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function s() {
            var e = v.shift();
            y = 1, e ? e.t ? p(function() {
                ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), s()) : y = 0
        }

        function l(e, n, i, r, o, l, c) {
            function u(t) {
                if (!h && a(d.readyState) && (b.r = h = 1, !y && s(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && p(function() {
                        w.removeChild(d)
                    }, 50);
                    for (var i in E[n]) E[n].hasOwnProperty(i) && E[n][i].onload()
                }
            }
            var c = c || f.errorTimeout,
                d = t.createElement(e),
                h = 0,
                g = 0,
                b = {
                    t: i,
                    s: n,
                    e: o,
                    a: l,
                    x: c
                };
            1 === E[n] && (g = 1, E[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                u.call(this, g)
            }, v.splice(r, 0, b), "img" != e && (g || 2 === E[n] ? (w.insertBefore(d, x ? null : m), p(u, c)) : E[n].push(d))
        }

        function c(e, t, n, i, o) {
            return y = 0, t = t || "j", r(e) ? l("c" == t ? k : _, e, t, this.i++, n, i, o) : (v.splice(this.i++, 0, e), 1 == v.length && s()), this
        }

        function u() {
            var e = f;
            return e.loader = {
                load: c,
                i: 0
            }, e
        }
        var d, f, h = t.documentElement,
            p = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in h.style,
            x = b && !!t.createRange().compareNode,
            w = x ? h : m.parentNode,
            h = e.opera && "[object Opera]" == g.call(e.opera),
            h = !!t.attachEvent && !h,
            _ = b ? "object" : h ? "script" : "img",
            k = h ? "script" : _,
            C = Array.isArray || function(e) {
                return "[object Array]" == g.call(e)
            },
            T = [],
            E = {},
            S = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        f = function(e) {
            function t(e) {
                var t, n, i, e = e.split("!"),
                    r = T.length,
                    o = e.pop(),
                    a = e.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: e
                    };
                for (n = 0; a > n; n++) i = e[n].split("="), (t = S[i.shift()]) && (o = t(o, i));
                for (n = 0; r > n; n++) o = T[n](o);
                return o
            }

            function a(e, r, o, a, s) {
                var l = t(e),
                    c = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = i(r) ? r : r[e] || r[a] || r[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, r, o, a, s) : (E[l.url] ? l.noexec = !0 : E[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(r) || i(c)) && o.load(function() {
                    u(), r && r(l.origUrl, s, a), c && c(l.origUrl, s, a), E[l.url] = 2
                })))
            }

            function s(e, t) {
                function n(e, n) {
                    if (e) {
                        if (r(e)) n || (d = function() {
                            var e = [].slice.call(arguments);
                            f.apply(this, e), h()
                        }), a(e, d, t, 0, c);
                        else if (Object(e) === e)
                            for (l in s = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(l) && (!n && !--s && (i(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                f.apply(this, e), h()
                            } : d[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), h()
                                }
                            }(f[l])), a(e[l], d, t, l, c))
                    } else !n && h()
                }
                var s, l, c = !!e.test,
                    u = e.load || e.both,
                    d = e.callback || o,
                    f = d,
                    h = e.complete || o;
                n(c ? e.yep : e.nope, !!u), u && n(u)
            }
            var l, c, d = this.yepnope.loader;
            if (r(e)) a(e, 0, d, 0);
            else if (C(e))
                for (l = 0; l < e.length; l++) c = e[l], r(c) ? a(c, 0, d, 0) : C(c) ? f(c) : Object(c) === c && s(c, d);
            else Object(e) === e && s(e, d)
        }, f.addPrefix = function(e, t) {
            S[e] = t
        }, f.addFilter = function(e) {
            T.push(e)
        }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = u(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, n, i, r, l, c) {
            var u, d, h = t.createElement("script"),
                r = r || f.errorTimeout;
            h.src = e;
            for (d in i) h.setAttribute(d, i[d]);
            n = c ? s : n || o, h.onreadystatechange = h.onload = function() {
                !u && a(h.readyState) && (u = 1, n(), h.onload = h.onreadystatechange = null)
            }, p(function() {
                u || (u = 1, n(1))
            }, r), l ? h.onload() : m.parentNode.insertBefore(h, m)
        }, e.yepnope.injectCss = function(e, n, i, r, a, l) {
            var c, r = t.createElement("link"),
                n = l ? s : n || o;
            r.href = e, r.rel = "stylesheet", r.type = "text/css";
            for (c in i) r.setAttribute(c, i[c]);
            a || (m.parentNode.insertBefore(r, m), p(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(e, t, n, i, r) {
        "use strict";
        i.addTest("firefox", function() {
            return "undefined" != typeof InstallTrigger
        }), i.addTest("ie", function() {
            var e = t.navigator.userAgent,
                n = e.indexOf("MSIE ");
            if (n > 0) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10);
            var i = e.indexOf("Trident/");
            if (i > 0) {
                var r = e.indexOf("rv:");
                return parseInt(e.substring(r + 3, e.indexOf(".", r)), 10)
            }
            var o = e.indexOf("Edge/");
            return o > 0 ? parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) : !1
        })
    }(this.jQuery, this, this.document, this.Modernizr),
    /*!
     * jQuery JavaScript Library v1.11.1
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-05-01T17:42Z
     */
    function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = re.type(e);
            return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function i(e, t, n) {
            if (re.isFunction(t)) return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return re.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (fe.test(t)) return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function(e) {
                return re.inArray(e, t) >= 0 !== n
            })
        }

        function r(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function o(e) {
            var t = xe[e] = {};
            return re.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (pe.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(), re.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Te, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n
                    } catch (r) {}
                    re.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function u(e, t, n, i) {
            if (re.acceptData(e)) {
                var r, o, a = re.expando,
                    s = e.nodeType,
                    l = s ? re.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = Q.pop() || re.guid++ : a), l[c] || (l[c] = s ? {} : {
                    toJSON: re.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = re.extend(l[c], t) : l[c].data = re.extend(l[c].data, t)), o = l[c], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[re.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[re.camelCase(t)])) : r = o, r
            }
        }

        function d(e, t, n) {
            if (re.acceptData(e)) {
                var i, r, o = e.nodeType,
                    a = o ? re.cache : e,
                    s = o ? e[re.expando] : re.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !c(i) : !re.isEmptyObject(i)) return
                    }(n || (delete a[s].data, c(a[s]))) && (o ? re.cleanData([e], !0) : ne.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function f() {
            return !0
        }

        function h() {
            return !1
        }

        function p() {
            try {
                return pe.activeElement
            } catch (e) {}
        }

        function m(e) {
            var t = Me.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function g(e, t) {
            var n, i, r = 0,
                o = typeof e.getElementsByTagName !== ke ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== ke ? e.querySelectorAll(t || "*") : void 0;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || re.nodeName(i, t) ? o.push(i) : re.merge(o, g(i, t));
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], o) : o
        }

        function v(e) {
            Ae.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
        }

        function x(e) {
            var t = Xe.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function w(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
        }

        function _(e, t) {
            if (1 === t.nodeType && re.hasData(e)) {
                var n, i, r, o = re._data(e),
                    a = re._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; r > i; i++) re.event.add(t, n, s[n][i])
                }
                a.data && (a.data = re.extend({}, a.data))
            }
        }

        function k(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ne.noCloneEvent && t[re.expando]) {
                    r = re._data(t);
                    for (i in r.events) re.removeEvent(t, i, r.handle);
                    t.removeAttribute(re.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ae.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function C(t, n) {
            var i, r = re(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
            return r.detach(), o
        }

        function T(e) {
            var t = pe,
                n = Ye[e];
            return n || (n = C(e, t), "none" !== n && n || (Ke = (Ke || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ke[0].contentWindow || Ke[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Ke.detach()), Ye[e] = n), n
        }

        function E(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = ft.length; r--;)
                if (t = ft[r] + n, t in e) return t;
            return i
        }

        function $(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (o[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && $e(i) && (o[a] = re._data(i, "olddisplay", T(i.nodeName)))) : (r = $e(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }

        function j(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function A(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += re.css(e, n + Se[o], !0, r)), i ? ("content" === n && (a -= re.css(e, "padding" + Se[o], !0, r)), "margin" !== n && (a -= re.css(e, "border" + Se[o] + "Width", !0, r))) : (a += re.css(e, "padding" + Se[o], !0, r), "padding" !== n && (a += re.css(e, "border" + Se[o] + "Width", !0, r)));
            return a
        }

        function N(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = et(e),
                a = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = tt(e, t, o), (0 > r || null == r) && (r = e.style[t]), it.test(r)) return r;
                i = a && (ne.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + A(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }

        function F(e, t, n, i, r) {
            return new F.prototype.init(e, t, n, i, r)
        }

        function D() {
            return setTimeout(function() {
                ht = void 0
            }), ht = re.now()
        }

        function P(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function O(e, t, n) {
            for (var i, r = (bt[t] || []).concat(bt["*"]), o = 0, a = r.length; a > o; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function M(e, t, n) {
            var i, r, o, a, s, l, c, u, d = this,
                f = {},
                h = e.style,
                p = e.nodeType && $e(e),
                m = re._data(e, "fxshow");
            n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = re.css(e, "display"), u = "none" === c ? re._data(e, "olddisplay") || T(e.nodeName) : c, "inline" === u && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", ne.shrinkWrapBlocks() || d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], mt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        p = !0
                    }
                    f[i] = m && m[i] || re.style(e, i)
                } else c = void 0;
            if (re.isEmptyObject(f)) "inline" === ("none" === c ? T(e.nodeName) : c) && (h.display = c);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = re._data(e, "fxshow", {}), o && (m.hidden = !p), p ? re(e).show() : d.done(function() {
                    re(e).hide()
                }), d.done(function() {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in f) re.style(e, t, f[t])
                });
                for (i in f) a = O(p ? m[i] : 0, i, d), i in m || (m[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function I(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = re.camelCase(n), r = t[i], o = e[n], re.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = re.cssHooks[i], a && "expand" in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function L(e, t, n) {
            var i, r, o = 0,
                a = yt.length,
                s = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = ht || D(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: re.extend({}, t),
                    opts: re.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ht || D(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (I(u, c.opts.specialEasing); a > o; o++)
                if (i = yt[o].call(c, e, u, c.opts)) return i;
            return re.map(u, O, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function H(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(be) || [];
                if (re.isFunction(n))
                    for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function R(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0, re.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                a = e === zt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function q(e, t) {
            var n, i, r = re.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && re.extend(!0, e, n), e
        }

        function B(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in s)
                    if (s[a] && s[a].test(r)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function z(e, t, n, i) {
            var r, o, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = c[l + " " + o] || c["* " + o], !a)
                    for (r in c)
                        if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: a ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function U(e, t, n, i) {
            var r;
            if (re.isArray(t)) re.each(t, function(t, r) {
                n || Xt.test(e) ? i(e, r) : U(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== re.type(t)) i(e, t);
            else
                for (r in t) U(e + "[" + r + "]", t[r], n, i)
        }

        function W() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function V() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function X(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var Q = [],
            G = Q.slice,
            Z = Q.concat,
            J = Q.push,
            K = Q.indexOf,
            Y = {},
            ee = Y.toString,
            te = Y.hasOwnProperty,
            ne = {},
            ie = "1.11.1",
            re = function(e, t) {
                return new re.fn.init(e, t)
            },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            se = /-([\da-z])/gi,
            le = function(e, t) {
                return t.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: ie,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
            },
            pushStack: function(e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return re.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(re.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: Q.sort,
            splice: Q.splice
        }, re.extend = re.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (r = arguments[s]))
                    for (i in r) e = a[i], n = r[i], a !== n && (c && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, o = e && re.isArray(e) ? e : []) : o = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(c, o, n)) : void 0 !== n && (a[i] = n));
            return a
        }, re.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === re.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === re.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !re.isArray(e) && e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && re.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ae, "ms-").replace(se, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e);
                if (i) {
                    if (s)
                        for (; a > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                } else if (s)
                    for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break; return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(oe, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (K) return K.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i;) e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++) i = !t(e[o], o), i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > o; o++) r = t(e[o], o, i), null != r && l.push(r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && l.push(r);
                return Z.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), re.isFunction(e) ? (n = G.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(G.call(arguments)))
                }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ne
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Y["[object " + t + "]"] = t.toLowerCase()
        });
        var ce =
            /*!
             * Sizzle CSS Selector Engine v1.10.19
             * http://sizzlejs.com/
             *
             * Copyright 2013 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-04-18
             */
            function(e) {
                function t(e, t, n, i) {
                    var r, o, a, s, l, c, d, h, p, m;
                    if ((t ? t.ownerDocument || t : R) !== F && N(t), t = t || F, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (P && !i) {
                        if (r = ye.exec(e))
                            if (a = r[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode) return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && L(t, o) && o.id === a) return n.push(o), n
                            } else {
                                if (r[2]) return Y.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = r[3]) && w.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(a)), n
                            }
                        if (w.qsa && (!O || !O.test(e))) {
                            if (h = d = H, p = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = T(e), (d = t.getAttribute("id")) ? h = d.replace(xe, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", l = c.length; l--;) c[l] = h + f(c[l]);
                                p = be.test(e) && u(t.parentNode) || t, m = c.join(",")
                            }
                            if (m) try {
                                return Y.apply(n, p.querySelectorAll(m)), n
                            } catch (g) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                    return S(e.replace(le, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[H] = !0, e
                }

                function r(e) {
                    var t = F.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function o(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) _.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return i(function(t) {
                        return t = +t, i(function(n, i) {
                            for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function u(e) {
                    return e && typeof e.getElementsByTagName !== X && e
                }

                function d() {}

                function f(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function h(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === i,
                        o = B++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, l, c = [q, o];
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) {
                                    if (l = t[H] || (t[H] = {}), (s = l[i]) && s[0] === q && s[1] === o) return c[2] = s[2];
                                    if (l[i] = c, c[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function p(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, n, i) {
                    for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                    return i
                }

                function g(e, t, n, i, r) {
                    for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
                    return a
                }

                function v(e, t, n, r, o, a) {
                    return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, a)), i(function(i, a, s, l) {
                        var c, u, d, f = [],
                            h = [],
                            p = a.length,
                            v = i || m(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !i && t ? v : g(v, f, e, s, l),
                            b = n ? o || (i ? e : p || r) ? [] : a : y;
                        if (n && n(y, b, s, l), r)
                            for (c = g(b, h), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[h[u]] = !(y[h[u]] = d));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                    o(null, b = [], c, l)
                                }
                                for (u = b.length; u--;)(d = b[u]) && (c = o ? te.call(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else b = g(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, l) : Y.apply(a, b)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                            return e === t
                        }, a, !0), c = h(function(e) {
                            return te.call(t, e) > -1
                        }, a, !0), u = [function(e, n, i) {
                            return !o && (i || n !== $) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                        }]; r > s; s++)
                        if (n = _.relative[e[s].type]) u = [h(p(u), n)];
                        else {
                            if (n = _.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                                for (i = ++s; r > i && !_.relative[e[i].type]; i++);
                                return v(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(le, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                            }
                            u.push(n)
                        }
                    return p(u)
                }

                function b(e, n) {
                    var r = n.length > 0,
                        o = e.length > 0,
                        a = function(i, a, s, l, c) {
                            var u, d, f, h = 0,
                                p = "0",
                                m = i && [],
                                v = [],
                                y = $,
                                b = i || o && _.find.TAG("*", c),
                                x = q += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (c && ($ = a !== F && a); p !== w && null != (u = b[p]); p++) {
                                if (o && u) {
                                    for (d = 0; f = e[d++];)
                                        if (f(u, a, s)) {
                                            l.push(u);
                                            break
                                        }
                                    c && (q = x)
                                }
                                r && ((u = !f && u) && h--, i && m.push(u))
                            }
                            if (h += p, r && p !== h) {
                                for (d = 0; f = n[d++];) f(m, v, a, s);
                                if (i) {
                                    if (h > 0)
                                        for (; p--;) m[p] || v[p] || (v[p] = J.call(l));
                                    v = g(v)
                                }
                                Y.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                            }
                            return c && (q = x, $ = y), m
                        };
                    return r ? i(a) : a
                }
                var x, w, _, k, C, T, E, S, $, j, A, N, F, D, P, O, M, I, L, H = "sizzle" + -new Date,
                    R = e.document,
                    q = 0,
                    B = 0,
                    z = n(),
                    U = n(),
                    W = n(),
                    V = function(e, t) {
                        return e === t && (A = !0), 0
                    },
                    X = "undefined",
                    Q = 1 << 31,
                    G = {}.hasOwnProperty,
                    Z = [],
                    J = Z.pop,
                    K = Z.push,
                    Y = Z.push,
                    ee = Z.slice,
                    te = Z.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ie = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = re.replace("w", "w#"),
                    ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\]",
                    se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                    le = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
                    ce = new RegExp("^" + ie + "*," + ie + "*"),
                    ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
                    de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
                    fe = new RegExp(se),
                    he = new RegExp("^" + oe + "$"),
                    pe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + ae),
                        PSEUDO: new RegExp("^" + se),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + ne + ")$", "i"),
                        needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
                    },
                    me = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    ve = /^[^{]+\{\s*\[native \w/,
                    ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    be = /[+~]/,
                    xe = /'|\\/g,
                    we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
                    _e = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    };
                try {
                    Y.apply(Z = ee.call(R.childNodes), R.childNodes), Z[R.childNodes.length].nodeType
                } catch (ke) {
                    Y = {
                        apply: Z.length ? function(e, t) {
                            K.apply(e, ee.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, C = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, N = t.setDocument = function(e) {
                    var t, n = e ? e.ownerDocument || e : R,
                        i = n.defaultView;
                    return n !== F && 9 === n.nodeType && n.documentElement ? (F = n, D = n.documentElement, P = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                        N()
                    }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                        N()
                    })), w.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = r(function(e) {
                        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = ve.test(n.getElementsByClassName) && r(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), w.getById = r(function(e) {
                        return D.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                    }), w.getById ? (_.find.ID = function(e, t) {
                        if (typeof t.getElementById !== X && P) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, _.filter.ID = function(e) {
                        var t = e.replace(we, _e);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete _.find.ID, _.filter.ID = function(e) {
                        var t = e.replace(we, _e);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), _.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, _.find.CLASS = w.getElementsByClassName && function(e, t) {
                        return typeof t.getElementsByClassName !== X && P ? t.getElementsByClassName(e) : void 0
                    }, M = [], O = [], (w.qsa = ve.test(n.querySelectorAll)) && (r(function(e) {
                        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
                    }), r(function(e) {
                        var t = n.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ie + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
                    })), (w.matchesSelector = ve.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) {
                        w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), M.push("!=", se)
                    }), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(D.compareDocumentPosition), L = t || ve.test(D.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = t ? function(e, t) {
                        if (e === t) return A = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !w.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === R && L(R, e) ? -1 : t === n || t.ownerDocument === R && L(R, t) ? 1 : j ? te.call(j, e) - te.call(j, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return A = !0, 0;
                        var i, r = 0,
                            o = e.parentNode,
                            s = t.parentNode,
                            l = [e],
                            c = [t];
                        if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : j ? te.call(j, e) - te.call(j, t) : 0;
                        if (o === s) return a(e, t);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = t; i = i.parentNode;) c.unshift(i);
                        for (; l[r] === c[r];) r++;
                        return r ? a(l[r], c[r]) : l[r] === R ? -1 : c[r] === R ? 1 : 0
                    }, n) : F
                }, t.matches = function(e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== F && N(e), n = n.replace(de, "='$1']"), w.matchesSelector && P && (!M || !M.test(n)) && (!O || !O.test(n))) try {
                        var i = I.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (r) {}
                    return t(n, F, null, [e]).length > 0
                }, t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== F && N(e), L(e, t)
                }, t.attr = function(e, t) {
                    (e.ownerDocument || e) !== F && N(e);
                    var n = _.attrHandle[t.toLowerCase()],
                        i = n && G.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                    return void 0 !== i ? i : w.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        r = 0;
                    if (A = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(V), A) {
                        for (; t = e[r++];) t === e[r] && (i = n.push(r));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return j = null, e
                }, k = t.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += k(t);
                    return n
                }, _ = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: pe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(we, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(we, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(we, _e).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, i) {
                            return function(r) {
                                var o = t.attr(r, e);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c, u, d, f, h, p, m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            p = m = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (u = g[H] || (g[H] = {}), c = u[e] || [], h = c[0] === q && c[1], f = c[0] === q && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (f = h = 0) || p.pop();)
                                            if (1 === d.nodeType && ++f && d === t) {
                                                u[e] = [q, h, f];
                                                break
                                            }
                                    } else if (y && (c = (t[H] || (t[H] = {}))[e]) && c[0] === q) f = c[1];
                                    else
                                        for (;
                                            (d = ++h && d && d[m] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[H] || (d[H] = {}))[e] = [q, f]), d !== t)););
                                    return f -= r, f === i || f % i === 0 && f / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                for (var i, r = o(e, n), a = r.length; a--;) i = te.call(e, r[a]), e[i] = !(t[i] = r[a])
                            }) : function(e) {
                                return o(e, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = E(e.replace(le, "$1"));
                            return r[H] ? i(function(e, t, n, i) {
                                for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o, n), !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function(e) {
                            return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, _e).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === D
                        },
                        focus: function(e) {
                            return e === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !_.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ge.test(e.nodeName)
                        },
                        input: function(e) {
                            return me.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) _.pseudos[x] = s(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) _.pseudos[x] = l(x);
                return d.prototype = _.filters = _.pseudos, _.setFilters = new d, T = t.tokenize = function(e, n) {
                    var i, r, o, a, s, l, c, u = U[e + " "];
                    if (u) return n ? 0 : u.slice(0);
                    for (s = e, l = [], c = _.preFilter; s;) {
                        (!i || (r = ce.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ue.exec(s)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(le, " ")
                        }), s = s.slice(i.length));
                        for (a in _.filter) !(r = pe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
                }, E = t.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = W[e + " "];
                    if (!o) {
                        for (t || (t = T(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                        o = W(e, b(r, i)), o.selector = e
                    }
                    return o
                }, S = t.select = function(e, t, n, i) {
                    var r, o, a, s, l, c = "function" == typeof e && e,
                        d = !i && T(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && P && _.relative[o[1].type]) {
                            if (t = (_.find.ID(a.matches[0].replace(we, _e), t) || [])[0], !t) return n;
                            c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
                            if ((l = _.find[s]) && (i = l(a.matches[0].replace(we, _e), be.test(o[0].type) && u(t.parentNode) || t))) {
                                if (o.splice(r, 1), e = i.length && f(o), !e) return Y.apply(n, i), n;
                                break
                            }
                    }
                    return (c || E(e, d))(i, t, !P, n, be.test(e) && u(t.parentNode) || t), n
                }, w.sortStable = H.split("").sort(V).join("") === H, w.detectDuplicates = !!A, N(), w.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(F.createElement("div"))
                }), r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && r(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(ne, function(e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(e);
        re.find = ce, re.expr = ce.selectors, re.expr[":"] = re.expr.pseudos, re.unique = ce.uniqueSort, re.text = ce.getText, re.isXMLDoc = ce.isXML, re.contains = ce.contains;
        var ue = re.expr.match.needsContext,
            de = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^.[^:#\[\.,]*$/;
        re.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                    for (t = 0; r > t; t++)
                        if (re.contains(i[t], this)) return !0
                }));
                for (t = 0; r > t; t++) re.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
            }
        });
        var he, pe = e.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = re.fn.init = function(e, t) {
                var n, i;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                    if (n[1]) {
                        if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : pe, !0)), de.test(n[1]) && re.isPlainObject(t))
                            for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    if (i = pe.getElementById(n[2]), i && i.parentNode) {
                        if (i.id !== n[2]) return he.find(e);
                        this.length = 1, this[0] = i
                    }
                    return this.context = pe, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
            };
        ge.prototype = re.fn, he = re(pe);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.extend({
            dir: function(e, t, n) {
                for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), re.fn.extend({
            has: function(e) {
                var t, n = re(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (re.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? re.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return re.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return re.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return re.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return re.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return re.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return re.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return re.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return re.sibling(e.firstChild)
            },
            contents: function(e) {
                return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
            }
        }, function(e, t) {
            re.fn[e] = function(n, i) {
                var r = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ye[e] || (r = re.unique(r)), ve.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var be = /\S+/g,
            xe = {};
        re.Callbacks = function(e) {
            e = "string" == typeof e ? xe[e] || o(e) : re.extend({}, e);
            var t, n, i, r, a, s, l = [],
                c = !e.once && [],
                u = function(o) {
                    for (n = e.memory && o, i = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(t) {
                                re.each(t, function(t, n) {
                                    var i = re.type(n);
                                    "function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                                })
                            }(arguments), t ? r = l.length : n && (s = i, u(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && re.each(arguments, function(e, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (r >= i && r--, a >= i && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], r = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, n) {
                        return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : u(n)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return d
        }, re.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return re.Deferred(function(n) {
                                re.each(t, function(t, o) {
                                    var a = re.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? re.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, re.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = G.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : re.Deferred(),
                    c = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? G.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && re.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var we;
        re.fn.ready = function(e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? re.readyWait++ : re.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--re.readyWait : !re.isReady) {
                    if (!pe.body) return setTimeout(re.ready);
                    re.isReady = !0, e !== !0 && --re.readyWait > 0 || (we.resolveWith(pe, [re]), re.fn.triggerHandler && (re(pe).triggerHandler("ready"), re(pe).off("ready")))
                }
            }
        }), re.ready.promise = function(t) {
            if (!we)
                if (we = re.Deferred(), "complete" === pe.readyState) setTimeout(re.ready);
                else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                pe.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && pe.documentElement
                } catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
            return we.promise(t)
        };
        var _e, ke = "undefined";
        for (_e in re(ne)) break;
        ne.ownLast = "0" !== _e, ne.inlineBlockNeedsLayout = !1, re(function() {
                var e, t, n, i;
                n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
            function() {
                var e = pe.createElement("div");
                if (null == ne.deleteExpando) {
                    ne.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        ne.deleteExpando = !1
                    }
                }
                e = null
            }(), re.acceptData = function(e) {
                var t = re.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Te = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando], !!e && !c(e)
            },
            data: function(e, t, n) {
                return u(e, t, n)
            },
            removeData: function(e, t) {
                return d(e, t)
            },
            _data: function(e, t, n) {
                return u(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return d(e, t, !0)
            }
        }), re.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = re.data(o), 1 === o.nodeType && !re._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(o, i, r[i])));
                        re._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    re.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, e, t)
                }) : o ? l(o, e, re.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    re.removeData(this, e)
                })
            }
        }), re.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = re._queueHooks(e, t),
                    a = function() {
                        re.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return re._data(e, n) || re._data(e, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        re._removeData(e, t + "queue"), re._removeData(e, n)
                    })
                })
            }
        }), re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    re.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = re.Deferred(),
                    o = this,
                    a = this.length,
                    s = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = re._data(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        });
        var Ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            $e = function(e, t) {
                return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
            },
            je = re.access = function(e, t, n, i, r, o, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === re.type(n)) {
                    r = !0;
                    for (s in n) re.access(e, t, s, n[s], !0, o, a)
                } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(re(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Ae = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = pe.createElement("input"),
                t = pe.createElement("div"),
                n = pe.createDocumentFragment();
            if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === t.firstChild.nodeType, ne.tbody = !t.getElementsByTagName("tbody").length, ne.htmlSerialize = !!t.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), ne.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ne.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete t.test
                } catch (i) {
                    ne.deleteExpando = !1
                }
            }
        }(),
        function() {
            var t, n, i = pe.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var Ne = /^(?:input|select|textarea)$/i,
            Fe = /^key/,
            De = /^(?:mouse|pointer|contextmenu)|click/,
            Pe = /^(?:focusinfocus|focusoutblur)$/,
            Oe = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, h, p, m, g = re._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = re.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function(e) {
                            return typeof re === ke || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) o = Oe.exec(t[s]) || [], h = m = o[1], p = (o[2] || "").split(".").sort(), h && (c = re.event.special[h] || {}, h = (r ? c.delegateType : c.bindType) || h, c = re.event.special[h] || {}, d = re.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && re.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, l), (f = a[h]) || (f = a[h] = [], f.delegateCount = 0, c.setup && c.setup.call(e, i, p, u) !== !1 || (e.addEventListener ? e.addEventListener(h, u, !1) : e.attachEvent && e.attachEvent("on" + h, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), re.event.global[h] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, h, p, m, g = re.hasData(e) && re._data(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(be) || [""], c = t.length; c--;)
                        if (s = Oe.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
                            for (d = re.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                            l && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || re.removeEvent(e, h, g.handle), delete u[h])
                        } else
                            for (h in u) re.event.remove(e, h + t[c], n, i, !0);
                    re.isEmptyObject(u) && (delete g.handle, re._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, r) {
                var o, a, s, l, c, u, d, f = [i || pe],
                    h = te.call(t, "type") ? t.type : t,
                    p = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = u = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[re.expando] ? t : new re.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3,
                        t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), c = re.event.special[h] || {}, r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!r && !c.noBubble && !re.isWindow(i)) {
                        for (l = c.delegateType || h, Pe.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), u = s;
                        u === (i.ownerDocument || pe) && f.push(u.defaultView || u.parentWindow || e)
                    }
                    for (d = 0;
                        (s = f[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || h, o = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && re.acceptData(s) && (t.result = o.apply(s, n), t.result === !1 && t.preventDefault());
                    if (t.type = h, !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[h] && !re.isWindow(i)) {
                        u = i[a], u && (i[a] = null), re.event.triggered = h;
                        try {
                            i[h]()
                        } catch (m) {}
                        re.event.triggered = void 0, u && (i[a] = u)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = re.event.fix(e);
                var t, n, i, r, o, a = [],
                    s = G.call(arguments),
                    l = (re._data(this, "events") || {})[e.type] || [],
                    c = re.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = re.event.handlers.call(this, e, l), t = 0;
                        (r = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, o = 0;
                            (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], o = 0; s > o; o++) i = t[o], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), r[n] && r.push(i);
                            r.length && a.push({
                                elem: l,
                                handlers: r
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[re.expando]) return e;
                var t, n, i, r = e.type,
                    o = e,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = De.test(r) ? this.mouseHooks : Fe.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || pe), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || pe, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return re.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = re.extend(new re.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? re.event.trigger(r, null, t) : re.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = pe.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === ke && (e[i] = null), e.detachEvent(i, n))
        }, re.Event = function(e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
        }, re.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = f, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = f, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return (!r || r !== i && !re.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ne.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
            }
        }), ne.changeBubbles || (re.event.special.change = {
            setup: function() {
                return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
                })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ne.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                    }), re._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return re.event.remove(this, "._change"), !Ne.test(this.nodeName)
            }
        }), ne.focusinBubbles || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                re.event.simulate(t, e.target, re.event.fix(e), !0)
            };
            re.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t);
                    r || i.addEventListener(e, n, !0), re._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = re._data(i, t) - 1;
                    r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
                }
            }
        }), re.fn.extend({
            on: function(e, t, n, i, r) {
                var o, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (o in e) this.on(o, t, n, e[o], r);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = h;
                else if (!i) return this;
                return 1 === r && (a = i, i = function(e) {
                    return re().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                    re.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function() {
                    re.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    re.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Ie = / jQuery\d+="(?:null|\d+)"/g,
            Le = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
            He = /^\s+/,
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            qe = /<([\w:]+)/,
            Be = /<tbody/i,
            ze = /<|&#?\w+;/,
            Ue = /<(?:script|style|link)/i,
            We = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ve = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ze = m(pe),
            Je = Ze.appendChild(pe.createElement("div"));
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td, re.extend({
            clone: function(e, t, n) {
                var i, r, o, a, s, l = re.contains(e.ownerDocument, e);
                if (ne.html5Clone || re.isXMLDoc(e) || !Le.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML, Je.removeChild(o = Je.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (i = g(o), s = g(e), a = 0; null != (r = s[a]); ++a) i[a] && k(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || g(e), i = i || g(o), a = 0; null != (r = s[a]); a++) _(r, i[a]);
                    else _(e, o);
                return i = g(o, "script"), i.length > 0 && w(i, !l && g(e, "script")), i = s = r = null, o
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, a, s, l, c, u, d = e.length, f = m(t), h = [], p = 0; d > p; p++)
                    if (o = e[p], o || 0 === o)
                        if ("object" === re.type(o)) re.merge(h, o.nodeType ? [o] : o);
                        else if (ze.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), l = (qe.exec(o) || ["", ""])[1].toLowerCase(), u = Ge[l] || Ge._default, s.innerHTML = u[1] + o.replace(Re, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                    if (!ne.leadingWhitespace && He.test(o) && h.push(t.createTextNode(He.exec(o)[0])), !ne.tbody)
                        for (o = "table" !== l || Be.test(o) ? "<table>" !== u[1] || Be.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) re.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                    for (re.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = f.lastChild
                } else h.push(t.createTextNode(o));
                for (s && f.removeChild(s), ne.appendChecked || re.grep(g(h, "input"), v), p = 0; o = h[p++];)
                    if ((!i || -1 === re.inArray(o, i)) && (a = re.contains(o.ownerDocument, o), s = g(f.appendChild(o), "script"), a && w(s), n))
                        for (r = 0; o = s[r++];) Ve.test(o.type || "") && n.push(o);
                return s = null, f
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = re.expando, l = re.cache, c = ne.deleteExpando, u = re.event.special; null != (n = e[a]); a++)
                    if ((t || re.acceptData(n)) && (r = n[s], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) u[i] ? re.event.remove(n, i) : re.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== ke ? n.removeAttribute(s) : n[s] = null, Q.push(r))
                    }
            }
        }), re.fn.extend({
            text: function(e) {
                return je(this, function(e) {
                    return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || re.cleanData(g(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && w(g(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return re.clone(this, e, t)
                })
            },
            html: function(e) {
                return je(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ie, "") : void 0;
                    if ("string" == typeof e && !Ue.test(e) && (ne.htmlSerialize || !Le.test(e)) && (ne.leadingWhitespace || !He.test(e)) && !Ge[(qe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Re, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, re.cleanData(g(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Z.apply([], e);
                var n, i, r, o, a, s, l = 0,
                    c = this.length,
                    u = this,
                    d = c - 1,
                    f = e[0],
                    h = re.isFunction(f);
                if (h || c > 1 && "string" == typeof f && !ne.checkClone && We.test(f)) return this.each(function(n) {
                    var i = u.eq(n);
                    h && (e[0] = f.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (o = re.map(g(s, "script"), b), r = o.length; c > l; l++) i = s, l !== d && (i = re.clone(i, !0, !0), r && re.merge(o, g(i, "script"))), t.call(this[l], i, l);
                    if (r)
                        for (a = o[o.length - 1].ownerDocument, re.map(o, x), l = 0; r > l; l++) i = o[l], Ve.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qe, "")));
                    s = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            re.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = re(e), a = o.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(o[i])[t](n), J.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Ke, Ye = {};
        ! function() {
            var e;
            ne.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = pe.getElementsByTagName("body")[0], n && n.style ? (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== ke && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(pe.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Ee + ")(?!px)[a-z%]+$", "i"),
            rt = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(e) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }, tt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
            }) : pe.documentElement.currentStyle && (et = function(e) {
                return e.currentStyle
            }, tt = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !rt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                function t() {
                    var t, n, i, r;
                    n = pe.getElementsByTagName("body")[0], n && n.style && (t = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = "1%" !== (e.getComputedStyle(t, null) || {}).top, a = "4px" === (e.getComputedStyle(t, null) || {
                        width: "4px"
                    }).width, r = t.appendChild(pe.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === r[0].offsetHeight, s && (r[0].style.display = "", r[1].style.display = "none", s = 0 === r[0].offsetHeight), n.removeChild(i))
                }
                var n, i, r, o, a, s, l;
                n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
                    reliableHiddenOffsets: function() {
                        return null == s && t(), s
                    },
                    boxSizingReliable: function() {
                        return null == a && t(), a
                    },
                    pixelPosition: function() {
                        return null == o && t(), o
                    },
                    reliableMarginRight: function() {
                        return null == l && t(), l
                    }
                }))
            }(), re.swap = function(e, t, n, i) {
                var r, o, a = {};
                for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = a[o];
                return r
            };
        var ot = /alpha\([^)]*\)/i,
            at = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Ee + ")(.*)$", "i"),
            ct = new RegExp("^([+-])=(" + Ee + ")", "i"),
            ut = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            dt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ft = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ne.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = re.camelCase(t),
                        l = e.style;
                    if (t = re.cssProps[s] || (re.cssProps[s] = S(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                    if (o = typeof n, "string" === o && (r = ct.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch (c) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = re.camelCase(t);
                return t = re.cssProps[s] || (re.cssProps[s] = S(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = tt(e, t, i)), "normal" === o && t in dt && (o = dt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || re.isNumeric(r) ? r || 0 : o) : o
            }
        }), re.each(["height", "width"], function(e, t) {
            re.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? st.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, ut, function() {
                        return N(e, t, i)
                    }) : N(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && et(e);
                    return j(e, n, i ? A(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ne.opacity || (re.cssHooks.opacity = {
            get: function(e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), re.cssHooks.marginRight = E(ne.reliableMarginRight, function(e, t) {
            return t ? re.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            re.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Se[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, nt.test(e) || (re.cssHooks[e + t].set = j)
        }), re.fn.extend({
            css: function(e, t) {
                return je(this, function(e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (re.isArray(t)) {
                        for (i = et(e), r = t.length; r > a; a++) o[t[a]] = re.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    $e(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, re.fx = F.prototype.init, re.fx.step = {};
        var ht, pt, mt = /^(?:toggle|show|hide)$/,
            gt = new RegExp("^(?:([+-])=|)(" + Ee + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [M],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        r = gt.exec(t),
                        o = r && r[3] || (re.cssNumber[e] ? "" : "px"),
                        a = (re.cssNumber[e] || "px" !== o && +i) && gt.exec(re.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], r = r || [], a = +i || 1;
                        do s = s || ".5", a /= s, re.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        re.Animation = re.extend(L, {
                tweener: function(e, t) {
                    re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, r = e.length; r > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? yt.unshift(e) : yt.push(e)
                }
            }), re.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? re.extend({}, e) : {
                    complete: n || !n && t || re.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !re.isFunction(t) && t
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter($e).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = re.isEmptyObject(e),
                        o = re.speed(t, n, i),
                        a = function() {
                            var t = L(this, re.extend({}, e), o);
                            (r || re._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = re.timers,
                            a = re._data(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        (t || !n) && re.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = re._data(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = re.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(e, t) {
                var n = re.fn[t];
                re.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, r)
                }
            }), re.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                re.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var e, t = re.timers,
                    n = 0;
                for (ht = re.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || re.fx.stop(), ht = void 0
            }, re.fx.timer = function(e) {
                re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                pt || (pt = setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                clearInterval(pt), pt = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(e, t) {
                return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, r;
                t = pe.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = t.getElementsByTagName("a")[0], n = pe.createElement("select"), r = n.appendChild(pe.createElement("option")), e = t.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== t.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!e.value, ne.optSelected = r.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, e = pe.createElement("input"), e.setAttribute("value", ""), ne.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ne.radioValue = "t" === e.value
            }();
        var xt = /\r/g;
        re.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = re.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
                }
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                            if (n = i[l], (n.selected || l === r) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = re.makeArray(t), a = r.length; a--;)
                            if (i = r[a], re.inArray(re.valHooks.option.get(i), o) >= 0) try {
                                i.selected = n = !0
                            } catch (s) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), r
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
                }
            }, ne.checkOn || (re.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var wt, _t, kt = re.expr.attrHandle,
            Ct = /^(?:checked|selected)$/i,
            Tt = ne.getSetAttribute,
            Et = ne.input;
        re.fn.extend({
            attr: function(e, t) {
                return je(this, re.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === ke ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? _t : wt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(be);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Et && Tt || !Ct.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(Tt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), _t = {
            set: function(e, t, n) {
                return t === !1 ? re.removeAttr(e, n) : Et && Tt || !Ct.test(n) ? e.setAttribute(!Tt && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = kt[t] || re.find.attr;
            kt[t] = Et && Tt || !Ct.test(t) ? function(e, t, i) {
                var r, o;
                return i || (o = kt[t], kt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, kt[t] = o), r
            } : function(e, t, n) {
                return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Et && Tt || (re.attrHooks.value = {
            set: function(e, t, n) {
                return re.nodeName(e, "input") ? void(e.defaultValue = t) : wt && wt.set(e, t, n)
            }
        }), Tt || (wt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, kt.id = kt.name = kt.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: wt.set
        }, re.attrHooks.contenteditable = {
            set: function(e, t, n) {
                wt.set(e, "" === t ? !1 : t, n)
            }
        }, re.each(["width", "height"], function(e, t) {
            re.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ne.style || (re.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var St = /^(?:input|select|textarea|button|object)$/i,
            $t = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(e, t) {
                return je(this, re.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = re.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), re.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, r, o, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, r = re.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : St.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
            re.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ne.optSelected || (re.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }), ne.enctype || (re.propFix.enctype = "encoding");
        var jt = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    c = "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a = re.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            a = e ? re.trim(i) : "", n.className !== a && (n.className = a);
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) {
                    re(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, r = re(this), o = e.match(be) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else(n === ke || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            re.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var At = re.now(),
            Nt = /\?/,
            Ft = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                r = re.trim(t + "");
            return r && !re.trim(r.replace(Ft, function(e, t, r, o) {
                return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
            })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
        }, re.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
        };
        var Dt, Pt, Ot = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ht = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Bt = {},
            zt = {},
            Ut = "*/".concat("*");
        try {
            Pt = location.href
        } catch (Wt) {
            Pt = pe.createElement("a"), Pt.href = "", Pt = Pt.href
        }
        Dt = qt.exec(Pt.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Pt,
                type: "GET",
                isLocal: Lt.test(Dt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ut,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? q(q(e, re.ajaxSettings), t) : q(re.ajaxSettings, e)
            },
            ajaxPrefilter: H(Bt),
            ajaxTransport: H(zt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, u, v, y, x, _ = t;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", w.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, n && (y = B(d, w, n)), y = z(d, y, w, r), r ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[o] = x), x = w.getResponseHeader("etag"), x && (re.etag[o] = x)), 204 === e || "HEAD" === d.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, u = y.data, v = y.error, r = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || _) + "", r ? p.resolveWith(f, [u, _, w]) : p.rejectWith(f, [w, _, v]), w.statusCode(g), g = void 0, l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [w, d, r ? u : v]), m.fireWith(f, [w, _]), l && (h.trigger("ajaxComplete", [w, d]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, r, o, a, s, l, c, u, d = re.ajaxSetup({}, t),
                    f = d.context || d,
                    h = d.context && (f.nodeType || f.jquery) ? re(f) : re.event,
                    p = re.Deferred(),
                    m = re.Callbacks("once memory"),
                    g = d.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    x = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; t = It.exec(a);) u[t[1].toLowerCase()] = t[2];
                                t = u[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (d.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) g[t] = [g[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return c && c.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || Pt) + "").replace(Ot, "").replace(Rt, Dt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(be) || [""], null == d.crossDomain && (i = qt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Dt[1] && i[2] === Dt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Dt[3] || ("http:" === Dt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), R(Bt, d, t, w), 2 === b) return w;
                l = d.global, l && 0 === re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ht.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Nt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mt.test(o) ? o.replace(Mt, "$1_=" + At++) : o + (Nt.test(o) ? "&" : "?") + "_=" + At++)), d.ifModified && (re.lastModified[o] && w.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && w.setRequestHeader("If-None-Match", re.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : d.accepts["*"]);
                for (r in d.headers) w.setRequestHeader(r, d.headers[r]);
                if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === b)) return w.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[r](d[r]);
                if (c = R(zt, d, t, w)) {
                    w.readyState = 1, l && h.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
                        w.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (_) {
                        if (!(2 > b)) throw _;
                        n(-1, _)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return re.get(e, void 0, t, "script")
            }
        }), re.each(["get", "post"], function(e, t) {
            re[t] = function(e, n, i, r) {
                return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            re.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), re._evalUrl = function(e) {
            return re.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, re.fn.extend({
            wrapAll: function(e) {
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return re.isFunction(e) ? this.each(function(t) {
                    re(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = re(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = re.isFunction(e);
                return this.each(function(n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
        }, re.expr.filters.visible = function(e) {
            return !re.expr.filters.hidden(e)
        };
        var Vt = /%20/g,
            Xt = /\[\]$/,
            Qt = /\r?\n/g,
            Gt = /^(?:submit|button|image|reset|file)$/i,
            Zt = /^(?:input|select|textarea|keygen)/i;
        re.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) U(n, e[n], t, r);
            return i.join("&").replace(Vt, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Zt.test(this.nodeName) && !Gt.test(e) && (this.checked || !Ae.test(e))
                }).map(function(e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Qt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Qt, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || V()
        } : W;
        var Jt = 0,
            Kt = {},
            Yt = re.ajaxSettings.xhr();
        e.ActiveXObject && re(e).on("unload", function() {
            for (var e in Kt) Kt[e](void 0, !0)
        }), ne.cors = !!Yt && "withCredentials" in Yt, Yt = ne.ajax = !!Yt, Yt && re.ajaxTransport(function(e) {
            if (!e.crossDomain || ne.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var r, o = e.xhr(),
                            a = ++Jt;
                        if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (r in e.xhrFields) o[r] = e.xhrFields[r];
                        e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) void 0 !== n[r] && o.setRequestHeader(r, n[r] + "");
                        o.send(e.hasContent && e.data || null), t = function(n, r) {
                            var s, l, c;
                            if (t && (r || 4 === o.readyState))
                                if (delete Kt[a], t = void 0, o.onreadystatechange = re.noop, r) 4 !== o.readyState && o.abort();
                                else {
                                    c = {}, s = o.status, "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (u) {
                                        l = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                            c && i(s, l, c, o.getAllResponseHeaders())
                        }, e.async ? 4 === o.readyState ? setTimeout(t) : o.onreadystatechange = Kt[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = pe.head || re("head")[0] || pe.documentElement;
                return {
                    send: function(i, r) {
                        t = pe.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var en = [],
            tn = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = en.pop() || re.expando + "_" + At++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return a || re.error(r + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                a = arguments
            }, i.always(function() {
                e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, en.push(r)), a && re.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || pe;
            var i = de.exec(e),
                r = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
        };
        var nn = re.fn.load;
        re.fn.load = function(e, t, n) {
            if ("string" != typeof e && nn) return nn.apply(this, arguments);
            var i, r, o, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = re.trim(e.slice(s, e.length)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && re.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: t
            }).done(function(e) {
                r = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, r || [e.responseText, t, e])
            }), this
        }, re.expr.filters.animated = function(e) {
            return re.grep(re.timers, function(t) {
                return e === t.elem
            }).length
        };
        var rn = e.document.documentElement;
        re.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c, u = re.css(e, "position"),
                    d = re(e),
                    f = {};
                "static" === u && (e.style.position = "relative"), s = d.offset(), o = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === u || "fixed" === u) && re.inArray("auto", [o, l]) > -1, c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : d.css(f)
            }
        }, re.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return t = o.documentElement, re.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()), n = X(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - re.css(i, "marginTop", !0),
                        left: t.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                    return e || rn
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function(i) {
                return je(this, function(e, i, r) {
                    var o = X(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? re(o).scrollLeft() : r, n ? r : re(o).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function(e, t) {
            re.cssHooks[t] = E(ne.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            re.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                re.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || r === !0 ? "margin" : "border");
                    return je(this, function(t, n, i) {
                        var r;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                    }, t, o ? i : void 0, o, null)
                }
            })
        }), re.fn.size = function() {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var on = e.jQuery,
            an = e.$;
        return re.noConflict = function(t) {
            return e.$ === re && (e.$ = an), t && e.jQuery === re && (e.jQuery = on), re
        }, typeof t === ke && (e.jQuery = e.$ = re), re
    }),
    function(e, t) {
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n, i = e(document);
        e.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(t) {
                var n = e('meta[name="csrf-token"]').attr("content");
                n && t.setRequestHeader("X-CSRF-Token", n)
            },
            refreshCSRFTokens: function() {
                var t = e("meta[name=csrf-token]").attr("content"),
                    n = e("meta[name=csrf-param]").attr("content");
                e('form input[name="' + n + '"]').val(t)
            },
            fire: function(t, n, i) {
                var r = e.Event(n);
                return t.trigger(r, i), r.result !== !1
            },
            confirm: function(e) {
                return confirm(e)
            },
            ajax: function(t) {
                return e.ajax(t)
            },
            href: function(e) {
                return e[0].href
            },
            handleRemote: function(i) {
                var r, o, a, s, l, c;
                if (n.fire(i, "ajax:before")) {
                    if (s = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                        r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                        var u = i.data("ujs:submit-button");
                        u && (a.push(u), i.data("ujs:submit-button", null))
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                    return c = {
                        type: r || "GET",
                        data: a,
                        dataType: l,
                        beforeSend: function(e, r) {
                            return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [e, r]) ? void i.trigger("ajax:send", e) : !1
                        },
                        success: function(e, t, n) {
                            i.trigger("ajax:success", [e, t, n])
                        },
                        complete: function(e, t) {
                            i.trigger("ajax:complete", [e, t])
                        },
                        error: function(e, t, n) {
                            i.trigger("ajax:error", [e, t, n])
                        },
                        crossDomain: n.isCrossDomain(o)
                    }, s && (c.xhrFields = {
                        withCredentials: s
                    }), o && (c.url = o), n.ajax(c)
                }
                return !1
            },
            isCrossDomain: function(e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = e, n.href = n.href, !n.protocol || !n.host || t.protocol + "//" + t.host != n.protocol + "//" + n.host
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function(i) {
                var r = n.href(i),
                    o = i.data("method"),
                    a = i.attr("target"),
                    s = e("meta[name=csrf-token]").attr("content"),
                    l = e("meta[name=csrf-param]").attr("content"),
                    c = e('<form method="post" action="' + r + '"></form>'),
                    u = '<input name="_method" value="' + o + '" type="hidden" />';
                l === t || s === t || n.isCrossDomain(r) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
            },
            formElements: function(t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
            },
            disableFormElements: function(t) {
                n.formElements(t, n.disableSelector).each(function() {
                    n.disableFormElement(e(this))
                })
            },
            disableFormElement: function(e) {
                var n, i;
                n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
            },
            enableFormElements: function(t) {
                n.formElements(t, n.enableSelector).each(function() {
                    n.enableFormElement(e(this))
                })
            },
            enableFormElement: function(e) {
                var t = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
            },
            allowAction: function(e) {
                var t, i = e.data("confirm"),
                    r = !1;
                return i ? (n.fire(e, "confirm") && (r = n.confirm(i), t = n.fire(e, "confirm:complete", [r])), r && t) : !0
            },
            blankInputs: function(t, n, i) {
                var r, o, a = e(),
                    s = n || "input,textarea",
                    l = t.find(s);
                return l.each(function() {
                    if (r = e(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                        if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                        a = a.add(r)
                    }
                }), a.length ? a : !1
            },
            nonBlankInputs: function(e, t) {
                return n.blankInputs(e, t, !0)
            },
            stopEverything: function(t) {
                return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
            },
            disableElement: function(e) {
                var i = e.data("disable-with");
                e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function(e) {
                    return n.stopEverything(e)
                })
            },
            enableElement: function(e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
            }
        }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
            e.crossDomain || n.CSRFProtection(i)
        }), i.delegate(n.linkDisableSelector, "ajax:complete", function() {
            n.enableElement(e(this))
        }), i.delegate(n.buttonDisableSelector, "ajax:complete", function() {
            n.enableFormElement(e(this))
        }), i.delegate(n.linkClickSelector, "click.rails", function(i) {
            var r = e(this),
                o = r.data("method"),
                a = r.data("params"),
                s = i.metaKey || i.ctrlKey;
            if (!n.allowAction(r)) return n.stopEverything(i);
            if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
                if (s && (!o || "GET" === o) && !a) return !0;
                var l = n.handleRemote(r);
                return l === !1 ? n.enableElement(r) : l.error(function() {
                    n.enableElement(r)
                }), !1
            }
            return r.data("method") ? (n.handleMethod(r), !1) : void 0
        }), i.delegate(n.buttonClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return r === !1 ? n.enableFormElement(i) : r.error(function() {
                n.enableFormElement(i)
            }), !1
        }), i.delegate(n.inputChangeSelector, "change.rails", function(t) {
            var i = e(this);
            return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
        }), i.delegate(n.formSubmitSelector, "submit.rails", function(i) {
            var r, o, a = e(this),
                s = a.data("remote") !== t;
            if (!n.allowAction(a)) return n.stopEverything(i);
            if (a.attr("novalidate") == t && (r = n.blankInputs(a, n.requiredInputSelector), r && n.fire(a, "ajax:aborted:required", [r]))) return n.stopEverything(i);
            if (s) {
                if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function() {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [o]);
                    return l || setTimeout(function() {
                        n.enableFormElements(a)
                    }, 13), l
                }
                return n.handleRemote(a), !1
            }
            setTimeout(function() {
                n.disableFormElements(a)
            }, 13)
        }), i.delegate(n.formInputClickSelector, "click.rails", function(t) {
            var i = e(this);
            if (!n.allowAction(i)) return n.stopEverything(t);
            var r = i.attr("name"),
                o = r ? {
                    name: r,
                    value: i.val()
                } : null;
            i.closest("form").data("ujs:submit-button", o)
        }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function(t) {
            this == t.target && n.disableFormElements(e(this))
        }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
            this == t.target && n.enableFormElements(e(this))
        }), e(function() {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    function() {
        var e = this,
            t = e._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = i.push,
            s = i.slice,
            l = i.concat,
            c = r.toString,
            u = r.hasOwnProperty,
            d = i.forEach,
            f = i.map,
            h = i.reduce,
            p = i.reduceRight,
            m = i.filter,
            g = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            x = Array.isArray,
            w = Object.keys,
            _ = o.bind,
            k = function(e) {
                return e instanceof k ? e : this instanceof k ? void(this._wrapped = e) : new k(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : e._ = k, k.VERSION = "1.6.0";
        var C = k.each = k.forEach = function(e, t, i) {
            if (null == e) return e;
            if (d && e.forEach === d) e.forEach(t, i);
            else if (e.length === +e.length) {
                for (var r = 0, o = e.length; o > r; r++)
                    if (t.call(i, e[r], r, e) === n) return
            } else
                for (var a = k.keys(e), r = 0, o = a.length; o > r; r++)
                    if (t.call(i, e[a[r]], a[r], e) === n) return; return e
        };
        k.map = k.collect = function(e, t, n) {
            var i = [];
            return null == e ? i : f && e.map === f ? e.map(t, n) : (C(e, function(e, r, o) {
                i.push(t.call(n, e, r, o))
            }), i)
        };
        var T = "Reduce of empty array with no initial value";
        k.reduce = k.foldl = k.inject = function(e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), h && e.reduce === h) return i && (t = k.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
            if (C(e, function(e, o, a) {
                    r ? n = t.call(i, n, e, o, a) : (n = e, r = !0)
                }), !r) throw new TypeError(T);
            return n
        }, k.reduceRight = k.foldr = function(e, t, n, i) {
            var r = arguments.length > 2;
            if (null == e && (e = []), p && e.reduceRight === p) return i && (t = k.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
            var o = e.length;
            if (o !== +o) {
                var a = k.keys(e);
                o = a.length
            }
            if (C(e, function(s, l, c) {
                    l = a ? a[--o] : --o, r ? n = t.call(i, n, e[l], l, c) : (n = e[l], r = !0)
                }), !r) throw new TypeError(T);
            return n
        }, k.find = k.detect = function(e, t, n) {
            var i;
            return E(e, function(e, r, o) {
                return t.call(n, e, r, o) ? (i = e, !0) : void 0
            }), i
        }, k.filter = k.select = function(e, t, n) {
            var i = [];
            return null == e ? i : m && e.filter === m ? e.filter(t, n) : (C(e, function(e, r, o) {
                t.call(n, e, r, o) && i.push(e)
            }), i)
        }, k.reject = function(e, t, n) {
            return k.filter(e, function(e, i, r) {
                return !t.call(n, e, i, r)
            }, n)
        }, k.every = k.all = function(e, t, i) {
            t || (t = k.identity);
            var r = !0;
            return null == e ? r : g && e.every === g ? e.every(t, i) : (C(e, function(e, o, a) {
                return (r = r && t.call(i, e, o, a)) ? void 0 : n
            }), !!r)
        };
        var E = k.some = k.any = function(e, t, i) {
            t || (t = k.identity);
            var r = !1;
            return null == e ? r : v && e.some === v ? e.some(t, i) : (C(e, function(e, o, a) {
                return r || (r = t.call(i, e, o, a)) ? n : void 0
            }), !!r)
        };
        k.contains = k.include = function(e, t) {
            return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : E(e, function(e) {
                return e === t
            })
        }, k.invoke = function(e, t) {
            var n = s.call(arguments, 2),
                i = k.isFunction(t);
            return k.map(e, function(e) {
                return (i ? t : e[t]).apply(e, n)
            })
        }, k.pluck = function(e, t) {
            return k.map(e, k.property(t))
        }, k.where = function(e, t) {
            return k.filter(e, k.matches(t))
        }, k.findWhere = function(e, t) {
            return k.find(e, k.matches(t))
        }, k.max = function(e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var i = -(1 / 0),
                r = -(1 / 0);
            return C(e, function(e, o, a) {
                var s = t ? t.call(n, e, o, a) : e;
                s > r && (i = e, r = s)
            }), i
        }, k.min = function(e, t, n) {
            if (!t && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            var i = 1 / 0,
                r = 1 / 0;
            return C(e, function(e, o, a) {
                var s = t ? t.call(n, e, o, a) : e;
                r > s && (i = e, r = s)
            }), i
        }, k.shuffle = function(e) {
            var t, n = 0,
                i = [];
            return C(e, function(e) {
                t = k.random(n++), i[n - 1] = i[t], i[t] = e
            }), i
        }, k.sample = function(e, t, n) {
            return null == t || n ? (e.length !== +e.length && (e = k.values(e)), e[k.random(e.length - 1)]) : k.shuffle(e).slice(0, Math.max(0, t))
        };
        var S = function(e) {
            return null == e ? k.identity : k.isFunction(e) ? e : k.property(e)
        };
        k.sortBy = function(e, t, n) {
            return t = S(t), k.pluck(k.map(e, function(e, i, r) {
                return {
                    value: e,
                    index: i,
                    criteria: t.call(n, e, i, r)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var $ = function(e) {
            return function(t, n, i) {
                var r = {};
                return n = S(n), C(t, function(o, a) {
                    var s = n.call(i, o, a, t);
                    e(r, s, o)
                }), r
            }
        };
        k.groupBy = $(function(e, t, n) {
            k.has(e, t) ? e[t].push(n) : e[t] = [n]
        }), k.indexBy = $(function(e, t, n) {
            e[t] = n
        }), k.countBy = $(function(e, t) {
            k.has(e, t) ? e[t]++ : e[t] = 1
        }), k.sortedIndex = function(e, t, n, i) {
            n = S(n);
            for (var r = n.call(i, t), o = 0, a = e.length; a > o;) {
                var s = o + a >>> 1;
                n.call(i, e[s]) < r ? o = s + 1 : a = s
            }
            return o
        }, k.toArray = function(e) {
            return e ? k.isArray(e) ? s.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : []
        }, k.size = function(e) {
            return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length
        }, k.first = k.head = k.take = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[0] : 0 > t ? [] : s.call(e, 0, t)
        }, k.initial = function(e, t, n) {
            return s.call(e, 0, e.length - (null == t || n ? 1 : t))
        }, k.last = function(e, t, n) {
            return null == e ? void 0 : null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
        }, k.rest = k.tail = k.drop = function(e, t, n) {
            return s.call(e, null == t || n ? 1 : t)
        }, k.compact = function(e) {
            return k.filter(e, k.identity)
        };
        var j = function(e, t, n) {
            return t && k.every(e, k.isArray) ? l.apply(n, e) : (C(e, function(e) {
                k.isArray(e) || k.isArguments(e) ? t ? a.apply(n, e) : j(e, t, n) : n.push(e)
            }), n)
        };
        k.flatten = function(e, t) {
            return j(e, t, [])
        }, k.without = function(e) {
            return k.difference(e, s.call(arguments, 1))
        }, k.partition = function(e, t) {
            var n = [],
                i = [];
            return C(e, function(e) {
                (t(e) ? n : i).push(e)
            }), [n, i]
        }, k.uniq = k.unique = function(e, t, n, i) {
            k.isFunction(t) && (i = n, n = t, t = !1);
            var r = n ? k.map(e, n, i) : e,
                o = [],
                a = [];
            return C(r, function(n, i) {
                (t ? i && a[a.length - 1] === n : k.contains(a, n)) || (a.push(n), o.push(e[i]))
            }), o
        }, k.union = function() {
            return k.uniq(k.flatten(arguments, !0))
        }, k.intersection = function(e) {
            var t = s.call(arguments, 1);
            return k.filter(k.uniq(e), function(e) {
                return k.every(t, function(t) {
                    return k.contains(t, e)
                })
            })
        }, k.difference = function(e) {
            var t = l.apply(i, s.call(arguments, 1));
            return k.filter(e, function(e) {
                return !k.contains(t, e)
            })
        }, k.zip = function() {
            for (var e = k.max(k.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = k.pluck(arguments, "" + n);
            return t
        }, k.object = function(e, t) {
            if (null == e) return {};
            for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, k.indexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = 0,
                r = e.length;
            if (n) {
                if ("number" != typeof n) return i = k.sortedIndex(e, t), e[i] === t ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && e.indexOf === y) return e.indexOf(t, n);
            for (; r > i; i++)
                if (e[i] === t) return i;
            return -1
        }, k.lastIndexOf = function(e, t, n) {
            if (null == e) return -1;
            var i = null != n;
            if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            for (var r = i ? n : e.length; r--;)
                if (e[r] === t) return r;
            return -1
        }, k.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = e, e += n;
            return o
        };
        var A = function() {};
        k.bind = function(e, t) {
            var n, i;
            if (_ && e.bind === _) return _.apply(e, s.call(arguments, 1));
            if (!k.isFunction(e)) throw new TypeError;
            return n = s.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return e.apply(t, n.concat(s.call(arguments)));
                A.prototype = e.prototype;
                var r = new A;
                A.prototype = null;
                var o = e.apply(r, n.concat(s.call(arguments)));
                return Object(o) === o ? o : r
            }
        }, k.partial = function(e) {
            var t = s.call(arguments, 1);
            return function() {
                for (var n = 0, i = t.slice(), r = 0, o = i.length; o > r; r++) i[r] === k && (i[r] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return e.apply(this, i)
            }
        }, k.bindAll = function(e) {
            var t = s.call(arguments, 1);
            if (0 === t.length) throw new Error("bindAll must be passed function names");
            return C(t, function(t) {
                e[t] = k.bind(e[t], e)
            }), e
        }, k.memoize = function(e, t) {
            var n = {};
            return t || (t = k.identity),
                function() {
                    var i = t.apply(this, arguments);
                    return k.has(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
        }, k.delay = function(e, t) {
            var n = s.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, k.defer = function(e) {
            return k.delay.apply(k, [e, 1].concat(s.call(arguments, 1)))
        }, k.throttle = function(e, t, n) {
            var i, r, o, a = null,
                s = 0;
            n || (n = {});
            var l = function() {
                s = n.leading === !1 ? 0 : k.now(), a = null, o = e.apply(i, r), i = r = null
            };
            return function() {
                var c = k.now();
                s || n.leading !== !1 || (s = c);
                var u = t - (c - s);
                return i = this, r = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, o = e.apply(i, r), i = r = null) : a || n.trailing === !1 || (a = setTimeout(l, u)), o
            }
        }, k.debounce = function(e, t, n) {
            var i, r, o, a, s, l = function() {
                var c = k.now() - a;
                t > c ? i = setTimeout(l, t - c) : (i = null, n || (s = e.apply(o, r), o = r = null))
            };
            return function() {
                o = this, r = arguments, a = k.now();
                var c = n && !i;
                return i || (i = setTimeout(l, t)), c && (s = e.apply(o, r), o = r = null), s
            }
        }, k.once = function(e) {
            var t, n = !1;
            return function() {
                return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t)
            }
        }, k.wrap = function(e, t) {
            return k.partial(t, e)
        }, k.compose = function() {
            var e = arguments;
            return function() {
                for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, k.after = function(e, t) {
            return function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }, k.keys = function(e) {
            if (!k.isObject(e)) return [];
            if (w) return w(e);
            var t = [];
            for (var n in e) k.has(e, n) && t.push(n);
            return t
        }, k.values = function(e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = e[t[r]];
            return i
        }, k.pairs = function(e) {
            for (var t = k.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]];
            return i
        }, k.invert = function(e) {
            for (var t = {}, n = k.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i];
            return t
        }, k.functions = k.methods = function(e) {
            var t = [];
            for (var n in e) k.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, k.extend = function(e) {
            return C(s.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, k.pick = function(e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            return C(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }, k.omit = function(e) {
            var t = {},
                n = l.apply(i, s.call(arguments, 1));
            for (var r in e) k.contains(n, r) || (t[r] = e[r]);
            return t
        }, k.defaults = function(e) {
            return C(s.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        }, k.clone = function(e) {
            return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
        }, k.tap = function(e, t) {
            return t(e), e
        };
        var N = function(e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
            var r = c.call(e);
            if (r != c.call(t)) return !1;
            switch (r) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t) return !1;
            for (var o = n.length; o--;)
                if (n[o] == e) return i[o] == t;
            var a = e.constructor,
                s = t.constructor;
            if (a !== s && !(k.isFunction(a) && a instanceof a && k.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1;
            n.push(e), i.push(t);
            var l = 0,
                u = !0;
            if ("[object Array]" == r) {
                if (l = e.length, u = l == t.length)
                    for (; l-- && (u = N(e[l], t[l], n, i)););
            } else {
                for (var d in e)
                    if (k.has(e, d) && (l++, !(u = k.has(t, d) && N(e[d], t[d], n, i)))) break;
                if (u) {
                    for (d in t)
                        if (k.has(t, d) && !l--) break;
                    u = !l
                }
            }
            return n.pop(), i.pop(), u
        };
        k.isEqual = function(e, t) {
            return N(e, t, [], [])
        }, k.isEmpty = function(e) {
            if (null == e) return !0;
            if (k.isArray(e) || k.isString(e)) return 0 === e.length;
            for (var t in e)
                if (k.has(e, t)) return !1;
            return !0
        }, k.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, k.isArray = x || function(e) {
            return "[object Array]" == c.call(e)
        }, k.isObject = function(e) {
            return e === Object(e)
        }, C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            k["is" + e] = function(t) {
                return c.call(t) == "[object " + e + "]"
            }
        }), k.isArguments(arguments) || (k.isArguments = function(e) {
            return !(!e || !k.has(e, "callee"))
        }), "function" != typeof /./ && (k.isFunction = function(e) {
            return "function" == typeof e
        }), k.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, k.isNaN = function(e) {
            return k.isNumber(e) && e != +e
        }, k.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" == c.call(e)
        }, k.isNull = function(e) {
            return null === e
        }, k.isUndefined = function(e) {
            return void 0 === e
        }, k.has = function(e, t) {
            return u.call(e, t)
        }, k.noConflict = function() {
            return e._ = t, this
        }, k.identity = function(e) {
            return e
        }, k.constant = function(e) {
            return function() {
                return e
            }
        }, k.property = function(e) {
            return function(t) {
                return t[e]
            }
        }, k.matches = function(e) {
            return function(t) {
                if (t === e) return !0;
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        }, k.times = function(e, t, n) {
            for (var i = Array(Math.max(0, e)), r = 0; e > r; r++) i[r] = t.call(n, r);
            return i
        }, k.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, k.now = Date.now || function() {
            return (new Date).getTime()
        };
        var F = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        F.unescape = k.invert(F.escape);
        var D = {
            escape: new RegExp("[" + k.keys(F.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + k.keys(F.unescape).join("|") + ")", "g")
        };
        k.each(["escape", "unescape"], function(e) {
            k[e] = function(t) {
                return null == t ? "" : ("" + t).replace(D[e], function(t) {
                    return F[e][t]
                })
            }
        }), k.result = function(e, t) {
            if (null == e) return void 0;
            var n = e[t];
            return k.isFunction(n) ? n.call(e) : n
        }, k.mixin = function(e) {
            C(k.functions(e), function(t) {
                var n = k[t] = e[t];
                k.prototype[t] = function() {
                    var e = [this._wrapped];
                    return a.apply(e, arguments), L.call(this, n.apply(k, e))
                }
            })
        };
        var P = 0;
        k.uniqueId = function(e) {
            var t = ++P + "";
            return e ? e + t : t
        }, k.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var O = /(.)^/,
            M = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            I = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        k.template = function(e, t, n) {
            var i;
            n = k.defaults({}, n, k.templateSettings);
            var r = new RegExp([(n.escape || O).source, (n.interpolate || O).source, (n.evaluate || O).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(r, function(t, n, i, r, s) {
                return a += e.slice(o, s).replace(I, function(e) {
                    return "\\" + M[e]
                }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), o = s + t.length, t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", a)
            } catch (s) {
                throw s.source = a, s
            }
            if (t) return i(t, k);
            var l = function(e) {
                return i.call(this, e, k)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", l
        }, k.chain = function(e) {
            return k(e).chain()
        };
        var L = function(e) {
            return this._chain ? k(e).chain() : e
        };
        k.mixin(k), C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = i[e];
            k.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], L.call(this, n)
            }
        }), C(["concat", "join", "slice"], function(e) {
            var t = i[e];
            k.prototype[e] = function() {
                return L.call(this, t.apply(this._wrapped, arguments))
            }
        }), k.extend(k.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function() {
            return k
        })
    }.call(this),
    function(e, t) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(n, i, r) {
            e.Backbone = t(e, r, n, i)
        });
        else if ("undefined" != typeof exports) {
            var n = require("underscore");
            t(e, exports, n)
        } else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
    }(this, function(e, t, n, i) {
        var r = e.Backbone,
            o = [],
            a = (o.push, o.slice);
        o.splice;
        t.VERSION = "1.1.2", t.$ = i, t.noConflict = function() {
            return e.Backbone = r, this
        }, t.emulateHTTP = !1, t.emulateJSON = !1;
        var s = t.Events = {
                on: function(e, t, n) {
                    if (!c(this, "on", e, [t, n]) || !t) return this;
                    this._events || (this._events = {});
                    var i = this._events[e] || (this._events[e] = []);
                    return i.push({
                        callback: t,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(e, t, i) {
                    if (!c(this, "once", e, [t, i]) || !t) return this;
                    var r = this,
                        o = n.once(function() {
                            r.off(e, o), t.apply(this, arguments)
                        });
                    return o._callback = t, this.on(e, o, i)
                },
                off: function(e, t, i) {
                    var r, o, a, s, l, u, d, f;
                    if (!this._events || !c(this, "off", e, [t, i])) return this;
                    if (!e && !t && !i) return this._events = void 0, this;
                    for (s = e ? [e] : n.keys(this._events), l = 0, u = s.length; u > l; l++)
                        if (e = s[l], a = this._events[e]) {
                            if (this._events[e] = r = [], t || i)
                                for (d = 0, f = a.length; f > d; d++) o = a[d], (t && t !== o.callback && t !== o.callback._callback || i && i !== o.context) && r.push(o);
                            r.length || delete this._events[e]
                        }
                    return this
                },
                trigger: function(e) {
                    if (!this._events) return this;
                    var t = a.call(arguments, 1);
                    if (!c(this, "trigger", e, t)) return this;
                    var n = this._events[e],
                        i = this._events.all;
                    return n && u(n, t), i && u(i, arguments), this
                },
                stopListening: function(e, t, i) {
                    var r = this._listeningTo;
                    if (!r) return this;
                    var o = !t && !i;
                    i || "object" != typeof t || (i = this), e && ((r = {})[e._listenId] = e);
                    for (var a in r) e = r[a], e.off(t, i, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[a];
                    return this
                }
            },
            l = /\s+/,
            c = function(e, t, n, i) {
                if (!n) return !0;
                if ("object" == typeof n) {
                    for (var r in n) e[t].apply(e, [r, n[r]].concat(i));
                    return !1
                }
                if (l.test(n)) {
                    for (var o = n.split(l), a = 0, s = o.length; s > a; a++) e[t].apply(e, [o[a]].concat(i));
                    return !1
                }
                return !0
            },
            u = function(e, t) {
                var n, i = -1,
                    r = e.length,
                    o = t[0],
                    a = t[1],
                    s = t[2];
                switch (t.length) {
                    case 0:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx);
                        return;
                    case 1:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o);
                        return;
                    case 2:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, a);
                        return;
                    case 3:
                        for (; ++i < r;)(n = e[i]).callback.call(n.ctx, o, a, s);
                        return;
                    default:
                        for (; ++i < r;)(n = e[i]).callback.apply(n.ctx, t);
                        return
                }
            },
            d = {
                listenTo: "on",
                listenToOnce: "once"
            };
        n.each(d, function(e, t) {
            s[t] = function(t, i, r) {
                var o = this._listeningTo || (this._listeningTo = {}),
                    a = t._listenId || (t._listenId = n.uniqueId("l"));
                return o[a] = t, r || "object" != typeof i || (r = this), t[e](i, r, this), this
            }
        }), s.bind = s.on, s.unbind = s.off, n.extend(t, s);
        var f = t.Model = function(e, t) {
            var i = e || {};
            t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (i = this.parse(i, t) || {}), i = n.defaults({}, i, n.result(this, "defaults")), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments)
        };
        n.extend(f.prototype, s, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return n.clone(this.attributes)
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return n.escape(this.get(e))
            },
            has: function(e) {
                return null != this.get(e)
            },
            set: function(e, t, i) {
                var r, o, a, s, l, c, u, d;
                if (null == e) return this;
                if ("object" == typeof e ? (o = e, i = t) : (o = {})[e] = t, i || (i = {}), !this._validate(o, i)) return !1;
                a = i.unset, l = i.silent, s = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), d = this.attributes, u = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
                for (r in o) t = o[r], n.isEqual(d[r], t) || s.push(r), n.isEqual(u[r], t) ? delete this.changed[r] : this.changed[r] = t, a ? delete d[r] : d[r] = t;
                if (!l) {
                    s.length && (this._pending = i);
                    for (var f = 0, h = s.length; h > f; f++) this.trigger("change:" + s[f], this, d[s[f]], i)
                }
                if (c) return this;
                if (!l)
                    for (; this._pending;) i = this._pending, this._pending = !1, this.trigger("change", this, i);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(e, t) {
                return this.set(e, void 0, n.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var i in this.attributes) t[i] = void 0;
                return this.set(t, n.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
                var t, i = !1,
                    r = this._changing ? this._previousAttributes : this.attributes;
                for (var o in e) n.isEqual(r[o], t = e[o]) || ((i || (i = {}))[o] = t);
                return i
            },
            previous: function(e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function() {
                return n.clone(this._previousAttributes)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = this,
                    i = e.success;
                return e.success = function(n) {
                    return t.set(t.parse(n, e), e) ? (i && i(t, n, e), void t.trigger("sync", t, n, e)) : !1
                }, I(this, e), this.sync("read", this, e)
            },
            save: function(e, t, i) {
                var r, o, a, s = this.attributes;
                if (null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i = n.extend({
                        validate: !0
                    }, i), r && !i.wait) {
                    if (!this.set(r, i)) return !1
                } else if (!this._validate(r, i)) return !1;
                r && i.wait && (this.attributes = n.extend({}, s, r)), void 0 === i.parse && (i.parse = !0);
                var l = this,
                    c = i.success;
                return i.success = function(e) {
                    l.attributes = s;
                    var t = l.parse(e, i);
                    return i.wait && (t = n.extend(r || {}, t)), n.isObject(t) && !l.set(t, i) ? !1 : (c && c(l, e, i), void l.trigger("sync", l, e, i))
                }, I(this, i), o = this.isNew() ? "create" : i.patch ? "patch" : "update", "patch" === o && (i.attrs = r), a = this.sync(o, this, i), r && i.wait && (this.attributes = s), a
            },
            destroy: function(e) {
                e = e ? n.clone(e) : {};
                var t = this,
                    i = e.success,
                    r = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                if (e.success = function(n) {
                        (e.wait || t.isNew()) && r(), i && i(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                    }, this.isNew()) return e.success(), !1;
                I(this, e);
                var o = this.sync("delete", this, e);
                return e.wait || r(), o
            },
            url: function() {
                var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || M();
                return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(e) {
                return this._validate({}, n.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate) return !0;
                e = n.extend({}, this.attributes, e);
                var i = this.validationError = this.validate(e, t) || null;
                return i ? (this.trigger("invalid", this, i, n.extend(t, {
                    validationError: i
                })), !1) : !0
            }
        });
        var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
        n.each(h, function(e) {
            f.prototype[e] = function() {
                var t = a.call(arguments);
                return t.unshift(this.attributes), n[e].apply(n, t)
            }
        });
        var p = t.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                    silent: !0
                }, t))
            },
            m = {
                add: !0,
                remove: !0,
                merge: !0
            },
            g = {
                add: !0,
                remove: !1
            };
        n.extend(p.prototype, s, {
            model: f,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return t.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, n.extend({
                    merge: !1
                }, t, g))
            },
            remove: function(e, t) {
                var i = !n.isArray(e);
                e = i ? [e] : n.clone(e), t || (t = {});
                var r, o, a, s;
                for (r = 0, o = e.length; o > r; r++) s = e[r] = this.get(e[r]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
                return i ? e[0] : e
            },
            set: function(e, t) {
                t = n.defaults({}, t, m), t.parse && (e = this.parse(e, t));
                var i = !n.isArray(e);
                e = i ? e ? [e] : [] : n.clone(e);
                var r, o, a, s, l, c, u, d = t.at,
                    h = this.model,
                    p = this.comparator && null == d && t.sort !== !1,
                    g = n.isString(this.comparator) ? this.comparator : null,
                    v = [],
                    y = [],
                    b = {},
                    x = t.add,
                    w = t.merge,
                    _ = t.remove,
                    k = !p && x && _ ? [] : !1;
                for (r = 0, o = e.length; o > r; r++) {
                    if (l = e[r] || {}, a = l instanceof f ? s = l : l[h.prototype.idAttribute || "id"], c = this.get(a)) _ && (b[c.cid] = !0), w && (l = l === s ? s.attributes : l, t.parse && (l = c.parse(l, t)), c.set(l, t), p && !u && c.hasChanged(g) && (u = !0)), e[r] = c;
                    else if (x) {
                        if (s = e[r] = this._prepareModel(l, t), !s) continue;
                        v.push(s), this._addReference(s, t)
                    }
                    s = c || s, !k || !s.isNew() && b[s.id] || k.push(s), b[s.id] = !0
                }
                if (_) {
                    for (r = 0, o = this.length; o > r; ++r) b[(s = this.models[r]).cid] || y.push(s);
                    y.length && this.remove(y, t)
                }
                if (v.length || k && k.length)
                    if (p && (u = !0), this.length += v.length, null != d)
                        for (r = 0, o = v.length; o > r; r++) this.models.splice(d + r, 0, v[r]);
                    else {
                        k && (this.models.length = 0);
                        var C = k || v;
                        for (r = 0, o = C.length; o > r; r++) this.models.push(C[r])
                    }
                if (u && this.sort({
                        silent: !0
                    }), !t.silent) {
                    for (r = 0, o = v.length; o > r; r++)(s = v[r]).trigger("add", s, this, t);
                    (u || k && k.length) && this.trigger("sort", this, t)
                }
                return i ? e[0] : e
            },
            reset: function(e, t) {
                t || (t = {});
                for (var i = 0, r = this.models.length; r > i; i++) this._removeReference(this.models[i], t);
                return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), e
            },
            push: function(e, t) {
                return this.add(e, n.extend({
                    at: this.length
                }, t))
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return this.add(e, n.extend({
                    at: 0
                }, t))
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function() {
                return a.apply(this.models, arguments)
            },
            get: function(e) {
                return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e, t) {
                return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
            },
            pluck: function(e) {
                return n.invoke(this.models, "get", e)
            },
            fetch: function(e) {
                e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
                var t = e.success,
                    i = this;
                return e.success = function(n) {
                    var r = e.reset ? "reset" : "set";
                    i[r](n, e), t && t(i, n, e), i.trigger("sync", i, n, e)
                }, I(this, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
                t.wait || this.add(e, t);
                var i = this,
                    r = t.success;
                return t.success = function(e, n) {
                    t.wait && i.add(e, t), r && r(e, n, t)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof f) return e;
                t = t ? n.clone(t) : {}, t.collection = this;
                var i = new this.model(e, t);
                return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i
            },
            _addReference: function(e, t) {
                this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
            },
            _removeReference: function(e, t) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, i) {
                ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, i), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
            }
        });
        var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        n.each(v, function(e) {
            p.prototype[e] = function() {
                var t = a.call(arguments);
                return t.unshift(this.models), n[e].apply(n, t)
            }
        });
        var y = ["groupBy", "countBy", "sortBy", "indexBy"];
        n.each(y, function(e) {
            p.prototype[e] = function(t, i) {
                var r = n.isFunction(t) ? t : function(e) {
                    return e.get(t)
                };
                return n[e](this.models, r, i)
            }
        });
        var b = t.View = function(e) {
                this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, w)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            x = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        n.extend(b.prototype, s, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(e, n) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = n.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var t in e) {
                    var i = e[t];
                    if (n.isFunction(i) || (i = this[e[t]]), i) {
                        var r = t.match(x),
                            o = r[1],
                            a = r[2];
                        i = n.bind(i, this), o += ".delegateEvents" + this.cid, "" === a ? this.$el.on(o, i) : this.$el.on(o, a, i)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(n.result(this, "el"), !1);
                else {
                    var e = n.extend({}, n.result(this, "attributes"));
                    this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
                    var i = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                    this.setElement(i, !1)
                }
            }
        }), t.sync = function(e, i, r) {
            var o = k[e];
            n.defaults(r || (r = {}), {
                emulateHTTP: t.emulateHTTP,
                emulateJSON: t.emulateJSON
            });
            var a = {
                type: o,
                dataType: "json"
            };
            if (r.url || (a.url = n.result(i, "url") || M()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
                    model: a.data
                } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
                a.type = "POST", r.emulateJSON && (a.data._method = o);
                var s = r.beforeSend;
                r.beforeSend = function(e) {
                    return e.setRequestHeader("X-HTTP-Method-Override", o), s ? s.apply(this, arguments) : void 0
                }
            }
            "GET" === a.type || r.emulateJSON || (a.processData = !1), "PATCH" === a.type && _ && (a.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var l = r.xhr = t.ajax(n.extend(a, r));
            return i.trigger("request", i, l, r), l
        };
        var _ = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            k = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        t.ajax = function() {
            return t.$.ajax.apply(t.$, arguments)
        };
        var C = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            T = /\((.*?)\)/g,
            E = /(\(\?)?:\w+/g,
            S = /\*\w+/g,
            $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        n.extend(C.prototype, s, {
            initialize: function() {},
            route: function(e, i, r) {
                n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
                var o = this;
                return t.history.route(e, function(n) {
                    var a = o._extractParameters(e, n);
                    o.execute(r, a), o.trigger.apply(o, ["route:" + i].concat(a)), o.trigger("route", i, a), t.history.trigger("route", o, i, a)
                }), this
            },
            execute: function(e, t) {
                e && e.apply(this, t)
            },
            navigate: function(e, n) {
                return t.history.navigate(e, n), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = n.result(this, "routes");
                    for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function(e) {
                return e = e.replace($, "\\$&").replace(T, "(?:$1)?").replace(E, function(e, t) {
                    return t ? e : "([^/?]+)"
                }).replace(S, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(e, t) {
                var i = e.exec(t).slice(1);
                return n.map(i, function(e, t) {
                    return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                })
            }
        });
        var j = t.History = function() {
                this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            A = /^[#\/]|\s+$/g,
            N = /^\/+|\/+$/g,
            F = /msie [\w.]+/,
            D = /\/$/,
            P = /#.*$/;
        j.started = !1, n.extend(j.prototype, s, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function(e, t) {
                if (null == e)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = decodeURI(this.location.pathname + this.location.search);
                        var n = this.root.replace(D, "");
                        e.indexOf(n) || (e = e.slice(n.length))
                    } else e = this.getHash();
                return e.replace(A, "")
            },
            start: function(e) {
                if (j.started) throw new Error("Backbone.history has already been started");
                j.started = !0, this.options = n.extend({
                    root: "/"
                }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var i = this.getFragment(),
                    r = document.documentMode,
                    o = F.exec(navigator.userAgent.toLowerCase()) && (!r || 7 >= r);
                if (this.root = ("/" + this.root + "/").replace(N, "/"), o && this._wantsHashChange) {
                    var a = t.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(i)
                }
                this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = i;
                var s = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(A, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), j.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
            },
            loadUrl: function(e) {
                return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
                    return t.route.test(e) ? (t.callback(e), !0) : void 0
                })
            },
            navigate: function(e, t) {
                if (!j.started) return !1;
                t && t !== !0 || (t = {
                    trigger: !!t
                });
                var n = this.root + (e = this.getFragment(e || ""));
                if (e = e.replace(P, ""), this.fragment !== e) {
                    if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    return t.trigger ? this.loadUrl(e) : void 0
                }
            },
            _updateHash: function(e, t, n) {
                if (n) {
                    var i = e.href.replace(/(javascript:|#).*$/, "");
                    e.replace(i + "#" + t)
                } else e.hash = "#" + t
            }
        }), t.history = new j;
        var O = function(e, t) {
            var i, r = this;
            i = e && n.has(e, "constructor") ? e.constructor : function() {
                return r.apply(this, arguments)
            }, n.extend(i, r, t);
            var o = function() {
                this.constructor = i
            };
            return o.prototype = r.prototype, i.prototype = new o, e && n.extend(i.prototype, e), i.__super__ = r.prototype, i
        };
        f.extend = p.extend = C.extend = b.extend = j.extend = O;
        var M = function() {
                throw new Error('A "url" property or function must be specified')
            },
            I = function(e, t) {
                var n = t.error;
                t.error = function(i) {
                    n && n(e, i, t), e.trigger("error", e, i, t)
                }
            };
        return t
    }), /*! noUiSlider - 7.0.10 - 2014-12-27 14:50:46 */
    function() {
        "use strict";

        function e(e) {
            return e.split("").reverse().join("")
        }

        function t(e, t) {
            return e.substring(0, t.length) === t
        }

        function n(e, t) {
            return e.slice(-1 * t.length) === t
        }

        function i(e, t, n) {
            if ((e[t] || e[n]) && e[t] === e[n]) throw new Error(t)
        }

        function r(e) {
            return "number" == typeof e && isFinite(e)
        }

        function o(e, t) {
            var n = Math.pow(10, t);
            return (Math.round(e * n) / n).toFixed(t)
        }

        function a(t, n, i, a, s, l, c, u, d, f, h, p) {
            var m, g, v, y = p,
                b = "",
                x = "";
            return l && (p = l(p)), r(p) ? (t !== !1 && 0 === parseFloat(p.toFixed(t)) && (p = 0), 0 > p && (m = !0, p = Math.abs(p)), t !== !1 && (p = o(p, t)), p = p.toString(), -1 !== p.indexOf(".") ? (g = p.split("."), v = g[0], i && (b = i + g[1])) : v = p, n && (v = e(v).match(/.{1,3}/g), v = e(v.join(e(n)))), m && u && (x += u), a && (x += a), m && d && (x += d), x += v, x += b, s && (x += s), f && (x = f(x, y)), x) : !1
        }

        function s(e, i, o, a, s, l, c, u, d, f, h, p) {
            var m, g = "";
            return h && (p = h(p)), p && "string" == typeof p ? (u && t(p, u) && (p = p.replace(u, ""), m = !0), a && t(p, a) && (p = p.replace(a, "")), d && t(p, d) && (p = p.replace(d, ""), m = !0), s && n(p, s) && (p = p.slice(0, -1 * s.length)), i && (p = p.split(i).join("")), o && (p = p.replace(o, ".")), m && (g += "-"), g += p, g = g.replace(/[^0-9\.\-.]/g, ""), "" === g ? !1 : (g = Number(g), c && (g = c(g)), r(g) ? g : !1)) : !1
        }

        function l(e) {
            var t, n, r, o = {};
            for (t = 0; t < d.length; t += 1)
                if (n = d[t], r = e[n], void 0 === r) "negative" !== n || o.negativeBefore ? "mark" === n && "." !== o.thousand ? o[n] = "." : o[n] = !1 : o[n] = "-";
                else if ("decimals" === n) {
                if (!(r >= 0 && 8 > r)) throw new Error(n);
                o[n] = r
            } else if ("encoder" === n || "decoder" === n || "edit" === n || "undo" === n) {
                if ("function" != typeof r) throw new Error(n);
                o[n] = r
            } else {
                if ("string" != typeof r) throw new Error(n);
                o[n] = r
            }
            return i(o, "mark", "thousand"), i(o, "prefix", "negative"), i(o, "prefix", "negativeBefore"), o
        }

        function c(e, t, n) {
            var i, r = [];
            for (i = 0; i < d.length; i += 1) r.push(e[d[i]]);
            return r.push(n), t.apply("", r)
        }

        function u(e) {
            return this instanceof u ? void("object" == typeof e && (e = l(e), this.to = function(t) {
                return c(e, a, t)
            }, this.from = function(t) {
                return c(e, s, t)
            })) : new u(e)
        }
        var d = ["decimals", "thousand", "mark", "prefix", "postfix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"];
        window.wNumb = u
    }(),
    function(e) {
        "use strict";

        function t(t) {
            return t instanceof e || e.zepto && e.zepto.isZ(t)
        }

        function n(t, n) {
            return "string" == typeof t && 0 === t.indexOf("-inline-") ? (this.method = n || "html", this.target = this.el = e(t.replace("-inline-", "") || "<div/>"), !0) : void 0
        }

        function i(t) {
            if ("string" == typeof t && 0 !== t.indexOf("-")) {
                this.method = "val";
                var n = document.createElement("input");
                return n.name = t, n.type = "hidden", this.target = this.el = e(n), !0
            }
        }

        function r(e) {
            return "function" == typeof e ? (this.target = !1, this.method = e, !0) : void 0
        }

        function o(e, n) {
            return t(e) && !n ? (e.is("input, select, textarea") ? (this.method = "val", this.target = e.on("change.liblink", this.changeHandler)) : (this.target = e, this.method = "html"), !0) : void 0
        }

        function a(e, n) {
            return t(e) && ("function" == typeof n || "string" == typeof n && e[n]) ? (this.method = n, this.target = e, !0) : void 0
        }

        function s(t, n, i) {
            var r = this,
                o = !1;
            if (this.changeHandler = function(t) {
                    var n = r.formatInstance.from(e(this).val());
                    return n === !1 || isNaN(n) ? (e(this).val(r.lastSetValue), !1) : void r.changeHandlerMethod.call("", t, n)
                }, this.el = !1, this.formatInstance = i, e.each(u, function(e, i) {
                    return o = i.call(r, t, n), !o
                }), !o) throw new RangeError("(Link) Invalid Link.")
        }

        function l(e) {
            this.items = [], this.elements = [], this.origin = e
        }

        function c(t, n, i, r) {
            0 === t && (t = this.LinkDefaultFlag), this.linkAPI || (this.linkAPI = {}), this.linkAPI[t] || (this.linkAPI[t] = new l(this));
            var o = new s(n, i, r || this.LinkDefaultFormatter);
            o.target || (o.target = e(this)), o.changeHandlerMethod = this.LinkConfirm(t, o.el), this.linkAPI[t].push(o, o.el), this.LinkUpdate(t)
        }
        var u = [n, i, r, o, a];
        s.prototype.set = function(e) {
            var t = Array.prototype.slice.call(arguments),
                n = t.slice(1);
            this.lastSetValue = this.formatInstance.to(e), n.unshift(this.lastSetValue), ("function" == typeof this.method ? this.method : this.target[this.method]).apply(this.target, n)
        }, l.prototype.push = function(e, t) {
            this.items.push(e), t && this.elements.push(t)
        }, l.prototype.reconfirm = function(e) {
            var t;
            for (t = 0; t < this.elements.length; t += 1) this.origin.LinkConfirm(e, this.elements[t])
        }, l.prototype.remove = function(e) {
            var t;
            for (t = 0; t < this.items.length; t += 1) this.items[t].target.off(".liblink");
            for (t = 0; t < this.elements.length; t += 1) this.elements[t].remove()
        }, l.prototype.change = function(e) {
            if (this.origin.LinkIsEmitting) return !1;
            this.origin.LinkIsEmitting = !0;
            var t, n = Array.prototype.slice.call(arguments, 1);
            for (n.unshift(e), t = 0; t < this.items.length; t += 1) this.items[t].set.apply(this.items[t], n);
            this.origin.LinkIsEmitting = !1
        }, e.fn.Link = function(t) {
            var n = this;
            if (t === !1) return n.each(function() {
                this.linkAPI && (e.map(this.linkAPI, function(e) {
                    e.remove()
                }), delete this.linkAPI)
            });
            if (void 0 === t) t = 0;
            else if ("string" != typeof t) throw new Error("Flag must be string.");
            return {
                to: function(e, i, r) {
                    return n.each(function() {
                        c.call(this, t, e, i, r)
                    })
                }
            }
        }
    }(window.jQuery || window.Zepto),
    function(e) {
        "use strict";

        function t(t) {
            return e.grep(t, function(n, i) {
                return i === e.inArray(n, t)
            })
        }

        function n(e, t) {
            return Math.round(e / t) * t
        }

        function i(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }

        function r(e) {
            var t = Math.pow(10, 7);
            return Number((Math.round(e * t) / t).toFixed(7))
        }

        function o(e, t, n) {
            e.addClass(t), setTimeout(function() {
                e.removeClass(t)
            }, n)
        }

        function a(e) {
            return Math.max(Math.min(e, 100), 0)
        }

        function s(t) {
            return e.isArray(t) ? t : [t]
        }

        function l(e) {
            var t = e.split(".");
            return t.length > 1 ? t[1].length : 0
        }

        function c(e, t) {
            return 100 / (t - e)
        }

        function u(e, t) {
            return 100 * t / (e[1] - e[0])
        }

        function d(e, t) {
            return u(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0])
        }

        function f(e, t) {
            return t * (e[1] - e[0]) / 100 + e[0]
        }

        function h(e, t) {
            for (var n = 1; e >= t[n];) n += 1;
            return n
        }

        function p(e, t, n) {
            if (n >= e.slice(-1)[0]) return 100;
            var i, r, o, a, s = h(n, e);
            return i = e[s - 1], r = e[s], o = t[s - 1], a = t[s], o + d([i, r], n) / c(o, a)
        }

        function m(e, t, n) {
            if (n >= 100) return e.slice(-1)[0];
            var i, r, o, a, s = h(n, t);
            return i = e[s - 1], r = e[s], o = t[s - 1], a = t[s], f([i, r], (n - o) * c(o, a))
        }

        function g(e, t, i, r) {
            if (100 === r) return r;
            var o, a, s = h(r, e);
            return i ? (o = e[s - 1], a = e[s], r - o > (a - o) / 2 ? a : o) : t[s - 1] ? e[s - 1] + n(r - e[s - 1], t[s - 1]) : r
        }

        function v(e, t, n) {
            var r;
            if ("number" == typeof t && (t = [t]), "[object Array]" !== Object.prototype.toString.call(t)) throw new Error("noUiSlider: 'range' contains invalid value.");
            if (r = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e), !i(r) || !i(t[0])) throw new Error("noUiSlider: 'range' value isn't numeric.");
            n.xPct.push(r), n.xVal.push(t[0]), r ? n.xSteps.push(isNaN(t[1]) ? !1 : t[1]) : isNaN(t[1]) || (n.xSteps[0] = t[1])
        }

        function y(e, t, n) {
            return t ? void(n.xSteps[e] = u([n.xVal[e], n.xVal[e + 1]], t) / c(n.xPct[e], n.xPct[e + 1])) : !0
        }

        function b(e, t, n, i) {
            this.xPct = [], this.xVal = [], this.xSteps = [i || !1], this.xNumSteps = [!1], this.snap = t, this.direction = n;
            var r, o = [];
            for (r in e) e.hasOwnProperty(r) && o.push([e[r], r]);
            for (o.sort(function(e, t) {
                    return e[0] - t[0]
                }), r = 0; r < o.length; r++) v(o[r][1], o[r][0], this);
            for (this.xNumSteps = this.xSteps.slice(0), r = 0; r < this.xNumSteps.length; r++) y(r, this.xNumSteps[r], this)
        }

        function x(e, t) {
            if (!i(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t
        }

        function w(t, n) {
            if ("object" != typeof n || e.isArray(n)) throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === n.min || void 0 === n.max) throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            t.spectrum = new b(n, t.snap, t.dir, t.singleStep)
        }

        function _(t, n) {
            if (n = s(n), !e.isArray(n) || !n.length || n.length > 2) throw new Error("noUiSlider: 'start' option is incorrect.");
            t.handles = n.length, t.start = n
        }

        function k(e, t) {
            if (e.snap = t, "boolean" != typeof t) throw new Error("noUiSlider: 'snap' option must be a boolean.")
        }

        function C(e, t) {
            if (e.animate = t, "boolean" != typeof t) throw new Error("noUiSlider: 'animate' option must be a boolean.")
        }

        function T(e, t) {
            if ("lower" === t && 1 === e.handles) e.connect = 1;
            else if ("upper" === t && 1 === e.handles) e.connect = 2;
            else if (t === !0 && 2 === e.handles) e.connect = 3;
            else {
                if (t !== !1) throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
                e.connect = 0
            }
        }

        function E(e, t) {
            switch (t) {
                case "horizontal":
                    e.ort = 0;
                    break;
                case "vertical":
                    e.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider: 'orientation' option is invalid.")
            }
        }

        function S(e, t) {
            if (!i(t)) throw new Error("noUiSlider: 'margin' option must be numeric.");
            if (e.margin = e.spectrum.getMargin(t), !e.margin) throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")
        }

        function $(e, t) {
            if (!i(t)) throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (e.limit = e.spectrum.getMargin(t), !e.limit) throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")
        }

        function j(e, t) {
            switch (t) {
                case "ltr":
                    e.dir = 0;
                    break;
                case "rtl":
                    e.dir = 1, e.connect = [0, 2, 1, 3][e.connect];
                    break;
                default:
                    throw new Error("noUiSlider: 'direction' option was not recognized.")
            }
        }

        function A(e, t) {
            if ("string" != typeof t) throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
            var n = t.indexOf("tap") >= 0,
                i = t.indexOf("drag") >= 0,
                r = t.indexOf("fixed") >= 0,
                o = t.indexOf("snap") >= 0;
            e.events = {
                tap: n || o,
                drag: i,
                fixed: r,
                snap: o
            }
        }

        function N(e, t) {
            if (e.format = t, "function" == typeof t.to && "function" == typeof t.from) return !0;
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")
        }

        function F(t) {
            var n, i = {
                margin: 0,
                limit: 0,
                animate: !0,
                format: J
            };
            return n = {
                step: {
                    r: !1,
                    t: x
                },
                start: {
                    r: !0,
                    t: _
                },
                connect: {
                    r: !0,
                    t: T
                },
                direction: {
                    r: !0,
                    t: j
                },
                snap: {
                    r: !1,
                    t: k
                },
                animate: {
                    r: !1,
                    t: C
                },
                range: {
                    r: !0,
                    t: w
                },
                orientation: {
                    r: !1,
                    t: E
                },
                margin: {
                    r: !1,
                    t: S
                },
                limit: {
                    r: !1,
                    t: $
                },
                behaviour: {
                    r: !0,
                    t: A
                },
                format: {
                    r: !1,
                    t: N
                }
            }, t = e.extend({
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal"
            }, t), e.each(n, function(e, n) {
                if (void 0 === t[e]) {
                    if (n.r) throw new Error("noUiSlider: '" + e + "' is required.");
                    return !0
                }
                n.t(i, t[e])
            }), i.style = i.ort ? "top" : "left", i
        }

        function D(e, t, n) {
            var i = e + t[0],
                r = e + t[1];
            return n ? (0 > i && (r += Math.abs(i)), r > 100 && (i -= r - 100), [a(i), a(r)]) : [i, r]
        }

        function P(e) {
            e.preventDefault();
            var t, n, i = 0 === e.type.indexOf("touch"),
                r = 0 === e.type.indexOf("mouse"),
                o = 0 === e.type.indexOf("pointer"),
                a = e;
            return 0 === e.type.indexOf("MSPointer") && (o = !0), e.originalEvent && (e = e.originalEvent), i && (t = e.changedTouches[0].pageX, n = e.changedTouches[0].pageY), (r || o) && (o || void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), t = e.clientX + window.pageXOffset, n = e.clientY + window.pageYOffset), a.points = [t, n], a.cursor = r, a
        }

        function O(t, n) {
            var i = e("<div><div/></div>").addClass(Z[2]),
                r = ["-lower", "-upper"];
            return t && r.reverse(), i.children().addClass(Z[3] + " " + Z[3] + r[n]), i
        }

        function M(e, t, n) {
            switch (e) {
                case 1:
                    t.addClass(Z[7]), n[0].addClass(Z[6]);
                    break;
                case 3:
                    n[1].addClass(Z[6]);
                case 2:
                    n[0].addClass(Z[7]);
                case 0:
                    t.addClass(Z[6])
            }
        }

        function I(e, t, n) {
            var i, r = [];
            for (i = 0; e > i; i += 1) r.push(O(t, i).appendTo(n));
            return r
        }

        function L(t, n, i) {
            return i.addClass([Z[0], Z[8 + t], Z[4 + n]].join(" ")), e("<div/>").appendTo(i).addClass(Z[1])
        }

        function H(t, n, i) {
            function r() {
                return $[["width", "height"][n.ort]]()
            }

            function c(e) {
                var t, n = [A.val()];
                for (t = 0; t < e.length; t += 1) A.trigger(e[t], n)
            }

            function u(e) {
                return 1 === e.length ? e[0] : n.dir ? e.reverse() : e
            }

            function d(e) {
                return function(t, n) {
                    A.val([e ? null : n, e ? n : null], !0)
                }
            }

            function f(t) {
                var n = e.inArray(t, H);
                A[0].linkAPI && A[0].linkAPI[t] && A[0].linkAPI[t].change(O[n], j[n].children(), A)
            }

            function h(t, i) {
                var r = e.inArray(t, H);
                return i && i.appendTo(j[r].children()), n.dir && n.handles > 1 && (r = 1 === r ? 0 : 1), d(r)
            }

            function p() {
                var e, t;
                for (e = 0; e < H.length; e += 1) this.linkAPI && this.linkAPI[t = H[e]] && this.linkAPI[t].reconfirm(t)
            }

            function m(e, t, i, r) {
                return e = e.replace(/\s/g, Q + " ") + Q, t.on(e, function(e) {
                    return A.attr("disabled") ? !1 : A.hasClass(Z[14]) ? !1 : (e = P(e), e.calcPoint = e.points[n.ort], void i(e, r))
                })
            }

            function g(e, t) {
                var n, i = t.handles || j,
                    o = !1,
                    a = 100 * (e.calcPoint - t.start) / r(),
                    s = i[0][0] !== j[0][0] ? 1 : 0;
                n = D(a, t.positions, i.length > 1), o = w(i[0], n[s], 1 === i.length), i.length > 1 && (o = w(i[1], n[s ? 0 : 1], !1) || o), o && c(["slide"])
            }

            function v(t) {
                e("." + Z[15]).removeClass(Z[15]), t.cursor && e("body").css("cursor", "").off(Q), V.off(Q), A.removeClass(Z[12]), c(["set", "change"])
            }

            function y(t, n) {
                1 === n.handles.length && n.handles[0].children().addClass(Z[15]), t.stopPropagation(), m(G.move, V, g, {
                    start: t.calcPoint,
                    handles: n.handles,
                    positions: [N[0], N[j.length - 1]]
                }), m(G.end, V, v, null), t.cursor && (e("body").css("cursor", e(t.target).css("cursor")), j.length > 1 && A.addClass(Z[12]), e("body").on("selectstart" + Q, !1))
            }

            function b(t) {
                var i, a = t.calcPoint,
                    s = 0;
                t.stopPropagation(), e.each(j, function() {
                    s += this.offset()[n.style]
                }), s = s / 2 > a || 1 === j.length ? 0 : 1, a -= $.offset()[n.style], i = 100 * a / r(), n.events.snap || o(A, Z[14], 300), w(j[s], i), c(["slide", "set", "change"]), n.events.snap && y(t, {
                    handles: [j[s]]
                })
            }

            function x(e) {
                var t, n;
                if (!e.fixed)
                    for (t = 0; t < j.length; t += 1) m(G.start, j[t].children(), y, {
                        handles: [j[t]]
                    });
                e.tap && m(G.start, $, b, {
                    handles: j
                }), e.drag && (n = $.find("." + Z[7]).addClass(Z[10]), e.fixed && (n = n.add($.children().not(n).children())), m(G.start, n, y, {
                    handles: j
                }))
            }

            function w(e, t, i) {
                var r = e[0] !== j[0][0] ? 1 : 0,
                    o = N[0] + n.margin,
                    s = N[1] - n.margin,
                    l = N[0] + n.limit,
                    c = N[1] - n.limit;
                return j.length > 1 && (t = r ? Math.max(t, o) : Math.min(t, s)), i !== !1 && n.limit && j.length > 1 && (t = r ? Math.min(t, l) : Math.max(t, c)), t = F.getStep(t), t = a(parseFloat(t.toFixed(7))), t === N[r] ? !1 : (e.css(n.style, t + "%"), e.is(":first-child") && e.toggleClass(Z[17], t > 50), N[r] = t, O[r] = F.fromStepping(t), f(H[r]), !0)
            }

            function _(e, t) {
                var i, r, o;
                for (n.limit && (e += 1), i = 0; e > i; i += 1) r = i % 2, o = t[r], null !== o && o !== !1 && ("number" == typeof o && (o = String(o)), o = n.format.from(o), (o === !1 || isNaN(o) || w(j[r], F.toStepping(o), i === 3 - n.dir) === !1) && f(H[r]))
            }

            function k(e) {
                if (A[0].LinkIsEmitting) return this;
                var t, i = s(e);
                return n.dir && n.handles > 1 && i.reverse(), n.animate && -1 !== N[0] && o(A, Z[14], 300), t = j.length > 1 ? 3 : 1, 1 === i.length && (t = 1), _(t, i), c(["set"]), this
            }

            function C() {
                var e, t = [];
                for (e = 0; e < n.handles; e += 1) t[e] = n.format.to(O[e]);
                return u(t)
            }

            function T() {
                return e(this).off(Q).removeClass(Z.join(" ")).empty(), delete this.LinkUpdate, delete this.LinkConfirm, delete this.LinkDefaultFormatter, delete this.LinkDefaultFlag, delete this.reappend, delete this.vGet, delete this.vSet, delete this.getCurrentStep, delete this.getInfo, delete this.destroy, i
            }

            function E() {
                var t = e.map(N, function(e, t) {
                    var n = F.getApplicableStep(e),
                        i = l(String(n[2])),
                        r = O[t],
                        o = 100 === e ? null : n[2],
                        a = Number((r - n[2]).toFixed(i)),
                        s = 0 === e ? null : a >= n[1] ? n[2] : n[0] || !1;
                    return [
                        [s, o]
                    ]
                });
                return u(t)
            }

            function S() {
                return i
            }
            var $, j, A = e(t),
                N = [-1, -1],
                F = n.spectrum,
                O = [],
                H = ["lower", "upper"].slice(0, n.handles);
            if (n.dir && H.reverse(), t.LinkUpdate = f, t.LinkConfirm = h, t.LinkDefaultFormatter = n.format, t.LinkDefaultFlag = "lower", t.reappend = p, A.hasClass(Z[0])) throw new Error("Slider was already initialized.");
            $ = L(n.dir, n.ort, A), j = I(n.handles, n.dir, $), M(n.connect, A, j), x(n.events), t.vSet = k, t.vGet = C, t.destroy = T, t.getCurrentStep = E, t.getOriginalOptions = S, t.getInfo = function() {
                return [F, n.style, n.ort]
            }, A.val(n.start)
        }

        function R(e) {
            var t = F(e, this);
            return this.each(function() {
                H(this, t, e)
            })
        }

        function q(t) {
            return this.each(function() {
                if (!this.destroy) return void e(this).noUiSlider(t);
                var n = e(this).val(),
                    i = this.destroy(),
                    r = e.extend({}, i, t);
                e(this).noUiSlider(r), this.reappend(), i.start === r.start && e(this).val(n)
            })
        }

        function B() {
            return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
        }

        function z(t, n, i, r) {
            if ("range" === n || "steps" === n) return t.xVal;
            if ("count" === n) {
                var o, a = 100 / (i - 1),
                    s = 0;
                for (i = [];
                    (o = s++ * a) <= 100;) i.push(o);
                n = "positions"
            }
            return "positions" === n ? e.map(i, function(e) {
                return t.fromStepping(r ? t.getStep(e) : e)
            }) : "values" === n ? r ? e.map(i, function(e) {
                return t.fromStepping(t.getStep(t.toStepping(e)))
            }) : i : void 0
        }

        function U(n, i, r, o) {
            var a = n.direction,
                s = {},
                l = n.xVal[0],
                c = n.xVal[n.xVal.length - 1],
                u = !1,
                d = !1,
                f = 0;
            return n.direction = 0, o = t(o.slice().sort(function(e, t) {
                return e - t
            })), o[0] !== l && (o.unshift(l), u = !0), o[o.length - 1] !== c && (o.push(c), d = !0), e.each(o, function(t) {
                var a, l, c, h, p, m, g, v, y, b, x = o[t],
                    w = o[t + 1];
                if ("steps" === r && (a = n.xNumSteps[t]), a || (a = w - x), x !== !1 && void 0 !== w)
                    for (l = x; w >= l; l += a) {
                        for (h = n.toStepping(l), p = h - f, v = p / i, y = Math.round(v), b = p / y, c = 1; y >= c; c += 1) m = f + c * b, s[m.toFixed(5)] = ["x", 0];
                        g = e.inArray(l, o) > -1 ? 1 : "steps" === r ? 2 : 0, !t && u && (g = 0), l === w && d || (s[h.toFixed(5)] = [l, g]), f = h
                    }
            }), n.direction = a, s
        }

        function W(t, n, i, r, o, a) {
            function s(e, t) {
                return ["-normal", "-large", "-sub"][e]
            }

            function l(e, n, i) {
                return 'class="' + n + " " + n + "-" + u + " " + n + s(i[1], i[0]) + '" style="' + t + ": " + e + '%"'
            }

            function c(e, t) {
                i && (e = 100 - e), t[1] = t[1] && o ? o(t[0], t[1]) : t[1], d.append("<div " + l(e, "noUi-marker", t) + "></div>"), t[1] && d.append("<div " + l(e, "noUi-value", t) + ">" + a.to(t[0]) + "</div>")
            }
            var u = ["horizontal", "vertical"][n],
                d = e("<div/>");
            return d.addClass("noUi-pips noUi-pips-" + u), e.each(r, c), d
        }
        var V = e(document),
            X = e.fn.val,
            Q = ".nui",
            G = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend"
            },
            Z = ["noUi-target", "noUi-base", "noUi-origin", "noUi-handle", "noUi-horizontal", "noUi-vertical", "noUi-background", "noUi-connect", "noUi-ltr", "noUi-rtl", "noUi-dragable", "", "noUi-state-drag", "", "noUi-state-tap", "noUi-active", "", "noUi-stacking"];
        b.prototype.getMargin = function(e) {
            return 2 === this.xPct.length ? u(this.xVal, e) : !1
        }, b.prototype.toStepping = function(e) {
            return e = p(this.xVal, this.xPct, e), this.direction && (e = 100 - e), e
        }, b.prototype.fromStepping = function(e) {
            return this.direction && (e = 100 - e), r(m(this.xVal, this.xPct, e))
        }, b.prototype.getStep = function(e) {
            return this.direction && (e = 100 - e), e = g(this.xPct, this.xSteps, this.snap, e), this.direction && (e = 100 - e), e
        }, b.prototype.getApplicableStep = function(e) {
            var t = h(e, this.xPct),
                n = 100 === e ? 2 : 1;
            return [this.xNumSteps[t - 2], this.xVal[t - n], this.xNumSteps[t - n]]
        }, b.prototype.convert = function(e) {
            return this.getStep(this.toStepping(e))
        };
        var J = {
            to: function(e) {
                return e.toFixed(2)
            },
            from: Number
        };
        e.fn.val = function(t) {
            function n(e) {
                return e.hasClass(Z[0]) ? B : X
            }
            if (!arguments.length) {
                var i = e(this[0]);
                return n(i).call(i)
            }
            var r = e.isFunction(t);
            return this.each(function(i) {
                var o = t,
                    a = e(this);
                r && (o = t.call(this, i, a.val())), n(a).call(a, o)
            })
        }, e.fn.noUiSlider = function(e, t) {
            switch (e) {
                case "step":
                    return this[0].getCurrentStep();
                case "options":
                    return this[0].getOriginalOptions()
            }
            return (t ? q : R).call(this, e)
        }, e.fn.noUiSlider_pips = function(t) {
            var n = t.mode,
                i = t.density || 1,
                r = t.filter || !1,
                o = t.values || !1,
                a = t.format || {
                    to: Math.round
                },
                s = t.stepped || !1;
            return this.each(function() {
                var t = this.getInfo(),
                    l = z(t[0], n, o, s),
                    c = U(t[0], i, n, l);
                return e(this).append(W(t[1], t[2], t[0].direction, c, r, a))
            })
        }
    }(window.jQuery || window.Zepto),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery || Zepto)
    }(function(e) {
        var t = function(t, n, i) {
            t = e(t);
            var r, o = this,
                a = t.val();
            n = "function" == typeof n ? n(t.val(), void 0, t, i) : n;
            var s = {
                invalid: [],
                getCaret: function() {
                    try {
                        var e, n = 0,
                            i = t.get(0),
                            r = document.selection,
                            o = i.selectionStart;
                        return r && -1 === navigator.appVersion.indexOf("MSIE 10") ? (e = r.createRange(), e.moveStart("character", t.is("input") ? -t.val().length : -t.text().length), n = e.text.length) : (o || "0" === o) && (n = o), n
                    } catch (a) {}
                },
                setCaret: function(e) {
                    try {
                        if (t.is(":focus")) {
                            var n, i = t.get(0);
                            i.setSelectionRange ? i.setSelectionRange(e, e) : i.createTextRange && (n = i.createTextRange(), n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
                        }
                    } catch (r) {}
                },
                events: function() {
                    t.on("input.mask keyup.mask", s.behaviour).on("paste.mask drop.mask", function() {
                        setTimeout(function() {
                            t.keydown().keyup()
                        }, 100)
                    }).on("change.mask", function() {
                        t.data("changed", !0)
                    }).on("blur.mask", function() {
                        a === t.val() || t.data("changed") || t.triggerHandler("change"), t.data("changed", !1)
                    }).on("blur.mask", function() {
                        a = t.val()
                    }).on("focus.mask", function(t) {
                        i.selectOnFocus === !0 && e(t.target).select()
                    }).on("focusout.mask", function() {
                        i.clearIfNotMatch && !r.test(s.val()) && s.val("")
                    })
                },
                getRegexMask: function() {
                    for (var e, t, i, r, a, s, l = [], c = 0; c < n.length; c++) e = o.translation[n.charAt(c)], e ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, r = e.recursive, r ? (l.push(n.charAt(c)), a = {
                        digit: n.charAt(c),
                        pattern: t
                    }) : l.push(i || r ? t + "?" : t)) : l.push(n.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                    return s = l.join(""), a && (s = s.replace(new RegExp("(" + a.digit + "(.*" + a.digit + ")?)"), "($1)?").replace(new RegExp(a.digit, "g"), a.pattern)), new RegExp(s)
                },
                destroyEvents: function() {
                    t.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
                },
                val: function(e) {
                    var n, i = t.is("input"),
                        r = i ? "val" : "text";
                    return arguments.length > 0 ? (t[r]() !== e && t[r](e), n = t) : n = t[r](), n
                },
                getMCharsBeforeCount: function(e, t) {
                    for (var i = 0, r = 0, a = n.length; a > r && e > r; r++) o.translation[n.charAt(r)] || (e = t ? e + 1 : e, i++);
                    return i
                },
                caretPos: function(e, t, i, r) {
                    var a = o.translation[n.charAt(Math.min(e - 1, n.length - 1))];
                    return a ? Math.min(e + i - t - r, i) : s.caretPos(e + 1, t, i, r)
                },
                behaviour: function(t) {
                    t = t || window.event, s.invalid = [];
                    var n = t.keyCode || t.which;
                    if (-1 === e.inArray(n, o.byPassKeys)) {
                        var i = s.getCaret(),
                            r = s.val(),
                            a = r.length,
                            l = a > i,
                            c = s.getMasked(),
                            u = c.length,
                            d = s.getMCharsBeforeCount(u - 1) - s.getMCharsBeforeCount(a - 1);
                        return s.val(c), !l || 65 === n && t.ctrlKey || (8 !== n && 46 !== n && (i = s.caretPos(i, a, u, d)), s.setCaret(i)), s.callbacks(t)
                    }
                },
                getMasked: function(e) {
                    var t, r, a = [],
                        l = s.val(),
                        c = 0,
                        u = n.length,
                        d = 0,
                        f = l.length,
                        h = 1,
                        p = "push",
                        m = -1;
                    for (i.reverse ? (p = "unshift", h = -1, t = 0, c = u - 1, d = f - 1, r = function() {
                            return c > -1 && d > -1
                        }) : (t = u - 1, r = function() {
                            return u > c && f > d
                        }); r();) {
                        var g = n.charAt(c),
                            v = l.charAt(d),
                            y = o.translation[g];
                        y ? (v.match(y.pattern) ? (a[p](v), y.recursive && (-1 === m ? m = c : c === t && (c = m - h), t === m && (c -= h)), c += h) : y.optional ? (c += h, d -= h) : y.fallback ? (a[p](y.fallback), c += h, d -= h) : s.invalid.push({
                            p: d,
                            v: v,
                            e: y.pattern
                        }), d += h) : (e || a[p](g), v === g && (d += h), c += h)
                    }
                    var b = n.charAt(t);
                    return u !== f + 1 || o.translation[b] || a.push(b), a.join("")
                },
                callbacks: function(e) {
                    var r = s.val(),
                        o = r !== a,
                        l = [r, e, t, i],
                        c = function(e, t, n) {
                            "function" == typeof i[e] && t && i[e].apply(this, n)
                        };
                    c("onChange", o === !0, l), c("onKeyPress", o === !0, l), c("onComplete", r.length === n.length, l), c("onInvalid", s.invalid.length > 0, [r, e, t, s.invalid, i])
                }
            };
            o.mask = n, o.options = i, o.remove = function() {
                var e = s.getCaret();
                return s.destroyEvents(), s.val(o.getCleanVal()), s.setCaret(e - s.getMCharsBeforeCount(e)), t
            }, o.getCleanVal = function() {
                return s.getMasked(!0)
            }, o.init = function(n) {
                if (n = n || !1, i = i || {}, o.byPassKeys = e.jMaskGlobals.byPassKeys, o.translation = e.jMaskGlobals.translation, o.translation = e.extend({}, o.translation, i.translation), o = e.extend(!0, {}, o, i), r = s.getRegexMask(), n === !1) {
                    i.placeholder && t.attr("placeholder", i.placeholder), e("input").length && "oninput" in e("input")[0] == !1 && "on" === t.attr("autocomplete") && t.attr("autocomplete", "off"), s.destroyEvents(), s.events();
                    var a = s.getCaret();
                    s.val(s.getMasked()), s.setCaret(a + s.getMCharsBeforeCount(a, !0))
                } else s.events(), s.val(s.getMasked())
            }, o.init(!t.is("input"))
        };
        e.maskWatchers = {};
        var n = function() {
                var n = e(this),
                    r = {},
                    o = "data-mask-",
                    a = n.attr("data-mask");
                return n.attr(o + "reverse") && (r.reverse = !0), n.attr(o + "clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === n.attr(o + "selectonfocus") && (r.selectOnFocus = !0), i(n, a, r) ? n.data("mask", new t(this, a, r)) : void 0
            },
            i = function(t, n, i) {
                i = i || {};
                var r = e(t).data("mask"),
                    o = JSON.stringify,
                    a = e(t).val() || e(t).text();
                try {
                    return "function" == typeof n && (n = n(a)), "object" != typeof r || o(r.options) !== o(i) || r.mask !== n
                } catch (s) {}
            };
        e.fn.mask = function(n, r) {
            r = r || {};
            var o = this.selector,
                a = e.jMaskGlobals,
                s = e.jMaskGlobals.watchInterval,
                l = function() {
                    return i(this, n, r) ? e(this).data("mask", new t(this, n, r)) : void 0
                };
            return e(this).each(l), o && "" !== o && a.watchInputs && (clearInterval(e.maskWatchers[o]), e.maskWatchers[o] = setInterval(function() {
                e(document).find(o).each(l)
            }, s)), this
        }, e.fn.unmask = function() {
            return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function() {
                var t = e(this).data("mask");
                t && t.remove().removeData("mask")
            })
        }, e.fn.cleanVal = function() {
            return this.data("mask").getCleanVal()
        }, e.applyDataMask = function(t) {
            t = t || e.jMaskGlobals.maskElements;
            var i = t instanceof e ? t : e(t);
            i.filter(e.jMaskGlobals.dataMaskAttr).each(n)
        };
        var r = {
            maskElements: "input,td,span,div",
            dataMaskAttr: "*[data-mask]",
            dataMask: !0,
            watchInterval: 300,
            watchInputs: !0,
            watchDataMask: !1,
            byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
            translation: {
                0: {
                    pattern: /\d/
                },
                9: {
                    pattern: /\d/,
                    optional: !0
                },
                "#": {
                    pattern: /\d/,
                    recursive: !0
                },
                A: {
                    pattern: /[a-zA-Z0-9]/
                },
                S: {
                    pattern: /[a-zA-Z]/
                }
            }
        };
        e.jMaskGlobals = e.jMaskGlobals || {}, r = e.jMaskGlobals = e.extend(!0, {}, r, e.jMaskGlobals), r.dataMask && e.applyDataMask(), setInterval(function() {
            e.jMaskGlobals.watchDataMask && e.applyDataMask()
        }, r.watchInterval)
    }),
    function(e) {
        var t = -1,
            n = -1,
            i = function(t) {
                var n = 1,
                    i = e(t),
                    o = null,
                    a = [];
                return i.each(function() {
                    var t = e(this),
                        i = t.offset().top - r(t.css("margin-top")),
                        s = a.length > 0 ? a[a.length - 1] : null;
                    null === s ? a.push(t) : Math.floor(Math.abs(o - i)) <= n ? a[a.length - 1] = s.add(t) : a.push(t), o = i
                }), a
            },
            r = function(e) {
                return parseFloat(e) || 0
            },
            o = e.fn.matchHeight = function(t) {
                if ("remove" === t) {
                    var n = this;
                    return this.css("height", ""), e.each(o._groups, function(e, t) {
                        t.elements = t.elements.not(n)
                    }), this
                }
                return this.length <= 1 ? this : (t = "undefined" != typeof t ? t : !0, o._groups.push({
                    elements: this,
                    byRow: t
                }), o._apply(this, t), this)
            };
        o._groups = [], o._throttle = 80, o._maintainScroll = !1, o._beforeUpdate = null, o._afterUpdate = null, o._apply = function(t, n) {
            var a = e(t),
                s = [a],
                l = e(window).scrollTop(),
                c = e("html").outerHeight(!0),
                u = a.parents().filter(":hidden");
            return u.css("display", "block"), n && (a.each(function() {
                var t = e(this),
                    n = "inline-block" === t.css("display") ? "inline-block" : "block";
                t.data("style-cache", t.attr("style")), t.css({
                    display: n,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px"
                })
            }), s = i(a), a.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || "").css("height", "")
            })), e.each(s, function(t, i) {
                var o = e(i),
                    a = 0;
                n && o.length <= 1 || (o.each(function() {
                    var t = e(this),
                        n = "inline-block" === t.css("display") ? "inline-block" : "block";
                    t.css({
                        display: n,
                        height: ""
                    }), t.outerHeight(!1) > a && (a = t.outerHeight(!1)), t.css("display", "")
                }), o.each(function() {
                    var t = e(this),
                        n = 0;
                    "border-box" !== t.css("box-sizing") && (n += r(t.css("border-top-width")) + r(t.css("border-bottom-width")), n += r(t.css("padding-top")) + r(t.css("padding-bottom"))), t.css("height", a - n)
                }))
            }), u.css("display", ""), o._maintainScroll && e(window).scrollTop(l / c * e("html").outerHeight(!0)), this
        }, o._applyDataApi = function() {
            var t = {};
            e("[data-match-height], [data-mh]").each(function() {
                var n = e(this),
                    i = n.attr("data-match-height") || n.attr("data-mh");
                i in t ? t[i] = t[i].add(n) : t[i] = n
            }), e.each(t, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(t) {
            o._beforeUpdate && o._beforeUpdate(t, o._groups), e.each(o._groups, function() {
                o._apply(this.elements, this.byRow)
            }), o._afterUpdate && o._afterUpdate(t, o._groups)
        };
        o._update = function(i, r) {
            if (r && "resize" === r.type) {
                var s = e(window).width();
                if (s === t) return;
                t = s
            }
            i ? -1 === n && (n = setTimeout(function() {
                a(r), n = -1
            }, o._throttle)) : a(r)
        }, e(o._applyDataApi), e(window).bind("load", function(e) {
            o._update(!1, e)
        }), e(window).bind("resize orientationchange", function(e) {
            o._update(!0, e)
        })
    }(jQuery),
    function(e) {
        e.fn.swipeEvents = function() {
            return this.each(function() {
                function t(e) {
                    var t = e.originalEvent.touches;
                    t && t.length && (r = t[0].pageX, o = t[0].pageY, a.bind("touchmove", n), a.bind("touchend", i))
                }

                function n(e) {
                    var t = e.originalEvent.touches;
                    if (t && t.length) {
                        var s = r - t[0].pageX,
                            l = o - t[0].pageY;
                        s >= 50 && a.trigger("swipeLeft"), -50 >= s && a.trigger("swipeRight"), l >= 50 && a.trigger("swipeUp"), -50 >= l && a.trigger("swipeDown"), (Math.abs(s) >= 50 || Math.abs(l) >= 50) && (a.unbind("touchmove", n), a.unbind("touchend", i))
                    }
                }

                function i(e) {
                    a.unbind("touchmove", n)
                }
                var r, o, a = e(this);
                a.bind("touchstart", t)
            })
        }
    }(jQuery), $.fn.extend({
        backspace: function(e, t) {
            var n;
            return n = $.extend({
                callback: function() {},
                keypress: function() {},
                t: 100,
                e: .04
            }, t), this.each(function() {
                var t;
                t = this, $(t).queue(function() {
                    var i, r;
                    r = function(e, i) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] = t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"].slice(0, -1), n.keypress.call(t), setTimeout(function() {
                            r(e - 1, i)
                        }, n.t)) : (n.callback.call(t), $(t).dequeue())
                    }, i = function(e, r) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] += e[0], n.keypress.call(t), setTimeout(function() {
                            i(e.slice(1), r)
                        }, n.t)) : r()
                    }, r(e)
                })
            })
        },
        typetype: function(e, t) {
            var n;
            return n = $.extend({
                callback: function() {},
                keypress: function() {},
                t: 100,
                e: .04
            }, t), this.each(function() {
                var t;
                t = this, $(t).queue(function() {
                    var i, r, o;
                    r = function(e, i) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] = t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"].slice(0, -1), n.keypress.call(t), setTimeout(function() {
                            r(e - 1, i)
                        }, n.t)) : i()
                    }, i = function(e, r) {
                        e ? (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] += e[0], n.keypress.call(t), setTimeout(function() {
                            i(e.slice(1), r)
                        }, n.t)) : r()
                    }, (o = function(a) {
                        var s, l;
                        s = function() {
                            return setTimeout(function() {
                                o(a)
                            }, Math.random() * n.t * (e[a - 1] === e[a] ? 1.6 : "." === e[a - 1] ? 12 : "!" === e[a - 1] ? 12 : "?" === e[a - 1] ? 12 : "\n" === e[a - 1] ? 12 : "," === e[a - 1] ? 8 : ";" === e[a - 1] ? 8 : ":" === e[a - 1] ? 8 : " " === e[a - 1] ? 3 : 2))
                        }, l = Math.random() / n.e, e.length >= a ? .3 > l && e[a - 1] !== e[a] && e.length > a + 4 ? i(e.slice(a, a + 4), function() {
                            r(4, s)
                        }) : .7 > l && a > 1 && /[A-Z]/.test(e[a - 2] && e.length > a + 4) ? i(e[a - 1].toUpperCase() + e.slice(a, a + 4), function() {
                            r(5, s)
                        }) : .5 > l && e[a - 1] !== e[a] && e.length > a ? i(e[a], function() {
                            r(1, s)
                        }) : 1 > l && e[a - 1] !== e[a] && e.length > a ? i(e[a] + e[a - 1], function() {
                            r(2, s)
                        }) : .5 > l && /[A-Z]/.test(e[a]) ? i(e[a].toLowerCase(), function() {
                            r(1, s)
                        }) : (t[/(np|x)/i.test(t.tagName) ? "value" : "innerHTML"] += e[a - 1], n.keypress.call(t), setTimeout(function() {
                            o(a + 1)
                        }, Math.random() * n.t * (e[a - 1] === e[a] ? 1.6 : "." === e[a - 1] ? 12 : "!" === e[a - 1] ? 12 : "?" === e[a - 1] ? 12 : "\n" === e[a - 1] ? 12 : "," === e[a - 1] ? 8 : ";" === e[a - 1] ? 8 : ":" === e[a - 1] ? 8 : " " === e[a - 1] ? 3 : 2))) : (n.callback.call(t), $(t).dequeue())
                    })(1)
                })
            })
        }
    }),
    function() {
        var e, t, n, i = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        n = Math.random, t = Math.floor, e = function() {
            function e(t, n, r) {
                var o, a, s, l;
                return this.el = t, this.text = n, this.options = null != r ? r : {}, this.type = i(this.type, this), this instanceof e ? ("string" == typeof this.el && (this.el = document.querySelector(this.el)), this.len = this.text.length, this.i = 0, l = this.options, o = l.accuracy, a = l.interval, this.callback = l.callback, this.accuracy = null != o ? o : this.accuracy, this["int"] = null != a ? a : this["int"], (s = "textarea" === this.el.tagName.toLowerCase() || "input" === s) ? (this.attr = "value", this.el.focus()) : this.attr = "innerText", void this.type()) : new e(this.el, this.text, this.options)
            }
            return e.prototype["int"] = 100, e.prototype.accuracy = .95, e.prototype.keys = "qwertyuiopasdfghjklzxcvbnm,./;-=[]".split(""), e.prototype.type = function() {
                return this.i === this.len ? "function" == typeof this.callback ? this.callback() : void 0 : n() > this.accuracy ? (this.el[this.attr] = this.text.slice(0, this.i) + this.keys[t(n() * this.keys.length)], this.timer = setTimeout(function(e) {
                    return function() {
                        return e.el[e.attr] = e.text.slice(0, e.i), e.timer = setTimeout(e.type, n() * e["int"] + .8 * e["int"])
                    }
                }(this), 1.5 * this["int"])) : (this.el[this.attr] = this.text.slice(0, this.i++), this.timer = setTimeout(this.type, function(e) {
                    return function() {
                        var t;
                        return t = n() * e["int"] + .1 * e["int"], " " === e.text[e.i] && (t += n() * e["int"]), ("." === e.text[e.i] || "," === e.text[e.i]) && (t += n() * e["int"] * 3), n() > .97 && (t += 2 * e["int"]), n() > .95 && (t += e["int"]), t
                    }
                }(this)()))
            }, e.prototype.pause = function() {
                return clearTimeout(this.timer), this.el[this.attr]
            }, e
        }(), ("undefined" != typeof module && null !== module ? module.exports : void 0) ? module.exports = e : ("undefined" != typeof define && null !== define ? define.amd : void 0) ? define(function() {
            return e
        }) : window.TuringType = e
    }.call(this), /*! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
    function(e, t, n, i) {
        var r = n(e),
            o = n(t),
            a = n.fancybox = function() {
                a.open.apply(this, arguments)
            },
            s = navigator.userAgent.match(/msie/),
            l = null,
            c = t.createTouch !== i,
            u = function(e) {
                return e && e.hasOwnProperty && e instanceof n
            },
            d = function(e) {
                return e && "string" === n.type(e)
            },
            f = function(e) {
                return d(e) && 0 < e.indexOf("%")
            },
            h = function(e, t) {
                var n = parseInt(e, 10) || 0;
                return t && f(e) && (n *= a.getViewport()[t] / 100), Math.ceil(n)
            },
            p = function(e, t) {
                return h(e, t) + "px"
            };
        n.extend(a, {
            version: "2.1.4",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !c,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (s ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: n.noop,
                beforeLoad: n.noop,
                afterLoad: n.noop,
                beforeShow: n.noop,
                afterShow: n.noop,
                beforeChange: n.noop,
                beforeClose: n.noop,
                afterClose: n.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                return e && (n.isPlainObject(t) || (t = {}), !1 !== a.close(!0)) ? (n.isArray(e) || (e = u(e) ? n(e).get() : [e]), n.each(e, function(r, o) {
                    var s, l, c, f, h, p = {};
                    "object" === n.type(o) && (o.nodeType && (o = n(o)), u(o) ? (p = {
                        href: o.data("fancybox-href") || o.attr("href"),
                        title: o.data("fancybox-title") || o.attr("title"),
                        isDom: !0,
                        element: o
                    }, n.metadata && n.extend(!0, p, o.metadata())) : p = o), s = t.href || p.href || (d(o) ? o : null), l = t.title !== i ? t.title : p.title || "", f = (c = t.content || p.content) ? "html" : t.type || p.type, !f && p.isDom && (f = o.data("fancybox-type"), f || (f = (f = o.prop("class").match(/fancybox\.(\w+)/)) ? f[1] : null)), d(s) && (f || (a.isImage(s) ? f = "image" : a.isSWF(s) ? f = "swf" : "#" === s.charAt(0) ? f = "inline" : d(o) && (f = "html", c = o)), "ajax" === f && (h = s.split(/\s+/, 2), s = h.shift(), h = h.shift())), c || ("inline" === f ? s ? c = n(d(s) ? s.replace(/.*(?=#[^\s]+$)/, "") : s) : p.isDom && (c = o) : "html" === f ? c = s : !f && !s && p.isDom && (f = "inline", c = o)), n.extend(p, {
                        href: s,
                        type: f,
                        content: c,
                        title: l,
                        selector: h
                    }), e[r] = p
                }), a.opts = n.extend(!0, {}, a.defaults, t), t.keys !== i && (a.opts.keys = t.keys ? n.extend({}, a.defaults.keys, t.keys) : !1), a.group = e, a._start(a.opts.index)) : void 0
            },
            cancel: function() {
                var e = a.coming;
                e && !1 !== a.trigger("onCancel") && (a.hideLoading(), a.ajaxLoad && a.ajaxLoad.abort(), a.ajaxLoad = null, a.imgPreload && (a.imgPreload.onload = a.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), a.coming = null, a.current || a._afterZoomOut(e))
            },
            close: function(e) {
                a.cancel(), !1 !== a.trigger("beforeClose") && (a.unbindEvents(), a.isActive && (a.isOpen && !0 !== e ? (a.isOpen = a.isOpened = !1, a.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), a.wrap.stop(!0, !0).removeClass("fancybox-opened"), a.transitions[a.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), a._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(a.player.timer)
                    },
                    i = function() {
                        t(), a.current && a.player.isActive && (a.player.timer = setTimeout(a.next, a.current.playSpeed))
                    },
                    r = function() {
                        t(), n("body").unbind(".player"), a.player.isActive = !1, a.trigger("onPlayEnd")
                    };
                !0 === e || !a.player.isActive && !1 !== e ? a.current && (a.current.loop || a.current.index < a.group.length - 1) && (a.player.isActive = !0, n("body").bind({
                    "afterShow.player onUpdate.player": i,
                    "onCancel.player beforeClose.player": r,
                    "beforeLoad.player": t
                }), i(), a.trigger("onPlayStart")) : r()
            },
            next: function(e) {
                var t = a.current;
                t && (d(e) || (e = t.direction.next), a.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = a.current;
                t && (d(e) || (e = t.direction.prev), a.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, n) {
                var r = a.current;
                r && (e = h(e), a.direction = t || r.direction[e >= r.index ? "next" : "prev"], a.router = n || "jumpto", r.loop && (0 > e && (e = r.group.length + e % r.group.length), e %= r.group.length), r.group[e] !== i && (a.cancel(), a._start(e)))
            },
            reposition: function(e, t) {
                var i, r = a.current,
                    o = r ? r.wrap : null;
                o && (i = a._getPosition(t), e && "scroll" === e.type ? (delete i.position, o.stop(!0, !0).animate(i, 200)) : (o.css(i), r.pos = n.extend({}, r.dim, i)))
            },
            update: function(e) {
                var t = e && e.type,
                    n = !t || "orientationchange" === t;
                n && (clearTimeout(l), l = null), a.isOpen && !l && (l = setTimeout(function() {
                    var i = a.current;
                    i && !a.isClosing && (a.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && a._setDimension(), "scroll" === t && i.canShrink || a.reposition(e), a.trigger("onUpdate"), l = null)
                }, n && !c ? 0 : 300))
            },
            toggle: function(e) {
                a.isOpen && (a.current.fitToView = "boolean" === n.type(e) ? e : !a.current.fitToView, c && (a.wrap.removeAttr("style").addClass("fancybox-tmp"), a.trigger("onUpdate")), a.update())
            },
            hideLoading: function() {
                o.unbind(".loading"), n("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                a.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body"), o.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), a.cancel())
                }), a.defaults.fixed || (t = a.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = a.current && a.current.locked || !1,
                    n = {
                        x: r.scrollLeft(),
                        y: r.scrollTop()
                    };
                return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = c && e.innerWidth ? e.innerWidth : r.width(), n.h = c && e.innerHeight ? e.innerHeight : r.height()), n
            },
            unbindEvents: function() {
                a.wrap && u(a.wrap) && a.wrap.unbind(".fb"), o.unbind(".fb"), r.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = a.current;
                t && (r.bind("orientationchange.fb" + (c ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), a.update), (e = t.keys) && o.bind("keydown.fb", function(r) {
                    var o = r.which || r.keyCode,
                        s = r.target || r.srcElement;
                    return 27 === o && a.coming ? !1 : void(!r.ctrlKey && !r.altKey && !r.shiftKey && !r.metaKey && (!s || !s.type && !n(s).is("[contenteditable]")) && n.each(e, function(e, s) {
                        return 1 < t.group.length && s[o] !== i ? (a[e](s[o]), r.preventDefault(), !1) : -1 < n.inArray(o, s) ? (a[e](), r.preventDefault(), !1) : void 0
                    }))
                }), n.fn.mousewheel && t.mouseWheel && a.wrap.bind("mousewheel.fb", function(e, i, r, o) {
                    for (var s = n(e.target || null), l = !1; s.length && !l && !s.is(".fancybox-skin") && !s.is(".fancybox-wrap");) l = s[0] && !(s[0].style.overflow && "hidden" === s[0].style.overflow) && (s[0].clientWidth && s[0].scrollWidth > s[0].clientWidth || s[0].clientHeight && s[0].scrollHeight > s[0].clientHeight), s = n(s).parent();
                    0 !== i && !l && 1 < a.group.length && !t.canShrink && (o > 0 || r > 0 ? a.prev(o > 0 ? "down" : "left") : (0 > o || 0 > r) && a.next(0 > o ? "up" : "right"), e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var i, r = t || a.coming || a.current;
                if (r) {
                    if (n.isFunction(r[e]) && (i = r[e].apply(r, Array.prototype.slice.call(arguments, 1))), !1 === i) return !1;
                    r.helpers && n.each(r.helpers, function(t, i) {
                        i && a.helpers[t] && n.isFunction(a.helpers[t][e]) && (i = n.extend(!0, {}, a.helpers[t].defaults, i), a.helpers[t][e](i, r))
                    }), n.event.trigger(e + ".fb")
                }
            },
            isImage: function(e) {
                return d(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return d(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, i, r = {};
                if (e = h(e), t = a.group[e] || null, !t) return !1;
                if (r = n.extend(!0, {}, a.opts, t), t = r.margin, i = r.padding, "number" === n.type(t) && (r.margin = [t, t, t, t]), "number" === n.type(i) && (r.padding = [i, i, i, i]), r.modal && n.extend(!0, r, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), r.autoSize && (r.autoWidth = r.autoHeight = !0), "auto" === r.width && (r.autoWidth = !0), "auto" === r.height && (r.autoHeight = !0), r.group = a.group, r.index = e, a.coming = r, !1 === a.trigger("beforeLoad")) a.coming = null;
                else {
                    if (i = r.type, t = r.href, !i) return a.coming = null, a.current && a.router && "jumpto" !== a.router ? (a.current.index = e, a[a.router](a.direction)) : !1;
                    if (a.isActive = !0, ("image" === i || "swf" === i) && (r.autoHeight = r.autoWidth = !1, r.scrolling = "visible"), "image" === i && (r.aspectRatio = !0), "iframe" === i && c && (r.scrolling = "scroll"), r.wrap = n(r.tpl.wrap).addClass("fancybox-" + (c ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + r.wrapCSS).appendTo(r.parent || "body"), n.extend(r, {
                            skin: n(".fancybox-skin", r.wrap),
                            outer: n(".fancybox-outer", r.wrap),
                            inner: n(".fancybox-inner", r.wrap)
                        }), n.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                            r.skin.css("padding" + t, p(r.padding[e]))
                        }), a.trigger("onReady"), "inline" === i || "html" === i) {
                        if (!r.content || !r.content.length) return a._error("content")
                    } else if (!t) return a._error("href");
                    "image" === i ? a._loadImage() : "ajax" === i ? a._loadAjax() : "iframe" === i ? a._loadIframe() : a._afterLoad()
                }
            },
            _error: function(e) {
                n.extend(a.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: a.coming.tpl.error
                }), a._afterLoad()
            },
            _loadImage: function() {
                var e = a.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, a.coming.width = this.width, a.coming.height = this.height, a._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, a._error("image")
                }, e.src = a.coming.href, !0 !== e.complete && a.showLoading()
            },
            _loadAjax: function() {
                var e = a.coming;
                a.showLoading(), a.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        a.coming && "abort" !== t ? a._error("ajax", e) : a.hideLoading()
                    },
                    success: function(t, n) {
                        "success" === n && (e.content = t, a._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = a.coming,
                    t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c ? "auto" : e.iframe.scrolling).attr("src", e.href);
                n(e.wrap).bind("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (a.showLoading(), t.one("load", function() {
                    n(this).data("ready", 1), c || n(this).bind("load.fb", a.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), a._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || a._afterLoad()
            },
            _preloadImages: function() {
                var e, t, n = a.group,
                    i = a.current,
                    r = n.length,
                    o = i.preload ? Math.min(i.preload, r - 1) : 0;
                for (t = 1; o >= t; t += 1) e = n[(i.index + t) % r], "image" === e.type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, i, r, o, s = a.coming,
                    l = a.current;
                if (a.hideLoading(), s && !1 !== a.isActive)
                    if (!1 === a.trigger("afterLoad", s, l)) s.wrap.stop(!0).trigger("onReset").remove(), a.coming = null;
                    else {
                        switch (l && (a.trigger("beforeChange", l), l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), a.unbindEvents(), e = s.content, t = s.type, i = s.scrolling, n.extend(a, {
                            wrap: s.wrap,
                            skin: s.skin,
                            outer: s.outer,
                            inner: s.inner,
                            current: s,
                            previous: l
                        }), r = s.href, t) {
                            case "inline":
                            case "ajax":
                            case "html":
                                s.selector ? e = n("<div>").html(e).find(s.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), s.wrap.bind("onReset", function() {
                                    n(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                                break;
                            case "image":
                                e = s.tpl.image.replace("{href}", r);
                                break;
                            case "swf":
                                e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', o = "", n.each(s.swf, function(t, n) {
                                    e += '<param name="' + t + '" value="' + n + '"></param>', o += " " + t + '="' + n + '"'
                                }), e += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + o + "></embed></object>"
                        }(!u(e) || !e.parent().is(s.inner)) && s.inner.append(e), a.trigger("beforeShow"), s.inner.css("overflow", "yes" === i ? "scroll" : "no" === i ? "hidden" : i), a._setDimension(), a.reposition(), a.isOpen = !1, a.coming = null, a.bindEvents(), a.isOpened ? l.prevMethod && a.transitions[l.prevMethod]() : n(".fancybox-wrap").not(s.wrap).stop(!0).trigger("onReset").remove(), a.transitions[a.isOpened ? s.nextMethod : s.openMethod](), a._preloadImages()
                    }
            },
            _setDimension: function() {
                var e, t, i, r, o, s, l, c, u, d = a.getViewport(),
                    m = 0,
                    g = !1,
                    v = !1,
                    g = a.wrap,
                    y = a.skin,
                    b = a.inner,
                    x = a.current,
                    v = x.width,
                    w = x.height,
                    _ = x.minWidth,
                    k = x.minHeight,
                    C = x.maxWidth,
                    T = x.maxHeight,
                    E = x.scrolling,
                    S = x.scrollOutside ? x.scrollbarWidth : 0,
                    $ = x.margin,
                    j = h($[1] + $[3]),
                    A = h($[0] + $[2]);
                if (g.add(y).add(b).width("auto").height("auto").removeClass("fancybox-tmp"), $ = h(y.outerWidth(!0) - y.width()), e = h(y.outerHeight(!0) - y.height()), t = j + $, i = A + e, r = f(v) ? (d.w - t) * h(v) / 100 : v, o = f(w) ? (d.h - i) * h(w) / 100 : w, "iframe" === x.type) {
                    if (u = x.content, x.autoHeight && 1 === u.data("ready")) try {
                        u[0].contentWindow.document.location && (b.width(r).height(9999), s = u.contents().find("body"), S && s.css("overflow-x", "hidden"), o = s.height())
                    } catch (N) {}
                } else(x.autoWidth || x.autoHeight) && (b.addClass("fancybox-tmp"), x.autoWidth || b.width(r), x.autoHeight || b.height(o), x.autoWidth && (r = b.width()), x.autoHeight && (o = b.height()), b.removeClass("fancybox-tmp"));
                if (v = h(r), w = h(o), c = r / o, _ = h(f(_) ? h(_, "w") - t : _), C = h(f(C) ? h(C, "w") - t : C), k = h(f(k) ? h(k, "h") - i : k), T = h(f(T) ? h(T, "h") - i : T), s = C, l = T, x.fitToView && (C = Math.min(d.w - t, C), T = Math.min(d.h - i, T)), t = d.w - j, A = d.h - A, x.aspectRatio ? (v > C && (v = C, w = h(v / c)), w > T && (w = T, v = h(w * c)), _ > v && (v = _, w = h(v / c)), k > w && (w = k, v = h(w * c))) : (v = Math.max(_, Math.min(v, C)), x.autoHeight && "iframe" !== x.type && (b.width(v), w = b.height()), w = Math.max(k, Math.min(w, T))), x.fitToView)
                    if (b.width(v).height(w), g.width(v + $), d = g.width(), j = g.height(), x.aspectRatio)
                        for (;
                            (d > t || j > A) && v > _ && w > k && !(19 < m++);) w = Math.max(k, Math.min(T, w - 10)), v = h(w * c), _ > v && (v = _, w = h(v / c)), v > C && (v = C, w = h(v / c)), b.width(v).height(w), g.width(v + $), d = g.width(), j = g.height();
                    else v = Math.max(_, Math.min(v, v - (d - t))), w = Math.max(k, Math.min(w, w - (j - A)));
                S && "auto" === E && o > w && t > v + $ + S && (v += S), b.width(v).height(w), g.width(v + $), d = g.width(), j = g.height(), g = (d > t || j > A) && v > _ && w > k, v = x.aspectRatio ? s > v && l > w && r > v && o > w : (s > v || l > w) && (r > v || o > w), n.extend(x, {
                    dim: {
                        width: p(d),
                        height: p(j)
                    },
                    origWidth: r,
                    origHeight: o,
                    canShrink: g,
                    canExpand: v,
                    wPadding: $,
                    hPadding: e,
                    wrapSpace: j - y.outerHeight(!0),
                    skinSpace: y.height() - w
                }), !u && x.autoHeight && w > k && T > w && !v && b.height("auto")
            },
            _getPosition: function(e) {
                var t = a.current,
                    n = a.getViewport(),
                    i = t.margin,
                    r = a.wrap.width() + i[1] + i[3],
                    o = a.wrap.height() + i[0] + i[2],
                    i = {
                        position: "absolute",
                        top: i[0],
                        left: i[3]
                    };
                return t.autoCenter && t.fixed && !e && o <= n.h && r <= n.w ? i.position = "fixed" : t.locked || (i.top += n.y, i.left += n.x), i.top = p(Math.max(i.top, i.top + (n.h - o) * t.topRatio)), i.left = p(Math.max(i.left, i.left + (n.w - r) * t.leftRatio)), i
            },
            _afterZoomIn: function() {
                var e = a.current;
                e && (a.isOpen = a.isOpened = !0, a.wrap.css("overflow", "visible").addClass("fancybox-opened"), a.update(), (e.closeClick || e.nextClick && 1 < a.group.length) && a.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), a[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && n(e.tpl.closeBtn).appendTo(a.skin).bind("click.fb", function(e) {
                    e.preventDefault(), a.close()
                }), e.arrows && 1 < a.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(a.outer).bind("click.fb", a.prev), (e.loop || e.index < a.group.length - 1) && n(e.tpl.next).appendTo(a.outer).bind("click.fb", a.next)), a.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? a.opts.autoPlay && !a.player.isActive && (a.opts.autoPlay = !1, a.play()) : a.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || a.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(a, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), a.trigger("afterClose", e)
            }
        }), a.transitions = {
            getOrigPosition: function() {
                var e = a.current,
                    t = e.element,
                    n = e.orig,
                    i = {},
                    r = 50,
                    o = 50,
                    s = e.hPadding,
                    l = e.wPadding,
                    c = a.getViewport();
                return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), u(n) ? (i = n.offset(), n.is("img") && (r = n.outerWidth(), o = n.outerHeight())) : (i.top = c.y + (c.h - o) * e.topRatio, i.left = c.x + (c.w - r) * e.leftRatio), ("fixed" === a.wrap.css("position") || e.locked) && (i.top -= c.y, i.left -= c.x), i = {
                    top: p(i.top - s * e.topRatio),
                    left: p(i.left - l * e.leftRatio),
                    width: p(r + l),
                    height: p(o + s)
                }
            },
            step: function(e, t) {
                var n, i, r = t.prop;
                i = a.current;
                var o = i.wrapSpace,
                    s = i.skinSpace;
                ("width" === r || "height" === r) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), a.isClosing && (n = 1 - n), i = "width" === r ? i.wPadding : i.hPadding, i = e - i, a.skin[r](h("width" === r ? i : i - o * n)), a.inner[r](h("width" === r ? i : i - o * n - s * n)))
            },
            zoomIn: function() {
                var e = a.current,
                    t = e.pos,
                    i = e.openEffect,
                    r = "elastic" === i,
                    o = n.extend({
                        opacity: 1
                    }, t);
                delete o.position, r ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), a.wrap.css(t).animate(o, {
                    duration: "none" === i ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: r ? this.step : null,
                    complete: a._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = a.current,
                    t = e.closeEffect,
                    n = "elastic" === t,
                    i = {
                        opacity: .1
                    };
                n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), a.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: n ? this.step : null,
                    complete: a._afterZoomOut
                })
            },
            changeIn: function() {
                var e, t = a.current,
                    n = t.nextEffect,
                    i = t.pos,
                    r = {
                        opacity: 1
                    },
                    o = a.direction;
                i.opacity = .1, "elastic" === n && (e = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (i[e] = p(h(i[e]) - 200), r[e] = "+=200px") : (i[e] = p(h(i[e]) + 200), r[e] = "-=200px")), "none" === n ? a._afterZoomIn() : a.wrap.css(i).animate(r, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: a._afterZoomIn
                })
            },
            changeOut: function() {
                var e = a.previous,
                    t = e.prevEffect,
                    i = {
                        opacity: .1
                    },
                    r = a.direction;
                "elastic" === t && (i["down" === r || "up" === r ? "top" : "left"] = ("up" === r || "left" === r ? "-" : "+") + "=200px"), e.wrap.animate(i, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        n(this).trigger("onReset").remove()
                    }
                })
            }
        }, a.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !c,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            create: function(e) {
                e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo("body"), this.fixed = !1, e.fixed && a.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (r.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    n(e.target).hasClass("fancybox-overlay") && (a.isActive ? a.close() : t.close())
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                n(".fancybox-overlay").remove(), r.unbind("resize.overlay"), this.overlay = null, !1 !== this.margin && (n("body").css("margin-right", this.margin), this.margin = !1), this.el && this.el.removeClass("fancybox-lock")
            },
            update: function() {
                var e, n = "100%";
                this.overlay.width(n).height("100%"), s ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > e && (n = o.width())) : o.width() > r.width() && (n = o.width()), this.overlay.width(n).height(o.height())
            },
            onReady: function(e, i) {
                n(".fancybox-overlay").stop(!0, !0), this.overlay || (this.margin = o.height() > r.height() || "scroll" === n("body").css("overflow-y") ? n("body").css("margin-right") : !1, this.el = n(t.all && !t.querySelector ? "html" : "body"), this.create(e)), e.locked && this.fixed && (i.locked = this.overlay.append(i.wrap), i.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                t.locked && (this.el.addClass("fancybox-lock"), !1 !== this.margin && n("body").css("margin-right", h(this.margin) + t.scrollbarWidth)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !a.isActive && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
            }
        }, a.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t = a.current,
                    i = t.title,
                    r = e.type;
                if (n.isFunction(i) && (i = i.call(t.element, t)), d(i) && "" !== n.trim(i)) {
                    switch (t = n('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + i + "</div>"), r) {
                        case "inside":
                            r = a.skin;
                            break;
                        case "outside":
                            r = a.wrap;
                            break;
                        case "over":
                            r = a.inner;
                            break;
                        default:
                            r = a.skin, t.appendTo("body"), s && t.width(t.width()), t.wrapInner('<span class="child"></span>'), a.current.margin[2] += Math.abs(h(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](r)
                }
            }
        }, n.fn.fancybox = function(e) {
            var t, i = n(this),
                r = this.selector || "",
                s = function(o) {
                    var s, l, c = n(this).blur(),
                        u = t;
                    !o.ctrlKey && !o.altKey && !o.shiftKey && !o.metaKey && !c.is(".fancybox-wrap") && (s = e.groupAttr || "data-fancybox-group", l = c.attr(s), l || (s = "rel", l = c.get(0)[s]), l && "" !== l && "nofollow" !== l && (c = r.length ? n(r) : i, c = c.filter("[" + s + '="' + l + '"]'), u = c.index(this)), e.index = u, !1 !== a.open(c, e) && o.preventDefault())
                };
            return e = e || {}, t = e.index || 0, r && !1 !== e.live ? o.undelegate(r, "click.fb-start").delegate(r + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : i.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, o.ready(function() {
            if (n.scrollbarWidth === i && (n.scrollbarWidth = function() {
                    var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        t = e.children(),
                        t = t.innerWidth() - t.height(99).innerWidth();
                    return e.remove(), t
                }), n.support.fixedPosition === i) {
                var e = n.support,
                    t = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    r = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                t.remove(), e.fixedPosition = r
            }
            n.extend(a.defaults, {
                scrollbarWidth: n.scrollbarWidth(),
                fixed: n.support.fixedPosition,
                parent: n("body")
            })
        })
    }(window, document, jQuery),
    /**
     * Featherlight - ultra slim jQuery lightbox
     * Version 1.3.4 - http://noelboss.github.io/featherlight/
     *
     * Copyright 2015, Noël Raoul Bossart (http://www.noelboss.com)
     * MIT Licensed.
     **/
    function(e) {
        "use strict";

        function t(e, n) {
            if (!(this instanceof t)) {
                var i = new t(e, n);
                return i.open(), i
            }
            this.id = t.id++, this.setup(e, n), this.chainCallbacks(t._callbackChain)
        }
        if ("undefined" == typeof e) return void("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
        var n = [],
            i = function(t) {
                return n = e.grep(n, function(e) {
                    return e !== t && e.$instance.closest("body").length > 0
                })
            },
            r = function(e, t) {
                var n = {},
                    i = new RegExp("^" + t + "([A-Z])(.*)");
                for (var r in e) {
                    var o = r.match(i);
                    if (o) {
                        var a = (o[1] + o[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                        n[a] = e[r]
                    }
                }
                return n
            },
            o = {
                keyup: "onKeyUp",
                resize: "onResize"
            },
            a = function(n) {
                e.each(t.opened().reverse(), function() {
                    return n.isDefaultPrevented() || !1 !== this[o[n.type]](n) ? void 0 : (n.preventDefault(), n.stopPropagation(), !1)
                })
            },
            s = function(n) {
                if (n !== t._globalHandlerInstalled) {
                    t._globalHandlerInstalled = n;
                    var i = e.map(o, function(e, n) {
                        return n + "." + t.prototype.namespace
                    }).join(" ");
                    e(window)[n ? "on" : "off"](i, a)
                }
            };
        t.prototype = {
            constructor: t,
            namespace: "featherlight",
            targetAttr: "data-featherlight",
            variant: null,
            resetCss: !1,
            background: null,
            openTrigger: "click",
            closeTrigger: "click",
            filter: null,
            root: "body",
            openSpeed: 250,
            closeSpeed: 250,
            closeOnClick: "background",
            closeOnEsc: !0,
            closeIcon: "&#10005;",
            loading: "",
            persist: !1,
            otherClose: null,
            beforeOpen: e.noop,
            beforeContent: e.noop,
            beforeClose: e.noop,
            afterOpen: e.noop,
            afterContent: e.noop,
            afterClose: e.noop,
            onKeyUp: e.noop,
            onResize: e.noop,
            type: null,
            contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
            setup: function(t, n) {
                "object" != typeof t || t instanceof e != !1 || n || (n = t, t = void 0);
                var i = e.extend(this, n, {
                        target: t
                    }),
                    r = i.resetCss ? i.namespace + "-reset" : i.namespace,
                    o = e(i.background || ['<div class="' + r + "-loading " + r + '">', '<div class="' + r + '-content">', '<span class="' + r + "-close-icon " + i.namespace + '-close">', i.closeIcon, "</span>", '<div class="' + i.namespace + '-inner">' + i.loading + "</div>", "</div>", "</div>"].join("")),
                    a = "." + i.namespace + "-close" + (i.otherClose ? "," + i.otherClose : "");
                return i.$instance = o.clone().addClass(i.variant), i.$instance.on(i.closeTrigger + "." + i.namespace, function(t) {
                    var n = e(t.target);
                    ("background" === i.closeOnClick && n.is("." + i.namespace) || "anywhere" === i.closeOnClick || n.closest(a).length) && (t.preventDefault(), i.close())
                }), this
            },
            getContent: function() {
                if (this.persist !== !1 && this.$content) return this.$content;
                var t = this,
                    n = this.constructor.contentFilters,
                    i = function(e) {
                        return t.$currentTarget && t.$currentTarget.attr(e)
                    },
                    r = i(t.targetAttr),
                    o = t.target || r || "",
                    a = n[t.type];
                if (!a && o in n && (a = n[o], o = t.target && r), o = o || i("href") || "", !a)
                    for (var s in n) t[s] && (a = n[s], o = t[s]);
                if (!a) {
                    var l = o;
                    if (o = null, e.each(t.contentFilters, function() {
                            return a = n[this], a.test && (o = a.test(l)), !o && a.regex && l.match && l.match(a.regex) && (o = l), !o
                        }), !o) return "console" in window && window.console.error("Featherlight: no content filter found " + (l ? ' for "' + l + '"' : " (no target specified)")), !1
                }
                return a.process.call(t, o)
            },
            setContent: function(t) {
                var n = this;
                return (t.is("iframe") || e("iframe", t).length > 0) && n.$instance.addClass(n.namespace + "-iframe"), n.$instance.removeClass(n.namespace + "-loading"), n.$instance.find("." + n.namespace + "-inner").not(t).slice(1).remove().end().replaceWith(e.contains(n.$instance[0], t[0]) ? "" : t), n.$content = t.addClass(n.namespace + "-inner"), n
            },
            open: function(t) {
                var i = this;
                if (i.$instance.hide().appendTo(i.root), !(t && t.isDefaultPrevented() || i.beforeOpen(t) === !1)) {
                    t && t.preventDefault();
                    var r = i.getContent();
                    if (r) return n.push(i), s(!0), i.$instance.fadeIn(i.openSpeed), i.beforeContent(t), e.when(r).always(function(e) {
                        i.setContent(e), i.afterContent(t)
                    }).then(i.$instance.promise()).done(function() {
                        i.afterOpen(t)
                    })
                }
                return i.$instance.detach(), e.Deferred().reject().promise()
            },
            close: function(t) {
                var n = this,
                    r = e.Deferred();
                return n.beforeClose(t) === !1 ? r.reject() : (0 === i(n).length && s(!1), n.$instance.fadeOut(n.closeSpeed, function() {
                    n.$instance.detach(), n.afterClose(t), r.resolve()
                })), r.promise()
            },
            chainCallbacks: function(t) {
                for (var n in t) this[n] = e.proxy(t[n], this, e.proxy(this[n], this))
            }
        }, e.extend(t, {
            id: 0,
            autoBind: "[data-featherlight]",
            defaults: t.prototype,
            contentFilters: {
                jquery: {
                    regex: /^[#.]\w/,
                    test: function(t) {
                        return t instanceof e && t
                    },
                    process: function(t) {
                        return this.persist !== !1 ? e(t) : e(t).clone(!0)
                    }
                },
                image: {
                    regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,
                    process: function(t) {
                        var n = this,
                            i = e.Deferred(),
                            r = new Image,
                            o = e('<img src="' + t + '" alt="" class="' + n.namespace + '-image" />');
                        return r.onload = function() {
                            o.naturalWidth = r.width, o.naturalHeight = r.height, i.resolve(o)
                        }, r.onerror = function() {
                            i.reject(o)
                        }, r.src = t, i.promise()
                    }
                },
                html: {
                    regex: /^\s*<[\w!][^<]*>/,
                    process: function(t) {
                        return e(t)
                    }
                },
                ajax: {
                    regex: /./,
                    process: function(t) {
                        var n = e.Deferred(),
                            i = e("<div></div>").load(t, function(e, t) {
                                "error" !== t && n.resolve(i.contents()), n.fail()
                            });
                        return n.promise()
                    }
                },
                iframe: {
                    process: function(t) {
                        var n = new e.Deferred,
                            i = e("<iframe/>").hide().attr("src", t).css(r(this, "iframe")).on("load", function() {
                                n.resolve(i.show())
                            }).appendTo(this.$instance.find("." + this.namespace + "-content"));
                        return n.promise()
                    }
                },
                text: {
                    process: function(t) {
                        return e("<div>", {
                            text: t
                        })
                    }
                }
            },
            functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
            readElementConfig: function(t, n) {
                var i = this,
                    r = new RegExp("^data-" + n + "-(.*)"),
                    o = {};
                return t && t.attributes && e.each(t.attributes, function() {
                    var t = this.name.match(r);
                    if (t) {
                        var n = this.value,
                            a = e.camelCase(t[1]);
                        if (e.inArray(a, i.functionAttributes) >= 0) n = new Function(n);
                        else try {
                            n = e.parseJSON(n)
                        } catch (s) {}
                        o[a] = n
                    }
                }), o
            },
            extend: function(t, n) {
                var i = function() {
                    this.constructor = t
                };
                return i.prototype = this.prototype, t.prototype = new i, t.__super__ = this.prototype, e.extend(t, this, n), t.defaults = t.prototype, t
            },
            attach: function(t, n, i) {
                var r = this;
                "object" != typeof n || n instanceof e != !1 || i || (i = n, n = void 0), i = e.extend({}, i);
                var o, a = i.namespace || r.defaults.namespace,
                    s = e.extend({}, r.defaults, r.readElementConfig(t[0], a), i);
                return t.on(s.openTrigger + "." + s.namespace, s.filter, function(a) {
                    var l = e.extend({
                            $source: t,
                            $currentTarget: e(this)
                        }, r.readElementConfig(t[0], s.namespace), r.readElementConfig(this, s.namespace), i),
                        c = o || e(this).data("featherlight-persisted") || new r(n, l);
                    "shared" === c.persist ? o = c : c.persist !== !1 && e(this).data("featherlight-persisted", c), l.$currentTarget.blur(), c.open(a)
                }), t
            },
            current: function() {
                var e = this.opened();
                return e[e.length - 1] || null
            },
            opened: function() {
                var t = this;
                return i(), e.grep(n, function(e) {
                    return e instanceof t
                })
            },
            close: function() {
                var e = this.current();
                return e ? e.close() : void 0
            },
            _onReady: function() {
                var t = this;
                t.autoBind && (e(t.autoBind).each(function() {
                    t.attach(e(this))
                }), e(document).on("click", t.autoBind, function(n) {
                    n.isDefaultPrevented() || (n.preventDefault(), t.attach(e(n.currentTarget)), e(n.target).click())
                }))
            },
            _callbackChain: {
                onKeyUp: function(e, t) {
                    return 27 === t.keyCode ? (this.closeOnEsc && this.$instance.find("." + this.namespace + "-close:first").click(), !1) : e(t)
                },
                onResize: function(e, t) {
                    if (this.$content.naturalWidth) {
                        var n = this.$content.naturalWidth,
                            i = this.$content.naturalHeight;
                        this.$content.css("width", "").css("height", "");
                        var r = Math.max(n / parseInt(this.$content.parent().css("width"), 10), i / parseInt(this.$content.parent().css("height"), 10));
                        r > 1 && this.$content.css("width", "" + n / r + "px").css("height", "" + i / r + "px")
                    }
                    return e(t)
                },
                afterContent: function(e, t) {
                    var n = e(t);
                    return this.onResize(t), n
                }
            }
        }), e.featherlight = t, e.fn.featherlight = function(e, n) {
            return t.attach(this, e, n)
        }, e(document).ready(function() {
            t._onReady()
        })
    }(jQuery),
    /*!
     * Copyright (c) 2015 Chris O'Hara <cohara87@gmail.com>
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     */
    function(e, t) {
        "undefined" != typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && "object" == typeof define.amd ? define(t) : this[e] = t()
    }("validator", function(e) {
        "use strict";

        function t(e) {
            var t = e.match(N);
            if (!t) return (new Date).getTimezoneOffset();
            var n = t[21];
            if (!n || "z" === n || "Z" === n) return 0;
            var i, r, o = t[22];
            return -1 !== n.indexOf(":") ? (i = parseInt(t[23]), r = parseInt(t[24])) : (i = 0, r = parseInt(t[23])), (60 * i + r) * ("-" === o ? 1 : -1)
        }

        function n(e, t) {
            e = e || {};
            for (var n in t) "undefined" == typeof e[n] && (e[n] = t[n]);
            return e
        }

        function i(e) {
            var t = "(\\" + e.symbol.replace(/\./g, "\\.") + ")" + (e.require_symbol ? "" : "?"),
                n = "-?",
                i = "[1-9]\\d*",
                r = "[1-9]\\d{0,2}(\\" + e.thousands_separator + "\\d{3})*",
                o = ["0", i, r],
                a = "(" + o.join("|") + ")?",
                s = "(\\" + e.decimal_separator + "\\d{2})?",
                l = a + s;
            return e.allow_negatives && !e.parens_for_negatives && (e.negative_sign_after_digits ? l += n : e.negative_sign_before_digits && (l = n + l)), e.allow_negative_sign_placeholder ? l = "( (?!\\-))?" + l : e.allow_space_after_symbol ? l = " ?" + l : e.allow_space_after_digits && (l += "( (?!$))?"), e.symbol_after_digits ? l += t : l = t + l, e.allow_negatives && (e.parens_for_negatives ? l = "(\\(" + l + "\\)|" + l + ")" : e.negative_sign_before_digits || e.negative_sign_after_digits || (l = n + l)), new RegExp("^(?!-? )(?=.*\\d)" + l + "$")
        }
        e = {
            version: "4.2.0"
        };
        var r = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,
            o = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,
            a = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,
            s = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,
            l = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,
            c = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            u = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/,
            d = /^(?:[0-9]{9}X|[0-9]{10})$/,
            f = /^(?:[0-9]{13})$/,
            h = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/,
            p = /^[0-9A-F]{1,4}$/i,
            m = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
            },
            g = /^[A-Z]+$/i,
            v = /^[0-9A-Z]+$/i,
            y = /^[-+]?[0-9]+$/,
            b = /^(?:[-+]?(?:0|[1-9][0-9]*))$/,
            x = /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
            w = /^[0-9A-F]+$/i,
            _ = /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
            k = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
            C = /^[\x00-\x7F]+$/,
            T = /[^\x00-\x7F]/,
            E = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
            S = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/,
            $ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/,
            j = /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i,
            A = {
                "zh-CN": /^(\+?0?86\-?)?1[345789]\d{9}$/,
                "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
                "en-ZA": /^(\+?27|0)\d{9}$/,
                "en-AU": /^(\+?61|0)4\d{8}$/,
                "en-HK": /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
                "fr-FR": /^(\+?33|0)[67]\d{8}$/,
                "pt-PT": /^(\+351)?9[1236]\d{7}$/,
                "el-GR": /^(\+30)?((2\d{9})|(69\d{8}))$/,
                "en-GB": /^(\+?44|0)7\d{9}$/,
                "en-US": /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
                "en-ZM": /^(\+26)?09[567]\d{7}$/,
                "ru-RU": /^(\+?7|8)?9\d{9}$/,
                "nb-NO": /^(\+?47)?[49]\d{7}$/,
                "nn-NO": /^(\+?47)?[49]\d{7}$/
            },
            N = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
        e.extend = function(t, n) {
            e[t] = function() {
                var t = Array.prototype.slice.call(arguments);
                return t[0] = e.toString(t[0]), n.apply(e, t)
            }
        }, e.init = function() {
            for (var t in e) "function" == typeof e[t] && "toString" !== t && "toDate" !== t && "extend" !== t && "init" !== t && e.extend(t, e[t])
        }, e.toString = function(e) {
            return "object" == typeof e && null !== e && e.toString ? e = e.toString() : (null === e || "undefined" == typeof e || isNaN(e) && !e.length) && (e = ""), "" + e
        }, e.toDate = function(e) {
            return "[object Date]" === Object.prototype.toString.call(e) ? e : (e = Date.parse(e), isNaN(e) ? null : new Date(e))
        }, e.toFloat = function(e) {
            return parseFloat(e)
        }, e.toInt = function(e, t) {
            return parseInt(e, t || 10)
        }, e.toBoolean = function(e, t) {
            return t ? "1" === e || "true" === e : "0" !== e && "false" !== e && "" !== e
        }, e.equals = function(t, n) {
            return t === e.toString(n)
        }, e.contains = function(t, n) {
            return t.indexOf(e.toString(n)) >= 0
        }, e.matches = function(e, t, n) {
            return "[object RegExp]" !== Object.prototype.toString.call(t) && (t = new RegExp(t, n)), t.test(e)
        };
        var F = {
            allow_display_name: !1,
            allow_utf8_local_part: !0,
            require_tld: !0
        };
        e.isEmail = function(t, i) {
            if (i = n(i, F), i.allow_display_name) {
                var c = t.match(l);
                c && (t = c[1])
            }
            var u = t.split("@"),
                d = u.pop(),
                f = u.join("@"),
                h = d.toLowerCase();
            if (("gmail.com" === h || "googlemail.com" === h) && (f = f.replace(/\./g, "").toLowerCase()), !e.isByteLength(f, 0, 64) || !e.isByteLength(d, 0, 256)) return !1;
            if (!e.isFQDN(d, {
                    require_tld: i.require_tld
                })) return !1;
            if ('"' === f[0]) return f = f.slice(1, f.length - 1), i.allow_utf8_local_part ? s.test(f) : o.test(f);
            for (var p = i.allow_utf8_local_part ? a : r, m = f.split("."), g = 0; g < m.length; g++)
                if (!p.test(m[g])) return !1;
            return !0
        };
        var D = {
            protocols: ["http", "https", "ftp"],
            require_tld: !0,
            require_protocol: !1,
            require_valid_protocol: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1,
            allow_protocol_relative_urls: !1
        };
        e.isURL = function(t, i) {
            if (!t || t.length >= 2083 || /\s/.test(t)) return !1;
            if (0 === t.indexOf("mailto:")) return !1;
            i = n(i, D);
            var r, o, a, s, l, c, u;
            if (u = t.split("://"), u.length > 1) {
                if (r = u.shift(), i.require_valid_protocol && -1 === i.protocols.indexOf(r)) return !1
            } else {
                if (i.require_protocol) return !1;
                i.allow_protocol_relative_urls && "//" === t.substr(0, 2) && (u[0] = t.substr(2))
            }
            return t = u.join("://"), u = t.split("#"), t = u.shift(), u = t.split("?"), t = u.shift(), u = t.split("/"), t = u.shift(), u = t.split("@"), u.length > 1 && (o = u.shift(), o.indexOf(":") >= 0 && o.split(":").length > 2) ? !1 : (s = u.join("@"), u = s.split(":"), a = u.shift(), u.length && (c = u.join(":"), l = parseInt(c, 10), !/^[0-9]+$/.test(c) || 0 >= l || l > 65535) ? !1 : e.isIP(a) || e.isFQDN(a, i) || "localhost" === a ? i.host_whitelist && -1 === i.host_whitelist.indexOf(a) ? !1 : i.host_blacklist && -1 !== i.host_blacklist.indexOf(a) ? !1 : !0 : !1)
        }, e.isIP = function(t, n) {
            if (n = e.toString(n), !n) return e.isIP(t, 4) || e.isIP(t, 6);
            if ("4" === n) {
                if (!h.test(t)) return !1;
                var i = t.split(".").sort(function(e, t) {
                    return e - t
                });
                return i[3] <= 255
            }
            if ("6" === n) {
                var r = t.split(":"),
                    o = !1,
                    a = e.isIP(r[r.length - 1], 4),
                    s = a ? 7 : 8;
                if (r.length > s) return !1;
                if ("::" === t) return !0;
                "::" === t.substr(0, 2) ? (r.shift(), r.shift(), o = !0) : "::" === t.substr(t.length - 2) && (r.pop(), r.pop(), o = !0);
                for (var l = 0; l < r.length; ++l)
                    if ("" === r[l] && l > 0 && l < r.length - 1) {
                        if (o) return !1;
                        o = !0
                    } else if (a && l == r.length - 1);
                else if (!p.test(r[l])) return !1;
                return o ? r.length >= 1 : r.length === s
            }
            return !1
        };
        var P = {
            require_tld: !0,
            allow_underscores: !1,
            allow_trailing_dot: !1
        };
        e.isFQDN = function(e, t) {
            t = n(t, P), t.allow_trailing_dot && "." === e[e.length - 1] && (e = e.substring(0, e.length - 1));
            var i = e.split(".");
            if (t.require_tld) {
                var r = i.pop();
                if (!i.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(r)) return !1
            }
            for (var o, a = 0; a < i.length; a++) {
                if (o = i[a], t.allow_underscores) {
                    if (o.indexOf("__") >= 0) return !1;
                    o = o.replace(/_/g, "")
                }
                if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(o)) return !1;
                if (/[\uff01-\uff5e]/.test(o)) return !1;
                if ("-" === o[0] || "-" === o[o.length - 1] || o.indexOf("---") >= 0) return !1
            }
            return !0
        }, e.isBoolean = function(e) {
            return ["true", "false", "1", "0"].indexOf(e) >= 0
        }, e.isAlpha = function(e) {
            return g.test(e)
        }, e.isAlphanumeric = function(e) {
            return v.test(e)
        }, e.isNumeric = function(e) {
            return y.test(e)
        }, e.isDecimal = function(e) {
            return "" !== e && _.test(e)
        }, e.isHexadecimal = function(e) {
            return w.test(e)
        }, e.isHexColor = function(e) {
            return k.test(e)
        }, e.isLowercase = function(e) {
            return e === e.toLowerCase()
        }, e.isUppercase = function(e) {
            return e === e.toUpperCase()
        }, e.isInt = function(e, t) {
            return t = t || {}, b.test(e) && (!t.hasOwnProperty("min") || e >= t.min) && (!t.hasOwnProperty("max") || e <= t.max)
        }, e.isFloat = function(e, t) {
            return t = t || {}, "" === e || "." === e ? !1 : x.test(e) && (!t.hasOwnProperty("min") || e >= t.min) && (!t.hasOwnProperty("max") || e <= t.max)
        }, e.isDivisibleBy = function(t, n) {
            return e.toFloat(t) % e.toInt(n) === 0
        }, e.isNull = function(e) {
            return 0 === e.length
        }, e.isLength = function(e, t, n) {
            var i = e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [],
                r = e.length - i.length;
            return r >= t && ("undefined" == typeof n || n >= r)
        }, e.isByteLength = function(e, t, n) {
            var i = encodeURI(e).split(/%..|./).length - 1;
            return i >= t && ("undefined" == typeof n || n >= i)
        }, e.isUUID = function(e, t) {
            var n = m[t ? t : "all"];
            return n && n.test(e)
        }, e.isDate = function(e) {
            var n = new Date(new Date(e).toUTCString()),
                i = String(n.getUTCDate()),
                r = n.getTimezoneOffset() - t(e);
            n = new Date(n.getTime() + 6e4 * r);
            var o, a, s, l = String(n.getDate());
            return isNaN(Date.parse(n)) ? !1 : (a = e.match(/(^|[^:\d])[23]\d([^:\d]|$)/g)) ? (o = a.map(function(e) {
                return e.match(/\d+/g)[0]
            }).join("/"), s = String(n.getFullYear()).slice(-2), o === l || o === i || o === s ? !0 : o === l + "/" + s || o === s + "/" + l ? !0 : o === i + "/" + s || o === s + "/" + i ? !0 : !1) : !0
        }, e.isAfter = function(t, n) {
            var i = e.toDate(n || new Date),
                r = e.toDate(t);
            return !!(r && i && r > i)
        }, e.isBefore = function(t, n) {
            var i = e.toDate(n || new Date),
                r = e.toDate(t);
            return !!(r && i && i > r)
        }, e.isIn = function(t, n) {
            var i;
            if ("[object Array]" === Object.prototype.toString.call(n)) {
                var r = [];
                for (i in n) r[i] = e.toString(n[i]);
                return r.indexOf(t) >= 0
            }
            return "object" == typeof n ? n.hasOwnProperty(t) : n && "function" == typeof n.indexOf ? n.indexOf(t) >= 0 : !1
        }, e.isCreditCard = function(e) {
            var t = e.replace(/[^0-9]+/g, "");
            if (!c.test(t)) return !1;
            for (var n, i, r, o = 0, a = t.length - 1; a >= 0; a--) n = t.substring(a, a + 1), i = parseInt(n, 10), r ? (i *= 2, o += i >= 10 ? i % 10 + 1 : i) : o += i, r = !r;
            return !!(o % 10 === 0 ? t : !1)
        }, e.isISIN = function(e) {
            if (!u.test(e)) return !1;
            for (var t, n, i = e.replace(/[A-Z]/g, function(e) {
                    return parseInt(e, 36)
                }), r = 0, o = !0, a = i.length - 2; a >= 0; a--) t = i.substring(a, a + 1), n = parseInt(t, 10), o ? (n *= 2, r += n >= 10 ? n + 1 : n) : r += n, o = !o;
            return parseInt(e.substr(e.length - 1), 10) === (1e4 - r) % 10
        }, e.isISBN = function(t, n) {
            if (n = e.toString(n), !n) return e.isISBN(t, 10) || e.isISBN(t, 13);
            var i, r = t.replace(/[\s-]+/g, ""),
                o = 0;
            if ("10" === n) {
                if (!d.test(r)) return !1;
                for (i = 0; 9 > i; i++) o += (i + 1) * r.charAt(i);
                if (o += "X" === r.charAt(9) ? 100 : 10 * r.charAt(9), o % 11 === 0) return !!r
            } else if ("13" === n) {
                if (!f.test(r)) return !1;
                var a = [1, 3];
                for (i = 0; 12 > i; i++) o += a[i % 2] * r.charAt(i);
                if (r.charAt(12) - (10 - o % 10) % 10 === 0) return !!r
            }
            return !1
        }, e.isMobilePhone = function(e, t) {
            return t in A ? A[t].test(e) : !1
        };
        var O = {
            symbol: "$",
            require_symbol: !1,
            allow_space_after_symbol: !1,
            symbol_after_digits: !1,
            allow_negatives: !0,
            parens_for_negatives: !1,
            negative_sign_before_digits: !1,
            negative_sign_after_digits: !1,
            allow_negative_sign_placeholder: !1,
            thousands_separator: ",",
            decimal_separator: ".",
            allow_space_after_digits: !1
        };
        e.isCurrency = function(e, t) {
            return t = n(t, O), i(t).test(e)
        }, e.isJSON = function(e) {
            try {
                var t = JSON.parse(e);
                return !!t && "object" == typeof t
            } catch (n) {}
            return !1
        }, e.isMultibyte = function(e) {
            return T.test(e)
        }, e.isAscii = function(e) {
            return C.test(e)
        }, e.isFullWidth = function(e) {
            return E.test(e)
        }, e.isHalfWidth = function(e) {
            return S.test(e)
        }, e.isVariableWidth = function(e) {
            return E.test(e) && S.test(e)
        }, e.isSurrogatePair = function(e) {
            return $.test(e)
        }, e.isBase64 = function(e) {
            return j.test(e)
        }, e.isMongoId = function(t) {
            return e.isHexadecimal(t) && 24 === t.length
        }, e.isISO8601 = function(e) {
            return N.test(e)
        }, e.ltrim = function(e, t) {
            var n = t ? new RegExp("^[" + t + "]+", "g") : /^\s+/g;
            return e.replace(n, "")
        }, e.rtrim = function(e, t) {
            var n = t ? new RegExp("[" + t + "]+$", "g") : /\s+$/g;
            return e.replace(n, "")
        }, e.trim = function(e, t) {
            var n = t ? new RegExp("^[" + t + "]+|[" + t + "]+$", "g") : /^\s+|\s+$/g;
            return e.replace(n, "")
        }, e.escape = function(e) {
            return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\//g, "&#x2F;").replace(/\`/g, "&#96;")
        }, e.stripLow = function(t, n) {
            var i = n ? "\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F" : "\\x00-\\x1F\\x7F";
            return e.blacklist(t, i)
        }, e.whitelist = function(e, t) {
            return e.replace(new RegExp("[^" + t + "]+", "g"), "")
        }, e.blacklist = function(e, t) {
            return e.replace(new RegExp("[" + t + "]+", "g"), "")
        };
        var M = {
            lowercase: !0
        };
        return e.normalizeEmail = function(t, i) {
            if (i = n(i, M), !e.isEmail(t)) return !1;
            var r = t.split("@", 2);
            if (r[1] = r[1].toLowerCase(), "gmail.com" === r[1] || "googlemail.com" === r[1]) {
                if (r[0] = r[0].toLowerCase().replace(/\./g, ""), "+" === r[0][0]) return !1;
                r[0] = r[0].split("+")[0], r[1] = "gmail.com"
            } else i.lowercase && (r[0] = r[0].toLowerCase());
            return r.join("@")
        }, e.init(), e
    }),
    function(e, t, n) {
        function i(t, n) {
            this.bodyOverflowX, this.callbacks = {
                hide: [],
                show: []
            }, this.checkInterval = null, this.Content, this.$el = e(t), this.$elProxy, this.elProxyPosition, this.enabled = !0, this.options = e.extend({}, l, n), this.mouseIsOverProxy = !1, this.namespace = "tooltipster-" + Math.round(1e5 * Math.random()), this.Status = "hidden", this.timerHide = null, this.timerShow = null, this.$tooltip, this.options.iconTheme = this.options.iconTheme.replace(".", ""), this.options.theme = this.options.theme.replace(".", ""), this._init()
        }

        function r(t, n) {
            var i = !0;
            return e.each(t, function(e, r) {
                return "undefined" == typeof n[e] || t[e] !== n[e] ? (i = !1, !1) : void 0
            }), i
        }

        function o() {
            return !u && c
        }

        function a() {
            var e = n.body || n.documentElement,
                t = e.style,
                i = "transition";
            if ("string" == typeof t[i]) return !0;
            v = ["Moz", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1);
            for (var r = 0; r < v.length; r++)
                if ("string" == typeof t[v[r] + i]) return !0;
            return !1
        }
        var s = "tooltipster",
            l = {
                animation: "fade",
                arrow: !0,
                arrowColor: "",
                autoClose: !0,
                content: null,
                contentAsHTML: !1,
                contentCloning: !0,
                debug: !0,
                delay: 200,
                minWidth: 0,
                maxWidth: null,
                functionInit: function(e, t) {},
                functionBefore: function(e, t) {
                    t()
                },
                functionReady: function(e, t) {},
                functionAfter: function(e) {},
                hideOnClick: !1,
                icon: "(?)",
                iconCloning: !0,
                iconDesktop: !1,
                iconTouch: !1,
                iconTheme: "tooltipster-icon",
                interactive: !1,
                interactiveTolerance: 350,
                multiple: !1,
                offsetX: 0,
                offsetY: 0,
                onlyOne: !1,
                position: "top",
                positionTracker: !1,
                positionTrackerCallback: function(e) {
                    "hover" == this.option("trigger") && this.option("autoClose") && this.hide()
                },
                restoration: "current",
                speed: 350,
                timer: 0,
                theme: "tooltipster-default",
                touchDevices: !0,
                trigger: "hover",
                updateAnimation: !0
            };
        i.prototype = {
            _init: function() {
                var t = this;
                if (n.querySelector) {
                    var i = null;
                    void 0 === t.$el.data("tooltipster-initialTitle") && (i = t.$el.attr("title"), void 0 === i && (i = null), t.$el.data("tooltipster-initialTitle", i)), null !== t.options.content ? t._content_set(t.options.content) : t._content_set(i);
                    var r = t.options.functionInit.call(t.$el, t.$el, t.Content);
                    "undefined" != typeof r && t._content_set(r), t.$el.removeAttr("title").addClass("tooltipstered"), !c && t.options.iconDesktop || c && t.options.iconTouch ? ("string" == typeof t.options.icon ? (t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>'), t.$elProxy.text(t.options.icon)) : t.options.iconCloning ? t.$elProxy = t.options.icon.clone(!0) : t.$elProxy = t.options.icon, t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el, "hover" == t.options.trigger ? (t.$elProxy.on("mouseenter." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !0, t._show())
                    }).on("mouseleave." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !1)
                    }), c && t.options.touchDevices && t.$elProxy.on("touchstart." + t.namespace, function() {
                        t._showNow()
                    })) : "click" == t.options.trigger && t.$elProxy.on("click." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && t._show()
                    })
                }
            },
            _show: function() {
                var e = this;
                "shown" != e.Status && "appearing" != e.Status && (e.options.delay ? e.timerShow = setTimeout(function() {
                    ("click" == e.options.trigger || "hover" == e.options.trigger && e.mouseIsOverProxy) && e._showNow()
                }, e.options.delay) : e._showNow())
            },
            _showNow: function(n) {
                var i = this;
                i.options.functionBefore.call(i.$el, i.$el, function() {
                    if (i.enabled && null !== i.Content) {
                        n && i.callbacks.show.push(n), i.callbacks.hide = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null, i.options.onlyOne && e(".tooltipstered").not(i.$el).each(function(t, n) {
                            var i = e(n),
                                r = i.data("tooltipster-ns");
                            e.each(r, function(e, t) {
                                var n = i.data(t),
                                    r = n.status(),
                                    o = n.option("autoClose");
                                "hidden" !== r && "disappearing" !== r && o && n.hide()
                            })
                        });
                        var r = function() {
                            i.Status = "shown", e.each(i.callbacks.show, function(e, t) {
                                t.call(i.$el)
                            }), i.callbacks.show = []
                        };
                        if ("hidden" !== i.Status) {
                            var o = 0;
                            "disappearing" === i.Status ? (i.Status = "appearing", a() ? (i.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + i.options.animation + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(r)) : i.$tooltip.stop().fadeIn(r)) : "shown" === i.Status && r()
                        } else {
                            i.Status = "appearing";
                            var o = i.options.speed;
                            i.bodyOverflowX = e("body").css("overflow-x"), e("body").css("overflow-x", "hidden");
                            var s = "tooltipster-" + i.options.animation,
                                l = "-webkit-transition-duration: " + i.options.speed + "ms; -webkit-animation-duration: " + i.options.speed + "ms; -moz-transition-duration: " + i.options.speed + "ms; -moz-animation-duration: " + i.options.speed + "ms; -o-transition-duration: " + i.options.speed + "ms; -o-animation-duration: " + i.options.speed + "ms; -ms-transition-duration: " + i.options.speed + "ms; -ms-animation-duration: " + i.options.speed + "ms; transition-duration: " + i.options.speed + "ms; animation-duration: " + i.options.speed + "ms;",
                                u = i.options.minWidth ? "min-width:" + Math.round(i.options.minWidth) + "px;" : "",
                                d = i.options.maxWidth ? "max-width:" + Math.round(i.options.maxWidth) + "px;" : "",
                                f = i.options.interactive ? "pointer-events: auto;" : "";
                            if (i.$tooltip = e('<div class="tooltipster-base ' + i.options.theme + '" style="' + u + " " + d + " " + f + " " + l + '"><div class="tooltipster-content"></div></div>'), a() && i.$tooltip.addClass(s), i._content_insert(), i.$tooltip.appendTo("body"), i.reposition(), i.options.functionReady.call(i.$el, i.$el, i.$tooltip), a() ? (i.$tooltip.addClass(s + "-show"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(r)) : i.$tooltip.css("display", "none").fadeIn(i.options.speed, r), i._interval_set(), e(t).on("scroll." + i.namespace + " resize." + i.namespace, function() {
                                    i.reposition()
                                }), i.options.autoClose)
                                if (e("body").off("." + i.namespace), "hover" == i.options.trigger) {
                                    if (c && setTimeout(function() {
                                            e("body").on("touchstart." + i.namespace, function() {
                                                i.hide()
                                            })
                                        }, 0), i.options.interactive) {
                                        c && i.$tooltip.on("touchstart." + i.namespace, function(e) {
                                            e.stopPropagation()
                                        });
                                        var h = null;
                                        i.$elProxy.add(i.$tooltip).on("mouseleave." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h), h = setTimeout(function() {
                                                i.hide()
                                            }, i.options.interactiveTolerance)
                                        }).on("mouseenter." + i.namespace + "-autoClose", function() {
                                            clearTimeout(h)
                                        })
                                    } else i.$elProxy.on("mouseleave." + i.namespace + "-autoClose", function() {
                                        i.hide()
                                    });
                                    i.options.hideOnClick && i.$elProxy.on("click." + i.namespace + "-autoClose", function() {
                                        i.hide()
                                    })
                                } else "click" == i.options.trigger && (setTimeout(function() {
                                    e("body").on("click." + i.namespace + " touchstart." + i.namespace, function() {
                                        i.hide()
                                    })
                                }, 0), i.options.interactive && i.$tooltip.on("click." + i.namespace + " touchstart." + i.namespace, function(e) {
                                    e.stopPropagation()
                                }))
                        }
                        i.options.timer > 0 && (i.timerHide = setTimeout(function() {
                            i.timerHide = null, i.hide()
                        }, i.options.timer + o))
                    }
                })
            },
            _interval_set: function() {
                var t = this;
                t.checkInterval = setInterval(function() {
                    if (0 === e("body").find(t.$el).length || 0 === e("body").find(t.$elProxy).length || "hidden" == t.Status || 0 === e("body").find(t.$tooltip).length)("shown" == t.Status || "appearing" == t.Status) && t.hide(), t._interval_cancel();
                    else if (t.options.positionTracker) {
                        var n = t._repositionInfo(t.$elProxy),
                            i = !1;
                        r(n.dimension, t.elProxyPosition.dimension) && ("fixed" === t.$elProxy.css("position") ? r(n.position, t.elProxyPosition.position) && (i = !0) : r(n.offset, t.elProxyPosition.offset) && (i = !0)), i || (t.reposition(), t.options.positionTrackerCallback.call(t, t.$el))
                    }
                }, 200)
            },
            _interval_cancel: function() {
                clearInterval(this.checkInterval), this.checkInterval = null
            },
            _content_set: function(e) {
                "object" == typeof e && null !== e && this.options.contentCloning && (e = e.clone(!0)), this.Content = e
            },
            _content_insert: function() {
                var e = this,
                    t = this.$tooltip.find(".tooltipster-content");
                "string" != typeof e.Content || e.options.contentAsHTML ? t.empty().append(e.Content) : t.text(e.Content)
            },
            _update: function(e) {
                var t = this;
                t._content_set(e), null !== t.Content ? "hidden" !== t.Status && (t._content_insert(), t.reposition(), t.options.updateAnimation && (a() ? (t.$tooltip.css({
                    width: "",
                    "-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    "-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                    transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
                }).addClass("tooltipster-content-changing"), setTimeout(function() {
                    "hidden" != t.Status && (t.$tooltip.removeClass("tooltipster-content-changing"), setTimeout(function() {
                        "hidden" !== t.Status && t.$tooltip.css({
                            "-webkit-transition": t.options.speed + "ms",
                            "-moz-transition": t.options.speed + "ms",
                            "-o-transition": t.options.speed + "ms",
                            "-ms-transition": t.options.speed + "ms",
                            transition: t.options.speed + "ms"
                        })
                    }, t.options.speed))
                }, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function() {
                    "hidden" != t.Status && t.$tooltip.fadeTo(t.options.speed, 1)
                }))) : t.hide()
            },
            _repositionInfo: function(e) {
                return {
                    dimension: {
                        height: e.outerHeight(!1),
                        width: e.outerWidth(!1)
                    },
                    offset: e.offset(),
                    position: {
                        left: parseInt(e.css("left")),
                        top: parseInt(e.css("top"))
                    }
                }
            },
            hide: function(n) {
                var i = this;
                n && i.callbacks.hide.push(n), i.callbacks.show = [], clearTimeout(i.timerShow), i.timerShow = null, clearTimeout(i.timerHide), i.timerHide = null;
                var r = function() {
                    e.each(i.callbacks.hide, function(e, t) {
                        t.call(i.$el)
                    }), i.callbacks.hide = []
                };
                if ("shown" == i.Status || "appearing" == i.Status) {
                    i.Status = "disappearing";
                    var o = function() {
                        i.Status = "hidden", "object" == typeof i.Content && null !== i.Content && i.Content.detach(), i.$tooltip.remove(), i.$tooltip = null, e(t).off("." + i.namespace), e("body").off("." + i.namespace).css("overflow-x", i.bodyOverflowX), e("body").off("." + i.namespace), i.$elProxy.off("." + i.namespace + "-autoClose"), i.options.functionAfter.call(i.$el, i.$el), r()
                    };
                    a() ? (i.$tooltip.clearQueue().removeClass("tooltipster-" + i.options.animation + "-show").addClass("tooltipster-dying"), i.options.speed > 0 && i.$tooltip.delay(i.options.speed), i.$tooltip.queue(o)) : i.$tooltip.stop().fadeOut(i.options.speed, o)
                } else "hidden" == i.Status && r();
                return i
            },
            show: function(e) {
                return this._showNow(e), this
            },
            update: function(e) {
                return this.content(e)
            },
            content: function(e) {
                return "undefined" == typeof e ? this.Content : (this._update(e), this)
            },
            reposition: function() {
                function n() {
                    var n = e(t).scrollLeft();
                    0 > $ - n && (o = $ - n, $ = n), $ + l - n > a && (o = $ - (a + n - l), $ = a + n - l)
                }

                function i(n, i) {
                    s.offset.top - e(t).scrollTop() - c - N - 12 < 0 && i.indexOf("top") > -1 && (D = n), s.offset.top + s.dimension.height + c + 12 + N > e(t).scrollTop() + e(t).height() && i.indexOf("bottom") > -1 && (D = n, A = s.offset.top - c - N - 12)
                }
                var r = this;
                if (0 !== e("body").find(r.$tooltip).length) {
                    r.$tooltip.css("width", ""), r.elProxyPosition = r._repositionInfo(r.$elProxy);
                    var o = null,
                        a = e(t).width(),
                        s = r.elProxyPosition,
                        l = r.$tooltip.outerWidth(!1),
                        c = (r.$tooltip.innerWidth() + 1, r.$tooltip.outerHeight(!1));
                    if (r.$elProxy.is("area")) {
                        var u = r.$elProxy.attr("shape"),
                            d = r.$elProxy.parent().attr("name"),
                            f = e('img[usemap="#' + d + '"]'),
                            h = f.offset().left,
                            p = f.offset().top,
                            m = void 0 !== r.$elProxy.attr("coords") ? r.$elProxy.attr("coords").split(",") : void 0;
                        if ("circle" == u) {
                            var g = parseInt(m[0]),
                                v = parseInt(m[1]),
                                y = parseInt(m[2]);
                            s.dimension.height = 2 * y, s.dimension.width = 2 * y, s.offset.top = p + v - y, s.offset.left = h + g - y
                        } else if ("rect" == u) {
                            var g = parseInt(m[0]),
                                v = parseInt(m[1]),
                                b = parseInt(m[2]),
                                x = parseInt(m[3]);
                            s.dimension.height = x - v, s.dimension.width = b - g, s.offset.top = p + v, s.offset.left = h + g
                        } else if ("poly" == u) {
                            for (var w = 0, _ = 0, k = 0, C = 0, T = "even", E = 0; E < m.length; E++) {
                                var S = parseInt(m[E]);
                                "even" == T ? (S > k && (k = S, 0 === E && (w = k)), w > S && (w = S), T = "odd") : (S > C && (C = S, 1 == E && (_ = C)), _ > S && (_ = S), T = "even")
                            }
                            s.dimension.height = C - _, s.dimension.width = k - w, s.offset.top = p + _, s.offset.left = h + w
                        } else s.dimension.height = f.outerHeight(!1), s.dimension.width = f.outerWidth(!1), s.offset.top = p, s.offset.left = h
                    }
                    var $ = 0,
                        j = 0,
                        A = 0,
                        N = parseInt(r.options.offsetY),
                        F = parseInt(r.options.offsetX),
                        D = r.options.position;
                    if ("top" == D) {
                        var P = s.offset.left + l - (s.offset.left + s.dimension.width);
                        $ = s.offset.left + F - P / 2, A = s.offset.top - c - N - 12, n(), i("bottom", "top")
                    }
                    if ("top-left" == D && ($ = s.offset.left + F, A = s.offset.top - c - N - 12, n(), i("bottom-left", "top-left")), "top-right" == D && ($ = s.offset.left + s.dimension.width + F - l, A = s.offset.top - c - N - 12, n(), i("bottom-right", "top-right")), "bottom" == D) {
                        var P = s.offset.left + l - (s.offset.left + s.dimension.width);
                        $ = s.offset.left - P / 2 + F, A = s.offset.top + s.dimension.height + N + 12, n(), i("top", "bottom")
                    }
                    if ("bottom-left" == D && ($ = s.offset.left + F, A = s.offset.top + s.dimension.height + N + 12, n(), i("top-left", "bottom-left")), "bottom-right" == D && ($ = s.offset.left + s.dimension.width + F - l, A = s.offset.top + s.dimension.height + N + 12, n(), i("top-right", "bottom-right")), "left" == D) {
                        $ = s.offset.left - F - l - 12, j = s.offset.left + F + s.dimension.width + 12;
                        var O = s.offset.top + c - (s.offset.top + s.dimension.height);
                        if (A = s.offset.top - O / 2 - N, 0 > $ && j + l > a) {
                            var M = 2 * parseFloat(r.$tooltip.css("border-width")),
                                I = l + $ - M;
                            r.$tooltip.css("width", I + "px"), c = r.$tooltip.outerHeight(!1), $ = s.offset.left - F - I - 12 - M, O = s.offset.top + c - (s.offset.top + s.dimension.height), A = s.offset.top - O / 2 - N
                        } else 0 > $ && ($ = s.offset.left + F + s.dimension.width + 12, o = "left")
                    }
                    if ("right" == D) {
                        $ = s.offset.left + F + s.dimension.width + 12, j = s.offset.left - F - l - 12;
                        var O = s.offset.top + c - (s.offset.top + s.dimension.height);
                        if (A = s.offset.top - O / 2 - N, $ + l > a && 0 > j) {
                            var M = 2 * parseFloat(r.$tooltip.css("border-width")),
                                I = a - $ - M;
                            r.$tooltip.css("width", I + "px"), c = r.$tooltip.outerHeight(!1), O = s.offset.top + c - (s.offset.top + s.dimension.height), A = s.offset.top - O / 2 - N
                        } else $ + l > a && ($ = s.offset.left - F - l - 12, o = "right")
                    }
                    if (r.options.arrow) {
                        var L = "tooltipster-arrow-" + D;
                        if (r.options.arrowColor.length < 1) var H = r.$tooltip.css("background-color");
                        else var H = r.options.arrowColor;
                        if (o ? "left" == o ? (L = "tooltipster-arrow-right", o = "") : "right" == o ? (L = "tooltipster-arrow-left", o = "") : o = "left:" + Math.round(o) + "px;" : o = "", "top" == D || "top-left" == D || "top-right" == D) var R = parseFloat(r.$tooltip.css("border-bottom-width")),
                            q = r.$tooltip.css("border-bottom-color");
                        else if ("bottom" == D || "bottom-left" == D || "bottom-right" == D) var R = parseFloat(r.$tooltip.css("border-top-width")),
                            q = r.$tooltip.css("border-top-color");
                        else if ("left" == D) var R = parseFloat(r.$tooltip.css("border-right-width")),
                            q = r.$tooltip.css("border-right-color");
                        else if ("right" == D) var R = parseFloat(r.$tooltip.css("border-left-width")),
                            q = r.$tooltip.css("border-left-color");
                        else var R = parseFloat(r.$tooltip.css("border-bottom-width")),
                            q = r.$tooltip.css("border-bottom-color");
                        R > 1 && R++;
                        var B = "";
                        if (0 !== R) {
                            var z = "",
                                U = "border-color: " + q + ";"; - 1 !== L.indexOf("bottom") ? z = "margin-top: -" + Math.round(R) + "px;" : -1 !== L.indexOf("top") ? z = "margin-bottom: -" + Math.round(R) + "px;" : -1 !== L.indexOf("left") ? z = "margin-right: -" + Math.round(R) + "px;" : -1 !== L.indexOf("right") && (z = "margin-left: -" + Math.round(R) + "px;"), B = '<span class="tooltipster-arrow-border" style="' + z + " " + U + ';"></span>'
                        }
                        r.$tooltip.find(".tooltipster-arrow").remove();
                        var W = '<div class="' + L + ' tooltipster-arrow" style="' + o + '">' + B + '<span style="border-color:' + H + ';"></span></div>';
                        r.$tooltip.append(W)
                    }
                    r.$tooltip.css({
                        top: Math.round(A) + "px",
                        left: Math.round($) + "px"
                    })
                }
                return r
            },
            enable: function() {
                return this.enabled = !0, this
            },
            disable: function() {
                return this.hide(), this.enabled = !1, this
            },
            destroy: function() {
                var t = this;
                t.hide(), t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(), t.$el.removeData(t.namespace).off("." + t.namespace);
                var n = t.$el.data("tooltipster-ns");
                if (1 === n.length) {
                    var i = null;
                    "previous" === t.options.restoration ? i = t.$el.data("tooltipster-initialTitle") : "current" === t.options.restoration && (i = "string" == typeof t.Content ? t.Content : e("<div></div>").append(t.Content).html()), i && t.$el.attr("title", i), t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
                } else n = e.grep(n, function(e, n) {
                    return e !== t.namespace
                }), t.$el.data("tooltipster-ns", n);
                return t
            },
            elementIcon: function() {
                return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : void 0
            },
            elementTooltip: function() {
                return this.$tooltip ? this.$tooltip[0] : void 0
            },
            option: function(e, t) {
                return "undefined" == typeof t ? this.options[e] : (this.options[e] = t, this)
            },
            status: function() {
                return this.Status
            }
        }, e.fn[s] = function() {
            var t = arguments;
            if (0 === this.length) {
                if ("string" == typeof t[0]) {
                    var n = !0;
                    switch (t[0]) {
                        case "setDefaults":
                            e.extend(l, t[1]);
                            break;
                        default:
                            n = !1
                    }
                    return n ? !0 : this
                }
                return this
            }
            if ("string" == typeof t[0]) {
                var r = "#*$~&";
                return this.each(function() {
                    var n = e(this).data("tooltipster-ns"),
                        i = n ? e(this).data(n[0]) : null;
                    if (!i) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
                    if ("function" != typeof i[t[0]]) throw new Error('Unknown method .tooltipster("' + t[0] + '")');
                    var o = i[t[0]](t[1], t[2]);
                    return o !== i ? (r = o, !1) : void 0
                }), "#*$~&" !== r ? r : this
            }
            var o = [],
                a = t[0] && "undefined" != typeof t[0].multiple,
                s = a && t[0].multiple || !a && l.multiple,
                c = t[0] && "undefined" != typeof t[0].debug,
                u = c && t[0].debug || !c && l.debug;
            return this.each(function() {
                var n = !1,
                    r = e(this).data("tooltipster-ns"),
                    a = null;
                r ? s ? n = !0 : u && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : n = !0, n && (a = new i(this, t[0]), r || (r = []), r.push(a.namespace), e(this).data("tooltipster-ns", r), e(this).data(a.namespace, a)), o.push(a)
            }), s ? o : this
        };
        var c = !!("ontouchstart" in t),
            u = !1;
        e("body").one("mousemove", function() {
            u = !0
        })
    }(jQuery, window, document),
    function(e) {
        e.fn.niceSelect = function() {
            this.hide(), this.each(function() {
                var t = e(this);
                if (!t.next().hasClass("nice-select")) {
                    t.after('<div class="nice-select' + (" " + t.attr("class") || "") + (t.attr("disabled") ? " disabled" : '" tabindex="0') + '"><span class="current"></span><ul class="list"></ul></div>');
                    var n = t.next(),
                        i = t.find("option"),
                        r = t.find("option:selected");
                    n.find(".current").html(r.data("display") || r.text()), i.each(function() {
                        var t = e(this).data("display");
                        n.find("ul").append('<li class="option' + (e(this).is(":selected") ? " selected" : "") + (e(this).is(":disabled") ? " disabled" : "") + '" data-value="' + e(this).val() + '"' + (t ? ' data-display="' + t : "") + '">' + e(this).text() + "</li>")
                    })
                }
            }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t) {
                var n = e(this);
                e(".nice-select").not(n).removeClass("open"), n.toggleClass("open"), n.hasClass("open") ? (n.find(".option"), n.find(".focus").removeClass("focus"), n.find(".selected").addClass("focus")) : n.focus()
            }), e(document).on("click.nice_select", function(t) {
                0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
            }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
                var n = e(this),
                    i = n.closest(".nice-select");
                i.find(".selected").removeClass("selected"), n.addClass("selected");
                var r = n.data("display") || n.text();
                i.find(".current").text(r), i.prev("select").val(n.data("value")).trigger("change")
            }), e(document).on("keydown.nice_select", ".nice-select", function(t) {
                var n = e(this),
                    i = e(n.find(".focus") || n.find(".list .option.selected"));
                if (32 == t.keyCode || 13 == t.keyCode) return n.hasClass("open") ? i.trigger("click") : n.trigger("click"), !1;
                if (40 == t.keyCode) {
                    if (n.hasClass("open")) {
                        var r = i.nextAll(".option:not(.disabled)").first();
                        r.length > 0 && (n.find(".focus").removeClass("focus"), r.addClass("focus"))
                    } else n.trigger("click");
                    return !1
                }
                if (38 == t.keyCode) {
                    if (n.hasClass("open")) {
                        var o = i.prevAll(".option:not(.disabled)").first();
                        o.length > 0 && (n.find(".focus").removeClass("focus"), o.addClass("focus"))
                    } else n.trigger("click");
                    return !1
                }
                if (27 == t.keyCode) n.hasClass("open") && n.trigger("click");
                else if (9 == t.keyCode && n.hasClass("open")) return !1
            });
            var t = document.createElement("a").style;
            t.cssText = "pointer-events:auto", "auto" !== t.pointerEvents && e("html").addClass("no-csspointerevents")
        }
    }(jQuery),
    function(e, t) {
        "use strict";
        var n = e.App = {
            fn: {},
            events: {},
            settings: {}
        };
        n.settings = {
            sm: 480,
            md: 767,
            lg: 1024,
            xlg: 1364
        }, n.util = {
            width: function() {
                return e.innerWidth || $(e).width()
            },
            y: function() {
                return e.pageYOffset !== t ? e.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
            },
            emailRegexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }, n.environment = {
            production: !0,
            staging: !1,
            development: !1
        }, n.query = function(t) {
            return "retina" === t ? e.devicePixelRatio > 1 : n.util.width() <= n.settings[t]
        }
    }(this),
    function(e, t, n, i) {
        "use strict";
        var r = t.App;
        r.callbacks = {}, r.callbacks.elementLoaded = function() {
            e('[data-callback="elementLoaded"]').parent().addClass("element-loaded")
        }
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        var r = t.App;
        r.events.resize = [];
        var o, a = 500;
        e(t).on("resize.app", function() {
            t.clearTimeout(o), o = t.setTimeout(function() {
                e.each(r.events.resize, function(n, i) {
                    i(e(t).outerWidth(), e(t).outerHeight())
                })
            }, a)
        })
    }(this.jQuery, this, this.document),
    function(e, t, n) {
        "use strict";

        function i() {
            var e = void 0 !== t.pageYOffset ? t.pageYOffset : (n.documentElement || n.body.parentNode || n.body).scrollTop;
            o.recalculateAll(), o.scrollCheck(e)
        }
        var r = function(e, t, n) {
                var i;
                return function() {
                    var r = this,
                        o = arguments,
                        a = function() {
                            i = null, n || e.apply(r, o)
                        },
                        s = n && !i;
                    clearTimeout(i), i = setTimeout(a, t), s && e.apply(r, o)
                }
            },
            o = {
                bindings: {},
                counter: 0
            };
        ! function(e) {
            function i(e) {
                return parseInt(e, 10) / 100
            }
            var r = 0;
            e.add = function(t, n, i, r) {
                void 0 === i && (i = "25%"), void 0 === r && (r = !1), e.bindings[e.counter] = {
                    el: t,
                    fn: n,
                    visible: i,
                    remove: r
                }, e.refreshScrollInfo(e.counter), e.counter += 1
            }, e.remove = function(t) {
                delete e.bindings[t]
            }, e.refreshScrollInfo = function(t) {
                var n = e.bindings[t];
                n.height = n.el.outerHeight(), n.top = n.el.offset().top, "string" == typeof n.visible ? n.visiblePixels = n.height * i(n.visible) : n.visiblePixels = n.visible, n.scrolledToFromBottomPoint = Math.floor(n.top + n.visiblePixels), n.scrolledToFromTopPoint = Math.floor(n.top + n.height - n.visiblePixels)
            }, e.recalculateAll = function() {
                e.recalculateBrowserHeight();
                for (var t in e.bindings) e.refreshScrollInfo(t)
            }, e.recalculateBrowserHeight = function() {
                r = t.innerHeight || n.documentElement.clientHeight || n.getElementsByTagName("body")[0].clientHeight
            }, e.inView = function(e, t) {
                var n = e.top < t + .2 * r && e.top + e.visiblePixels > t + .8 * r,
                    i = t + r > e.scrolledToFromBottomPoint,
                    o = t < e.scrolledToFromTopPoint;
                return n || o && i
            }, e.scrollCheck = function(t) {
                var n;
                for (var i in e.bindings) n = e.bindings[i], e.inView(n, t) && (n.fn(n.el), n.remove && e.remove(i))
            }
        }(o);
        var a = function(t, n, i) {
            t = e(t), 0 !== t.length && o.add(t, n, i)
        };
        e(t).on("resize", r(function() {
            o.recalculateAll()
        }, 250)), e(n).on("ready", function() {
            o.recalculateBrowserHeight(), i()
        }), e(t).on("load", i).on("scroll", r(i, 50)), t.App.fn.inView = a
    }(jQuery, window, document),
    function(e, t, n) {
        "use strict";

        function i(t) {
            var n = e.Deferred();
            return e("<img>").attr({
                src: t
            }).load(n.resolve), n
        }

        function r(n) {
            var i = e.Deferred();
            return t.setInterval(i.resolve, n), i
        }

        function o(t) {
            if (!t.data("loaded") && t.data("gif")) {
                t.data("loaded", !0);
                var n = t.siblings("img.gif-placeholder").attr("src"),
                    o = t.data("delay") || 500,
                    a = i(n),
                    s = r(o);
                return e.when(a, s).then(function() {
                    t.attr("src", n)
                })
            }
        }
        var a = t.App;
        e("[data-gif]").each(function() {
            var t = e(this);
            a.fn.inView(this, function() {
                o(t)
            }, "100%")
        }), a.fn.gif = o
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        var r, o, a, s = t.App,
            l = s.fn.video = {},
            c = s.query("md");
        e("video").on("ended", function() {
            this.setAttribute("data:hasPlayed", "true")
        }), l.play = function(t) {
            e(t).length && ("undefined" != typeof r && "function" == typeof r.get && "function" == typeof r.get(0).pause && r.each(function(e) {
                this.pause()
            }), r = e(t).get(0), a = r.hasAttribute("loop"), o = "true" === r.getAttribute("data:hasPlayed"), c || !a && o || (r = e(t), r.each(function(e) {
                this.play()
            })))
        }, l.load = function() {
            s.query("md") || e("video source[data-src]").each(function() {
                var t = e(this),
                    n = t.data("src"),
                    i = t.parent().data("poster"),
                    r = t.parent().attr("retina"),
                    o = t.attr("type");
                s.query("retina") && r && (n = r), "video/mp4" !== o || c || t.parent().attr("src", n).attr("poster", i).removeAttr("data-poster"), t.remove()
            })
        }, l.load(), s.events.resize.push(l.load), e('video[data-autoplay="this"]').each(function() {
            var t = e(this).data("autoplayShownAmount");
            t === i && (t = "100%"), s.fn.inView(this, function(e) {
                l.play(e)
            }, t)
        })
    }(this.jQuery, this, this.document),
    function(e, t) {
        "use strict";
        var n = e.App;
        t.fn.lazyLoad = function() {
            function i(e, t) {
                return -1 !== t.indexOf("placehold.it") ? e.data(t) : e.data(t + s) || e.data(t)
            }

            function r(e, i) {
                e && n.callbacks && n.callbacks[i] && "function" == typeof n.callbacks[i] && t("<img/>").attr("src", e).load(n.callbacks[i])
            }

            function o() {
                a.each(function() {
                    var e = t(this),
                        o = i(e, "large");
                    if (n.query("md") && (o = i(e, "medium")), n.query("sm") && (o = i(e, "small") || i(e, "medium")), o) {
                        var a = o.split("#");
                        r(a[0], e.data("callback")), a[1] ? (e.attr("src", a[0]), e.attr("width", a[1])) : -1 !== a[0].indexOf("-2x") ? t("<img/>").attr("src", a[0]).load(function() {
                            e.attr("width", Math.floor(this.width / 2)), e.attr("src", a[0])
                        }) : e.attr("src", a[0])
                    }
                })
            }
            var a = this,
                s = n.query("retina") ? "2x" : "";
            return t(e).on("resize.lazy", o), o(), a
        }, t('img[data-lazy-load="true"]').lazyLoad()
    }(this, this.jQuery),
    function(e, t, n, i) {
        "use strict";

        function r(n) {
            var i = e.Deferred();
            return t.setTimeout(i.resolve, n), i
        }
        var o, a = t.App;
        a.fn.animations = function() {
            function n(e, t) {
                var n = e.closest(".container").length ? e.closest(".container") : e.closest('[data-carousel="wrap"]'),
                    i = n.find(".active[data-show]"),
                    r = i.parent()[t]().find("[data-show]");
                r.length ? r.trigger("click.app") : "prev" === t ? i.parent().siblings(":last").find("[data-show]").trigger("click.app") : "next" === t && i.parent().siblings(":first").find("[data-show]").trigger("click.app")
            }
            e("[data-show], [data-control]").on("click.user", function() {
                o && t.clearInterval(o)
            }), e("[data-show]").on("click.app", function(n) {
                n.preventDefault();
                var i = e(this),
                    o = i.closest(".container").length ? i.closest(".container") : i.closest('[data-carousel="wrap"]'),
                    s = o.find("[data-item]"),
                    l = o.find("[data-show]"),
                    c = i.data("show"),
                    u = s.filter('[data-item="' + c + '"]');
                l.removeClass("active"), i.addClass("active"), u.hasClass("u__hidden") && (s.addClass("u__fading-out"), r(200).then(function() {
                    return s.addClass("u__hidden"), u.removeClass("u__hidden"), a.wisUtils.pauseLatest(), r(10)
                }).then(function() {
                    u.addClass("u__fading-in");
                    var e = u.find(".wistia__video");
                    return e.length && a.wisUtils.play(new a.wisUtils.vidObj(e)), r(200)
                }).then(function() {
                    u.removeClass("u__fading-in u__fading-out"), a.fn.video.play(u.find("video")), e(t).trigger("scroll")
                }))
            }), e("[data-item]").swipeEvents().on("swipeLeft", function() {
                n(e(this), "next")
            }).on("swipeRight", function() {
                n(e(this), "prev")
            }), e("[data-control]").on("click.app", function(t) {
                t.preventDefault();
                var i = e(this),
                    r = i.data("control");
                n(i, r)
            });
            var i = e("[data-carousel-init]");
            if (i.length) {
                var s = i.data("carouselInit");
                o = t.setInterval(function() {
                    e("[data-carousel]:hover").length || e('[data-control="next"]').trigger("click.app")
                }, s)
            }
            e("[data-toggle]").on("click.app", function(t) {
                t.preventDefault();
                var n = e(this);
                e('[data-toggle-wrap="' + n.data("toggle") + '"]').toggleClass("u__hidden"), n.toggleClass("toggled")
            })
        }, a.fn.animations()
    }(this.jQuery, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.cta = {}, a.cta.EmailAddressValidator = t.Model.extend({
            validateEmail: function(e) {
                return a.util.emailRegexp.test(e)
            },
            validate: function(e, t) {
                return this.validateEmail(e.email) ? void 0 : {
                    invalid_email: !0
                }
            }
        }), a.cta.CtaView = t.View.extend({
            events: {
                submit: "validateEmailAddressValidatorAndRedirect"
            },
            initialize: function() {
                this.$submit = e('[type="submit"]', this.$el), this.$email = e('[data-signup="email"]', this.$el), this.$errors = e("[data-errors]", this.$el), this.$form = this.$el.hasClass("cta__form") ? this.$el : e(".cta__form", this.$el)
            },
            isLoading: function() {
                return this.$submit.hasClass("loading")
            },
            validateEmailAddressValidatorAndRedirect: function(e) {
                e.preventDefault(), this.isLoading() || (this.$form.removeClass("error"), this.$submit.addClass("loading"), this.$email.removeClass("error"), this.$errors.html(""), this.onboarding_email_address = new a.cta.EmailAddressValidator({
                    email: this.$email.val()
                }), this.onboarding_email_address.isValid() ? this.successHandler() : this.errorHandler())
            },
            errorHandler: function() {
                i.setTimeout(function() {
                    this.$form.addClass("error")
                }.bind(this), 0), this.$email.focus().addClass("error"), this.$submit.removeClass("loading")
            },
            outputErrors: function(t) {
                var n;
                try {
                    n = t.responseText ? i.JSON.parse(t.responseText).errors : {}
                } catch (r) {
                    n = {
                        base: ["We could not process your request. Please try again."]
                    }
                }
                if (this.$errors.html(""), n)
                    for (var r in n) e('input[name="' + r + '"]', this.$el).addClass("error"), this.$errors.append('<p class="info__error">' + n[r].join('</p><p class="info__error">') + "</p>");
                this.$submit.removeClass("loading")
            },
            transition: function(t, n, i) {
                "function" != typeof i && (i = o), e('[data-signup="' + t + '"]', this.$el).stop().fadeOut(400, function() {
                    e('[data-signup="' + n + '"]', this.$el).stop().fadeIn(400, i)
                }.bind(this))
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.cta.OnboardingView = a.cta.CtaView.extend({
            successHandler: function() {
                var e = this.$email.val();
                return i.IntercomOutageMode && i.submitOnboardEmailDuringOutage ? i.submitOnboardEmailDuringOutage(e) : void(a.query("md") ? this.sendEmailForMobile(e) : this.recordEmailSubmission(e, function(t) {
                    this.prepareRedirect(e, t)
                }.bind(this)))
            },
            prepareRedirect: function(t, r) {
                var a = "https://app.intercom.io/admins/sign_up",
                    s = {
                        email: t,
                        product: this.$el.data("package"),
                        plan: this.$el.data("plan"),
                        user_count: i.slider_user_count,
                        email_submission_id: r
                    };
                n.each(s, function(e, t) {
                    (e === o || "" === e) && delete s[t]
                });
                var l = e.param(s);
                this.redirect(a + "?" + l)
            },
            redirect: function(e) {
                i.location.href = e
            },
            sendEmail: function(t) {
                e.ajax({
                    url: "/mobile-signup",
                    type: "POST",
                    data: {
                        email: t
                    }
                }).then(function() {
                    this.transition("inputs", "success"), e.ajax({
                        url: "https://app.intercom.io/marketing_onboarding/onboarding_email_addresses",
                        type: "POST",
                        data: {
                            email: t
                        }
                    })
                }.bind(this), this.errorHandler.bind(this)), i.ga("send", "event", "button", "click", "open_installer_mobile")
            },
            recordEmailSubmission: function(e, t) {
                this.fireThirdPartyEvents(), setTimeout(function() {
                    if (i.IntercomGTM) {
                        var n = !0;
                        return i.IntercomGTM.recordEmailSubmission(e, n, i.IntercomGTM.pageviewId, t)
                    }
                    return t()
                }, 1)
            },
            sendEmailForMobile: function(e) {
                i.IntercomGTM ? this.recordEmailSubmission(e, this.sendEmail(e)) : (this.fireThirdPartyEvents(), this.sendEmail(e))
            },
            fireThirdPartyEvents: function() {
                if (i.App.environment.production) {
                    i.fbq && i.fbq("track", "InitiateCheckout");
                    var e = new Image(1, 1);
                    e.src = "//www.googleadservices.com/pagead/conversion/967943485/?label=UutXCOvj9WQQvcrGzQM&amp;guid=ON&amp;script=0"
                }
            }
        }), a.cta.OnboardingsView = t.View.extend({
            el: "body",
            initialize: function() {
                this.bindOnboardingEmailAddressForms()
            },
            bindOnboardingEmailAddressForms: function() {
                this.onboarding_email_address_form_views = [], n.each(e('[data-signup="form"]'), function(t) {
                    var n = new a.cta.OnboardingView({
                        el: e(t)
                    });
                    this.onboarding_email_address_form_views.push(n)
                }.bind(this))
            }
        }), e(function() {
            a.cta.OnboardingInit = new a.cta.OnboardingsView
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.Book = {}, a.Book.Instances = {}, a.Book.CSBook = a.cta.CtaView.extend({
            successHandler: function() {
                var e = new this.model({
                    email: this.$email.val()
                }).save();
                i.IntercomGTM && i.IntercomGTM.recordEmailSubmission(this.$email.val()), e.done(this.transition.bind(this, "initial", "success")).error(this.outputErrors.bind(this))
            },
            model: t.Model.extend({
                urlRoot: "/books/customer-support-email",
                defaults: {
                    email: ""
                }
            })
        }), e(function() {
            var t = e('[data-book="customer-support"]');
            t.length && (a.Book.Instances.CS = new a.Book.CSBook({
                el: t
            }))
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App;
        a.Book.JTBDBook = a.cta.CtaView.extend({
            successHandler: function() {
                var t = new this.model({
                    email: this.$email.val()
                }).save();
                a.Book.email = this.$email.val(), i.ga("send", "event", "button", "click", "jtbd_book-original-email"), i.IntercomGTM && i.IntercomGTM.recordEmailSubmission(a.Book.email), t.done(function() {
                    this.transition("initial", "success"), e("[data-book-init]", this.$el).on("click.book", function(t) {
                        var n = e(t.currentTarget),
                            i = n.data("bookInit");
                        e.featherlight(e('[data-book="' + i + '"]').html(), {
                            filter: null,
                            type: "html",
                            afterOpen: function() {
                                a.Book.Instances[i] = new a.Book[i]({
                                    el: e(".featherlight-inner")
                                })
                            }.bind(this)
                        })
                    }.bind(this))
                }.bind(this)).error(this.outputErrors.bind(this))
            },
            model: t.Model.extend({
                urlRoot: "/books/jtbd-save-user",
                defaults: {
                    email: ""
                }
            })
        }), e(function() {
            var t = e('[data-book="jtbd"]');
            t.length && (a.Book.Instances.JTBD = new a.Book.JTBDBook({
                el: t
            }))
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App,
            s = a.Book,
            l = i.validator;
        s.Base = t.View.extend({
            events: {
                submit: "handleSubmit"
            },
            validateInput: function(t) {
                var n = !1,
                    i = t.data("validate").split(","),
                    r = t.data("notEqual");
                return i.forEach(function(i) {
                    var o = i.split(":"),
                        a = o[0],
                        s = [t.val()];
                    s.push(o[1]), l["is" + a].apply(null, s) ? t.removeClass("error") : (t.addClass("error"), n = !0), r && l.equals(t.val(), e('[name="' + r + '"]', this.$el).val()) && (t.addClass("error"), n = !0)
                }.bind(this)), n
            },
            validateAll: function() {
                var t = !1;
                this.liveEdit(), e("input", this.$el).each(function(n, i) {
                    this.validateInput(e(i)) && (t = !0)
                }.bind(this)), this.$el.toggleClass("error", t)
            },
            isValidForm: function() {
                return !this.$el.hasClass("error")
            },
            liveEdit: function() {
                this.live !== !0 && (this.live = !0, e("input", this.$el).on("keyup.book", function(t) {
                    this.validateInput(e(t.currentTarget))
                }.bind(this)))
            },
            saveData: function(t, n) {
                return new t(n).save({
                    beforeSend: function(t) {
                        t.setRequestHeader("X-CSRF-Token", e('meta[name="csrf-token"]').attr("content"))
                    }
                })
            },
            serialize: function() {
                var e = {};
                return this.$el.serializeArray().forEach(function(t) {
                    e[t.name] = t.value
                }), e
            },
            success: function() {
                e('[type="submit"]', this.$el).removeClass("loading"), e("[data-success]", this.$el).removeClass("u__hidden"), e("[data-content]", this.$el).addClass("u__hidden"), this.clearErrors(), this.tag(), i.App.fn.popups()
            },
            clearErrors: function() {
                e("[data-errors]", this.$el).html("")
            },
            error: function(t) {
                e('[type="submit"]').removeClass("loading"), this.clearErrors();
                var n;
                try {
                    n = t.responseText ? i.JSON.parse(t.responseText).errors : {}
                } catch (r) {
                    n = {
                        base: ["We could not process your request for the book. Please try again."]
                    }
                }
                if (e("[data-errors]", this.$el).html(""), n)
                    for (var r in n) e('input[name="' + r + '"]', this.$el).addClass("error"), e("[data-errors]", this.$el).append('<p class="info__error">' + n[r].join('</p><p class="info__error">') + "</p>")
            },
            tag: function() {
                var e = this.$el.data("tag");
                e && i.ga && i.ga("book.send", "event", "button", "click", e)
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App,
            s = a.Book;
        s.Friends = s.Base.extend({
            initialize: function() {
                e("[data-success]", this.$el).addClass("u__hidden"), e("[data-content]", this.$el).removeClass("u__hidden")
            },
            handleSubmit: function(n) {
                if (n.preventDefault(), this.validateAll(), i.ga("send", "event", "button", "click", "jtbd_book-submission-share"), this.isValidForm()) {
                    e('[type="submit"]', this.$el).addClass("loading");
                    var r = this.serialize();
                    r.email = a.Book.email, r.type = "friend", this.saveData(t.Model.extend({
                        urlRoot: this.$el.data("model")
                    }), r).done(this.success.bind(this)).error(this.error.bind(this))
                }
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = i.App,
            s = a.Book;
        s.Charity = s.Base.extend({
            initialize: function() {
                var t = this.$el;
                a.fn.tooltips(t), e("[data-success]", t).addClass("u__hidden"), e("[data-content]", t).removeClass("u__hidden"), e('[name="credit-card"]', t).mask("0000 0000 0000 0000"), e('[name="cvc"]', t).mask("0000"), e('[name="expiry-month"]', t).mask("00"), e('[name="expiry-year"]', t).mask("00"), e('[name="credit-card"]', t).on("keyup", function() {
                    19 === e(this).val().length && e('[name="expiry-month"]', t).trigger("focus")
                }), e('[name="expiry-month"]', t).on("keyup", function() {
                    2 === e(this).val().length && e('[name="expiry-year"]', t).trigger("focus")
                }), e('[name="expiry-year"]', t).on("keyup", function() {
                    2 === e(this).val().length && e('[name="cvc"]', t).trigger("focus")
                })
            },
            getToken: function(t) {
                i.Stripe.setPublishableKey(i.stripeApiKey), i.Stripe.card.createToken({
                    number: e('[name="credit-card"]', this.$el).val(),
                    cvc: e('[name="cvc"]', this.$el).val(),
                    exp_month: e('[name="expiry-month"]', this.$el).val(),
                    exp_year: "20" + e('[name="expiry-year"]', this.$el).val()
                }, t)
            },
            handleSubmit: function(n) {
                if (n.preventDefault(), this.validateAll(), i.ga("send", "event", "button", "click", "jtbd_book-submission-charity"), this.isValidForm()) {
                    e('[type="submit"]', this.$el).addClass("loading");
                    var r = {
                        email: a.Book.email,
                        type: "charity"
                    };
                    this.getToken(function(n, i) {
                        200 === n ? (r.stripeToken = i.id, this.saveData(t.Model.extend({
                            urlRoot: this.$el.data("model")
                        }), r).done(this.success.bind(this)).error(this.error.bind(this))) : (this.clearErrors(), e('[type="submit"]').removeClass("loading"), e("[data-errors]", this.$el).append('<p class="info__error">' + i.error.message + "</p>"))
                    }.bind(this))
                }
            }
        })
    }(this.jQuery, this.Backbone, this._, this, this.document),
    function(e, t, n) {
        "use strict";
        e('[data-fancybox="video"]').each(function() {
            var t = e(this);
            t.fancybox({
                autosize: !1,
                type: "iframe",
                prevEffect: "none",
                nextEffect: "none",
                padding: 0,
                margin: 0,
                height: t.data("height") || 530,
                width: t.data("width") || 896,
                helpers: {
                    media: {},
                    overlay: {
                        css: {
                            background: "rgba(255, 255, 255, 0.95)"
                        }
                    }
                },
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>'
                }
            })
        })
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        e("[data-blog-config]").each(function() {
            var t = e(this),
                n = t.find("[data-blog-spinner]"),
                i = t.data("blogConfig"),
                r = "",
                o = "";
            e.ajax({
                url: "/blog-posts",
                method: "GET",
                data: i
            }).done(function(i) {
                e.each(i, function(e, t) {
                    o === t.date ? t.date = "" : o = t.date, r += '<div class="f__up f__bold footer__blog-date">' + t.date + "</div>", r += '<div class="footer__link"><a href="' + t.link + '">' + t.title + "</a></div>"
                }), n.addClass("hidden"), t.html(r).removeClass("hidden").removeClass("u__hidden")
            })
        })
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";
        var r = t.App;
        e("[data-visible]").each(function() {
            var t = e(this).data("visible") || "100%";
            r.fn.inView(this, function(t) {
                e(t).addClass("element-visible")
            }, t)
        }), e(".same-height").matchHeight(), r.fn.tooltips = function(n) {
            e('[data-tooltip="trigger"]', n).each(function() {
                var n = e(this);
                n.tooltipster({
                    delay: 0,
                    content: n.html(),
                    contentAsHTML: !0,
                    interactive: !0,
                    interactiveTolerance: 10,
                    maxWidth: "180",
                    positionTracker: !0,
                    position: r.query("md") ? "top" : "left",
                    speed: 0,
                    timer: 0,
                    trigger: t.Modernizr.touch ? "click" : "hover"
                })
            })
        }, r.fn.tooltips(n), e(".select").niceSelect();
        var o;
        if (e("[data-inline-wistia]").each(function() {
                var n = e(this),
                    i = n.data("inlineWistia");
                n.attr("id", "wistia_" + i), o = t.Wistia.embed(i, {
                    videoQuality: "hd-only"
                })
            }), e("[data-play]").on("click.play", function() {
                var n = e(this),
                    i = n.parent(),
                    r = i.find(".design__video-youtube");
                o && o.play && o.play(), r.length && r.attr("src", r.attr("src") + "?autoplay=1"), "wrap" !== e(this).data("play") ? n.addClass("u__hidden") : t.setTimeout(function() {
                    i.find(".design__video-overlay").addClass("u__hidden")
                }, 300), i.find(".design__video-player").removeClass("u__hidden"), n.addClass("design__video-enabled"), n.off("click.play")
            }), e(".language-banner").length) {
            var a = e(".home-banner-link");
            a.on("click", function(e) {
                e.preventDefault(), t.ga("send", "event", "button", "click", "language-banner", a.attr("data-locale")), t.location.assign(a.attr("data-href"))
            })
        }
    }(this.jQuery, this, this.document),
    function(e, t, n, i) {
        "use strict";

        function r() {
            f.length && (c = f.offset().top)
        }

        function o() {
            var t = e('[data-subnav="sticky"]');
            t.length && (m = t.offset().top)
        }
        var a, s, l, c, u = t.App,
            d = e("body"),
            f = e(".nav__primary"),
            h = e(".nav__subnav").length,
            p = e("[data-nav]"),
            m = e("[data-subnavHeight]").attr("data-subnavHeight") || 1e3,
            g = null,
            v = !1,
            y = {
                settings: function() {
                    a = s.data("nav"), p.removeClass("active"), d.attr("data-nav-active", a), u.query("md") && e(".nav__content").css("max-height", "")
                },
                show: function() {
                    d.addClass("nav__open"), s.addClass("active"), u.query("md") && e(".nav__content").css("max-height", t.innerHeight - 60 + "px")
                },
                hide: function() {
                    d.removeClass("nav__open")
                },
                close: function() {
                    t.setTimeout(function() {
                        s.one("click.navigation.close", function() {
                            p.removeClass("active"), y.hide()
                        })
                    }, 500)
                },
                leave: function() {
                    e(".nav__link:not([data-nav]), .nav__cta, .nav__logo").off("mouseover.navigation").on("mouseover.navigation", function(e) {
                        p.removeClass("active"), y.hide(), s.off("click.navigation.close")
                    }), e(".nav__top").off("mouseover.navigation").on("mouseover.navigation", function(n) {
                        l = t.setTimeout(function() {
                            n.pageX < e('[data-nav="products"]').offset().left && (p.removeClass("active"), y.hide(), s.off("click.navigation.close"))
                        }, 400)
                    }), e(".nav__content").off("mouseover.navigation").on("mouseover.navigation", function(e) {
                        t.clearTimeout(l)
                    })
                },
                click: function() {
                    p.on("click.navigation", function() {
                        s = e(this), y.settings(), a === g && d.hasClass("nav__open") ? y.hide() : y.show(), g = a
                    })
                }
            };
        p.on("click.navigation", function(e) {
            e.preventDefault()
        }), t.Modernizr.touch || u.query("md") || "#nav" === t.location.hash ? y.click() : (p.on("mouseover.navigation", function() {
            s = e(this), y.settings(), t.clearTimeout(l), y.close(), y.leave(), y.show(), g = a
        }), e(".nav__bg").on("mouseleave.navigation", function() {
            l = t.setTimeout(function() {
                p.removeClass("active"), y.hide()
            }, 300), s && s.off("click.navigation.close")
        }), e(n).keyup(function(e) {
            27 === e.keyCode && (p.removeClass("active"), y.hide(), s && s.off("click.navigation.close"))
        })), h && e(t).on("scroll", function() {
            d.toggleClass("nav__subnav-active", u.util.y() > m)
        }), o(), e(t).on("load", o), u.events.resize.push(o), d.hasClass("nav__fixed") || d.hasClass("nav__disabled-scroll") || h || (e(t).on("scroll", function(e) {
            var t = u.util.y();
            v && c >= t ? (d.removeClass("nav__fixed"), v = !1) : t > c && (d.addClass("nav__fixed"), v = !0)
        }), r(), e(t).on("load", r), u.events.resize.push(r))
    }(this.jQuery, this, this.document), $(function() {
        "use strict";

        function e() {
            var e = $('[data-active-link="true"]'),
                r = {};
            e.length && (e.each(function() {
                var e = $(this).attr("href").replace(/^\//, ""),
                    t = $(e);
                t.offset() && (r[e] = {
                    $el: $(this),
                    start: window.Math.floor(t.offset().top) - (i + 2),
                    stop: window.Math.floor(t.offset().top + t.outerHeight()) - (i + 2)
                })
            }), t = function(t) {
                e.removeClass("active"), $.each(r, function(i, r) {
                    r.start < t && r.stop > t && (e.removeClass("active"), r.$el.addClass("active"), n.events.activeLinksCb && n.events.activeLinksCb.call(r.$el))
                })
            })
        }
        var t, n = window.App,
            i = 60 + (n.headerOffset || 0);
        $("[data-scroll=true]").on("click", function(e) {
            var t = this.href.split("#")[1],
                n = "#" + t,
                r = $(n);
            r.length && ($("html, body").animate({
                scrollTop: r.offset().top - i
            }, 500, function() {
                window.location.hash = n
            }), e.preventDefault())
        }), window.App.fn.initActiveLinks = e, window.setTimeout(e, 3e3), $(window).on("load", e), n.events.resize.push(e), e(), $(window).on("scroll", function(e) {
            t && t(n.util.y())
        })
    }),
    function(e, t, n) {
        "use strict";

        function i() {
            o.numberCtaEvents(), t.analytics = {}, t.analytics.GTMEventList = [], a.scroll(), a.click()
        }
        t.ga = t.ga || function() {
            (t.ga.q = t.ga.q || []).push(arguments)
        };
        var r = {
                scrollMaxPercent: 0,
                arrScrollTier: [-25, 0],
                scrollTier: 0
            },
            o = {
                gatherData: function(e) {
                    var t = e.data("track").split(",");
                    return e.data("trackCta") && (t[1] += "-" + e.data("trackCta")), t
                },
                numberCtaEvents: function() {
                    e(".cta").each(function(t) {
                        e("[data-track]", e(this)).data("trackCta", t + 1), t += 1
                    })
                },
                findScrollPercent: function() {
                    var i = e(t).scrollTop(),
                        r = e(n).height(),
                        o = e(t).height(),
                        a = i / (r - o);
                    return a = Math.round(100 * a)
                },
                findScrollTier: function() {
                    var e = r.scrollMaxPercent,
                        t = 0;
                    switch (!0) {
                        case e > 25 && 50 >= e:
                            t = 25;
                            break;
                        case e > 50 && 75 >= e:
                            t = 50;
                            break;
                        case e > 75 && 100 >= e:
                            t = 75;
                            break;
                        default:
                            t = 0
                    }
                    return t
                },
                updateScrollPercent: function() {
                    return o.findScrollPercent() > r.scrollMaxPercent ? (r.scrollMaxPercent = o.findScrollPercent(), !0) : !1
                },
                updateScrollTier: function() {
                    return r.scrollMaxPercent > r.arrScrollTier[1] ? (r.arrScrollTier[0] += 25, r.arrScrollTier[1] += 25, r.scrollTier = o.findScrollTier(), !0) : !1
                }
            },
            a = {
                scroll: function() {
                    e(t).scroll(function() {
                        s.pageScroll()
                    })
                },
                click: function() {
                    e("[data-track]").click(function() {
                        var t = o.gatherData(e(this));
                        s.clickEvent(t)
                    }), e("[data-track-gtm]").click(function() {
                        s.gtmEvent(e(this).data("track-gtm"))
                    })
                }
            },
            s = {
                pageScroll: function() {
                    o.updateScrollPercent() && (t.ga("send", "event", "page", "scroll", "percent", r.scrollMaxPercent), o.updateScrollTier() && t.ga("send", "event", "page", "scroll", "tier", r.scrollTier))
                },
                clickEvent: function(e) {
                    t.ga("send", "event", e[0], "click", e[1].trim())
                },
                gtmEvent: function(e) {
                    t.Intercom && t.IntercomGTM && -1 === _.indexOf(t.analytics.GTMEventList, e) && (t.IntercomGTM.recordEvent(e.trim(), t.IntercomGTM.pageviewId), t.analytics.GTMEventList.push(e))
                }
            };
        i()
    }(jQuery, window, document);
var _wq = window._wq || [];
! function(e, t, n, i) {
    "use strict";

    function r(e) {
        this.$node = e, this.wisId = e.data("wistia"), this.$wisNode = e.closest(".wistia_embed"), this.autoplay = e.data("autoplay"), this.playCount = 0, this.loop = e.data("loop"), this.quality = e.data("quality")
    }

    function o() {
        f.collectVids(), f.addVidOptions(), a(), s()
    }

    function a() {
        e("[data-wistia]").length && e("body").append(e("<script/>", {
            src: "//fast.wistia.net/assets/external/E-v1.js"
        }))
    }

    function s() {
        e(".wistia__video-iframe").each(function() {
            var t = e("iframe", this);
            t.data("autoplay") && u.fn.inView(t, l.bind(null, t), "100%")
        })
    }

    function l(e) {
        !t.Wistia || e.data("played") === !0 && e.data("loop") !== !0 || (f.pauseLatest(), c = t.Wistia.api(e.data("wistia")), c.play(), c.bind("end", e.data.bind(e, "played", !0)))
    }
    var c, u = t.App,
        d = [],
        f = {
            collectVids: function() {
                e("[data-wistia]").each(function() {
                    var t = new r(e(this));
                    d.push(t)
                })
            },
            addToEventQueue: function(e, t) {
                var n = {};
                n[e] = t, _wq.push(n)
            },
            addVidOptions: function() {
                for (var e = 0; e < d.length; e++) {
                    var t = d[e];
                    t.autoplay && f.playOnView(t)
                }
            },
            play: function(e) {
                var t = function(t) {
                    c && c.pause(), t.play(), e.playCount += 1, c = t
                };
                (e.loop || e.playCount < 1) && f.addToEventQueue(e.wisId, t)
            },
            pauseLatest: function() {
                c && c.pause()
            },
            playOnView: function(e) {
                u.fn.inView(e.$node, f.play.bind(f, e), "100%")
            },
            vidObj: r
        };
    u.wisUtils = f, o()
}(this.jQuery, this, this.document),
function(e, t, n) {
    "use strict";

    function i() {
        var e = f.width(),
            t = f.height(),
            n = 1.77866;
        t * n > e ? (h.attr("height", t), h.attr("width", t * n), h.css("left", -(t * n - e) / 2)) : (h.attr("height", e / n), h.attr("width", e), h.css("top", -(e / n - t) / 2)), h.addClass("loaded")
    }

    function r() {
        p || s.query("md") || h[0].play()
    }

    function o() {
        s.query("md") || h[0].pause()
    }
    var a, s = t.App;
    if (e('[data-event="init"]').length) {
        e("[data-event-filter]").on("change", function() {
            var t = e('[data-event-filter="location"]').val();
            e("[data-event-location], .events__feed-month").removeClass("u__hidden"), "all" !== t && e('.event__feed-item[data-event-location!="' + t + '"]').addClass("u__hidden"), e(".events__feed-month").each(function() {
                var t = e(this),
                    n = t.text();
                e('[data-event-month="' + n + '"]:visible').length || t.addClass("u__hidden")
            })
        });
        var l = e(t).height(),
            c = e("body");
        e(t).on("scroll", function(e) {
            c.toggleClass("event__scrolling", t.App.util.y() > l / 2)
        });
        var u = t.App.cta.CtaView.extend({
                successHandler: function() {
                    var e = new this.model({
                        email: this.$email.val(),
                        tag: a
                    }).save();
                    e.done(this.transition.bind(this, "inputs", "success")).error(this.outputErrors.bind(this))
                },
                model: t.Backbone.Model.extend({
                    urlRoot: "/insideintercom",
                    defaults: {
                        email: "",
                        tag: ""
                    }
                })
            }),
            d = e('[data-event-layout="inline"]');
        d.length && (a = d.data("eventType"), new u({
            el: d
        })), e('[data-event="open-popup"]').on("click", function(t) {
            t.preventDefault(), a = e(this).data("eventType");
            var n;
            if (e(this).data("popupTarget")) {
                var i = e(this).data("popupTarget");
                n = e("[data-popup=" + i + "]")
            } else n = e(e(this).data("waiting") ? '[data-event="popup-waiting"]' : '[data-event="popup"]');
            e.featherlight(n.html(), {
                filter: null,
                type: "html",
                afterOpen: function() {
                    new u({
                        el: e(".featherlight-inner")
                    })
                }
            })
        });
        var f = e(".events__video"),
            h = e("video", f),
            p = !1;
        h.length && (i(), s.events.resize.push(i), e('[data-events="video-play"]').on("click", function(t) {
            t.preventDefault(), e.featherlight('<div class="events__video-iframe"><iframe src="https://www.youtube.com/embed/WD1u8rTbQMA?autoplay=1&hd=1&rel=0" frameborder="0" allowfullscreen></iframe></div>', {
                filter: null,
                type: "html",
                afterOpen: function() {
                    p = !0, o()
                },
                afterClose: function() {
                    p = !1, r()
                }
            })
        }), e(t).load(r), t.setTimeout(r, 3e3))
    }
}(this.jQuery, this, this.document),
function(e, t, n) {
    "use strict";
    if (e("body.redesign-about").length) {
        var i = function() {
                a.leadershipPopup(), a.slideChange()
            },
            r = {
                slideChange: function(e) {
                    var t = e.data("slideChange"),
                        n = e.closest('[data-carousel="wrap"]'),
                        i = n.find(".active[data-show]"),
                        r = this.getNextSlide(i, t);
                    r.trigger("click.app")
                },
                getNextSlide: function(e, t) {
                    var n = e.index() + 1,
                        i = e.siblings(":nth-child(" + (n + 1) + ")"),
                        r = e.siblings(":nth-child(" + (n - 1) + ")");
                    return e.is(":last-child") && (i = e.siblings(":first-child")), e.is(":first-child") && (r = e.siblings(":last-child")), "next" === t ? i : r
                }
            },
            o = {
                openLeadershipPopup: function(n) {
                    var i = e('[data-popup="leadership"]'),
                        r = n.data("slideTarget");
                    e.featherlight(i.html(), {
                        filter: null,
                        type: "html",
                        afterOpen: function() {
                            t.App.fn.animations(), a.slideChange(), o.goToSlide(r)
                        }
                    })
                },
                goToSlide: function(t) {
                    var n = e(".featherlight-content");
                    e('.about__leadership-slide[data-item="' + t + '"]', n).removeClass("u__hidden").addClass("active"), e('.about__leadership-slider-dot[data-show="' + t + '"]', n).addClass("active")
                }
            },
            a = {
                leadershipPopup: function() {
                    e('[data-event="open-popup"]').on("click", function(t) {
                        t.preventDefault(), o.openLeadershipPopup(e(this))
                    })
                },
                slideChange: function() {
                    e("[data-slide-change]").on("click", function(t) {
                        t.preventDefault(), r.slideChange(e(this))
                    })
                }
            };
        i()
    }
}(this.jQuery, this, this.document), $(window).load(function() {
        "use strict";

        function e(e, t, n) {
            $(e).removeClass("active"), window.setTimeout(function() {
                $(e).addClass("u__hidden"), $(t).removeClass("u__hidden"), window.setTimeout(function() {
                    $(t).addClass("active")
                }, 1)
            }, n)
        }

        function t() {
            e(".explain__step-1", ".explain__step-2", 500), window.particles(), window.setTimeout(function() {
                $(".explain__particles").addClass("active"), new window.TuringType($(".explain__step-2 .explain__typing")[0], "Help content completely reimagined... ", {
                    accuracy: 1,
                    interval: 40,
                    callback: function() {
                        window.setTimeout(n, 2e3)
                    }
                })
            }, 100)
        }

        function n() {
            e(".explain__step-2", ".explain__step-3", 500), window.setTimeout(function() {
                $(".explain__particles").addClass("active"), new window.TuringType($(".explain__step-3 .explain__typing")[0], "Get ready for a new product from Intercom ", {
                    accuracy: 1,
                    interval: 40,
                    callback: function() {
                        window.setTimeout(i, 2e3)
                    }
                })
            }, 1e3)
        }

        function i() {
            e(".explain__step-3", ".explain__step-4", 500), window.setTimeout(function() {
                $(".explain__particles").addClass("active"), new window.TuringType($(".explain__step-4 .explain__typing")[0], "Be the first to know. Sign up to get one month free. ", {
                    accuracy: 1,
                    interval: 40,
                    callback: function() {
                        $(".explain__cta").addClass("active")
                    }
                })
            }, 1e3)
        }
        window.setTimeout(function() {
            $(".explain__step-1").addClass("active")
        }, 500), window.setTimeout(function() {
            $(".explain__search-input").typetype("What if you could better support your users without growing your team?", {
                e: 0,
                t: 20,
                keypress: function() {
                    var e = window.scrollX,
                        t = window.scrollY,
                        n = $(this);
                    this.selectionStart = this.selectionEnd = this.value.length, n.trigger("focus").trigger("blur").trigger("focus"), window.scrollTo(e, t)
                },
                callback: function() {
                    $(".explain__step-1").addClass("explain__pulse")
                }
            })
        }, 1e3), $(".explain__submit").on("click", function(e) {
            e.preventDefault(), $(".explain__step-1").addClass("explain__zoom-out"), window.setTimeout(t, 500)
        });
        var r = window.App.cta.CtaView.extend({
            successHandler: function() {
                window.alert("success")
            },
            model: window.Backbone.Model.extend({
                urlRoot: "/api/explain",
                defaults: {
                    email: ""
                }
            })
        });
        new r({
            el: $(".explain__form")
        })
    }),
    function(e, t, n, i, r, o) {
        "use strict";
        var a = function(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            s = function(e) {
                return a(e)
            },
            l = t.Model.extend({
                PRICE_DATA_FOR_USER_TIER: {
                    250: {
                        requiresSales: !1,
                        fixedPrices: {
                            base: 45,
                            variable: .4,
                            base_pro: 27.45,
                            variable_pro: .2
                        },
                        marginalPrices: {
                            observe: {
                                base: -45,
                                variable: -.4,
                                base_pro: -27.45,
                                variable_pro: -.2
                            },
                            learn: {
                                base: 4,
                                variable: .3,
                                base_pro: 2.45,
                                variable_pro: .2
                            },
                            support: {
                                base: 4,
                                variable: .5,
                                base_pro: 2.45,
                                variable_pro: .3
                            },
                            engage: {
                                base: 4,
                                variable: .7,
                                base_pro: 2.45,
                                variable_pro: .4
                            },
                            acquire: {
                                base: 4,
                                variable: .6,
                                base_pro: -3.66,
                                variable_pro: .41
                            },
                            combination: {
                                base: 12,
                                variable: 1.5,
                                base_pro: 7.35,
                                variable_pro: .9
                            }
                        },
                        variableLotSize: 50
                    },
                    1e3: {
                        requiresSales: !1,
                        fixedPrices: {
                            base: 48,
                            variable: 2.8,
                            base_pro: 29,
                            variable_pro: 1.7
                        },
                        marginalPrices: {
                            observe: {
                                base: -48,
                                variable: -2.8,
                                base_pro: -29,
                                variable_pro: -1.7
                            },
                            learn: {
                                base: 11,
                                variable: .4,
                                base_pro: 6.7,
                                variable_pro: .2
                            },
                            support: {
                                base: 13,
                                variable: 1,
                                base_pro: 7.9,
                                variable_pro: .6
                            },
                            engage: {
                                base: 15,
                                variable: 2.4,
                                base_pro: 9.1,
                                variable_pro: 1.5
                            },
                            acquire: {
                                base: 16,
                                variable: .2,
                                base_pro: 3.94,
                                variable_pro: .13
                            },
                            combination: {
                                base: 39,
                                variable: 3.8,
                                base_pro: 23.7,
                                variable_pro: 2.3
                            }
                        },
                        variableLotSize: 500
                    },
                    1e4: {
                        requiresSales: !1,
                        fixedPrices: {
                            base: 70,
                            variable: 34,
                            base_pro: 42.7,
                            variable_pro: 20.7
                        },
                        marginalPrices: {
                            observe: {
                                base: -70,
                                variable: -34,
                                base_pro: -42.7,
                                variable_pro: -20.7
                            },
                            learn: {
                                base: 15,
                                variable: 7,
                                base_pro: 9.1,
                                variable_pro: 4.3
                            },
                            support: {
                                base: 25,
                                variable: 17,
                                base_pro: 15.3,
                                variable_pro: 10.4
                            },
                            engage: {
                                base: 30,
                                variable: 27,
                                base_pro: 18.3,
                                variable_pro: 16.5
                            },
                            acquire: {
                                base: 38,
                                variable: 4,
                                base_pro: 23.18,
                                variable_pro: 2.48
                            },
                            combination: {
                                base: 70,
                                variable: 51,
                                base_pro: 42.7,
                                variable_pro: 31.2
                            }
                        },
                        variableLotSize: 5e3
                    },
                    5e4: {
                        requiresSales: !0
                    }
                },
                DEFAULT_USER_COUNT: 250,
                initialize: function() {
                    this.set("userCount", this.DEFAULT_USER_COUNT), this.set("userCountDragging", !1), this.set("userCountEverDragged", !1), this.set("hasPro", !1), this.updatePrice(), this.listenTo(this, "change:userCount", this.updatePrice), this.listenTo(this, "change:packageName", this.updatePrice), this.listenTo(this, "change:hasPro", this.updatePrice), this.listenTo(this, "change:userCountDragging", this.updateEverDragged)
                },
                updatePrice: function() {
                    var e = this.get("userCount"),
                        t = this.get("packageName"),
                        n = this.get("hasPro"),
                        i = this.calculatePrice(e, t, n);
                    i !== o && this.set("price", i), this.get("upsell_price_models") && this.get("upsell_price_models").length && this.get("upsell_price_models").map(function(t) {
                        t.set("hasPro", n), t.set("userCount", e)
                    })
                },
                calculatePrice: function(e, t, n) {
                    if (isNaN(parseInt(e, 10)) || !t) return o;
                    if ("observe" === t) return 0;
                    var i = this.userTierForCount(e),
                        r = this.PRICE_DATA_FOR_USER_TIER[i],
                        a = this.get("use_addon_pricing");
                    if (r.requiresSales) return "custom";
                    var s = r.fixedPrices,
                        l = r.marginalPrices[t],
                        c = l.base,
                        u = l.variable;
                    a || (c += s.base, u += s.variable), n && (u += l.variable_pro, c += l.base_pro, a || (u += s.variable_pro, c += s.base_pro));
                    var d = Math.ceil((e - i) / r.variableLotSize);
                    return 0 > d && (d = 0), c + u * d
                },
                userTierForCount: function(e) {
                    return 1e3 >= e ? 250 : 1e4 >= e ? 1e3 : 5e4 >= e ? 1e4 : 5e4
                },
                addUpsellPriceModel: function(e) {
                    var t = this.get("upsell_price_models") || [];
                    t.push(e), this.set("upsell_price_models", t)
                },
                updateEverDragged: function() {
                    this.set("userCountEverDragged", !0)
                }
            }),
            c = t.View.extend({
                initialize: function() {
                    this.listenTo(this.model, "change:userCount", this.renderUserCount), this.listenTo(this.model, "change:userCount", this.renderSliderUserCount), this.listenTo(this.model, "change:hasPro", this.renderPlan), this.listenTo(this.model, "change:price", this.renderPrice), this.listenTo(this.model, "change:userCountEverDragged", this.renderMessageUpdate), this.renderUserCount(), this.renderSliderUserCount(), this.renderPlan(), this.renderPrice(), this.renderMessageUpdate()
                },
                renderUserCount: function() {
                    var t = this.model.get("userCount");
                    e('[data-js~="user_count"]').text(s(t))
                },
                renderSliderUserCount: function() {
                    var e = this.model.get("userCount");
                    i.slider_user_count = e
                },
                renderPlan: function() {
                    var t = this.model.get("hasPro"),
                        n = t ? "pro" : "basic";
                    this.$el.find('[data-js~="add_plan"]').data("plan", n), e("[data-plan]").data("plan", n), e('[data-js~="selected_plan"]').text(t ? "Standard" : "Lite")
                },
                renderPrice: function() {
                    var t = this.model.get("price");
                    this.$el.find('[data-js~="hide_unless_custom"]').toggleClass("u__hidden", 5e4 !== Number(this.model.get("userCount"))), t && t.toFixed ? (t = a(Math.ceil(t)), this.$el.find('[data-js~="contact_sales_message"]').addClass("hidden"), this.$el.find('[data-js~="monthly_price_container"]').removeClass("hidden")) : (this.$el.find('[data-js~="monthly_price_container"]').addClass("hidden"), this.$el.find('[data-js~="contact_sales_message"]').removeClass("hidden")), "custom" === t ? (this.$el.find('[data-js~="hide_for_custom"]').add(this.$el.filter('[data-js~="hide_for_custom"]')).addClass("hidden"), this.$el.find('[data-js~="hide_unless_custom"]').removeClass("hidden")) : (this.$el.find('[data-js~="hide_for_custom"]').add(this.$el.filter('[data-js~="hide_for_custom"]')).removeClass("hidden"), this.$el.find('[data-js~="hide_unless_custom"]').addClass("hidden")), this.model.get("addon_price") ? this.$el.find('[data-js~="addon_monthly_price"]').text(t) : e('[data-js~="monthly_price"]').text(t)
                },
                renderMessageUpdate: function() {
                    var e = this.model.get("userCountEverDragged");
                    e ? this.$el.find('[data-js~="drag_message"]').addClass("hidden") : this.$el.find('[data-js~="drag_message"]').removeClass("hidden")
                }
            }),
            u = t.View.extend({
                RANGES: {
                    min: [250, 50],
                    "36.58%": [1e3, 500],
                    "80.48%": [1e4, 5e3],
                    max: [5e4]
                },
                initialize: function() {
                    this.setupPricingSlider(this.RANGES), this.$el.on({
                        slide: this._onSlide.bind(this),
                        set: this._onSet.bind(this)
                    }), this.listenTo(this.model, "change:userCount", this._onUserCountChange)
                },
                setupPricingSlider: function(e) {
                    this.model.set("userCount", e.min[0]), this.$el.noUiSlider({
                        range: e,
                        stepped: !0,
                        start: [e.min[0]]
                    }).noUiSlider_pips({
                        mode: "steps",
                        filter: function(e) {
                            return 250 === e || 5e4 === e ? 1 : 2
                        },
                        format: wNumb({
                            decimals: 0,
                            edit: function(e) {
                                return e > 250 && 5e4 > e ? "" : e >= 1e3 ? e / 1e3 + "k" : e
                            }
                        })
                    })
                },
                _onSlide: function(e, t) {
                    this.model.get("userCountDragging") || this.model.set("userCountDragging", !0), this.model.set("userCount", Math.floor(t))
                },
                _onSet: function() {
                    this.model.set("userCountDragging", !1)
                },
                _onUserCountChange: function() {
                    this.model.get("userCountDragging") || this.$el.val(this.model.get("userCount"))
                }
            }),
            d = t.View.extend({
                events: {
                    "change select": "onUserCountChange"
                },
                initialize: function() {
                    this.listenTo(this.model, "change:userCount", this.renderUserCount)
                },
                onUserCountChange: function() {
                    var t = this.$el.find("select").val();
                    this.model.set("userCount", t), e('[data-js~="price_prefix"]').text("Price")
                },
                renderUserCount: function() {
                    this.$el.find("select").val(this.model.get("userCount"))
                }
            }),
            f = t.View.extend({
                events: {
                    'click [data-js~="basic_plan"]': "removePro",
                    'click [data-js~="pro_plan"]': "addPro"
                },
                initialize: function() {
                    this.listenTo(this.model, "change:hasPro", this.renderPlanOptions), this.renderPlanOptions()
                },
                renderPlanOptions: function() {
                    this.model.get("hasPro") ? (e('[data-js~="pro_plan"]').removeClass("inactive"), e('[data-js~="basic_plan"]').addClass("inactive")) : (e('[data-js~="basic_plan"]').removeClass("inactive"), e('[data-js~="pro_plan"]').addClass("inactive"))
                },
                addPro: function() {
                    this.model.set("hasPro", !0)
                },
                removePro: function() {
                    this.model.set("hasPro", !1)
                }
            }),
            h = t.View.extend({
                initialize: function() {
                    this.listenTo(this.model, "change:price", this.renderHidden), this.renderHidden(), this.$el.find("form").on("submit", this.resetForm.bind(this)).on("ajax:success", this.onFormSuccess.bind(this)).on("ajax:error", this.onFormError.bind(this))
                },
                renderHidden: function() {
                    "custom" === this.model.get("price") ? (this.$el.removeClass("hidden"), this.$el.closest("[data-package]").addClass("contact_sales_active")) : (this.$el.addClass("hidden"), this.$el.closest("[data-package]").removeClass("contact_sales_active"))
                },
                resetForm: function() {
                    this.$el.find('[data-js~="contact_errors"]').addClass("hidden")
                },
                onFormSuccess: function() {
                    this.$el.find('[data-js~="contact_form"]').addClass("hidden"), this.$el.find('[data-js~="contact_success_message"]').removeClass("hidden"), i.ga("send", "event", "button", "click", "contact_us-submission")
                },
                onFormError: function(e, t) {
                    this.$el.find('[data-js~="contact_errors"]').removeClass("hidden").text(t.responseText)
                }
            });
        e(r).ready(function() {
            var t = e('[data-js="pricing_options_header"]');
            if (t.length) {
                var n = 1,
                    r = 1,
                    o = e(".pricing_nav"),
                    a = e(".pricing_nav").offset().top,
                    s = e(".pricing_nav").height(),
                    l = e(".option_b_scroll_point").offset().top - s,
                    c = e("#pricing-info").offset().top - s,
                    u = e(".pricing_nav_option_a"),
                    d = e(".pricing_nav_option_b");
                e(i).on("scroll", function(t) {
                    if (i.innerWidth > 860) {
                        var f = e(i).scrollTop();
                        a > f ? r = 1 : f >= a && l > f ? r = 2 : f >= l && c > f ? r = 3 : f > c && (r = 4), r >= 2 && 2 > n && (o.addClass("pricing_nav_sticky"), e("#pricing-options").css("padding-top", s)), r >= 3 && 3 > n && (u.removeClass("selected"), d.addClass("selected")), r >= 4 && 4 > n && o.addClass("pricing_nav_sticky_animate_out"), 3 >= r && n > 3 && o.removeClass("pricing_nav_sticky_animate_out"), 2 >= r && n > 2 && (d.removeClass("selected"), u.addClass("selected")), 1 >= r && n > 1 && (o.removeClass("pricing_nav_sticky"), e("#pricing-options").css("padding-top", 0)), n = r
                    }
                })
            }
            var f = e('[data-js="sticky_pricing_sidebar"]'),
                h = f.width();
            if (f.length) {
                var p = e(".pricing_calculator"),
                    m = 45,
                    g = p.offset().top,
                    v = p.offset().top + p.outerHeight() - f.outerHeight() - 2 * m,
                    y = function() {
                        if (i.innerWidth >= 1025) {
                            var t = e(i).scrollTop();
                            t > v ? f.css("position", "absolute").css("top", v + m) : t > g ? f.css("position", "fixed").css("top", m + "px").css("width", h + "px") : f.css("position", "relative").css("top", 0)
                        }
                    };
                e(i).on("scroll", y), y()
            }
        }), e(r).ready(function() {
            var t = e('[data-js-init="pricing"]');
            if (t.length) {
                var n = t.data("package"),
                    i = new l({
                        packageName: n
                    });
                e('[data-js-attach="user_slider"]').each(function() {
                    new u({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="user_dropdown"]').each(function() {
                    new d({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="user_count_and_price"]').each(function() {
                    new c({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="plan_chooser"]').each(function() {
                    new f({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="contact_sales"]').each(function() {
                    new h({
                        el: e(this),
                        model: i
                    })
                }), e('[data-js-attach="add_on_price"]').each(function() {
                    var t = e(this),
                        r = t.data("package"),
                        o = new l({
                            packageName: r,
                            addon_price: !0,
                            use_addon_pricing: "acquire" !== r && "acquire" !== n
                        });
                    i.addUpsellPriceModel(o), new c({
                        el: t,
                        model: o
                    })
                })
            }
        }), e(function() {
            e('[data-js~="expand_content"] .js-trigger').click(function() {
                console.log(e(this)), e(this).next(".js-target").slideToggle(200, function() {
                    e(this).parent().toggleClass("expanded")
                }.bind(this))
            }), e("[data-js-scroll]").click(function(t) {
                var n = "." + e(this).data("jsScroll"),
                    i = e(n).offset().top;
                i -= i > 550 ? 230 : 130, e("html, body").stop().animate({
                    scrollTop: i
                }, 500, "swing", function() {
                    e(".pricing_nav_option").removeClass("selected"), e(this).addClass("selected")
                }.bind(this))
            })
        })
    }(this.jQuery, this.Backbone, this._, this, this.document), $(function() {
        "use strict";
        window.App.fn.popups = function() {
            $("[data-popup]").off("click.popup").on("click.popup", function(e) {
                e.preventDefault();
                var t = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - 275,
                    n = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - 250;
                window.open($(this).attr("href"), $(this).data("share"), "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=550, height=500, top=" + n + ", left=" + t)
            })
        }, window.App.fn.popups(), window.App.fn.socialCount = function() {
            function e(e) {
                return $.ajax({
                    url: e,
                    dataType: "jsonp",
                    timeout: 1500
                })
            }
            $(".twitter[data-url]").each(function() {
                var t = $(this);
                e("https://cdn.api.twitter.com/1/urls/count.json?url=" + t.data("url")).done(function(e) {
                    t.text(e.count || 0)
                }).fail(function() {
                    t.text("share")
                })
            }), $(".facebook[data-url]").each(function() {
                var t = $(this);
                e("https://graph.facebook.com/?id=" + t.data("url")).done(function(e) {
                    t.text(e.shares || 0)
                }).fail(function() {
                    t.text("share")
                })
            })
        }, window.App.fn.socialCount()
    }),
    function(e, t, n) {
        "use strict";
        e(function() {
            e('[data-js~="open-product-store"]').click(function() {
                t.ProductStore["default"].open(void 0, e(this).data().jsProductName, void 0, void 0, void 0, void 0, "add", e(this).data().jsBundleName)
            })
        })
    }(this.jQuery, this, this.document);