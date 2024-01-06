$(function () {
  $("#inputCheckIn").datepicker();
  $("#inputCheckOut").datepicker();

  $('.level-slider').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

  });


  function videoToggle() {
    video = $('.level-video').get(0)
    if (video.paused) {
      video.play();
      $('.video-control-play').hide();
      $('.video-control-pause').show();
    } else {
      video.pause();
      $('.video-control-play').show();
      $('.video-control-pause').hide();
    }
  }

  $('.video-control-play').click(function () {
    videoToggle();
  })
  $('.video-control-pause').click(function () {
    videoToggle();
  })

});

// Select active Class 


const links = document.querySelectorAll(".level-nav-link");
links.forEach( link =>{
  link.addEventListener("click", (e)=>{
    e.target.parentElement.querySelectorAll(".active").forEach(li =>{
      li.classList.remove("active")
    })
    e.target.classList.add("active")
  })
  
})