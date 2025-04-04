function deposit() {
    document.getElementById('content').style.filter = 'blur(10px)'
    document.getElementById('deposit-window').style.top = '30%'
    
    setTimeout(() => {
        document.getElementById('content').setAttribute('onclick', 'close_window()')
    }, 800);
}


function close_window() {
    document.getElementById('content').style.filter = 'blur(0px)'
    document.getElementById('deposit-window').style.top = '-60%'
    document.getElementById('content').setAttribute('onclick', '')
}