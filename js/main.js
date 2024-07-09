$(function () {
  $(".menu a").on("click", function (event) {
    event.preventDefault();

    let id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 300);
  });

  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg"</button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg"</button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".menu__btn, .menu a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  let mixer = mixitup(".portfolio__content");
});

window.addEventListener("DOMContentLoaded", () => {

  const modal__290 = document.querySelector(".modal__290"),
    modalCloseBtn = document.querySelector("[data-close]");

  document.addEventListener("click", (e) => {
    const triggerElement = e.target.closest("[data-trigger]");

    if (triggerElement) {
      if (
        triggerElement.querySelector(".pricing__item-name").innerHTML == "Basic"
      ) {
        modal__290.querySelector(".modal__title").innerHTML =
          'Хотите выбрать тариф "Basic"?';
      } else if (
        triggerElement.querySelector(".pricing__item-name").innerHTML ==
        "Starter"
      ) {
        modal__290.querySelector(".modal__title").innerHTML =
          'Хотите выбрать тариф "Starter"?';
      } else if (
        triggerElement.querySelector(".pricing__item-name").innerHTML ==
        "Professional"
      ) {
        modal__290.querySelector(".modal__title").innerHTML =
          'Хотите выбрать тариф "Professional"?';
      }
      openModal();
    }
  });

  function closeModal() {
    modal__290.classList.add("hide");
    modal__290.classList.add("fade");
    modal__290.classList.remove("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal__290.classList.add("show");
    modal__290.classList.add("jumps");

    modal__290.classList.remove("hide");
    document.body.style.overflow = "hidden";

    // clearInterval(modalTimerId);
    // window.removeEventListener("scroll", showModalByScroll);
  }

  document.addEventListener("click", (e) => {
    if (e.target === modal__290 || e.target === modalCloseBtn) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal__290.classList.contains("show")) {
      closeModal();
    }
  });
});