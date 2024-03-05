const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const apiRoutes = require('./routes/index')
const db = require('./models/index')

const {PORT} = require('./config/serverconfig')
const setupAndStartServer = () =>{



    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);

    app.listen(3002,()=>{
        console.log(`server started on port ${PORT}`)

        if(process.env.DB_SYNC){
            db.Sequelize.sync({alter: true});
        }
    })
}

setupAndStartServer();