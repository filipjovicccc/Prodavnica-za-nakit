



const btn = document.getElementById("btn-test")


btn.addEventListener('click', function () {

    let username = document.getElementById("username").value;
    let nameRegex = /^[a-zA-Z0-9]*$/;
    let nameTest = nameRegex.test(username);

    if (nameTest) {
        // alert("ime je ispravno");
    } else {
        alert("username is not writen properly");
       

    }

})

btn.addEventListener('click', function () {
    let email = document.getElementById("email").value;
    let emailRegex = /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/;
    let emailTest = emailRegex.test(email);

    if (emailTest) {
        // alert("the email is correct");
    } else {

        alert("email is not writen properly");


    }



}

)



btn.addEventListener('click', function () {



    let password = document.getElementById("password").value;
    let passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/;
    let passwordTest = passwordRegex.test(password)
    if (passwordTest) {
        // alert("password je ispravan");
    } else {
        alert("password is not written properly");

    }
}

)









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
    // alert("you can now shop")
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

