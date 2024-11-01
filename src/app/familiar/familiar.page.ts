import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';

@Component({
  selector: 'app-familiar',
  templateUrl: './familiar.page.html',
  styleUrls: ['./familiar.page.scss'],
})
export class FamiliarPage implements OnInit {
  items:any=[]
  constructor(
    private readonly familiaresService:PeliculasService
  ) { }

  ngOnInit(): void {
    const items = localStorage.getItem('familiarItems');
    if (items == null) {
      this.familiaresService.obtenerFamiliares().subscribe(
        {
          next: (res: any) => {
            localStorage.setItem('familiarItems',JSON.stringify(res));
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
