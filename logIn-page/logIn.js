

document.getElementById("btn-test").addEventListener("click", function () {

    let username = document.getElementById("username").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let nameRegex = /^[a-zA-Z0-9]*$/;

    let emailRegex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;

    let passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;







    let nameTest = nameRegex.test(username);

    if (nameTest) {
        alert("ime je ispravno");
    } else {
        alert("ime je neispravno");

    }
    let emailTest = emailRegex.test(email);

    if (emailTest) {
        alert("email je ispravan");

    } else {
        alert("email je neispravan");
    }
    let passwordTest = passwordRegex.test(password)
    if (passwordTest) {
        alert("password je ispravan");
    } else {
        alert("password je neispravan");

    }
})




const signUp = e => {

    let formData = {
        username: document.getElementById("username").value,
        // lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    // console.log(localStorage.getItem("formData"));
    displayData()
    e.preventDefault()
    window.location.href = "../products.html"
    alert("you can now shop")
}


function displayData() {
    if (localStorage.getItem("formData")) {
        let { username, email, password } = JSON.parse(localStorage.getItem("formData"));
        var output = document.getElementById("output");
        output.innerHTML = `
        <table>
        <tbody>
        <tr>
                  <td>Username:</td>
                  <td>${username}</td>
        </tr>

        <tr>
                  <td>Email:</td>
                  <td>${email}</td>
        </tr>
        <tr>
                  <td>Password:</td>
                  <td>${password}</td>
        </tr>

        </tbody>

        </table>

        `;
    }

}
displayData()



























