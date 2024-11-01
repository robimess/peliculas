import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-misterio',
  templateUrl: './misterio.page.html',
  styleUrls: ['./misterio.page.scss'],
})
export class MisterioPage implements OnInit {
  items:any=[]
  constructor(
    private readonly misteriosService:PeliculasService
  ) { }

  ngOnInit():void {
    const items = localStorage.getItem('misterioItems');
    if (items == null) {
      this.misteriosService.obtenerMisterios().subscribe(
        {
          next: (res: any) => {
            localStorage.setItem('misterioItems',JSON.stringify(res));
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
