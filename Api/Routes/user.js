const router = require("express").Router()

router.get("/usertest", (req, res) =>{
    res.send("this route is working")
})

module.exports = router