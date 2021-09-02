

const btn = document.getElementById("btn-test")

const validate = (value, rule, message) => rule.test(value) ? true : alert(message)
const usernameValidation = () => {

    const username = document.getElementById("username").value;
    const usernameRegex = /^[a-zA-Z0-9]*$/;
    const usernameMsg = "username is not written properly";

    validate(username, usernameRegex, usernameMsg)

}



const emailValidation = () => {
    const email = document.getElementById("email").value;
    const emailRegex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
    const emailMsg = "email is not written properly";

    validate(email, emailRegex, emailMsg)



}

const passwordValidation = () => {

    const password = document.getElementById("password").value;
    const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;
    const passwordMsg = "password is not written properly"
    validate(password, passwordRegex, passwordMsg)

}

const inpustsValidation = () => {
    usernameValidation()
    emailValidation()
    passwordValidation()
    // goAway()

}
btn.addEventListener("click", inpustsValidation)

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

