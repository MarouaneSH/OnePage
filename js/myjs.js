var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 4000,
  pause: "true"
});



  $(document).ready(function(){
        
          ScrollToDiv();


         $(".disable-img").eq(0).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").slideDown("slow");
               $(".espace").hide();
               $(".courrier ").hide();
               $(".reunion").hide();
         })

         $(".disable-img").eq(1).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").hide();
             $(".espace").slideDown();
             $(".courrier ").hide();
             $(".reunion").hide();
         })

         $(".disable-img").eq(2).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").hide();
              $(".espace").hide();
               $(".courrier ").slideDown();
               $(".reunion").hide();
         })

         $(".disable-img").eq(3).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").hide();
              $(".espace").hide();
             $(".courrier ").hide();
             $(".reunion").slideDown();
         })
         $("#sd").click(function(){
            $('#sd').animateNumber({ number: 165 }, 8000);
         })
         
          
     })


     function animateNumber()
     {
          $(".count").prop('Counter',0).animate({
           Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
    });
     }

     var display = false;
     function ShowServices(){
     
            if(!display)
           {
                $(".img-service ").animate({
                    "height":"80px"
                })
                  $(".img-service img").animate({
                    "width":"100px"
                })
                $(".offre-tarifs h3").animate({
                    "font-size":"15px"
                })
                
                $(".img-service").parent().children(".disable-img").css("opacity","0.7");
                $(".offre-tarifs").css('backgroundColor',"white")
                display=true;
             } 
             else
             {
                $(".img-service").parent().children(".disable-img").css("opacity","0.7");
             }    
     }


     function ScrollToDiv()
     {
         $(".navbar-nav li a").eq(0).click(function(e){
           
             $('html,body').animate({
                    scrollTop: $(".aboutus").offset().top},
                    'slow');

         })
     }