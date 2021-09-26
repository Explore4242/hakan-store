import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'ngx-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories:string[];
  constructor(private categoryService: CategoryService) {
    categoryService.getcategory().subscribe(res=>
     { 
        this.categories =res;
      })
   }

  ngOnInit(): void {
  }

}
