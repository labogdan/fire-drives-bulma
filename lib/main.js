"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sticky = function () {
  function Sticky(selector) {
    _classCallCheck(this, Sticky);

    this.$elem = $(selector);
    this.$hide = this.$elem.find(".hide");
    this.offset = this.$elem.find(".show").offset();
    console.log("show offset: %o", this.offset.top);
    console.log(this.$hide.height());
  }

  Sticky.prototype.positionOnScroll = function positionOnScroll() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos >= this.offset.top) {
      //this.$elem.addClass("is-fixed-top");
      this.$hide.addClass("make-hidden");
      //$("body").addClass("has-fixed-top");
    } else {
      //this.$elem.removeClass("is-fixed-top");
      this.$hide.removeClass("make-hidden");
      //$("body").removeClass("has-fixed-top");
    }
  };

  return Sticky;
}();

var HamburgerMenu = function HamburgerMenu(selector) {
  _classCallCheck(this, HamburgerMenu);

  var elem = $(".navbar-burger"),
      menu = $(".navbar-menu");

  elem.on("click", function () {
    elem.toggleClass("is-active");
    menu.toggleClass("is-active");
  });
};

$(document).ready(function () {

  var burger = new HamburgerMenu();

  $(".section.header").sticky({ topSpacing: 0 });

  var sticky = new Sticky(".section.header");
  $(window).on("scroll", function () {
    sticky.positionOnScroll();
  });
});