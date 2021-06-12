$(".social-link").hover(function (e) {
    $(this).find(".social-link-text").addClass('animate__animated animate__pulse');
});

$(".social-link").mouseleave(function(){
    $(this).find(".social-link-text").removeClass('animate__animated animate__pulse');
});