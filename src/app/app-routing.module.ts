import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'animacion',
    loadChildren: () => import('./animacion/animacion.module').then( m => m.AnimacionPageModule)
  },
  {
    path: 'clasicos',
    loadChildren: () => import('./clasicos/clasicos.module').then( m => m.ClasicosPageModule)
  },
  {
    path: 'comedia',
    loadChildren: () => import('./comedia/comedia.module').then( m => m.ComediaPageModule)
  },
  {
    path: 'drama',
    loadChildren: () => import('./drama/drama.module').then( m => m.DramaPageModule)
  },
  {
    path: 'misterio',
    loadChildren: () => import('./misterio/misterio.module').then( m => m.MisterioPageModule)
  },
  {
    path: 'familiar',
    loadChildren: () => import('./familiar/familiar.module').then( m => m.FamiliarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
