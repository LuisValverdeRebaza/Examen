import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {
    path: '',
    component: InicioPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
