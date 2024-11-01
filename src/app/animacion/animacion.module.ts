import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimacionPageRoutingModule } from './animacion-routing.module';

import { AnimacionPage } from './animacion.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from '../servicios/peliculas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimacionPageRoutingModule,
    HttpClientModule
  ],
  providers:[PeliculasService],
  declarations: [AnimacionPage]
})
export class AnimacionPageModule {}
