
const photoaboutOne = document.querySelector('.photoaboutOne')

let root = document.documentElement;
// const active = document.querySelector('.active')


const scrollBar = () => {
    const scroll = window.scrollY
    

    const lefttoScroll = document.body.getBoundingClientRect().height - window.innerHeight
    
    const scrollWidth = Math.floor((scroll/lefttoScroll) *100)

    root.style.setProperty('--scroll-width', `${scrollWidth}%`)


    if (photoaboutOne  > 2 ) {
        photoaboutOne.classList.add('photoaboutOneblock')
}
}

window.addEventListener('scroll', scrollBar)