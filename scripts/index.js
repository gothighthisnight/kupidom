const items = document.querySelectorAll('.faq__item')

items.forEach(item => {
    const header = item.querySelector('.faq__header')

    const listener_function = function () {
        items.forEach(i => i != item && i.classList.remove('active'))

        item.classList.toggle('active')
    }

    header.addEventListener('click', listener_function)
})