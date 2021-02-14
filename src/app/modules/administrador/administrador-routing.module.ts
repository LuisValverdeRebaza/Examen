import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorPageComponent} from './pages/administrador-page/administrador-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
