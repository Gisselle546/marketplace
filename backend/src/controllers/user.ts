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
const register = async (req: Request, res: Response) =>{
    try {
        const { email, password } = req.body

        if (!email || !password) {
          return res.status(403).send('please provide all values')
        }
        const userAlreadyExists = await User.findOne({ email })
        if (userAlreadyExists) {
          return res.status(403).send('Email already in use')
        }
        
        const user = await User.create({ email, password})
        // const token = user.createJWT()

        const token: any = jwt.sign({
            user:user
           }, process.env.JWT_SECRET!, { expiresIn: 60 * 60 });      
           res.status(200).json({accesstoken:token});
   
        } catch (error) {
    throw error
    }
}

const login = async (req: Request, res: Response) => {
  try{
    const { email, password } = req.body
    
    if (!email || !password) {
      throw new Error('please provide all values')
    }

    const user = await User.findOne({ email })
    
    if (!user) {
      return res.status(403).send('Please Sign Up, User not found')
    }
    
    const isMatch = await bcrypt.compareSync(password, user.password)
   
    if(!isMatch){

      return res.status(403).send('Password do not match')
    }
    
    const token: any = jwt.sign({
      user:user
     }, process.env.JWT_SECRET!, { expiresIn: 60 * 60 });      
     res.status(200).json({accesstoken:token});
   
  } catch(error){
    return res.status(403).send('User is not found')
  }
}

const getMe = (req: any, res: any) =>{
  const {user} = req;
  if(!user){
    return res.status(403).send('Please Sign Up, User not found')
  }
  console.log(user);
  return res.status(200).json(user)
}

const verify_token = async(req: any, res:any, next:any) => {
    const token =
      req.body.token || req.query.token || req.headers["authorization"].split(" ")[1]

   
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      console.log(process.env.JWT_SECRET)
      const decoded = await jwt.verify(token, process.env.JWT_SECRET!);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("err");
    }
    return next();
  };


export {register, login, verify_token, getMe }
