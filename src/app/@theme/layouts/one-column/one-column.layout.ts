import { Component } from "@angular/core";

@Component({
  selector: "ngx-one-column-layout",
  styleUrls: ["./one-column.layout.scss"],
  template: `
    
  
  <nb-layout windowMode >
   
  
  <nb-layout-header  >
        <div style="width: 100%;">
        <ngx-navbar ></ngx-navbar>
      </div>
        </nb-layout-header>



        <nb-sidebar class="menu-sidebar d-md-none" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
        
      </nb-sidebar>
      <!-- <ngx-header class="d-md-none"></ngx-header> -->

      
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
        
      </nb-layout-column> 
  
      
      <!-- <nb-layout-footer>
            <ngx-footer></ngx-footer>
            </nb-layout-footer> -->
    </nb-layout>










    <!-- <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column> -->
   
     
    
  `,
})
export class OneColumnLayoutComponent { }
