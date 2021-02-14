import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactenosPageComponent } from './pages/contactenos-page/contactenos-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactenosPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactenosRoutingModule { }
