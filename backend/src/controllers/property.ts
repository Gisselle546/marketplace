import { IProperty } from './../types/property';
import { Location } from '../models/location';
import { Property } from '../models/property';
import { Response, Request } from 'express';
import { ILocation } from '../types/location';
import { IUser } from '../types/user';
import { User } from '../models/user';


const createAd = async(req: Request, res: Response): Promise<void> =>{
    try{
        const body = req.body as Pick<IProperty, 'photos' | 'price' | 'formatted_address'|'bedrooms'| 'bath'|'views' |'action'| 'sold' >&{
            coords: Pick<ILocation, 'coords'>& {location: Pick<{lat:number, lng: number}, 'lat' | 'lng'>} 
          }

       
          
       console.log(req);
       res.status(200).json(body);
          
    //    const location: ILocation = new Location({
    //         coords:{
    //             location:{
    //                 lat: body.coords.location.lat,
    //                 lng: body.coords.location.lng
    //             }
    //         }
    //    });

       //const newLocation: ILocation = await location.save();

       

    //    const property: IProperty = new Property({
    //     photos: body.photos,
    //     price: body.price,
    //     formatted_address: body.formatted_address,
    //     bedrooms: body.bedrooms,
    //     bath: body.bath,
    //     location: location,
    //     postedBy: body.user  
       
    //    })


         
    }catch(error){
       console.log(error);
    }

}


export {createAd}