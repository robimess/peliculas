import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.page.html',
  styleUrls: ['./comedia.page.scss'],
})
export class ComediaPage implements OnInit {
  items:any=[]
  constructor(
    private readonly comediasService:PeliculasService
  ) { }

  ngOnInit():void {
    const items = localStorage.getItem('comediaItems');
    if (items == null) {
      this.comediasService.obtenerComedias().subscribe(
        {
          next: (res: any) => {
            localStorage.setItem('comediaItems',JSON.stringify(res));
            this.items = res
          },
          error(err) {
            console.error(err);
          },

        }
      )
    }else {
      this.items=JSON.parse(items);
    }
  }

}
