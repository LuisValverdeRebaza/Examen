import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SesionPageComponent} from './pages/sesion-page/sesion-page.component';

const routes: Routes = [
  {
    path: '',
    component: SesionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionRoutingModule { }
