import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LayouRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    LayoutComponent, 
    LayoutAdminComponent
  ],
  imports: [
    CommonModule,
    LayouRoutingModule
  ],
  exports:[
    FooterComponent, 
    HeaderComponent, 
    LayoutComponent,
    LayoutAdminComponent
  ]
})
export class LayoutModule { }
