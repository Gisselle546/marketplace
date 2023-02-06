
import { ILocation } from "../types/location";
import { IProperty } from "../types/property";
import { model, Schema } from 'mongoose';
import { userSchema } from "./user";
import { locationSchema } from "./location";

const propertySchema: Schema = new Schema({
    photos: {
        type: Array<String>,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bedrooms:{
        type: Number,
        required: true
    },
    landsize: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0,
      },
    title: {
        type: String,
        maxLength: 255,
      },
    
    type: {
        type: String,
        default: "Other", // House, Land, Appartment
      },
    
    action: {
        type: String,
        default: "Sell",
      },
    sold:{ type: Boolean, default: false },
    postedBy: userSchema,
    location: locationSchema
})

const Property = model<IProperty>("Property", propertySchema)

export {Property, propertySchema}