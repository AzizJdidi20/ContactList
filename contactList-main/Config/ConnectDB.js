const mongoose = require("mongoose")

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://alaachibapr:WaYDbU4Qh5lrs30P@cluster0.kuwydf4.mongodb.net/contactlist?retryWrites=true&w=majority")
        console.log("mongoose connected")

    } catch(err) {
        console.error(err);
    }
}

module.exports = ConnectDB