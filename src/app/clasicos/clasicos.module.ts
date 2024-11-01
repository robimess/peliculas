import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasicosPageRoutingModule } from './clasicos-routing.module';

import { ClasicosPage } from './clasicos.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from '../servicios/peliculas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasicosPageRoutingModule,
    HttpClientModule
  ],
  providers:[PeliculasService],
  declarations: [ClasicosPage]
})
export class ClasicosPageModule {}
