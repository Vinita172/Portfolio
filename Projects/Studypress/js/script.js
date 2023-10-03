$('#owl-carousel-1').owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  })

  $(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

$('#owl-carousel-2').owlCarousel({
  loop: true,
  margin: 10,
  // nav: true,
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    }
  }
})

$('#owl-carousel-3').owlCarousel({
  loop: true,
  margin: 10,
  // nav: true,
  dots:false,
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 3
    },
    1024: {
      items: 5
    }
  }
})


AOS.init();