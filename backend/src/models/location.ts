import { ILocation } from "../types/location";
import { model, Schema } from 'mongoose';

const locationSchema: Schema = new Schema(
    {
        coords:{
            type: Array<Number>,
            required: true
        }
    }

)

const Location = model<ILocation>("Location", locationSchema)

export {Location, locationSchema}