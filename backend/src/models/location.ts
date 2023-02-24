import { ILocation } from "../types/location";
import { model, Schema } from 'mongoose';

const locationSchema: Schema = new Schema(
    {
        coords: {
            location:{
               
                lat:{
                    type: Number
                }, 
                lng: {
                    type: Number
                }
            }
        }
    }

)

const Location = model<ILocation>("Location", locationSchema)

export {Location, locationSchema}