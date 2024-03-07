$(document).ready(function() {
     $('#fullpage').fullpage({
    navigation: true,
    controlArrows: true,
    slidesNavigation: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    css3: true,
    scrollingSpeed: 1000,
            afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            if(index == 1){
              $("#testHref").attr("href", "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/16298904_10210374840119441_4343738811110309957_n.jpg?oh=1dba7a188084cbbe8db52a8faab0f5af&oe=591A081B");
              $("#tpost1").addClass("animated fadeInLeft visible");
              $("#num1").addClass("animated fadeIn visible");
            }
            if(index == 2){
              $("#testHref").attr("href", "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/16298878_10210374840079440_8801720068969115942_n.jpg?oh=6cb1d2d2be80daa1206d77fe15b28ae1&oe=5922164B");
              $("#tpost2").addClass("animated fadeInLeft visible");
              $("#num2").addClass("animated fadeIn visible");
            }
            if(index == 3){
              $("#testHref").attr("href", "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/16194884_10210374840039439_4870334366794750541_n.jpg?oh=a57d25eb4efda259a0d1b8567a147c81&oe=59140244");
              $("#tpost3").addClass("animated fadeInLeft visible");
              $("#num3").addClass("animated fadeIn visible");
            }
           if(index == 4){
              $("#testHref").attr("href", "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/16174949_10210374840399448_8086592900095937553_n.jpg?oh=59ef5070720a5c46e02be812cc77d80c&oe=59064E21");
              $("#tpost4").addClass("animated fadeInLeft visible");
              $("#num4").addClass("animated fadeIn visible");
            }
        }
  });

 $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });
   $('.itemMenu').click(function(){
    $('#nav-icon').toggleClass('open');
    $(".sidenav").toggleClass('full');
    $(".itemMenu").toggleClass('full');
    $(".itemMenu").toggleClass('appear');
  });

  $('#test').click(function(){
    $(".about").toggleClass('full');
    $(".arrow").toggleClass('appear');
  });

});