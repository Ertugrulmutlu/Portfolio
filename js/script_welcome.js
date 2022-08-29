
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.bg-image').css({
        filter: "blur(" +  (scroll/100) + "px)"
    })
})