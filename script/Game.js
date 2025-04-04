var user_balance = document.getElementById('balance')


function open_position(name) {
    let back = document.getElementById('back');
    back.style.opacity = 0.6
    back.style.zIndex = 50

    let window = document.getElementById('position')
    window.style.bottom = '0px'
    window.style.opacity = 1

    document.getElementById('pic').setAttribute('src', `static/images/pepe_${name-1}.gif`)

    if (name > 8) {
        document.getElementById('pic').setAttribute('src', `static/images/cap_${name-1}.gif`)
    }

    if (name > 14) {
        document.getElementById('pic').setAttribute('src', `static/images/peach_${name-1}.gif`)
    }
}

function hide() {
    let back = document.getElementById('back');
    back.style.opacity = 0
    back.style.zIndex = -1

    let window = document.getElementById('position')
    window.style.bottom = '-400px'
    window.style.opacity = 0
}