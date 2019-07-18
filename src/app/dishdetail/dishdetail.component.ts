import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dataAndStructures/Structures/shared';
import {ActivatedRoute}from '@angular/router';
import {DishService} from '../Service/DishService/dish.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
 

    dish:Dish;
  
  constructor(
          private router:ActivatedRoute,
          private dishservice:DishService,
          private location:Location
          
  ) { 
      
}

  ngOnInit() {
      this.dish=this.dishservice.getDish(this.router.snapshot.params.id);
  }

  previousPage():void{
    this.location.back();
  }
}
