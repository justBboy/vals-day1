
(function($){
    $(document).ready(function() {
        $(".preloader").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            let el = $(this);
            setTimeout(() => {
                el.css("display", "none")
                AOS.init()
            }, 1200)
        })

    })
})(jQuery)