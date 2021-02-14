import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { LayoutAdminComponent } from './modules/layout/layout-admin/layout-admin.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      }
    ]
  },
  {
    path: 'sesion',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'sesion',
        loadChildren: () => import('./modules/sesion/sesion.module').then(m => m.SesionModule)
      },
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
