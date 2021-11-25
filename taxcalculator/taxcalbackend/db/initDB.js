let pgPool;

module.exports = (injectedPgPool) => {
    pgPool = injectedPgPool;

    return {
        initcustomerDB: initcustomerDB,
        inititemDB:inititemDB

    };
};

//initiate customer Database
function initcustomerDB(cbFunc) {
    const initQuery = `CREATE TABLE IF NOT EXISTS customer (
        cid text PRIMARY KEY,
        c_name text,
        c_country text,
        c_state text,
        c_zip text,
        c_shiping numeric
        );
        INSERT INTO customer values ('1','Tom Cat','CA','ON','M5V 2T6',10),
        ('2','Jerry Mouse','US','NJ','07446',16.50),
        ('3','Donald Duck','US','NY','10541',7.99),
        ('4','Mickey Mouse','CA','NS','B3J 2K9',8),
        ('5','Anakin Skywalker','US','FL','32801',16.95);`;

    pgPool.query(initQuery, (response) => {
        console.log('customerDB initiate!')
        console.log(response.error)
        cbFunc(response);
    });
}

//initiate item Database

function inititemDB(cbFunc) {
    const initQuery = `CREATE TABLE IF NOT EXISTS item (
        itemid text PRIMARY KEY,
        item_name text,
        item_price numeric
        );
        INSERT INTO item values ('1','apple',1.5),
        ('2','banana',2),
        ('3','orange',1.8),
        ('4','grapes',5),
        ('5','mango',4.5);`;

    pgPool.query(initQuery, (response) => {
        console.log('itemDB initiate!')
        console.log(response.error)

        cbFunc(response);
    });
}