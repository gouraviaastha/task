const jwt  = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";


const auth = (req,res,next)=> {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1]
            jwt.verify(token, SECRET_KEY,(err,user)=>
            {if(err){
                if(err.name==='TokenExpiredError'){
                    res.status(400).json({msg:"Token Expiried"})
                }
                else{
                    res.status(400).json({msg:"Invalid user"})
                }
            }
            req.userId = user.id;
            
        });
           
        }
        else{
            return res.status(404).json({massage: "Un Authorized user"})
        }
        next();
    }catch(error){
        console.log(error)
        res.status(401).json({massage: "Unothoeizer user"})
    }
}

module.exports =auth