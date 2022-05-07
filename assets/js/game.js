$(document).ready(function() {
    $(window).scroll(function() {
        let scrolli = $(window).scrollTop();
        console.log(scrolli);
        if (scrolli < 3900) {
            $(".scroi").css("margin-top", scrolli + "px");
            console.log(scrolli);
        }
    })

})