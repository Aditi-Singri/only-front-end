// export class Hotel{
//     hotelId? :number;
//     hotelName="";
//     // HId : number;
//     // hName : "";
//     hotelLocation= "";
//     city : City;
//     cityId? : number;
//     touristplace : touristplace[];
//     picture : Picture;
//     rating : Rating;
//     roomType : RoomType
// }
export interface Hotel{
    hotelId : number;
    hotelName : "";
    hotelLocation: "";
    city : City;
    cityId? : number;
    touristplace : touristplace[];
    picture : Picture;
    rating : Rating;
    roomType : RoomType[];
   
}
export class HotelBasicFacility{
    HotelId? : number;
    FacilityId? : number;
    basicFacilities="";
    
}

export class HotelTransfer{
    HotelId? : number;
    Id? : number;
    transfers="";

}

export class HotelFoodandDrink{
    HotelId? : number;
    Id? : number;
    foodandDrinks="";
    

}

export class HotelFamilyandkid{
    HotelId? : number;
    Id? : number;
    familyandkids="";

}
export class SafetyandSecurity{
    HotelId? : number;
    Id? : number;
    safetyandSecuritys="";

}

export class HotelRating{
    RatingId? : number;
    comment = "";
    rating? : number;
    rated_By = "";
    date="";
    hotelId? : number;
    description = "";
}

export class ImageDatas{
    id?: number;
    data="";
    contentType="";
    hotelId?: number;
}

export class HotelOverview{
    hotelID =0;
    hotelName ="";
    hotelLocation  = "";
    description = "";
    overviewId =0;
}

export class Image{
    imageId=0;
    data="";
    contentType="";
    roomType="";
    roomTypeId=0;
}

export class RoomType{
    roomTypeName="";
    roomPrice="";

}

export class RoomtypeRoomfacilities{
    roomTypeName="";
    roomPrice="";
    roomFacilityName="";

}

export class GuestDetails{
    bookingFor = "";
    firstName= "";
    lastName= "";
    emailId= "";
    mobileNumber="";

}

export class Login{
    emailId = "";
    password = "";
}

export interface Signup {
    name:string;
    mobile: number;
    emailId:string;
    password:string;

}
export interface City {
    id: number,
      name: "",
      state: "",
    Hotels: Hotel
}
export interface Picture {
    pictureeId:0;
    data : "";
    contentType:"";
    Hotel : Hotel;
    hotelId : 0;
}
export interface touristplace {
    tId? : number;
    tName: "";
    distance : number;
    Hotels : Hotel;
}
export interface  Rating {
    rId:number,
      ratingStar: number,
      noofReview: number,
      hotelId: Hotel
}
export interface touristplaceDto{
    tId: number,
            tName: "",
            distance: number
    
    }
export interface HotelDto{
    hId: number,
        hName: "",
        location: "",
        touristplaceDto : touristplaceDto[] 
    }