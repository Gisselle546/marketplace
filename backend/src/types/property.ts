import { ILocation } from './location';
import { Document } from 'mongoose';
import { IUser } from './user';

export interface IProperty extends Document{
    photos?: Array<String>
    price: number;
    address: string;
    bedrooms: number;
    bath: number;
    landsize?: string;
    carpark?: number;
    formatted_address: string;
    description?: string;
    views: number;
    type: string;
    action: string;
    sold: boolean;
    postedBy?: IUser;
    location?: ILocation;
}