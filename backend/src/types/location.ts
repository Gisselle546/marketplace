import { Document } from "mongoose"

export interface ILocation extends Document{
    coords: Array<number>;
}