import CrudService from "../../../../services/crud";
import { ExampleModel as Model, UserModel } from "../../../../models";
import jwt from "../../../../helpers/jwt";
import bcrypt from 'bcrypt' ;

const login = async (req, res) => {
console.log(req.body);
  let user = await CrudService.findOne(UserModel, { email: req.body.email});
  
  if (!user) {
    res.status(404).json({
      message: "Error user not found",
    });
    return;
  }
  const isSamePassword = await bcrypt.compare(req.body.password, user.password)
  if(!isSamePassword)
 return res.status(500).json({
    message: "bad password",
  });
    const token = jwt.generateToken({ id: user.user_id});
    res.status(200).json({
      message: "authentification with success",
      data: {token}
    });
    return;
  }

  const register = async (req,res) => {
    const {email, password} = req.body
    const hashPassword = await bcrypt.hash(password,10)
    const user = await CrudService.create(UserModel, {email, password : hashPassword})
    return res.status(user ? 201 : 500).json(
        {
            message : user ? "user created" : "error",
        }
    )
}


 

export default {
  login,
  register
  
}
