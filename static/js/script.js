$(document).ready(function() {
    $(window).scroll(fixedNavBar);
});


// //This function toggles a class in the navbar after 200px

function fixedNavBar() {
    $(".navbar__wrapper").toggleClass(
        "navbar__wrapper--small",
        $(this).scrollTop() > 200
    );
};