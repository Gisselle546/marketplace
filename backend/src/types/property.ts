import { ILocation } from './location';
import { Document } from 'mongoose';
import { IUser } from './user';

export interface IProperty extends Document{
    photos: Array<String>
    price: number;
    address: string;
    bedrooms: number;
    landsize: string;
    carpark: number;
    description: string;
    views: number;
    title: string;
    type: string;
    action: string;
    sold: boolean;
    postedBy: IUser;
    location: ILocation;
}