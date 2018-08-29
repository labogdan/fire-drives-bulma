
class Sticky {
    constructor(selector) {
      this.$elem = $(selector);
      this.$hide = this.$elem.find(".hide");
      this.offset = this.$elem.find(".show").offset();
      console.log("show offset: %o",this.offset.top);
      console.log(this.$hide.height());
    }

    positionOnScroll() {
      let scrollPos = $(window).scrollTop();

      if (scrollPos >= this.offset.top) {
        //this.$elem.addClass("is-fixed-top");
        this.$hide.addClass("make-hidden");
        //$("body").addClass("has-fixed-top");
      } else {
        //this.$elem.removeClass("is-fixed-top");
        this.$hide.removeClass("make-hidden");
        //$("body").removeClass("has-fixed-top");
      }

    }
}

class HamburgerMenu {
  constructor(selector) {
    let elem = $(".navbar-burger"),
        menu = $(".navbar-menu");

      elem.on("click", function() {
        elem.toggleClass("is-active");
          menu.toggleClass("is-active");
      });

  }
}


$(document).ready(function() {

  var burger = new HamburgerMenu();

   $(".section.header").sticky({topSpacing:0});

  var sticky = new Sticky(".section.header");
  $(window).on("scroll", function () {
    sticky.positionOnScroll();
  });

});
