const mongoose = require('mongoose')

const url = 'mongodb+srv://riyabhakta22:2204@cluster0.nne3co7.mongodb.net/'

const dbConnection = async () => {
    try {
        await mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnection;