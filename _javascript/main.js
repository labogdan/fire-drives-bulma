
class Sticky {
    constructor(selector) {
      this.$elem = $(selector);
      this.$hide = this.$elem.find(".hide");
      this.offset = this.$elem.find(".show").offset();
      this.$logo = this.$elem.find(".navbar-brand");
      console.log(this.$logo);
    }

    positionOnScroll() {
      let scrollPos = $(window).scrollTop();

      if (scrollPos >= this.offset.top) {
        if ($(window).width() > 768) {
          //this.$logo.addClass("shrink");
        }
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
    });

  }
}


$(document).ready(function() {

  var burger = new HamburgerMenu();

  var sticky = new Sticky("section.header");
  $(window).on("scroll", function () {
    sticky.positionOnScroll();
  });

});
