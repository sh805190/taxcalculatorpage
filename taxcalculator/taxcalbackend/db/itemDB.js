let pgPool;

module.exports = (injectedPgPool) => {
    pgPool = injectedPgPool;

    return {
        getItem: getItem,

    };
};

//get item info
function getItem(itemid, cbFunc) {
    const getItemQuery = `SELECT * FROM item WHERE itemid = '${itemid}';`;

    pgPool.query(getItemQuery, (response) => {
        const contents =
            response.results.rows

        cbFunc(contents);
    });
}
