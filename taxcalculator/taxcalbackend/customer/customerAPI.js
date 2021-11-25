let customerDB;


module.exports = (injectedinitDB) => {
    customerDB = injectedinitDB;
    return {

        getCustomer: getCustomer,
    };

};
//get customer info

function getCustomer(req, res) {
    customerDB.getCustomer(req.body.cid,(response) => {
        res.send(response)
    })
}
