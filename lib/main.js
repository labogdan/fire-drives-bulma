"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sticky = function () {
  function Sticky(selector) {
    _classCallCheck(this, Sticky);

    this.$elem = $(selector);
    this.$hide = this.$elem.find(".hide");
    this.offset = this.$elem.find(".show").offset();
    this.$logo = this.$elem.find(".navbar-brand");
    console.log(this.$logo);
  }

  Sticky.prototype.positionOnScroll = function positionOnScroll() {
    var scrollPos = $(window).scrollTop();

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
  };

  return Sticky;
}();

var HamburgerMenu = function HamburgerMenu(selector) {
  _classCallCheck(this, HamburgerMenu);

  var elem = $(".navbar-burger"),
      menu = $(".navbar-menu"),
      logo = $(".navbar-brand");

  elem.on("click", function () {
    elem.toggleClass("is-active");
    menu.toggleClass("is-active");
    logo.toggleClass("hidden");
  });
};

$(document).ready(function () {

  var burger = new HamburgerMenu();

  var sticky = new Sticky("section.header");
  $(window).on("scroll", function () {
    sticky.positionOnScroll();
  });
});