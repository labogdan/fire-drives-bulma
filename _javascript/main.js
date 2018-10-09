
class Sticky {
    constructor(selector) {
      this.$elem = $(selector);
      this.$hide = this.$elem.find(".hide");
      this.offset = {top:50};//this.$elem.find(".show").offset();
      this.$logo = this.$elem.find(".navbar-brand");
      let scrollPos = $(window).scrollTop();
      if (scrollPos > 100) {
        this.positionOnScroll();
      }
    }

    positionOnScroll() {
      if ($(window).width() <= 768) {
        return;
      }

      let scrollPos = $(window).scrollTop();

      if (scrollPos >= this.offset.top) {
        this.$elem.addClass("fixed");
        this.$hide.addClass("make-hidden");
      } else {
        this.$elem.removeClass("fixed");
        this.$logo.removeClass("shrink");
        this.$hide.removeClass("make-hidden");
      }
    }
}

class HamburgerMenu {
  constructor(selector) {
    let elem = $(".navbar-burger"),
        menu = $(".navbar-menu"),
        logo = $(".navbar-brand");

    elem.on("click", function() {
      elem.toggleClass("is-active");
      menu.toggleClass("is-active");
      logo.toggleClass("hidden");
      menu.toggleClass("nav-opened");
    });

  }
}

class SmoothScroll {
  constructor() {
    let offset = 80,
        animTime = 1000;
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - offset
            }, animTime, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }
}


class LoadMore {
  constructor(selector, ajaxUrl) {
    var self = this;
    this.$element = $(selector);
    this.ajaxUrl = ajaxUrl;
    this.$element.on('click', function () {
      self.$element.addClass("is-loading");
      self.$element.find(".icon").addClass("hidden");
      self.loadAjax();
      //window.setTimeout(function () {self.loadAjax()}, 2000);
    })
  }

  processResults(data) {
    let results = "";
    let count = 5;
    data.elements.forEach(function (el) {
      var result = '<div class="column is-10 text-block">'
                 + '<div class="number-circle has-text-centered">' + count++ + ' </div>'
                 + '<h3 class="is-size-4 orange-text bolder">'
                 + el.title
                 + '</h3><p>'
                 + el.content
                 + '</p></div>'
       results += result;
    });
    let obj = $(results);
    obj.insertBefore(this.$element.parent());
  }

  loadAjax() {
    var self = this;
    $.ajax({
      url: this.ajaxUrl
    }).done(function(data) {
      self.$element.removeClass("is-loading");
      self.$element.find(".icon").removeClass("hidden");
      self.processResults(data);
    }).fail(function (data) {
      console.warn('error fetching data');
    });
  }
}

function initSlickCarousels() {
  $('.is-slick-history-top').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.is-slick-history-bottom',
    fade: true,
    initialSlide: 4
  });

  $('.is-slick-history-bottom').slick({
    responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }],
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    infinite: true,
    asNavFor: '.is-slick-history-top',
    focusOnSelect: true,
    initialSlide: 4,
    arrows: false/*,
    prevArrow: '<div class="slick-arrow left"><a class="button is-large margin top two"><span class="is-uppercase">Previous</span></div>',
    nextArrow: '<div class="slick-arrow right"><a class="button is-large margin top two"><span class="is-uppercase">Next</span></div>'*/
  });

  $(".timeline.previous").click(function () {
    $('.is-slick-history-bottom').slick('slickPrev');
  });
  $(".timeline.next").click(function () {
    $('.is-slick-history-bottom').slick('slickNext');
  });

/*
  $('.is-slick-history-top').flickity({
    percentPosition: false
  });

  $('.is-slick-history-bottom').flickity({
    asNavFor: '.is-slick-history-top',
    contain: true,
    pageDots: false
  });*/


  $('.is-slick-carousel').slick({
    responsive: [
      {
        breakpoint: 1214,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 620,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
      /*"unslick"*/
    }],
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 4,
    arrows: true,
    prevArrow: "<span class='slick-arrow left'><i class='fas fa-chevron-left fa-2x'></span>",
    nextArrow: "<span class='slick-arrow right'><i class='fas fa-chevron-right fa-2x'></span>"
  });
}

function initLanguageMenu() {
  $(".lang-list__listener").click(function (e) {
    e.stopPropagation();
    $(".lang-list__listener").attr('data-state','active');
  });
  $(document).click(function () {
    $(".lang-list__listener").attr('data-state','');
  });
}

$(document).ready(function() {

  var burger = new HamburgerMenu();

  var sticky = new Sticky("section.header");
  $(window).on("scroll", function () {
    sticky.positionOnScroll();
  });

  var scroll = new SmoothScroll();

  initSlickCarousels();

  initLanguageMenu();

  /* this is just stub functionality for demonstration of load more button - remove for production */
  var loadMore = new LoadMore("#loadMore", "stub/load-results.json");

});
