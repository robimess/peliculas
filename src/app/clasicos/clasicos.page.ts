import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-clasicos',
  templateUrl: './clasicos.page.html',
  styleUrls: ['./clasicos.page.scss'],
})
export class ClasicosPage implements OnInit {
  items:any=[];
  constructor(
    private readonly clasicosSerive:PeliculasService
  ) { }

  ngOnInit(): void {
    const items = localStorage.getItem('clasicosItems');
    if (items == null) {
      this.clasicosSerive.obtenerClasicos().subscribe(
        {
          next: (res: any) => {
            localStorage.setItem('clasicosItems',JSON.stringify(res));
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
