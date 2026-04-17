// =========================
// NAVBAR BLUR
// =========================
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.background = "rgba(0,0,0,0.75)";
  } else {
    nav.style.background = "rgba(0,0,0,0.4)";
  }
});


// =========================
// GLASS PARALLAX (PC만)
// =========================
if (window.innerWidth > 768) {
  document.addEventListener("mousemove", (e) => {
    const glass = document.querySelectorAll(".glass");

    let x = (window.innerWidth / 2 - e.clientX) / 40;
    let y = (window.innerHeight / 2 - e.clientY) / 40;

    glass.forEach((g) => {
      g.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}


// =========================
// DOM LOADED
// =========================
document.addEventListener("DOMContentLoaded", () => {

  // SWIPER
  if (typeof Swiper !== "undefined" && document.querySelector(".worksSwiper")) {
    const worksSwiper = new Swiper(".worksSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: false,
      speed: 600,
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
      },
    });
  }


  // =========================
  // WORK VIDEO HOVER
  // =========================
  const workVideos = document.querySelectorAll(".work-video video");

  workVideos.forEach(video => {

    const thumbTime = video.getAttribute("data-time") || 0;

    video.addEventListener("mouseenter", () => {
      video.currentTime = thumbTime;
      video.play();
    });

    video.addEventListener("mouseenter", () => {
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = thumbTime;
    });

  });


  // =========================
  // MODAL VIDEO
  // =========================
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const closeBtn = document.querySelector(".close-modal");

  workVideos.forEach(video => {
    video.addEventListener("click", () => {
      const src = video.querySelector("source").src;
      modal.style.display = "flex";
      modalVideo.src = src;
      modalVideo.play();
    });
  });

  if(closeBtn){
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      modalVideo.pause();
    });
  }


  // =========================
  // FADE UP ANIMATION
  // =========================
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));


  // =========================
  // FILM STRIP (PC만)
  // =========================
  if (window.innerWidth > 768) {
    const filmVideos = document.querySelectorAll(".film-frame video");

    filmVideos.forEach((video, index) => {
      video.play();
      video.currentTime = index * 0.5;
      video.playbackRate = 0.5;
    });
  }


  // =========================
  // MOBILE VIDEO TAP PLAY
  // =========================
  if (window.innerWidth < 768) {
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
      video.addEventListener("click", () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  }


  // =========================
  // HAMBURGER MENU
  // =========================
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

});

if (window.innerWidth <= 768) {
  const filmVideos = document.querySelectorAll(".film-frame video");

  filmVideos.forEach((video) => {
    video.pause();
    video.removeAttribute("autoplay");
    video.currentTime = 0;
  });
}

