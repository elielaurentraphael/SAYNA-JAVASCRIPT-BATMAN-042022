$(document).ready(function() {
    $(window).scroll(function() {
        let scrolli = $(window).scrollTop();
        console.log(scrolli);
        if (scrolli < 4800) {
            $(".scroi").css("margin-top", scrolli + "px");
            console.log(scrolli);
        }
    })

})