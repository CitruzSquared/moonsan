let footnotebox = document.getElementById("footnotebox");
let footnotecontainer = document.getElementById("footnotecontainer");
function changer(x) {
	id = x + "-text";
	var footnote = document.getElementById(id).innerHTML;
	var footnoteNumber = footnote.substring(footnote.indexOf("["), footnote.indexOf("]") + 1);
	var footnoteText = footnote.substring(footnote.indexOf("]") + 1, footnote.length);
	footnotecontainer.innerHTML = `<p class='footnotetext'> FOOTNOTE </p> <span style='color:#94886c'>" + ${footnoteNumber} + "</span>" ${footnoteText}`;
	footnotebox.style.bottom = "0px";
}

function retainer() {
	footnotebox.style.bottom = "0px";
}

function returner() {
	h = -1 * footnotebox.offsetHeight
	footnotebox.style.bottom = h + "px";
}
