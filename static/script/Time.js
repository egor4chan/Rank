var number = 2;

function edit(number) {
    var item_id = `p${number}`
    document.getElementById(item_id).style.opacity =  2
    document.getElementById(item_id).style.scale = 1.1

    var item_old_id = `p${number-1}`
    document.getElementById(item_old_id).style.opacity =  0.6
    document.getElementById(item_old_id).style.scale = 1
}

edit(number)
number++;

setInterval(() => {
    edit(number)
    number++;
}, 2620);