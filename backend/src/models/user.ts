import { IUser } from "../types/user";
import { model, Schema } from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema: Schema = new Schema(
    {
        name: {
            type: String,
            minlength:3,
            maxlength:20,
            trim:true
        },
        email: {
            type: String,
            required: [true, 'Please provide email'],
            unique:[true],
            validate:{
                validator: validator.isEmail,
                message: 'Please provide a valid email'
            }
        },
        password: {
            type: String,
            required: [true, 'Please provide password'],
            minlength: 6,
        },
        lastname: {
          type: String,
          minlength: 3,
          maxlength: 20,
          trim: true,
        },
     
    } 
)

userSchema.pre('save', async function () {
    // console.log(this.modifiedPaths())
    if (!this.isModified('password')) return
    const salt = await bcrypt.genSalt(12)
    this.password = await bcrypt.hash(this.password, salt)
  })

const User = model<IUser>("User", userSchema)

export {User, userSchema}