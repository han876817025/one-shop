;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-all" viewBox="0 0 1065 1024">' +
    '' +
    '<path d="M638 468.8h309.6c28.8 0 50.4-21.6 50.4-50.4v-302.4c0-28.8-21.6-50.4-50.4-50.4h-309.6c-28.8 0-50.4 21.6-50.4 50.4v302.4c-3.6 25.2 21.6 50.4 50.4 50.4z"  ></path>' +
    '' +
    '<path d="M422 62h-309.6c-28.8 0-50.4 21.6-50.4 50.4v302.4c0 28.8 21.6 50.4 50.4 50.4h309.6c28.8 0 50.4-21.6 50.4-50.4v-302.4c3.6-28.8-21.6-50.4-50.4-50.4z"  ></path>' +
    '' +
    '<path d="M422 555.2h-309.6c-28.8 0-50.4 21.6-50.4 50.4v306c0 28.8 21.6 50.4 50.4 50.4h309.6c28.8 0 50.4-21.6 50.4-50.4v-302.4c3.6-28.8-21.6-54-50.4-54z"  ></path>' +
    '' +
    '<path d="M947.6 555.2h-309.6c-28.8 0-50.4 21.6-50.4 50.4v302.4c0 28.8 21.6 50.4 50.4 50.4h309.6c28.8 0 50.4-21.6 50.4-50.4v-302.4c0-25.2-21.6-50.4-50.4-50.4zM940.4 904.4h-298.8v-291.6h298.8v291.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)