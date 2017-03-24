

  var scrolled =false;
  $(document).ready(function(){
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

        if($(window).scrollTop() > 200)
        {
             $(".navbar-inverse").css("backgroundColor","rgba(255, 255, 255, 0.78)");
        }

    
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
       
         
         $(window).scroll(function(){
             scrolled = true;
         })
         
          if(scrolled=true)
          {
              ChnageScrollNav();
          }
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
     function removeActiveClass()
     {
         $.each( $('.navbar-nav a'),function(i,item){
            $(item).removeClass('active-nav');
         })
     }
     function ChnageScrollNav()
     {
         var countCharg= false;
         $(window).scroll(function() {
                
                 
                 if ($(this).scrollTop() <= $('.chiffre-cle').offset().top-100 && $(this).scrollTop()  >=100) {
                       removeActiveClass();
                       $(".navbar-inverse").css("backgroundColor","white");
                       if(!countCharg)
                       {
                           $('#count1').animateNumber({ number: 35 }, 3000);
                           $('#count2').animateNumber({ number: 1123 }, 3000);
                           $('#count3').animateNumber({ number: 22 }, 3000);
                           $('#count4').animateNumber({ number: 14 }, 3000);
                           countCharg=true;
                       }
                }
                if ($(this).scrollTop() >= $('.aboutus').offset().top-300) {
                      removeActiveClass();
                     $('.navbar-nav a').eq(0).addClass('active-nav');
                }

                if ($(this).scrollTop() >= $('.offre-tarifs').offset().top-300) {
                     removeActiveClass();
                     $('.navbar-nav a').eq(1).addClass('active-nav');
                }

                if ($(this).scrollTop() >= $('.partners').offset().top-300) {
                     removeActiveClass();
                     $('.navbar-nav a').eq(2).addClass('active-nav');
                }
                if ($(this).scrollTop() >= $('.actualites').offset().top-300) {
                     removeActiveClass();
                     $('.navbar-nav a').eq(3).addClass('active-nav');
                }
                if ($(this).scrollTop() >= $('.contact').offset().top-300) {
                     removeActiveClass();
                     $('.navbar-nav a').eq(4).addClass('active-nav');
                }
              

            });
     }
     function ScrollToDiv()
     {
         $(".navbar-nav li a").eq(0).click(function(e){
           
             $('html,body').animate({
                    scrollTop: $(".aboutus").offset().top-100},
                    'slow');
         })
         $(".navbar-nav li a").eq(1).click(function(e){
           
             $('html,body').animate({
                    scrollTop: $(".offre-tarifs").offset().top-120},
                    'slow');

         })
         $(".navbar-nav li a").eq(2).click(function(e){
           
             $('html,body').animate({
                    scrollTop: $(".partners").offset().top-60},
                    'slow');

         })

         $(".navbar-nav li a").eq(3).click(function(e){
           
             $('html,body').animate({
                    scrollTop: $(".actualites").offset().top-60},
                    'slow');

         })
         $(".navbar-nav li a").eq(4).click(function(e){
           
             $('html,body').animate({
                    scrollTop: $(".contact").offset().top-60},
                    'slow');

         })
         
     }