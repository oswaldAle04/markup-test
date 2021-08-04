jQuery(function($){

    // CUSTOM PREV AND NEXT BUTTONS FOR CAROUSEL (THE SVG ELEMENTS ARE ICONS)
    const prevButton = `
    <button type="button" class="carousel__arrow carousel__arrow--prev">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66663 11.3332L1.33329 5.99983L6.66663 0.666492" stroke="#EC4133" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>; 
    </button>`;
    
    const nextButton = `
    <button type="button" class="carousel__arrow carousel__arrow--next">
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.33337 0.66684L6.66671 6.00017L1.33337 11.3335" stroke="#EC4133" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>`;


    // ACTIVATE SLICK CAROUSEL
    $('.carousel__list').slick({
        dots: true,
        arrows: false,
        dotsClass: 'carousel__dots',
        responsive: [
            {
                breakpoint: 1264,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    prevArrow: prevButton,
                    nextArrow: nextButton,
                }
            },
        ]
    });

    // ADD carousel__dot CLASS BASED IN BEM METHODOLOGY
    $('.carousel__dots li').addClass('carousel__dot');
    

    // ADD carousel__dot--active CLASS TO DOT ACTIVE BASED IN BEM METHODOLOGY
    function addDocActiveClass(){
        $('.carousel__dots li').removeClass('carousel__dot--active');
        $('.carousel__dots li.slick-active').addClass('carousel__dot--active');
    }

    // AFTER CHANGE SLIDE, ADD ACTIVE CLASS TO CORRECT DOT
    $('.carousel__list').on('afterChange', function(){
        addDocActiveClass();
    });

    // ADD ACTIVE CLASS TO CORRECT DOT
    addDocActiveClass();
});