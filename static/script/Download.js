function download(file_name) {
    document.getElementById(`${file_name}`).setAttribute('src', `static/images/gifs-low/${file_name}-min.gif`)
}

gifts = ['pepe_0', 'pepe_1', 'pepe_2', 'pepe_3', 'pepe_4', 'pepe_5', 'pepe_6', 'pepe_7', 'cap_8', 'cap_9', 'cap_10', 'cap_11', 'cap_12', 'cap_13', 'peach_14', 'peach_15', 'peach_16', 'peach_17']

for (let i=0; i < gifts.length; i++) {
    let id = gifts[i]
    download(id)
}
