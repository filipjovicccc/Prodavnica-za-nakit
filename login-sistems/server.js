const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
// const { json } = require("express")

app.use(express.json())

const users = []      //u pravoj aplikaciji treba ici u bazu pdoataka, ane ispisivati ovako



app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', async (req, res) => {
    try {

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }




})

app.post('/users/login', async (req, res) => {

    const user = users.find(user => user.name = req.body.name)

    if (users == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {

            res.send("Sucsses")
        } else {
            res.send("Not Allowed")
        }
    } catch {
        res.status(500).send()
    }

})

app.listen(3000)