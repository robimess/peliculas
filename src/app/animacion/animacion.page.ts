import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-animacion',
  templateUrl: './animacion.page.html',
  styleUrls: ['./animacion.page.scss'],
})
export class AnimacionPage implements OnInit {
  items: any = []
  constructor(
    private readonly animacionService: PeliculasService
  ) { }

  ngOnInit(): void {
    const items = localStorage.getItem('animacionItems');
    if (items == null) {
      this.animacionService.obtenerAnimacion().subscribe(
        {
          next: (res: any) => {
            localStorage.setItem('animacionItems',JSON.stringify(res));
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
