
export interface User {
    email:string;
    username:string;
    password:string;
    name:{
        firstname:string;
        lastname:string;
      },
    address:{
        city:string;
        street:string;
        number: string;
        zipcode:number
        geolocation:{
            lat:number;
            long:number;
        }
    },
    phone:number;
}