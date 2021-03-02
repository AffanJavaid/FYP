const router = require('express').Router();
const Brands = require("../models/BrandModels");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

router.get('/show',(req,res)=>{
});
//Register the Store
router.post("/register", async(req,res)=>{
    try
    {
        const bid = req.body.bid;
        const email = req.body.email;
        const password = req.body.password;
        const bname = req.body.bname;
        const btype = req.body.btype;
        const bowner = req.body.bowner;

        console.log(bowner);
        
        if(!bid || !email || !password || !bname || !btype || !bowner)
        {
            return res.status(400).json({ errorMessage:"Please enter all required field: "});
        }
        if (password.length < 6 )
        {
            return res.status(400).json({ errorMessage:"Please enter a password more than 6 chracters: "});
        }
        //To check if sid already exist 
        const existingID = await Brand.findOne({email,email})
        if (existingID)
        {
           return res.status(400).json({ errorMessage:"A Store with this Id already exists: "});
        }
        //hash the password encryption 
        const salt = bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);
        
        //Saving data to DB 
        const Brand = new Brands({
            bid,
            email,
            passwordHash,
            bname,
            btype,
            bowner
        });
        const savedBrand = Brand.save().then((result)=>{
            res.json(data);
        }).catch((err)=>{
            console.log(err);
        });
        res.send(savedBrand);
        //LOGING IN THE USER
        const token = jwt.sign({
            brand: savedBrand._id
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
        const {email,password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({ errorMessage:"Please enter all required field: "});
        }
        const existingID = await Store.findOne({email,email})
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
