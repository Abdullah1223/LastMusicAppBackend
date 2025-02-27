const jwt = require('jsonwebtoken')
const CreatingJwtTokens = (payload,res)=>{
     
     const token = jwt.sign({payload},process.env.SECRET_KEY,{ expiresIn: '15m' })
             res.cookie('token', token, {
               
                httpOnly: true,
                secure: false,
                sameSite:'Strict',
               // sameSite: 'None',
                maxAge: 15*60*1000,
            });
    


}
module.exports = CreatingJwtTokens