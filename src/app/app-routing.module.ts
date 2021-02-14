import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path: 'contactenos',
    loadChildren: () => import('./modules/contactenos/contactenos.module').then(m => m.ContactenosModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./modules/cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'sesion',
    loadChildren: () => import('./modules/sesion/sesion.module').then(m => m.SesionModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
