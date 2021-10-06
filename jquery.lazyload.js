(function($) {
 var settings = {
  original: '_src',
  placeholder: undefined,
  threshold: 0,
  effect: 'fadeIn',
  effectspeed: '300',
  onerror: '#'
 };
 $.fn.lazyload = function(options) {
  if (options) {
   $.extend(settings, options || {})
  }
  var elements = this;
  elements.each(function() {
   var self = this;
   if (settings.placeholder) {
    $(self).attr('src', settings.placeholder)
   }
   $(self).bind('appear', function() {
    $('<img />').bind('load', function() {
     $(self).hide().attr('src', $(self).attr(settings.original))[settings.effect](settings.effectspeed)
    }).attr("src", $(self).attr(settings.original)).error(function() {
     $(self).attr('src', settings.onerror)
    });
    self.loaded = true
   });
   if (canload(this)) {
    $(this).trigger("appear");
    this.loaded = true
   } else {
    this.loaded = false
   }
  });
  elements = filter(elements);
  window.onscroll = function() {
   elements.each(function() {
    if (canload(this)) {
     $(this).trigger("appear")
    }
   });
   elements = filter(elements)
  }
 };
 function canload(img) {
  var hold_x = $(window).width() + $(window).scrollLeft();
  var hold_y = $(window).height() + $(window).scrollTop();
  return hold_x >= $(img).offset().left - settings.threshold && hold_y >= $(img).offset().top - settings.threshold
 };
 function filter(o) {
  return $(o).filter(function() {
   return !this.loaded
  })
 }
})(jQuery);
