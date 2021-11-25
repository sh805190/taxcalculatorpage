
module.exports = (router, app, customerAPI) => {
    router.post("/getinfo", app, customerAPI.getCustomer);

    return router;
};