import { ILocation } from "../types/location";
import { IProperty } from "../types/property";
import { model, Schema } from 'mongoose';
import { userSchema } from "./user";
import { locationSchema } from "./location";

const propertySchema: Schema = new Schema({
    photos: {
        type: Array<String>,
    },
    price: {
        type: Number,
        required: true
    },
    formatted_address: {
        type: String,
        required: true
    },
    google:{
        type: {}
    },
    bedrooms:{
        type: Number,
        required: true
    },
    
    bath:{
        type: Number,
        required: true
    },
    landsize: {
        type: Number,
    },
    description: {
        type: String,
    },
    views: {
        type: Number,
        default: 0,
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