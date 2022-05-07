$(document).ready(function() {
    $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll < 4200) {
            $(".scro").css("margin-top", scroll + "px");
            console.log(scroll);
        }
    })

})