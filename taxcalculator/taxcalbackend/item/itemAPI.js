let itemDB;


module.exports = (injectedinitDB) => {
    itemDB = injectedinitDB;
    return {

        getItem: getItem,
    };

};
//get item info

function getItem(req, res) {
    itemDB.getItem(req.body.itemid,(response) => {
        res.send(response)
    })
}