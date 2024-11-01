import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasicosPage } from './clasicos.page';

const routes: Routes = [
  {
    path: '',
    component: ClasicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasicosPageRoutingModule {}
