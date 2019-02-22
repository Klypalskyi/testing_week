$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true
});
$('.slider-nav').slick({
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    pauseOnFocus: true
});

$('.js-btn').on('click', function (e) {
    const target = e.target;

    if (target.classList.contains('unclick')) {
        target.classList.remove('unclick');
        target.classList.add('clicked');

        setTimeout(function () {
            target.classList.remove('clicked');
            target.classList.add('unclick');
        }, 135);
    }
});

$('.event-show-more').on('click', function (e) {
    const target = e.target;
    const block = target.previousElementSibling;

    if (block.classList.contains('hidden')) {
        block.classList.remove('hidden');
        target.innerHTML = "Свернуть  <span class='show-arrow'>&#9650</span>";
    } else if (!block.classList.contains('hidden')) {
        block.classList.add('hidden');
        target.innerHTML = "Подробнее  <span class='show-arrow'>&#9660</span>";
    }

})