function defineAcceuil() {
window.onscroll = function(e) {
if (this.oldScroll > this.scrollY == false) {
	backgroundTransition(false);
}
else if (this.oldScroll < this.scrollY == false){
	backgroundTransition(true);
}
 	this.oldScroll = this.scrollY;
}
function backgroundTransition(x) {
	if (x==true) {
		document.body.classList.add("transition");
		document.getElementsByClassName("acceuil__main-1__image")[0].classList.add("transition");
		document.getElementsByClassName("acceuil__main-2__image")[0].classList.add("transition");
	}
	else if (x==false) {
		document.body.classList.remove("transition");
		document.getElementsByClassName("acceuil__main-1__image")[0].classList.remove("transition");
		document.getElementsByClassName("acceuil__main-2__image")[0].classList.remove("transition");
	}
}
}
function defineHamburger(x) {
	hamburger__clicked = true;
	document.getElementById("hamburger__toggle").addEventListener("click", function() {
		if (hamburger__clicked==true) {
			document.getElementById("navbar").classList.add("transition");
			document.getElementById(x+"__main").classList.add("transition");
			hamburger__clicked = false;
		}
		else if (hamburger__clicked == false) {
			document.getElementById("navbar").classList.remove("transition");
			document.getElementById(x+"__main").classList.remove("transition");
			hamburger__clicked = true;
		}
	});
}
function defineAbout() {
	defineHamburger("about");
}

function defineContact() {
	defineHamburger("contact");
}
	
defineScript()

function defineScript() {
	if (document.title == "Accueil") {
		defineAcceuil();
	}
	else if (document.title == "About") {
		defineAbout();
	
	}
	else if (document.title == "Contact") {
		defineContact();
	}
}