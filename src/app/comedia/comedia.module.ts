import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComediaPageRoutingModule } from './comedia-routing.module';

import { ComediaPage } from './comedia.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from '../servicios/peliculas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComediaPageRoutingModule,
    HttpClientModule
  ],
  providers:[PeliculasService],
  declarations: [ComediaPage]
})
export class ComediaPageModule {}
