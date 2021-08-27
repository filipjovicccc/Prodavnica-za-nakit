

const form = document.querySelector("form");

form.onsubmit = async function (event) {

    {
        let formData = {
            username: document.getElementById("username").value,
            // lastname: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }
        localStorage.setItem("formData", JSON.stringify(formData));
        console.log(localStorage.getItem("formData"));
        displayData()
        event.preventDefault()

        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
              body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }

        postData('http://localhost:3000/users', formData)
            .then(data => {
                return data.json(); // JSON data parsed by `data.json()` call
            });

    }
}


function displayData() {
    if (localStorage.getItem("formData")) {
        let { username, email, password } =
            JSON.parse(localStorage.getItem("formData"));
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

















