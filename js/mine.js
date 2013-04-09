(function($) {
  $('body').on('click', '.bugs', function () {
    this.addClass('awesome');
  });
  $('body').on('click', '.silent', function() {
    $('this').remove();
  });
  window.fontbomb = function () {
    var s = document.createElement('script');
    s.setAttribute('src', '/js/fontbomb.js');
    document.body.appendChild(s);
  };
})(jQuery);