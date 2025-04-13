let footnotebox = document.getElementById("footnotebox");
let footnotecontainer = document.getElementById("footnotecontainer");
function changer(x) {
	id = x + "-text";
	var footnote = document.getElementById(id).innerText;
	var footnoteNumber = footnote.substring(0, 3);
	var footnoteText = footnote.substring(3, footnote.length);
	footnotecontainer.innerHTML = "<p style='margin-top: 0px; margin-bottom: 10px; color: #c0c0c0'> <b> FOOTNOTE </b> </p> <span style='color:#94886c'>" + footnoteNumber + "</span>" + footnoteText;
	footnotebox.style.bottom = "0px";
}

function retainer() {
	footnotebox.style.bottom = "0px";
}

function returner() {
	h = -1 * footnotebox.offsetHeight
	footnotebox.style.bottom = h + "px";
}
