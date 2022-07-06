$(window).on("load", function () {
  // slider
  $(".screen_slider").owlCarousel({
    loop: true,
    center: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
    margin: 20,
    rtl: true,
    items: 1,
    autoplay: false,
    nav: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-right"></i>',
      '<i class="fas fa-long-arrow-alt-left"></i>',
    ],
    responsive: {
      400: {
        items: 1,
      },
      500: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".service__carousel").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    rtl: true,
    autoplay: false,
    nav: true,
    navText: [
      '<i class="fas fa-long-arrow-alt-right"></i>',
      '<i class="fas fa-long-arrow-alt-left"></i>',
    ],
    responsive: {
      400: {
        items: 1,
      },
      500: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(document).ready(function () {
    $(".info__form-file-btn").on("click", function () {
      $(this).parent().parent().find(".info__form-file").trigger("click");
    });

    $(".info__form-file").on("change", function () {
      var fileName = $(this)[0].files[0].name;
      $(this).parent().find(".info__form-file-name").val(fileName);
      //   $('#file-name').val(fileName);
    });
  });

  // nav
  $(".click-nav").click(function () {
    $(this).toggleClass("open");
    $(".click--nav").toggleClass("active");
    $(".overlay-header").toggleClass("block-nav");
    $(".nav").toggleClass("block-nav");
    $("body").toggleClass("overlay");
  });

  $(".overlay-header").click(function () {
    $(".click-nav").removeClass("open");
    $(".click-nav").removeClass("active");
    $(".overlay-header").removeClass("block-nav");
    $(".nav").removeClass("block-nav");
    $("body").removeClass("overlay");
  });
});

function myFunction() {
    let checkInput = document.querySelector("#accept");
    let menu = document.querySelector(".menu");
    if (checkInput.checked == true) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
  }