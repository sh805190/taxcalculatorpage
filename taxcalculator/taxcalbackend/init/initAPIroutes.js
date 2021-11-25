module.exports = (router, app, initAPI) => {
    router.get("/initcDB", app, initAPI.initcustomer);
    router.get("/initiDB", app, initAPI.inititem);

    return router;
};