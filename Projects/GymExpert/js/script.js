// owl carousel 1
$('#owl-carousel-1').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1
    }
  }
})

//BMI Calculator
$(document).ready(function () {
  $('.calculate').click(function () {
    var weight = parseInt($('#weight').val());
    var height = parseInt($('#height').val());
    var mheight = height * 0.01;
      var bmi=weight/(mheight*mheight);
    console.log(weight, mheight, bmi);
    if (bmi < 18.5) {
      $('.alert1').removeClass('alert-success')
        .addClass('alert-danger')
        .text("Sorry! You are Underweight")
        .show();
      setTimeout(function () {
        $('.alert1').hide(1000);
      }, 2500);
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
      $('.alert1').text("Great! You are Healthy")
      .addClass('alert-success')
        .show();
      setTimeout(function () {
        $('.alert1').hide(1000);
      }, 2500);
    }
    else if (bmi >= 25.0 && bmi <= 29.9) {
      $('.alert1').removeClass('alert-success')
        .addClass('alert-danger')
        .text("Sorry! You are Overweight")
        .show();
      setTimeout(function () {
        $('.alert1').hide(1000);
      }, 2500);
    }
    else {
      $('.alert1').removeClass('alert-success')
        .addClass('alert-danger')
        .text("Sorry! You are Obese")
        .show();
      setTimeout(function () {
        $('.alert1').hide(1000);
      }, 2500);
    }
  });

});


//ow1 carousel 2
$('#owl-carousel-2').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:false,
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


AOS.init();