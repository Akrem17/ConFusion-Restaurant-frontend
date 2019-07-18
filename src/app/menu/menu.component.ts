import { Component, OnInit } from '@angular/core';
import {Dish} from '../dataAndStructures/Structures/shared';
import {DishService} from '../Service/DishService/dish.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  Dishes:Dish[];
  SelectedDish:Dish;
  constructor(private dishService:DishService) { }

  
  ngOnInit() {
    this.Dishes=this.dishService.getAllDishes();
  }
  selectedDish(dish){
    
    this.SelectedDish=dish;
    console.log(this.SelectedDish);
  }
}
