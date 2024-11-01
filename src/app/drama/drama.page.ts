import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.page.html',
  styleUrls: ['./drama.page.scss'],
})
export class DramaPage implements OnInit {
  items:any=[]
  constructor(
    private readonly dramasService:PeliculasService
  ) { }

  ngOnInit():void {
    const items = localStorage.getItem('dramaItems');
    if (items == null) {
      this.dramasService.obtenerDramas().subscribe(
        {
          next: (res: any) => {
            localStorage.setItem('dramaItems',JSON.stringify(res));
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
