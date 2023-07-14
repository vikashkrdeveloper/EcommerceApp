const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;
const hbs = require('hbs');
const bcrypt=require('bcrypt');
const mongoose = require('../modules/database');
const templates = path.join(__dirname, '../templates/views');
const partials = path.join(__dirname, '../templates/partials');
app.set("view engine", "hbs");
app.set("views", templates);
hbs.registerPartials(partials);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/productdetails/handwash', (req, res) => {
    res.render('productdetails');
})

app.get('/productlisining', (req, res) => {
    res.render('productlisning');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})
app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/home', (req, res) => {
    const { email, password } = req.body;
    const insert = async function () {
        try {
            const emailread = await mongoose.findOne({ email: email });
            const passwordbcrypt=await bcrypt.compare(password,emailread.password);
           console.log(passwordbcrypt);
            if (passwordbcrypt) {
               res.render('home');
               
            }
            else {
                res.send(`<h1>invalid login details</h1>`);
            }
        }
        catch (error) {
            console.log(`ERROR! ${error}`);
        }

    }
    insert();
})

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const insert = async function () {
        try {
            const emailread = await mongoose.findOne({ email: email });
            if (emailread.email === email) {
                res.send(`<h1>This email is already exit</h1>`);

            }
            else {
                const insertdata = new mongoose({
                    name: name,
                    email: email,
                    password: password
                })
                const result = await insertdata.save();
                res.send(`<h1>Signup sucessfully</h1>`);
            }




        }
        catch (error) {
            console.log(`ERROR! ${error}`);
        }

    }
    insert();

})

app.all('*', (req, res) => {
    res.render('error');
})

app.listen(port, (req, res) => {
    console.log(`http://127.0.0.1:${port}`);
})