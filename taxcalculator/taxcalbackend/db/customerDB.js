let pgPool;

module.exports = (injectedPgPool) => {
    pgPool = injectedPgPool;

    return {
        getCustomer: getCustomer,

    };
};

//get customer info
function getCustomer(cid, cbFunc) {
    const getCustomerQuery = `SELECT * FROM customer WHERE cid = '${cid}';`;

    pgPool.query(getCustomerQuery, (response) => {
        const contents =
            response.results.rows

        cbFunc(contents);
    });
}
