const title = document.querySelector('.title')

document. addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.2 + 'px'
    title.style.zIndex = value > 422 ? -1 : 1;
})