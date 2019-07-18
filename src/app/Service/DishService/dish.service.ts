import { Injectable } from '@angular/core';
import { Dish } from '../../dataAndStructures/Structures/shared'
import { DISHES} from '../../dataAndStructures/Data/DISHES';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getAllDishes():Dish[]{
    return DISHES;
  }
  getDish(id:string){
   return  DISHES.filter((dish)=>(dish.id===id))[0];
  }
  getFeaturedDish(){
    return DISHES.filter((dish)=>(dish.featured))[0];
    }
}
