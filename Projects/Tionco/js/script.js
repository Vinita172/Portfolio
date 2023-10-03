$('#owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1024:{
            items:3
        }
    }
})

$('#owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:4
        },
        1024:{
            items:5
        }
    }
})

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

AOS.init();