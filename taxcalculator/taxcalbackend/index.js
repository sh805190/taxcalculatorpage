const pgPool = require("./db/dbconfig");
const initDB = require("./db/initDB")(pgPool);
const customerDB = require("./db/customerDB")(pgPool);
const itemDB = require("./db/itemDB")(pgPool);



const express = require("express");
var axios = require('axios');

const app = express();
app.all("*", function (req, res, next) {
    //Set domain names that allow cross-domain, * means that any domain name is allowed to cross-domain
    res.header("Access-Control-Allow-Origin", "*");
    //Allowed header types
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    //Cross-domain allowed request methods
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");


    if (req.method.toLowerCase() === 'options')
        res.sendStatus(200); //Let options try to request a quick end
    else
        next();
})

var config = {
    method: 'get',
    url: 'http://localhost:4000/init/initcDB',
};
var config2 = {
    method: 'get',
    url: 'http://localhost:4000/init/initiDB',
};

const initDBService = require("./init/initAPI.js")(initDB);
const initDBRoutes = require("./init/initAPIroutes.js")(
    express.Router(),
    app,
    initDBService
);
app.use(express.urlencoded({ extended: true }));

app.use("/init", initDBRoutes);

const customerService = require("./customer/customerAPI")(customerDB);
const customerRoutes = require("./customer/customerAPIroutes")(
    express.Router(),
    app,
    customerService
);
app.use("/customer", customerRoutes);


const itemService = require("./item/itemAPI")(itemDB);
const itemRoutes = require("./item/itemAPIroutes")(
    express.Router(),
    app,
    itemService
);
app.use("/item", itemRoutes);


const taxService = require("./calculatetax/calculateAPI");
const taxRoutes = require("./calculatetax/calculateRoutes")(
    express.Router(),
    app,
    taxService
);
app.use("/tax", taxRoutes);


const port = 4000;
app.listen(port, () => {

    console.log(`listening on port ${port}`);
    axios(config)
        .catch(function (error) {
            console.log(error);
        });

    axios(config2).catch(function (error) {
        console.log(error);
    });



});