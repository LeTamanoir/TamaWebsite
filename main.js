window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    console.log(scroll)
    document.documentElement.style.setProperty('--title-position', scroll + "px");
    
    console.log("position" , document.documentElement.style.getPropertyValue('--cursor-position'))
    console.log("position ant" , document.documentElement.style.getPropertyValue('--anteater-position'))

    if (scroll>window.screen.height) {
        //console.log("limite")
    }
    defineSkillChart(scroll);
    defineAnteater(scroll)
});
window.onload = () => {
    document.getElementById("header").classList.add("onload");
}


function defineAnteater(position) {
    var anteaterPosition = (position/window.innerHeight).toFixed(2);
    console.log("ant pos" , anteaterPosition)
    document.documentElement.style.setProperty('--anteater-position', anteaterPosition);
    

}
function defineSkillChart(position) {
    var cursorPosition = (position/(window.innerHeight*2.4)).toFixed(2);
    document.documentElement.style.setProperty('--cursor-position', cursorPosition);
    if (cursorPosition>1) {
        document.documentElement.style.setProperty('--cursor-position', 1);
    }
}