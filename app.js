const express = require('express');
const config = require('./config/index');
const database = require('./database/index');
const morgan = require('morgan');
const authUser = require('./middleware/userAuth');
const cookieParser = require('cookie-parser');
//express app
const app = express();
database.connect.then(result => {
        app.listen(config.PORT, (error) => {
            if (error) {
                console.log(error.message);
            } else {
                console.log(`Server is running at PORT: ${config.PORT}`);
            }
        })

        //middlewares
        app.use(express.json());
        app.use(cookieParser());
        app.use(morgan('tiny'))

        //routing of different app
        app.get('*', authUser);
        app.use('/user', require('./routes/user'));
        app.use('/tweet', require('./routes/twitter'));
    })
    .catch(error => {
        console.log(error);
    });

