import { Document } from "mongoose"



export interface ILocation extends Document{
    coords: {
        location:{
            lat: Number;
            lng: Number;
        }
    };
}