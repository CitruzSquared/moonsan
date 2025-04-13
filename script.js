let footnotebox = document.getElementById("footnotebox");
function changer(x) {
	id = x + "-text";
	var f = document.getElementById(id).innerHTML;
	footnotebox.innerHTML = f;
	footnotebox.style.display = "block";
}

function retainer() {
	footnotebox.style.display = "block";
}

function returner() {
	footnotebox.style.display = "none";
}
