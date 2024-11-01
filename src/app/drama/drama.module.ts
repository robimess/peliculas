import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DramaPageRoutingModule } from './drama-routing.module';

import { DramaPage } from './drama.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from '../servicios/peliculas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DramaPageRoutingModule,
    HttpClientModule
  ],
  providers:[PeliculasService],
  declarations: [DramaPage]
})
export class DramaPageModule {}
