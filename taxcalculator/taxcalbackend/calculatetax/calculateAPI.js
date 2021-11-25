const { default: axios } = require("axios");

module.exports = {
    calculatetax: calculatetax,
};
//calculate the tax needed to pay
async function calculatetax(req, res) {
    var qs = require('qs');

    var data1 = qs.stringify({
        'cid': req.body.cid
    });
    var config1 = {
        method: 'post',
        url: 'http://localhost:4000/customer/getinfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data1
    };

    var data2 = qs.stringify({
        'itemid': req.body.itemid
    });
    var config2 = {
        method: 'post',
        url: 'http://localhost:4000/item/getinfo',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data2
    };
    const customer = await axios(config1);
    const item = await axios(config2);
    const customer1 = customer.data;
    const item1 = item.data;
    const cname=customer1[0].c_name;
    var data3 = JSON.stringify({
        "to_country": customer1[0].c_country,
        "to_zip": customer1[0].c_zip,
        "to_state": customer1[0].c_state,
        "shipping": customer1[0].c_shiping,
        "line_items": [
            {
                "quantity": req.body.quantity,
                "unit_price": item1[0].item_price
            }
        ]
    });

    var config3 = {
        method: 'post',
        url: 'https://api.taxjar.com/v2/taxes',
        headers: {
            'Authorization': 'Token token=4516438061e26a974057af94e3a93f69',
            'Content-Type': 'application/json'
        },
        data: data3
    };
    axios(config3).then((response) => {
        var taxfinal = response.data.tax['amount_to_collect'];
        res.send({ 'taxtopay': taxfinal ,'customer':cname})
    });


}