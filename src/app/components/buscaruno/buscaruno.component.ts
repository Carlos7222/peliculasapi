import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-buscaruno',
  templateUrl: './buscaruno.component.html',
  styleUrls: ['./buscaruno.component.css']
})
export class BuscarunoComponent implements OnInit {
  id:number=0
  trailer='https://www.youtube.com/embed/'
  pelicula:any=[]
  actores:any=[]
  constructor(private router:ActivatedRoute, private ps:PeliculaService) { 
    this.router.params.subscribe(param=>{
      this.id=param['id'];
      this.gettrailer()
     
     if(this.id>0){
      this.ps.getPelicula(this.id).subscribe(
        (resp:any)=>{

 
          this.pelicula=resp
 
        })

     }
    })
  }

  gettrailer(){
   return this.ps.getTrailer(this.id).subscribe((resp:any)=>{
      this.trailer+=resp.results[0].key
    })
  }
  getActors(){
    return this.ps.getActors(this.id).subscribe((resp:any)=>{
      this.actores=resp.cast

    })
  }

  ngOnInit(): void {
    this.getActors()

  }

 
}
