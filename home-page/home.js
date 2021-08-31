
var myTag = document.getElementById("tag");

var tagButton = document.getElementById("spec-button");

tagButton.onclick = function () {

    if (myTag.style.display !== "none") {

        myTag.style.display = "none";
    } else {
        myTag.style.display = "block"
    }
}







