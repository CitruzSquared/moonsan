let footnotebox = document.getElementById("footnotebox");
function changer(x) {
	id = x + "-text";
	var f = document.getElementById(id).innerText;
	footnotebox.innerHTML = f;
	footnotebox.style.bottom = "0px";
}

function retainer() {
	footnotebox.style.bottom = "0px";
}

function returner() {
	h = -1 * footnotebox.offsetHeight
	footnotebox.style.bottom = h + "px";
}
