$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
  infinite: true
})
$('.slider-nav').slick({
  asNavFor: '.slider-for',
  focusOnSelect: true,
  pauseOnFocus: true,
  dots: true,
  arrows: true,
  centerMode: true,
  infinite: true
})

$('.js-btn').on('click', function (e) {
  const target = e.target

  if (target.classList.contains('unclick')) {
    target.classList.remove('unclick')
    target.classList.add('clicked')

    setTimeout(function () {
      target.classList.remove('clicked')
      target.classList.add('unclick')
    }, 135)
  }
})

$('.event-show-more').on('click', function (e) {
  const target = e.target
  const block = target.previousElementSibling

  if (block.classList.contains('hidden')) {
    block.classList.remove('hidden')
    target.innerHTML = "Свернуть  <span class='show-arrow'>&#9650</span>"
  } else if (!block.classList.contains('hidden')) {
    block.classList.add('hidden')
    target.innerHTML = "Подробнее  <span class='show-arrow'>&#9660</span>"
  }
})

$(document).ready(function () {
  $('#review-a').on('click', function (event) {
    // отменяем стандартную обработку нажатия по ссылке
    event.preventDefault()

    // забираем идентификатор бока с атрибута href
    var id = $(this).attr('href')

    // узнаем высоту от начала страницы до блока на который ссылается якорь

    var top = $(id).offset().top

    // анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate(
      {
        scrollTop: top
      },
      1500
    )
  })
})
