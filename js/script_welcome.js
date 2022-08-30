
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var width = window.screen.availWidth;
    console.log("scroll : " + scroll + "width : " + (width-400))
    $('.bg-image').css({
        filter: "blur(" +  (scroll/100) + "px)"
    })
    if (scroll >= (width+400)){
        $('.bg-text').animate({
            opacity: '1'
        },"slow") 
    }
})