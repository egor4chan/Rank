var user_balance = document.getElementById('balance')


function open_position(name) {
    let back = document.getElementById('back');
    back.style.opacity = 0.6
    back.style.zIndex = 50

    let window = document.getElementById('position')
    window.style.bottom = '0px'
    window.style.opacity = 1

    document.getElementById('pic').setAttribute('src', `static/images/gifs-low/pepe_${name-1}-min.gif`)

    if (name > 8) {
        document.getElementById('pic').setAttribute('src', `static/images/gifs-low/cap_${name-1}-min.gif`)
    }

    if (name > 14) {
        document.getElementById('pic').setAttribute('src', `static/images/gifs-low/peach_${name-1}-min.gif`)
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