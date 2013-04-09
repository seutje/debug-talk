(function($) {
  $('body').on('click', '.bugs', function () {
    this.addClass('awesome');
  });
  $('body').on('click', '.silent', function() {
    $('this').remove();
  });
})(jQuery);