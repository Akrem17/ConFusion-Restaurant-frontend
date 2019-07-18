import { Injectable } from '@angular/core';
import { Promotion } from 'src/app/dataAndStructures/Structures/Promotion';
import { promotions } from 'src/app/dataAndStructures/Data/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  
  getAllPromotions():Promotion[]{
    return promotions;
  }
  getPromotion(id:string){
   return  promotions.filter((promo)=>(promo.id===id))[0];
  }
  getPromitionFeatured(){
    return promotions.filter((promo)=>(promo.featured))[0];
    }
  constructor() { }
}
