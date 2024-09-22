function sendToWhatsApp() {
  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var message = document.getElementById("message").value.trim();

  var errorMessage = document.querySelector(".error-message");
  var sentMessage = document.querySelector(".sent-message");

  errorMessage.style.display = "none";
  sentMessage.style.display = "none";
  errorMessage.innerHTML = "";


  if (name === "" || phone === "" || message === "") {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = " يرجى تعبئة جميع الحقول المطلوبة اولا.";
  }
  var whatsappMessage = `الاسم: ${name}\nرقم الهاتف: ${phone}\nالرسالة: ${message}`;

  var whatsappNumber = "01227588809";
  var url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(url, "_blank");
  sentMessage.style.display = "block";
  sentMessage.innerHTML = "تم إرسال رسالتك. شكرا لك!";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  setTimeout(() => {
    sentMessage.style.display = "none";
  }, 5000);
}
/********************************************************************** */
(function () {
  "use strict";
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });


  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }

  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          // console.log(section+'\n'+scrollMarginTop);
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });


  
  let navmenulinks = document.querySelectorAll(".navmenu a");
    function navmenuScrollspy() {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        // console.log(navmenulink.hash)
        let section = document.querySelector(navmenulink.hash);
        // console.log(section)
        if (!section) return;
        let position = window.scrollY + 200;
        // console.log(window.scrollY)
        if (position >= section.offsetTop &&position <= section.offsetTop + section.offsetHeight) {
          console.log(section.offsetHeight,'\n', section.offsetTop);
          document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } 
        else {
          navmenulink.classList.remove("active");
        }
      });
    }
    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);
 
  let servicesList = document.querySelectorAll('.services-list a');
  // console.log(servicesList)
  function servicesListScrollspy() {
    servicesList.forEach((service) => {
      if (!service.hash) return;
      let section = document.querySelector(service.hash);
      if (!section) return;
      let position = window.scrollY + 100;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll(".services-list a.active").forEach((link) => link.classList.remove("active"));
        service.classList.add("active");
      } 
      else {
        service.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", servicesListScrollspy);
  document.addEventListener("scroll", servicesListScrollspy);

  function aosInit() {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);


  new PureCounter();

  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
    },
  });
})();
