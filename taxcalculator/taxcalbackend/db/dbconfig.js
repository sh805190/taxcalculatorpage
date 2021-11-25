module.exports = {
    query: query,
};

const Pool = require("pg").Pool;
// create a pool for every time calling the database and don't need to put the connection setting everywhere
function query(queryString, cbFunc) {
    const pool = new Pool({
        user: "postgres",
        host: "host.docker.internal",
        database: "postgres",
        password: "123456",
        port: 5432,
    })
    .on('connect', () => {
        console.log('connect to database')
    })
    .on('error', (err) => {
        console.log('error connecting to database ', err)
    });

    pool.query(queryString, (error, results) => {
        cbFunc(setResponse(error, results));
    });
}

function setResponse(error, results) {
    return {
        error: error,
        results: results ? results : null,
    };
}