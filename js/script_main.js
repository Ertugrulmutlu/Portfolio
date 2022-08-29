
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    console.log("scroll : " + scroll)
    if(scroll >=300 & scroll <= 600){
        $('.text_2').css({
            opacity:  (scroll /1300)
        })
    }
    if(scroll ==600){
        $('.text_2').css({
            opacity:  (1)
        })  
    }
    if(scroll >=900 & scroll <= 1500){
        $('.text_3').css({
            opacity: (scroll/2400)
        })
    }
    
    if(scroll == 1900){
        $('.text_3').css({
            opacity: (1)
        })  
    }
})
