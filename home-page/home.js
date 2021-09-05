const myTag2 = document.getElementById("tag2");
const logout = document.getElementById("logout")
const tagButton2 = document.getElementById("spec-button2");
const myTag = document.getElementById("tag")
const tagButton = document.getElementById("spec-button");

tagButton.onclick = function () {
    if (myTag.style.display !== "none") {
        myTag.style.display = "none";
        displayData()
    } else {
        myTag.style.display = "block"
    }
}



tagButton2.onclick = function () {
    if (myTag2.style.display !== "none") {
        myTag2.style.display = "none";
        displayData()
    } else {
        myTag2.style.display = "block"
    }
}

function displayData() {
    if (localStorage.getItem("formData")) {
        let { username, email, password } = JSON.parse(localStorage.getItem("formData"));
        console.log("json:", localStorage.getItem("formData"))
        var output = document.getElementById("output");
        output.innerHTML = `
            <p>NAME: <span>${username}</span></p>
            <p>Email: <span>${email}</span></p>
            <p>Password: <span>${password}</span></p>
        `;
    }
}

logout.addEventListener('click', () => localStorage.clear())






