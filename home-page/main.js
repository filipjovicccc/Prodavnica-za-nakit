
var myTag = document.getElementById("tag");

var tagButton = document.getElementById("spec-button");

tagButton.onclick = function () {

    if (myTag.style.display !== "none") {

        myTag.style.display = "none";
    } else {
        myTag.style.display = "block"
    }
}

var myTagTwo = document.getElementById("tag2");

var tagButton = document.getElementById("spec-buttonTwo");

tagButton.onmouseover = function () {

    if (myTagTwo.style.display !== "none") {

        myTagTwo.style.display = "none";
    } else {
        myTagTwo.style.display = "block"
    }
}





