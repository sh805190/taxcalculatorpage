
module.exports = (router, app, itemAPI) => {
    router.post("/getinfo", app, itemAPI.getItem);

    return router;
};