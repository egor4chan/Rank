function download(file_name) {
    var gif = document.createElement('img')
    gif.setAttribute('src', `static/images/gifs/${file_name}.gif`)

    gif.onload = function() {
        document.getElementById(`${file_name}`).setAttribute('src', `static/images/gifs/${file_name}.gif`)
    }
}

download('pepe_0')
download('pepe_1')
download('pepe_2')
download('pepe_3')
download('pepe_4')
download('pepe_5')
download('pepe_6')
download('pepe_7')

download('cap_8')
download('cap_9')
download('cap_10')
download('cap_11')
download('cap_12')
download('cap_13')

download('peach_14')
download('peach_15')
download('peach_16')
download('peach_17')