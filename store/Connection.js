const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://admin:admin1234@cluster0-bglak.mongodb.net/test?retryWrites=true&w=majority';


const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}