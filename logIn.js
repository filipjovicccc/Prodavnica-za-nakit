const btn = document.getElementById("btn-test")
const usernameInput = document.getElementById("username")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
let isError = false

const validate = (value, rule, message) => rule.test(value) ? isError = false : isError = true

const checkErrors = err => {
    if (err) {
        btn.setAttribute('disabled', 'true')
        btn.setAttribute("style", "background-color: #ddd; border: white");
    } else {
        btn.removeAttribute('disabled')
        btn.removeAttribute("style", "background-color: #ddd; border: white");
    }
}

const passwordValidation = () => {
    const password = document.getElementById("password").value
    const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/
    const passwordMsg = "Check your password, needs to have at least 8 charactecrs and a number"

    validate(password, passwordRegex, passwordMsg)
    console.log(passwordRegex.test(password));

    if (!passwordRegex.test(password)) {
        alert(passwordMsg)//password
    }

    checkErrors(isError)
}

const usernameValidation = () => {
    const username = document.getElementById("username").value
    const usernameRegex = /^[a-zA-Z0-9]*$/
    const usernameMsg = "username is not written properly"

    validate(username, usernameRegex, usernameMsg)

    checkErrors(isError)
}

const emailValidation = () => {
    const email = document.getElementById("email").value
    const emailRegex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/
    const emailMsg = "email is not written properly"

    validate(email, emailRegex, emailMsg)

    checkErrors(isError)
}


// With this self invoke function (IIFE) we initialize some test users in our register list
(function () {
    let store_users = []

    // test user 1
    let up1 = {
        username: 'marko',
        email: 'marko@gmail.com',
        password: 'marko@1993'
    }

    // test user 2
    let up2 = {
        username: 'filip',
        email: 'filip@gmail.com',
        password: 'filip@1993'
    }

    // check if register_users exist
    const reg_users = JSON.parse(localStorage.getItem('register_users'))

    if (!reg_users) {
        store_users.push(up1)
        store_users.push(up2)

        // pass array to initialize some default test users
        localStorage.setItem('register_users', JSON.stringify(store_users))
    }

    console.log("Application is live!");

}())

const onSignIn = e => {
    e.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value

    const failMsg = 'account is incorrect! Please register your account.'

    // check login data in localStorage register_users
    const reg_users = JSON.parse(localStorage.getItem('register_users'))
    let current_user = reg_users.find(user => user.email === email)

    // check the user registration by email
    if (!current_user) alert('Account with this email is not registered')
    // check if user username match with input username
    if (current_user.username !== username) return alert('username is incorrect')
    // check if user password match with input password
    if (current_user.password !== password) return alert('password is incorrect')

    // this trick convert return value to boolean
    // if we have object we get true 
    // if undefined we get false
    if (!!current_user) {
        alert(`Login successful! Welcome to Jewelry shop ${current_user.username}`)
        sessionStorage.setItem('currentloggedin', JSON.stringify(current_user))
        window.location.href = "products.html"
    } else {
        alert(failMsg)
    }
}

const signUp = e => {
    e.preventDefault()

    if (usernameInput.value === '') return
    if (emailInput.value === '') return
    if (passwordInput.value === '') return

    if (isError) {
        btn.setAttribute('disabled', 'true')
        btn.setAttribute("style", "background-color: #ddd; border: white");
    } else {
        btn.removeAttribute('disabled')
        btn.removeAttribute("style", "background-color: #ddd; border: white");
    }

    let userForUpdate = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    // get exist register users from localStorage 
    let reg_users = JSON.parse(localStorage.getItem('register_users'))

    // update new user
    reg_users.push(userForUpdate)

    localStorage.setItem("register_users", JSON.stringify(reg_users))

    // directly login user after signup
    sessionStorage.setItem('currentloggedin', JSON.stringify(userForUpdate))
    window.location.href = "signin.html"
}



