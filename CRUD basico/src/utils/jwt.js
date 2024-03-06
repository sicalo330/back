import jwt from "jsonwebtoken";

export function generateAccesToken (arg){
    console.log(arg)
    return jwt.sign(arg, process.env.TOKEN, {expiresIn: '60m'})
}

exports.validateToken = function(req,res,next){
    const accesToken = req.headers['authorization'].split(' ')[1] || req.query.accesToken
    if(!accesToken) res.status(401).send('Acceso denegado')

    jwt.verify(accesToken, process.env.TOKEN, (err, user) => {
        if(err){
            res.status(401).send('Acceso denegado, Token expirando o incorrecto')
        }
        else{
            req.user = user
            next()
        }
    })
}