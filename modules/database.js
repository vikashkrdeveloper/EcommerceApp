const { emit } = require('nodemon');
const mongoose = require('../db/connect');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true

    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true

    },
    password: {
        type: String,
    }
})

schema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const modele = mongoose.model('registration', schema);


module.exports = modele;