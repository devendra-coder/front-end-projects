const loadtext = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring, 30) //this is used for miliseconds
function blurring(){
    load++

    if(load>99){
        clearInterval(int) //stops the increment of load value at 100
    }

    loadtext.innerText = `${load}%`
    loadtext.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
} //this fuction maps the load value to opacity such that when the load value becomes 100 the opacity becomes 0