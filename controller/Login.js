const RegisterModel = require("../model/Register");


const Login = (req,res) => {
    const {email,password} = req.body;
    RegisterModel.findOne({email: email}, (err, result) => {
        if(result){
            if(password === result.password){
                res.json({message: "Login Successfully."});
            }else{
                res.json({message: "Password Incorrect!"});
            }
        }else {
            res.json({message: "You are Not Register Please first Register!"});
        }
    })
}

module.exports = Login;