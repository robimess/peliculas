import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FamiliarPageRoutingModule } from './familiar-routing.module';

import { FamiliarPage } from './familiar.page';
import { HttpClientModule } from '@angular/common/http';
import { PeliculasService } from '../servicios/peliculas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FamiliarPageRoutingModule,
    HttpClientModule
  ],
  providers:[PeliculasService],
  declarations: [FamiliarPage]
})
export class FamiliarPageModule {}
