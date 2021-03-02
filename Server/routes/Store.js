const router = require('express').Router();
const Store = require("../models/StoreModel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const auth = require('../Middlewares/auth');

router.get('/',(req,res)=>{
    res.send(" In Store backend ")
});
//Register the Store
router.post("/register", auth , async(req,res)=>{
    try
    {
        const {sid,password,name,location,bid} = req.body;
        if(!sid || !password || !name || !location || !bid)
        {
            return res.status(400).json({ errorMessage:"Please enter all required field: "});
        }
        if (password.length < 6 )
        {
            return res.status(400).json({ errorMessage:"Please enter a password more than 6 chracters: "});
        }
        //To check if sid already exist 
        const existingID = await Store.findOne({sid,sid})
        if (existingID)
        {
           return res.status(400).json({ errorMessage:"A Store with this Id already exists: "});
        }
        //hash the password encryption 
        const salt = bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);
        
        //Saving data to DB 
        const newStore = new Store({
            sid,
            passwordHash,
            sname,
            slocation,
            bid
        });
        const savedStore = newStore.save();
        
        //LOGING IN THE USER
        const token = jwt.sign({
            store: savedStore._id
        }, process.env.JWT_SECRET);

        //send the cookie to http_only
        res.cookie("token", token, {
            httpOnly:true
        }).send();
    }
    catch(err)
    {
        console.error(err);
        res.status(500).send();    
    }

});

//Log In authentication 
router.post('/login', async(req,res)=>{
    try
    {
        const {sid,password} = req.body;
        if(!sid || !password)
        {
            return res.status(400).json({ errorMessage:"Please enter all required field: "});
        }
        const existingID = await Store.findOne({sid,sid})
        if (!existingID)
        {
           return res.status(400).json({ errorMessage:"A Store with this Id does not exists register the store: "});
        }
        const passCorrect = await bcrypt.compare(password,existingID.passwordHash);
        if (!passCorrect)
        {
           return res.status(400).json({ errorMessage:"Wrong email or password "});
        }
        //LOGING IN THE USER
        const token = jwt.sign({
            store: existingID._id
        },process.env.JWT_SECRET);
    
        //send the cookie to http_only
        res.cookie("token", token, {
            httpOnly:true
        }).send();
    }
    catch(err){
        console.error(err);
        res.status(500).send();
    }
});

// logout 
router.get('/logout', (req,res) =>{
    res.cookie("token","" , {
        httpOnly:true,
        expires: new Date(0)
    }).send();
});

module.exports = router; 
