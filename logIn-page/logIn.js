


const signUp = e => {

    let formData = {
        username: document.getElementById("username").value,
        // lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData"));
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

















