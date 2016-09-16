(function() {
  var goToNextSection, goToPrevSection, scrollTo, setBorderColors, setPageElements, verticalAlign, verticalAlignElements;

  jQuery.fn.reverse = [].reverse;

  setPageElements = function() {
    var footerOffset, scrollBottom, scrollTop;
    $('.mod-nav-menu-items .active').removeClass('active');
    if ($(window).width() > 1000) {
      scrollTop = $(document).scrollTop() + 300;
    } else {
      scrollTop = $(window).scrollTop() + 30;
    }
    $('.site-page').reverse().each(function(index, element) {
      var color, section, style;
      if (scrollTop >= $(element).offset().top) {
        section = $(element).attr('id');
        $('.mod-nav-menu-items .item-' + section).addClass('active');
        window.location.hash = '!' + section;
        style = $(element).attr('data-style');
        color = $(element).attr('data-color');
        $('[data-mod-border-style]').attr('data-mod-border-style', style).css({
          'background-color': color
        });
        $('.mod-nav').attr('data-mod-nav-style', style).css({
          'background-color': color
        });
        $('.site-case-study .mod-author').css('color', color);
        return false;
      }
    });
    scrollBottom = $(window).scrollTop() + $(window).height();
    footerOffset = $('#footer').offset().top;
    if (footerOffset <= scrollBottom && $(window).width() > 1000) {
      $('.mod-nav-menu-items').css({
        'margin-top': -($('.mod-nav-menu-items').height() / 2 + (scrollBottom - footerOffset))
      });
      return $('.mod-nav-logo').css({
        'margin-top': 60 - (scrollBottom - footerOffset)
      });
    } else {
      $('.mod-nav-menu-items').css({
        'margin-top': -($('.mod-nav-menu-items').height() / 2)
      });
      return $('.mod-nav-logo').css({
        'margin-top': '60px'
      });
    }
  };

  setBorderColors = function() {
    return $('.site-page').each(function(index, element) {
      var color, id;
      color = $(element).attr('data-color');
      id = $(element).attr('id');
      return $("<style>#" + id + ":before, #" + id + ":after, #" + id + " .site-border:before, #" + id + " .site-border:after { background-color: " + color + "}</style>").appendTo('head');
    });
  };

  verticalAlign = function($element) {
    var $parentPage, $parentSite;
    $parentSite = $($element.parents('.site-page'));
    $parentPage = $($element.parents('.page'));
    if ($(window).width() > 980) {
      if ($element.height() < $(window).height() - 60) {
        $parentSite.css({
          'height': '100%'
        });
        $parentPage.css({
          'height': '100%'
        });
        return $element.css({
          'position': 'absolute',
          'top': '50%',
          'margin-top': -($element.height() / 2),
          'width': '100%'
        });
      } else {
        $parentSite.css({
          'height': 'auto'
        });
        $parentPage.css({
          'height': 'auto'
        });
        return $element.css({
          'position': 'static',
          'top': 'auto',
          'margin-top': 'inherit'
        });
      }
    } else {
      $parentSite.css({
        'height': 'auto'
      });
      $parentPage.css({
        'height': 'auto'
      });
      return $element.css({
        'position': 'static',
        'top': 'auto',
        'margin-top': 'inherit'
      });
    }
  };

  verticalAlignElements = function() {
    verticalAlign($('.site-home .body'));
    return verticalAlign($('.site-about .main'));
  };

  scrollTo = function(id) {
    if ($(window).width() > 1000) {
      return $('#wrapper').animate({
        scrollTop: $(id).parent().scrollTop() + $(id).offset().top - $(id).parent().offset().top
      });
    } else {
      return $('html, body').animate({
        scrollTop: $(id).parent().scrollTop() + $(id).offset().top - $(id).parent().offset().top
      });
    }
  };

  goToNextSection = function() {
    return $('.mod-nav-menu-items .active').next('li').click();
  };

  goToPrevSection = function() {
    return $('.mod-nav-menu-items .active').prev('li').click();
  };

  $(function() {
    var id;
    $('[data-mod-nav-toggle]').click(function() {
      $(this).parent('.mod-nav').toggleClass('expanded');
      return $(this).parents('body').toggleClass('no-scroll');
    });
    $('[data-mod-nav-go-to]').click(function() {
      var id;
      id = $(this).attr('data-mod-nav-go-to');
      $(this).parents('.mod-nav').removeClass('expanded');
      $(this).parents('body').removeClass('no-scroll');
      scrollTo(id);
      return false;
    });
    if (window.location.hash !== void 0) {
      id = window.location.hash.replace(/^#!/, '');
      if (id !== '') {
        scrollTo('#' + id);
      }
    }
    $('#wrapper').scroll(function() {
      return setPageElements();
    });
    $(window).scroll(function() {
      return setPageElements();
    });
    $(window).resize(function() {
      setPageElements();
      return verticalAlignElements();
    });
    $(document).keypress(function(e) {
      if (e.keyCode === 32) {
        goToNextSection();
        return false;
      }
    });
    return $(document).keydown(function(e) {
      if (e.keyCode === 40) {
        goToNextSection();
        return false;
      }
      if (e.keyCode === 38) {
        goToPrevSection();
        return false;
      }
    });
  });

  $(window).load(function() {
    $('body').css({
      'position': 'static',
      'overflow': 'visible'
    });
    return setTimeout((function() {
      setBorderColors();
      verticalAlignElements();
      setPageElements();
      return setTimeout((function() {
        return $("#loader").fadeOut(500);
      }), 200);
    }), 1);
  });

}).call(this);
