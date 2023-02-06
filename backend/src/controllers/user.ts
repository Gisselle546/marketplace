import { Response, Request } from "express"
import { User } from "../models/user";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


/**
 * usually you would have a user for auth, but this generates a token everytime someone
 * gets the api
 * @param req usually if there's a request as to get params from the request
 * @param res sends the token 
 */
const register = async (req: Request, res: Response): Promise<void>=>{
    try {
        const { name, email, password, lastname } = req.body

        if (!name || !email || !password) {
          throw new Error('please provide all values')
        }
        const userAlreadyExists = await User.findOne({ email })
        if (userAlreadyExists) {
          throw new Error('Email already in use')
        }
        
        const user = await User.create({ name, email, password, lastname })
        // const token = user.createJWT()

        const token: any = jwt.sign({
            user:user
           }, process.env.JWT_SECRET!, { expiresIn: 60 * 60 });      
           res.status(200).json({accesstoken:token});
   
        } catch (error) {
    throw error
    }
}

const login = async (req: Request, res: Response): Promise<void>=>{
  try{
    const { email, password } = req.body
    console.log(req.body);
    
    if (!email || !password) {
      throw new Error('please provide all values')
    }

    const user = await User.findOne({ email })
    console.log(user);
    if (!user) {
      throw new Error('No user found')
    }
    
    const isMatch = await bcrypt.compareSync(password, user.password)
   
    if(!isMatch){
      throw new Error('Password do not match')
    }
    
    const token: any = jwt.sign({
      user:user
     }, process.env.JWT_SECRET!, { expiresIn: 60 * 60 });      
     res.status(200).json({accesstoken:token});
   
  } catch(error){
    throw error
  }
}

const verify_token = (req: any, res:any, next:any) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(token,  "");
      console.log(decoded)
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  };


export {register, login, verify_token }
