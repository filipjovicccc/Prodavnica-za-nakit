

const form = document.querySelector("form");

form.onsubmit = function (event) {

    {
        let formData = {
            firstname: document.getElementById("firstname").value,
            lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }
        localStorage.setItem("formData", JSON.stringify(formData));
        // console.log(localStorage.getItem("formData"));
        displayData()
        event.preventDefault()
    }
}


function displayData() {
    if (localStorage.getItem("formData")) {
        let { firstname, lastname, email, password } =
            JSON.parse(localStorage.getItem("formData"));
        var output = document.getElementById("output");
        output.innerHTML = `
        <table>
        <tbody>
        <tr>
                  <td>First Name:</td>
                  <td>${firstname}</td>
        </tr>
        <tr>
                  <td>Last Name:</td>
                  <td>${lastname}</td>
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

// const signUp = e => {
//     let formData = {
//         firstname: document.getElementById("firstname").value,
//         lastname: document.getElementById("lastname").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value
//     }
//     localStorage.setItem("formData", JSON.stringify(formData));
//     console.log(localStorage.getItem("formData"))
//     e.preventDefault();
// }












