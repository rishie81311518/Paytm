const express = require("express");
const cors = require('cors');
const rootRouter = require("./routes/index");
const userRouter = require("./routes/user")

const app = express();

const router = express.Router();
router.use(cors());
router.use(express.json());
router.use("/api/v1", rootRouter);
router.use("/user", userRouter);

app.listen(3000);

console.log("server running")
app.get("/",function(req,res){
    res.json("Hello it is working")
})






module.exports = router;



