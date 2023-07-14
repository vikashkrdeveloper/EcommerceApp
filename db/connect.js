const mongoose = require('mongoose');
const database = "mongodb://127.0.0.1:27017/ecommurce";
mongoose.connect(database)
    .then(() => {
        console.log("data base connected");
    })
    .catch((error) => {
        console.log(`ERROR! ${error}`);
    })

module.exports = mongoose;