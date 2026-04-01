// navbar blur 강화
window.addEventListener("scroll",()=>{

    const nav=document.querySelector(".navbar");
  
    if(window.scrollY>50){
      nav.style.background="rgba(0,0,0,0.75)";
    }else{
      nav.style.background="rgba(0,0,0,0.4)";
    }
  });
  
  
  // glass parallax
  document.addEventListener("mousemove",(e)=>{
  
    const glass=document.querySelectorAll(".glass");
  
    let x=(window.innerWidth/2-e.clientX)/40;
    let y=(window.innerHeight/2-e.clientY)/40;
  
    glass.forEach(g=>{
      g.style.transform=`translate(${x}px,${y}px)`;
    });
  
  });

  document.addEventListener("DOMContentLoaded", () => {

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
  
    // hover video play
    document.querySelector(".worksSwiper").addEventListener("mouseover", (e) => {
  
      const card = e.target.closest(".work-video");
      if(!card) return;
  
      const video = card.querySelector("video");
      video.play();
  
    });
  
    document.querySelector(".worksSwiper").addEventListener("mouseout", (e) => {
  
      const card = e.target.closest(".work-video");
      if(!card) return;
  
      const video = card.querySelector("video");
      video.pause();
      video.currentTime = 0;
  
    });
  
  });

  const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close-modal");

const videos = document.querySelectorAll(".swiper-slide video");

videos.forEach(video => {

  video.addEventListener("click", () => {

    const src = video.querySelector("source").src;

    modal.style.display = "flex";
    modalVideo.src = src;
    modalVideo.play();

  });

});

closeBtn.addEventListener("click", () => {

  modal.style.display = "none";
  modalVideo.pause();

});

const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{ threshold:0.2 });

elements.forEach(el => observer.observe(el));

const video = document.querySelectorAll('.work-video');

video.forEach(video => {

    const thumbTime = video.getAttribute('data-time');

    video.addEventListener('loadeddata', () => {
        video.currentTime = thumbTime;
    });

    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = thumbTime;
    });

});

const frames = document.querySelectorAll('.film-frame video');

frames.forEach((video, index) => {
  video.play();
  video.currentTime = index * 0.5; // 프레임별로 0.5초씩 시작 시간 달리
});

const filmVideos = document.querySelectorAll('.film-frame video');

// 속도 늦추기
filmVideos.forEach(video => {
  video.playbackRate = 0.5; // 0.5배 속도로 느리게
});

if(window.innerWidth < 768){

  const videos = document.querySelectorAll("video");

  videos.forEach(video=>{
    video.addEventListener("click",()=>{
      if(video.paused){
        video.play();
      }else{
        video.pause();
      }
    });
  });

}
if(window.innerWidth > 768){

  const frames = document.querySelectorAll('.film-frame video');

  frames.forEach((video, index) => {
    video.play();
    video.currentTime = index * 0.5;
  });

  const filmVideos = document.querySelectorAll('.film-frame video');

  filmVideos.forEach(video => {
    video.playbackRate = 0.5;
  });

}

document.addEventListener("DOMContentLoaded", function(){

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  if(toggle && menu){
    toggle.addEventListener("click", function(){
      menu.classList.toggle("active");
    });
  }

});
