import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
   peliculas:any[]=[];
   cartelera:any[]=[];
    mejores:any[]=[]
  constructor(private ps:PeliculaService) { 
    this.ps.getPopulares().subscribe(data=>{
      this.peliculas=data;
    })
    this.ps.getCatelera().subscribe(data=>{
      this.cartelera=data
    })
    this.ps.getMejores().subscribe(data=>{
      this.mejores=data
    })
  }

  ngOnInit(): void {
  }

}
