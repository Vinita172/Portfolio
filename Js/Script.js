// Progress Bar
const circles = document.querySelectorAll('.circle');
    for (var i = 0; i < circles.length; i++){
      var dots = circles[i].getAttribute('data-dots');
      var marked = circles[i].getAttribute('data-percent');
      var percent = Math.floor(dots * marked / 100);
      var rotate = 360 / dots;
      var points = "";
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
      }
      circles[i].innerHTML = points;
      const pointsMarked = circles[i].querySelectorAll('.points');
      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
      }
  }

  
//work slider
$(document).ready(function () {
      

  $('.slide-buttons1 li:nth-child(1)').on('mouseenter', function () {
    $('.slide-buttons1 li.active').removeClass('active');
    $('.section-inner.show').removeClass("show");
    $('.section-inner:nth-child(1)').addClass("show");
    $('.slide-buttons1 li:nth-child(1)').addClass('active');
    $('.btnexplore.btnactive').removeClass("btnactive");
    $('#btn1').addClass('btnactive');
    $('.pimg1.scroll').removeClass("scroll");
    $('.pimg:nth-child(1)').addClass("scroll");
  })
  $('.slide-buttons1 li:nth-child(2)').on('mouseenter', function () {
    $('.slide-buttons1 li.active').removeClass('active');
    $('.section-inner.show').removeClass("show");
    $('.section-inner:nth-child(2)').addClass("show");
    $('.slide-buttons1 li:nth-child(2)').addClass('active');
     $('.btnexplore.btnactive').removeClass("btnactive");
    $('#btn2').addClass('btnactive');
  })
  $('.slide-buttons1 li:nth-child(3)').on('mouseenter', function () {
    $('.slide-buttons1 li.active').removeClass('active');
    $('.section-inner.show').removeClass("show");
    $('.section-inner:nth-child(3)').addClass("show");
    $('.slide-buttons1 li:nth-child(3)').addClass('active');
     $('.btnexplore.btnactive').removeClass("btnactive");
    $('#btn3').addClass('btnactive');
  })
  $('.slide-buttons1 li:nth-child(4)').on('mouseenter', function () {
    $('.slide-buttons1 li.active').removeClass('active');
    $('.section-inner.show').removeClass("show");
    $('.section-inner:nth-child(4)').addClass("show");
    $('.slide-buttons1 li:nth-child(4)').addClass('active');
     $('.btnexplore.btnactive').removeClass("btnactive");
    $('#btn4').addClass('btnactive');
  })
  $('.slide-buttons1 li:nth-child(5)').on('mouseenter', function () {
    $('.slide-buttons1 li.active').removeClass('active');
    $('.section-inner.show').removeClass("show");
    $('.section-inner:nth-child(5)').addClass("show");
    $('.slide-buttons1 li:nth-child(5)').addClass('active');
     $('.btnexplore.btnactive').removeClass("btnactive");
    $('#btn5').addClass('btnactive');
  })
  $('.slide-buttons1 li:nth-child(6)').on('mouseenter', function () {
    $('.slide-buttons1 li.active').removeClass('active');
    $('.section-inner.show').removeClass("show");
    $('.section-inner:nth-child(6)').addClass("show");
    $('.slide-buttons1 li:nth-child(6)').addClass('active');
     $('.btnexplore.btnactive').removeClass("btnactive");
    $('#btn6').addClass('btnactive');
  })
  $('.slide-buttons1 li:nth-child(1)').trigger('mouseenter');

  
});
//work img hover

$(document).ready(function () {
  $('.pimg1').on('mouseenter', function () {
    $('.pimg1').css('backgroundPosition', 'bottom center');
    $('.img-wrap1').css('opacity', '1');

  });
  $('.pimg1').on('mouseout', function () {
    $('.pimg1').css('backgroundPosition', 'top center');
    $('.img-wrap1').css('opacity', '0.3');
  });

});




  AOS.init();


  window.addEventListener('scroll', function() {
    var element = document.querySelector('#skills');
    var position = element.getBoundingClientRect();
  
    // checking for partial visibility
    if(position.top < window.innerHeight && position.bottom >= 0) {
      const circles = document.querySelectorAll('.circle');
    for (var i = 0; i < circles.length; i++){
      var dots = circles[i].getAttribute('data-dots');
      var marked = circles[i].getAttribute('data-percent');
      var percent = Math.floor(dots * marked / 100);
      var rotate = 360 / dots;
      var points = "";
      for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
      }
      circles[i].innerHTML = points;
      const pointsMarked = circles[i].querySelectorAll('.points');
      for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
      }
  }
    }
  });