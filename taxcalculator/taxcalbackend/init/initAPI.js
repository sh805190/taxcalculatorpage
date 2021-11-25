let initDB;


module.exports = (injectedinitDB) => {
    initDB = injectedinitDB;
    return {

        initcustomer: initcustomer,
        inititem: inititem
    };

};
//initiate customer Database

function initcustomer(req, res) {

    initDB.initcustomerDB((response) => {
        res.send(response)
    })
}
//initiate item Database
function inititem(req, res) {

    initDB.inititemDB((response) => {
        res.send(response)
    })
}