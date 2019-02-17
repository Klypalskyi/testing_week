let actionBtn = document.querySelector('.header-btn');

actionBtn.addEventListener('click', clickBtnHandle)

function clickBtnHandle(e) {
    e.preventDefault();

    const target = e.target;

    target.classList.add('clicked');

    // target.style.add("background: linear-gradient(to top, #0f0808, #af0000)")

    // setTimeout( function() {
    //     target.classList.remove('clicked')
    // }, 5000)
}