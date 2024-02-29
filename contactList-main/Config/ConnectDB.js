const mongoose = require("mongoose")

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://AzizJdidi:goKFQL4AUethhehM@cluster0.em55xxw.mongodb.net/ContactList?retryWrites=true&w=majority")
        console.log("mongoose connected")

    } catch(err) {
        console.error(err);
    }
}

module.exports = ConnectDB