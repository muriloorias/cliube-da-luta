function goToClub() {
      window.location.href = "club.html"
}
function goToMirinha(){
      window.location.href = "spiderman.html"
}

function gotoSuport(){
      window.location.href = "support.html"
}

function goToHome(){
      window.location.href = "initial.html"
}

document.getElementById("item1").addEventListener("click", goToClub);
document.getElementById("item2").addEventListener("click", goToMirinha);
document.getElementById("goToSuport").addEventListener("click", gotoSuport);
document.getElementById("goToInitial").addEventListener("click", goToHome);