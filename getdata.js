let a = document.getElementsByClassName("content-box")[0];

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  a.innerHTML = myText;
}

getText("posts/60mm_FDC.html");
