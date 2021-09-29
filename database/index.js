const mongoose = require('mongoose');
const { URI } = require('../config/index');


exports.connect = new Promise((resolve, reject) => {
    mongoose.connect(URI).then(result => {
            resolve("Connected to database successfully");
        })
        .catch(error => {
            reject(error.message);
        })
})
