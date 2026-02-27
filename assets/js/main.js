$(document).ready(function() {

    // Typing animation
    if ($('.typing').length) {
        new Typed('.typing', {
            strings: ["Developer", "Software Engineer", "UI/UX Enthusiast"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });
    }

    // Smooth scroll
    $('.nav-menu a').on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

});