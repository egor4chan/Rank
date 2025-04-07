var user_notifys = 1

function send_notify_window() {
    document.getElementById('content').style.filter = 'blur(13px)'
    document.getElementById('content').style.scale = 1.2;

    setTimeout(() => {
        document.getElementById('content').setAttribute('onclick', 'close_window()')
    }, 300);
}

if (user_notifys > 0) {
    send_notify_window()
}