document.getElementById("container").addEventListener("scroll", () => {
    var scroll = document.getElementById("container").scrollTop;
    console.log(scroll)
    document.documentElement.style.setProperty('--title-position', scroll + "px");
    
    console.log("position" , document.documentElement.style.getPropertyValue('--cursor-position'))
    console.log("position ant" , document.documentElement.style.getPropertyValue('--anteater-position'))

    console.log(window.innerHeight*3)
    animateElement(scroll)
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function animateElement(position) {

    if (position > 0 && position < window.innerHeight/4) {
        document.getElementById("html-cursor").classList.remove('animate');
        document.getElementById("css-cursor").classList.remove('animate');
        document.getElementById("js-cursor").classList.remove('animate');

    }
    else if (position > window.innerHeight*3/4 && position < window.innerHeight*1.25) {
        document.getElementById("html-cursor").classList.remove('animate');
        document.getElementById("css-cursor").classList.remove('animate');
        document.getElementById("js-cursor").classList.remove('animate');


    }
    else if (position > window.innerHeight*1.75 && position < window.innerHeight*2.25) {
        document.getElementById("html-cursor").classList.add('animate');
        document.getElementById("css-cursor").classList.add('animate');
        document.getElementById("js-cursor").classList.add('animate');


    }
    else if (position > window.innerHeight*2.75 && position < window.innerHeight*3) {
        document.getElementById("html-cursor").classList.add('animate');
        document.getElementById("css-cursor").classList.add('animate');
        document.getElementById("js-cursor").classList.add('animate');
    }
}

