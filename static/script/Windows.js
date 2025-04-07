function deposit() {
    document.getElementById('deposit-window').style.transform = 'scale(1, 1)'
    document.getElementById('deposit-window').style.scale = 1
    document.getElementById('content').style.filter = 'blur(13px)'
    document.getElementById('content').style.scale = 1.2
    document.getElementById('deposit-window').style.top = '15%'
    
    setTimeout(() => {
        document.getElementById('content').setAttribute('onclick', 'close_window()')
    }, 800);
}


function close_window() {
    document.getElementById('deposit-window').style.transform = 'scale(1, 2)'
    document.getElementById('content').style.scale = 1
    document.getElementById('content').style.filter = 'blur(0px)'
    document.getElementById('deposit-window').style.top = '-120%'
    document.getElementById('deposit-window').style.scale = 0.5
    document.getElementById('content').setAttribute('onclick', '')

    document.getElementById('notify-window').style.top = '-120%'
    document.getElementById('notify-window').style.scale = 0.5
}

// Deposit chooser
var deposit_method = 'stars'

function choose_value(value) {
    document.getElementById('v100').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'
    document.getElementById('v250').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'
    document.getElementById('v500').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'
    document.getElementById('v1000').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'
    document.getElementById('v2500').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'
    document.getElementById('v5000').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'
    document.getElementById('v7500').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'
    document.getElementById('v10000').style = 'opacity:0.7;border:1px solid rgb(54, 54, 54);'


    id = 'v' + value;
    document.getElementById(id).style = 'opacity:1;border:1px solid grey;'
    document.getElementById('final-deposit-value').innerHTML = value;
}

ton_prices = {100: 0.55, 250: 1.6, 500: 3.2, 1000: 6.4, 2500: 16, 5000: 31.9, 7500: 49.4, 10000: 63.1}

function convert_stars_to_ton(stars) {
    return ((stars * 0.015) / TON).toFixed(2)
}

function choose_system(method) {
    if (method == 'ton') {
        document.getElementById('tonmethod').style.opacity = 1;
        document.getElementById('starsmethod').style.opacity = 0.5;

        document.getElementById('v100').innerHTML = `${convert_stars_to_ton(100)} <img class='ton' style='left: 3px;position:relative;'>`
        document.getElementById('v250').innerHTML = `${convert_stars_to_ton(250)} <img class='ton' style='left: 3px;position:relative;'>`
        document.getElementById('v500').innerHTML = `${convert_stars_to_ton(500)} <img class='ton' style='left: 3px;position:relative;'>`
        document.getElementById('v1000').innerHTML = `${convert_stars_to_ton(1000)} <img class='ton' style='left: 3px;position:relative;'>`
        document.getElementById('v2500').innerHTML = `${convert_stars_to_ton(2500)} <img class='ton' style='left: 3px;position:relative;'>`
        document.getElementById('v5000').innerHTML = `${convert_stars_to_ton(5000)} <img class='ton' style='left: 3px;position:relative;'>`
        document.getElementById('v7500').innerHTML = `${convert_stars_to_ton(7500)} <img class='ton' style='left: 3px;position:relative;'>`
        document.getElementById('v10000').innerHTML = `${convert_stars_to_ton(10000)} <img class='ton' style='left: 3px;position:relative;'>`

        reset()
    }
    if (method == 'stars') {
        document.getElementById('tonmethod').style.opacity = 0.5;
        document.getElementById('starsmethod').style.opacity = 1;

        document.getElementById('v100').innerHTML = `100 <a class='star' style='left: 3px;position:relative;'></a>`
        document.getElementById('v250').innerHTML = `250 <a class='star' style='left: 3px;position:relative;'></a>`
        document.getElementById('v500').innerHTML = `500 <a class='star' style='left: 3px;position:relative;'></a>`
        document.getElementById('v1000').innerHTML = `1000 <a class='star' style='left: 3px;position:relative;'></a>`
        document.getElementById('v2500').innerHTML = `2500 <a class='star' style='left: 3px;position:relative;'></a>`
        document.getElementById('v5000').innerHTML = `5000 <a class='star' style='left: 3px;position:relative;'></a>`
        document.getElementById('v7500').innerHTML = `7500 <a class='star' style='left: 3px;position:relative;'></a>`
        document.getElementById('v10000').innerHTML = `10000 <a class='star' style='left: 3px;position:relative;'></a>`

        reset()
    }
}

choose_value(100)