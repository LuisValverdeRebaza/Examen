import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosPageComponent } from './pages/cursos-page/cursos-page.component';

const routes: Routes = [
  {
    path: '',
    component: CursosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
