const jwt = require('jsonwebtoken');
function auth(req,res,next)
{
    try{
        const token = req.cookie.token;
        if(!token)
        {
            return res.status(401).json({errorMessage: "unauthorized"});
        }
        const verified = jwt.verify(token,JWT_SECRET);
        req.user = verified.user;
        next();
    }

    catch(err){
        console.error(err);
        res.status(401).json({errorMessage: "unauthorized"});
    }
}

module.exports = auth;