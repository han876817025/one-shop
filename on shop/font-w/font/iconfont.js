;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M702.699388 60.945047 321.284238 60.945047c-57.463044 0-104.022314 46.591131-104.022314 104.018052l0 693.454702c0 57.426921 46.560293 104.019075 104.022314 104.019075l381.416174 0c57.463044 0 104.022314-46.592155 104.022314-104.019075L806.722726 164.963099C806.722726 107.537202 760.163456 60.945047 702.699388 60.945047zM477.317197 95.617731l69.349233 0c9.582632 0 17.336541 7.754614 17.336541 17.33583 0 9.582239-7.753909 17.336854-17.336541 17.336854l-69.349233 0c-9.581609 0-17.336541-7.754614-17.336541-17.336854C459.980656 103.372346 467.735588 95.617731 477.317197 95.617731zM511.992325 920.077116c-24.482581 0-44.324277-19.840884-44.324277-44.322461 0-24.480554 19.84272-44.322461 44.324277-44.322461 24.481557 0 44.324277 19.84293 44.324277 44.322461C556.317626 900.237255 536.473882 920.077116 511.992325 920.077116zM737.373493 771.736603c0 9.582239-7.753909 17.33583-17.336541 17.33583L303.946674 789.072433c-9.582632 0-17.337564-7.753591-17.337564-17.33583L286.60911 182.299953c0-9.582239 7.754932-17.33583 17.337564-17.33583l416.090278 0c9.582632 0 17.336541 7.754614 17.336541 17.33583L737.373493 771.736603z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-android" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M320 339.2 704 339.2c0-44.8-32-96-76.8-128l38.4-38.4c6.4-6.4 6.4-19.2 0-25.6-6.4-6.4-19.2-6.4-25.6 0L601.6 192C569.6 179.2 544 166.4 512 166.4c-32 0-57.6 6.4-83.2 19.2L377.6 140.8c-6.4-6.4-19.2-6.4-25.6 0-6.4 6.4-6.4 19.2 0 25.6l44.8 44.8C352 243.2 320 294.4 320 339.2zM601.6 236.8c12.8 0 19.2 12.8 19.2 19.2 0 12.8-12.8 19.2-19.2 19.2C588.8 281.6 576 275.2 576 262.4 576 249.6 588.8 236.8 601.6 236.8zM448 262.4c0 12.8-12.8 19.2-19.2 19.2-12.8 0-19.2-12.8-19.2-19.2 0-12.8 12.8-19.2 19.2-19.2C441.6 236.8 448 249.6 448 262.4z"  ></path>' +
    '' +
    '<path d="M262.4 633.6 243.2 633.6c-12.8 0-25.6-12.8-25.6-25.6L217.6 396.8c0-12.8 12.8-25.6 25.6-25.6l12.8 0c12.8 0 25.6 12.8 25.6 25.6l0 211.2C288 620.8 275.2 633.6 262.4 633.6z"  ></path>' +
    '' +
    '<path d="M780.8 633.6l-12.8 0c-12.8 0-25.6-12.8-25.6-25.6L742.4 396.8c0-12.8 12.8-25.6 25.6-25.6l12.8 0c12.8 0 25.6 12.8 25.6 25.6l0 211.2C806.4 620.8 793.6 633.6 780.8 633.6z"  ></path>' +
    '' +
    '<path d="M704 371.2 320 371.2l0 384L384 755.2l0 102.4c0 12.8 12.8 25.6 25.6 25.6l12.8 0c12.8 0 25.6-12.8 25.6-25.6l0-102.4 128 0 0 102.4c0 12.8 12.8 25.6 25.6 25.6l12.8 0c12.8 0 25.6-12.8 25.6-25.6l0-102.4 64 0L704 371.2z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pingguo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M828.553216 381.200384c-129.92512 84.14208-114.427904 266.166272 22.74304 328.546304-6.047744 15.212544-11.64288 30.75072-18.311168 45.81376-21.540864 48.611328-50.341888 92.717056-85.997568 132.026368-40.27392 44.394496-82.382848 52.512768-137.842688 30.109696-19.922944-8.046592-40.638464-15.069184-61.650944-19.226624-28.678144-5.670912-56.819712 0.151552-83.787776 11.231232-11.313152 4.64896-22.58944 9.41056-34.062336 13.633536-38.926336 14.327808-74.006528 7.87456-104.933376-20.011008-33.994752-30.654464-60.125184-67.647488-82.561024-106.969088-47.29856-82.898944-73.590784-171.83744-68.913152-268.046336 3.524608-72.521728 27.693056-136.566784 86.171648-183.3472 41.09312-32.874496 88.32-49.416192 141.238272-41.996288 20.52096 2.879488 40.275968 11.40736 60.278784 17.686528 7.766016 2.43712 15.388672 5.453824 22.839296 8.742912 21.942272 9.682944 43.333632 8.820736 65.742848 0.208896 27.15648-10.438656 54.607872-21.071872 82.864128-27.500544 71.677952-16.310272 157.47072 19.146752 196.182016 79.097856zM677.015552 98.359296c11.800576 92.024832-72.464384 197.60128-165.154816 190.625792-22.452224-76.242944 77.535232-192.079872 165.154816-190.625792z" fill="" ></path>' +
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