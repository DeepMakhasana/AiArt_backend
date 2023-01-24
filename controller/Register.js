const RegisterModel = require("../model/Register");

const Register = (req,res) => {
    const {username,email,password} = req.body;
    const newUser = new RegisterModel({username,email,password});

    RegisterModel.count({email: email}, (err, result) => {
        if(result) {
            res.json({message: "You are already Register.", responseData: newUser});
        }else{
            newUser.save()
            .then(() => {
                res.status(200).json({message: "Register successfully.", responseData: newUser})
            })
            .catch(err => res.status(400).json({error: err, message: "try agin for Register."}))
        }
    })
}

module.exports = Register;