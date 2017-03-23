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
  interval: 686000,
  pause: "true"
});



  $(document).ready(function(){
        
         $(".disable-img").eq(0).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").slideDown("slow");
         })

         $(".disable-img").eq(1).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").hide();
         })

         $(".disable-img").eq(2).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").hide();
         })

         $(".disable-img").eq(3).click(function(){
             ShowServices();
             $(this).css("opacity","0");
             $(".development").hide();
         })
          
     })


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