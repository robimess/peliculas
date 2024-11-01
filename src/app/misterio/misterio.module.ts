import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisterioPageRoutingModule } from './misterio-routing.module';

import { MisterioPage } from './misterio.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from '../servicios/peliculas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisterioPageRoutingModule,
    HttpClientModule
  ],
  providers:[PeliculasService],
  declarations: [MisterioPage]
})
export class MisterioPageModule {}
