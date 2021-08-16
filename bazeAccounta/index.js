const express = require("express");

const requestParsiranje = require("body-parser");

const app = express();

app.use(requestParsiranje.urlencoded({ extended: true }));


app.get("/", requestParsiranje.urlencoded({ extended: true }), (req, res) => {
    console.log(req.body);

    res.send(`
    <div>
    <form method="POST">
      <input name="email" placeholder="email"/>
      <input name="password" placeholder="password"/>
      <input name="potvrdaSifre" placeholder="password confirmation"/>
      <button>Sign Up</button>
    </form>
    </div>`);
});
app.post("/", (req, res) => {

    console.log(req)




    res.send("Account is created")
});

// app.post("/products", requestParsiranje.urlencoded({ extended: true }), (req, res) => { })


app.listen(3000, () => {
    console.log("Listening")
})