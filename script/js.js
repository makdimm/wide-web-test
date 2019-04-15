$('.main-slick').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows:false
});

$('.small-slick').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows:false,
     responsive: [
     {
       breakpoint: 800,
       settings: {
        slidesToShow: 5,
      }
    },
   {
     breakpoint: 600,
     settings: {
      slidesToShow: 4,
    }
  },
  {
    breakpoint: 500,
    settings: {
        slidesToShow: 3,
    }
  },
  {
    breakpoint: 420,
    settings: {
        slidesToShow: 1,
    }
  }
  ]
});


document.getElementById('burger').onclick=function(){
link();
};
function link(){
  document.getElementById('burger').classList.toggle('menu-link-active');
  document.getElementById('nav-ul').classList.toggle('nav-ul-link');
  document.getElementById("body").classList.toggle("scroll");
}