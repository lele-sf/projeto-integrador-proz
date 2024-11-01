const p = document.querySelectorAll('p')[1]
p.style.fontSize = '15px'
p.style.fontWeight = 500

let count = 1
document.getElementById('radio1'). checked = true

setInterval(function(){
    nextImage()
}, 5000)

function nextImage(){
    count++
    if(count>4){
        count = 1
    }

    document.getElementById('radio' + count). checked = true

}

