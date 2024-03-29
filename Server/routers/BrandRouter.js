const router = require("express").Router();
const User = require("../models/BrandModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register

router.post("/", async (req, res) => {
  try {
    const {bid,email,password,bname,btype,bowner} = req.body;
        
    if(!bid || !email || !password || !bname || !btype || !bowner)
    {
         return res.status(400).json({ errorMessage:"Please enter all required field: "});
    }
    if (password.length < 6 )
    {
        return res.status(400).json({ errorMessage:"Please enter a password more than 6 chracters: "});
    }

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db

    const newUser = new User({
      bid,
      email,
      passwordHash,
      bname,
      btype,
      bowner
    });

    const savedUser = await newUser.save();

    // sign the token

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
});

router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);
    console.log(req.user);
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

router.get("/show", async (req, res) => {
  try {
    const brands = await User.find();
    res.json(brands);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get('/name', async(req,res)=>{
  const id = req.user;
  try{
    const brand = await User.findOne(id);
    res.json(brand);
  }catch(err){
    console.log(err);
  }
})
  
module.exports = router;

