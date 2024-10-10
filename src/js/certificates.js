document.querySelectorAll('.more').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.parentElement.nextElementSibling

        const isExpanded = button.getAttribute('aria-expanded') === 'true'
        button.setAttribute('aria-expanded', !isExpanded)

        content.style.display = isExpanded ? 'none' : 'block';

        if(isExpanded) {
            content.classList.remove('show')
            setTimeout(() => {
                content.style.display = 'none'
            }, 500)
        } else {
            content.style.display = 'block'
            setTimeout(() => {
                content.classList.add('show')
            }, 10)
        }
    })
})



