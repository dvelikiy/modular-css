$(document).ready(function(){
    $(".header__menu-btn").hover(
        function(){
            $(".header__line01").toggleClass("header__line01--mouseover");
            $(".header__line02").toggleClass("header__line02--mouseover");
            $(".header__line03").toggleClass("header__line03--mouseover");
            $(".header__line04").toggleClass("header__line04--mouseover");
        }
    );
});
