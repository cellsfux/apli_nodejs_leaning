var jwt = require('jsonwebtoken');
require('dotenv').config();

 const SECRET_KEY=process.env.SECRET_KEY;


module.exports={
    /**
     * cette fonction permet de generer le token
     * @param {UserInfo} userData 
     * @returns token string
     */
    generationToken: (userData)=>{
        return jwt.sign({
            userId: userData._id,
            role: userData.roles
        },
        SECRET_KEY,
        {
            expiresIn:"1h"
        })

    },

    /**
     * on verifie que le token est present
     * @param {Header:hautorization} autho 
     * @returns 
     */
    parseAuth:(autho)=>{
        return (autho!==null) ? autho.replace('Bearer', ''): null
    },

    /**
     * 
     * @param {aut} autho 
     */
    getUserId: function(autho){
        var userId=-1;
        var token= module.exports.parseAuth(autho);
        if(token!=null){
            try {
                var jwtToken=jwt.verify(token, SECRET_KEY);
                if(jwtToken!=null)
                userId=jwtToken.userId;
            } catch (error) {
                
            }
        }
    }









}