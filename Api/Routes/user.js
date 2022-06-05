const router = require("express").Router()

router.get("/usertest", (req, res) =>{
    res.send("this route is working")
})

router.post("/posttest", (req,res)=>{
    const username = req.body.username
    res.send(username)
})

module.exports = router