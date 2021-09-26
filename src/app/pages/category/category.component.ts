import { Component, OnInit } from '@angular/core';
import { Categories } from '../model/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories:Categories[]=[];
  constructor(private categoryService: CategoryService) {
    categoryService.getcategory().subscribe(res=>
     { 
        this.categories =res;
      })
   }

  ngOnInit(): void {
  }

}
