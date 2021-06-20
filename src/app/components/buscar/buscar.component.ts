import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  peliculas:any[]=[]
  buscarpelicula=true;
  noexistepeli=false
  constructor(private ps:PeliculaService) { 
   
  }
  referencia:string=""
  ngOnInit(): void {
    
  }
  search( ){

    this.ps.getPeliculas(this.referencia,1).subscribe(
      (resp:any)=>{
        this.peliculas=resp
        if(this.peliculas.length==0){
          this.noexistepeli=true
        }else{
          this.noexistepeli=false
        }
        this.buscarpelicula=true
         
      }
    )

  }
}
