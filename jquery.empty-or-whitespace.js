(function($) {

  $.fn.extend({

    emptyOrWhitespace: function (opts) {
    
      var defaults = {cssClass: "empty-or-whitespace"}
      
      if (Object.prototype.toString.call(opts) == "[object String]") {
        opts = $.extend({}, defaults, {cssClass: opts})
      } else if (opts) {
        opts = $.extend({}, defaults, opts)
      } else {
        opts = defaults
      }
        
      return this.each(function () {
        var el = $(this), children = el.children()

        if (!children.length && $.trim(el.text()) == "") {
          el.addClass("empty-or-whitespace")
        }

        children.each(function () {
          $(this).emptyOrWhitespace(opts)
        })
      })
    }

  })
  
})(jQuery)
