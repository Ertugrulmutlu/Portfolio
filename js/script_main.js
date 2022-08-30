
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var width = window.screen.availWidth;
    var width_x = width/3
    console.log(width)
    console.log("scroll : "+ scroll)
    if (scroll > width_x & scroll < width_x*2){
        $('.text_2').animate({
            left:  '50%'

        },"slow")  
    }
    if (scroll > width_x*2){
        $('.text_3').animate({
            left:  '50%'
        },"slow")  
        $('.text_3_lower').animate({
            left:  '56%'
        },"slow") 
    }
     
})
