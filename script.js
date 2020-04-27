  $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $(".header").css("background-color","#035");
        $(".firsttitle,.header-navi ul li a").css("color","rgb(218,179,0)");
        $(".header .menu .menu__line").css("background-color","rgb(218,179,0)");
        $(".header-navi ul li a").addClass("a");
    } else {
        $(".header").css("background-color","rgba(0,55,95,.6)");
        $(".firsttitle, .header-navi ul li a").css("color","#eee")
        $(".header .menu .menu__line").css("background-color","#eee");
        $(".header-navi ul li a").removeClass("a");
    }
});

  
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });


    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    var navFlg = false;
  $('.menu').on('click',function(){
      $('.menu__line').toggleClass('active');
      $('.gnav').fadeToggle();
      if(!navFlg){
          $('.gnav__menu__item').each(function(i){
              $(this).delay(i*300).animate({
                  'margin-left' : 0,
                  'opacity' : 1,
              },500);
          });
          navFlg = true;
      }
      else{
          $('.gnav__menu__item').css({
              'margin-left' : 100,
              'opacity' : 0,
          });
          navFlg = false;
      }
  });

  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
  });

  $(window).scroll(function (){
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 120){
            $(this).addClass('scrollin');
        }
    });
  });
  $(window).scroll(function (){
    $('.titles').each(function(){
        var elemPs = $(this).offset().top;
        var scrolls = $(window).scrollTop();
        var windowHeights = $(window).height();
        if (scrolls > elemPs - windowHeights + 120){
            $(this).addClass('titleup');
        }
    });
  });

})
