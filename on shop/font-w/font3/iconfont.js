;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-tubiao4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.344 919.68c-44.992 0-81.6-36.48-81.6-81.664 0-44.928 36.608-81.472 81.6-81.472s81.536 36.544 81.536 81.472C898.944 883.2 862.4 919.68 817.344 919.68zM817.344 794.112c-24.192 0-43.968 19.584-43.968 43.904 0 24.384 19.776 44.032 43.968 44.032 24.256 0 43.904-19.712 43.904-44.032C861.248 813.696 841.6 794.112 817.344 794.112z"  ></path>' +
    '' +
    '<path d="M449.28 919.68c-44.992 0-81.664-36.48-81.664-81.664 0-44.928 36.672-81.472 81.664-81.472 44.928 0 81.536 36.544 81.536 81.472C530.816 883.2 494.208 919.68 449.28 919.68zM449.28 794.112c-24.32 0-43.968 19.584-43.968 43.904 0 24.384 19.648 44.032 43.968 44.032 24.256 0 43.968-19.712 43.968-44.032C493.184 813.696 473.472 794.112 449.28 794.112z"  ></path>' +
    '' +
    '<path d="M892.992 732.544 310.784 732.544c-6.336 0-11.968-3.136-15.552-8.128-3.584-5.12-4.288-11.648-2.048-17.408l54.08-143.36L204.032 141.952 82.88 141.952C72.384 141.952 64 133.504 64 123.136S72.384 104.32 82.88 104.32l134.656 0c8.064 0 15.232 5.12 17.792 12.8l149.696 440.832c1.408 4.096 1.408 8.576-0.192 12.672l-46.976 124.352 555.136 0c10.304 0 18.752 8.32 18.752 18.752C911.744 724.032 903.296 732.544 892.992 732.544z"  ></path>' +
    '' +
    '<path d="M836.352 582.656l-469.12 0c-10.368 0-18.752-8.32-18.752-18.688 0-10.496 8.384-18.944 18.752-18.944l455.296 0 92.864-290.048L260.096 254.976c-10.56 0-18.88-8.384-18.88-18.816 0-10.368 8.32-18.816 18.88-18.816l681.024 0c6.08 0 11.776 2.816 15.168 7.68 3.648 4.928 4.544 11.136 2.88 16.896L854.4 569.6C851.84 577.536 844.544 582.656 836.352 582.656z"  ></path>' +
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