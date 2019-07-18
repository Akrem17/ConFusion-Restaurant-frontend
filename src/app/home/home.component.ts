import { Component, OnInit } from '@angular/core';
import { DishService } from '../Service/DishService/dish.service';
import { PromotionService } from '../Service/Promotion/promotion.service';
import { Dish } from '../dataAndStructures/Structures/shared';
import { Promotion } from '../dataAndStructures/Structures/Promotion';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
featuredDishe:Dish;
dishesOnPromotion:Promotion[];
  constructor(

    private dishservice:DishService,
    private promotionservice:PromotionService

             ) {
   }
 
  ngOnInit() {
    this.featuredDishe=this.dishservice.getFeaturedDish();
    this.dishesOnPromotion=this.promotionservice.getAllPromotions();
    console.log(this.dishservice.getFeaturedDish());
  }

}
