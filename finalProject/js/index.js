let currentdate = document.lastModified;
let date = new Date();
let year = date.getFullYear();
let date_now = new Date();
let dayOfWeek = date.getDay();
let fulldate = new Intl.DateTimeFormat ('en-US', { dateStyle: 'full'}).format(date_now);


let before = document.querySelector('#year').textContent;
let before1 = document.querySelector('#javadate').textContent;

document.querySelector("#year").textContent = before + year + ' .:|:. Jordan Kraude .:|:. WDD 230 Project';
document.querySelector('#javadate').textContent = before1 + currentdate;


let display = document.getElementById("year").textContent;



let button = document.querySelector('.btn');
button.addEventListener('click', show)

function show() {
    let hiddenNav = document.getElementById('hiddenNav')

    if (hiddenNav.style.display == 'none'){
        hiddenNav.style.display = 'flex'
    }
    else{
        hiddenNav.style.display = 'none'
    }
    

}

let images = document.querySelectorAll('img');
let pimages = document.querySelectorAll('[data-src]');


const options = {
    threshold: .5,
    rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    else {
        img.src = source;
    }
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting){

            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target)
            }
            
        });
        
    },options
    
)

images.forEach(image => {
    io.observe(image)
})

