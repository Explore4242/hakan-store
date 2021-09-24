import { Component } from "@angular/core";

@Component({
  selector: "ngx-one-column-layout",
  styleUrls: ["./one-column.layout.scss"],
  template: `
    
  
  <nb-layout windowMode>
      <nb-layout-header fixed >
        <div style="width: 100%;">
          <ngx-navbar></ngx-navbar>
      </div>
        <!-- <ngx-header></ngx-header> -->
      </nb-layout-header>
      
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column> 
    </nb-layout>










    <!-- <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive start>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column> -->
    <!-- 
      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
     -->
  `,
})
export class OneColumnLayoutComponent {}
