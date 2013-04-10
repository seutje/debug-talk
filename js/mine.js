(function($) {
  // Block execution for x ms
  var stall = function (ms) { var now = new Date().getTime(); while((new Date().getTime() - now) < ms) { } };
  // FontBomb injector
  window.fontbomb = function () {
    var s = document.createElement('script');
    s.setAttribute('src', '/js/fontbomb.js');
    document.body.appendChild(s);
  };
  // Example of costly selector
  var killBrowser = function() {
    var shittySelector = 'body p ~ div[class*="thing"] > div[class*="thing"] > div[class*="thing"] > div:not([class*="not"])',
        shittySelector2 = 'body p ~ div[class*="thing"] > div[class*="thing"] > div[class*="thing"] > input:checkbox:checked',
        color = '#'+Math.floor(Math.random()*16777215).toString(16); // http://paulirish.com/2009/random-hex-color-code-snippets/

    $(shittySelector).css('color', color);
    $(shittySelector2).css('background', color);
    $(shittySelector).each(function() {
      this.innerText = color;
    });
  };
  // Example of looped DOM operation
  var makeNodes = function () {
    for (var i = 0; i < 200; i++) {
      $('body div.here').append('<div>' + i + '</div>');
    }
  };
  // Stall browser before logging
  var stallBrowser = function() {
    stall(200); // Simulate costly blocking operation
    console.log('HOLLA');
  };
  // Global initializers (so I can just enter it in the console)
  window.makeNodes = function () {
    $(window).on('scroll', makeNodes);
  };
  window.stopMake = function () {
    $(window).off('scroll', makeNodes);
  };
  window.killBrowser = function() {
    $(window).on('scroll', killBrowser);
  };
  window.stopKill = function() {
    $(window).off('scroll', killBrowser);
  };
  window.stallBrowser = function() {
    $(window).on('scroll', stallBrowser);
  };
  window.stopStall = function() {
    $(window).off('scroll', stallBrowser);
  };

  // Async screwup demo
  $('.async').on('click', function(e) {
    e.preventDefault();
    var output = '';
    $.ajax({
      url: 'ajax.php',
      success: function(data) {
        output = data;
      }
    });
    alert(output);
  });

  // Regular typeError demo
  $('body').on('click', '.bugs', function () {
    $this.addClass('awesome');
  });

  // Silent fail demo
  $('body').on('click', '.silent', function() {
    $('this').remove();
  });
})(jQuery);