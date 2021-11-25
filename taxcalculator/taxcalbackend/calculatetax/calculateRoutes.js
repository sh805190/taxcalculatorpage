
module.exports=(router,app,calculateAPI)=>{
    router.post('/gettax',app,calculateAPI.calculatetax)
    return router;
}