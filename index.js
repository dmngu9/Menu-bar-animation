function init() {
    const location = document.getElementById('location')
    const locationIcon = document.getElementsByClassName('locationIcon')[0]
    const contact = document.getElementById('contact')
    const contactIcon = document.getElementsByClassName('contactIcon')[0]
    const trash = document.getElementById('trash')
    const trashIcon = document.getElementsByClassName('trashIcon')[0]
    const nav = document.getElementById('nav')

    location.addEventListener('mouseenter', () => {
        const backgroundPos = window.getComputedStyle(nav, ':before').getPropertyValue('left')
        trashIcon.classList.remove('trashIconHover', 'trashIconWiggle')
        contactIcon.classList.remove('contactIconHoverToRight', 'contactIconHoverToLeft')
        nav.classList.remove('trashHoverFromContactAnimation', 'trashHoverFromLocationAnimation', 'contactHoverFromLocationAnimation', 'contactHoverFromTrashAnimation')
        locationIcon.classList.add('locationIconHover')

        if (backgroundPos === '225px') {
            nav.classList.remove('locationHoverFromTrashAnimation')
            nav.classList.add('locationHoverFromContactAnimation')
        } else if (backgroundPos === '400px') {
            nav.classList.remove('locationHoverFromContactAnimation')
            nav.classList.add('locationHoverFromTrashAnimation')
        }
    })

    contact.addEventListener('mouseenter', () => {
        const backgroundPos = window.getComputedStyle(nav, ':before').getPropertyValue('left')
        locationIcon.classList.remove('locationIconHover', 'locationIconWiggle')
        trashIcon.classList.remove('trashIconHover', 'trashIconWiggle')
        nav.classList.remove('locationHoverFromTrashAnimation', 'locationHoverFromContactAnimation', 'trashHoverFromContactAnimation', 'trashHoverFromLocationAnimation')

        if (backgroundPos === '50px') {
            nav.classList.remove('contactHoverFromTrashAnimation')
            nav.classList.add('contactHoverFromLocationAnimation')
            contactIcon.classList.add('contactIconHoverToRight')
            trashIcon.classList.add('trashIconWiggle')
        } else if (backgroundPos === '400px') {
            nav.classList.remove('contactHoverFromLocationAnimation')
            nav.classList.add('contactHoverFromTrashAnimation')
            contactIcon.classList.add('contactIconHoverToLeft')
            locationIcon.classList.add('locationIconWiggle')
        }
    })

    trash.addEventListener('mouseenter', () => {
        const backgroundPos = window.getComputedStyle(nav, ':before').getPropertyValue('left')
        locationIcon.classList.remove('locationIconHover', 'locationIconWiggle')
        contactIcon.classList.remove('contactIconHoverToRight', 'contactIconHoverToLeft')
        nav.classList.remove('locationHoverFromTrashAnimation', 'locationHoverFromContactAnimation', 'contactHoverFromTrashAnimation', 'contactHoverFromLocationAnimation')
        trashIcon.classList.add('trashIconHover')

        if (backgroundPos === '50px') {
            nav.classList.remove('trashHoverFromContactAnimation')
            nav.classList.add('trashHoverFromLocationAnimation')
        } else if (backgroundPos === '225px') {
            nav.classList.remove('trashHoverFromLocationAnimation')
            nav.classList.add('trashHoverFromContactAnimation')
        }
    })
}

window.onload = init
