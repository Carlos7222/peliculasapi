import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router  } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() peliculas:any[]=[]
  @Input() cartelera:any[]=[]
  @Input() mejores:any[]=[]
  @Input() buscarpelicula:any;
  @Input()  busquedaquery=''
  @Input() existepelicula=false
  generos:any[]=[]
  formulariobusqueda:FormGroup|any
  mostrartitulopopulars=true;
  mostrarcartelera=true;
  mostrarmejores=true;
  pagina=1
  paginabusqueda=2
  mostrarmas=false
  busquedaanterior=''
  filtroanterior=''
  seacaboinfo=false


  constructor(private router:Router, private serviciop:PeliculaService,private fb:FormBuilder) { 
    this.serviciop.getGenero().subscribe((resp:any)=>{
        this.generos=resp
    })
    this.formulariobusqueda=fb.group({
      'filtro':['nada']
    })
 
  }

  ngOnInit(): void {
  }
  redireccionar(pelicula:any){
 
    this.router.navigate(['buscar', pelicula['id']])
  }

  valorfiltrofuncion(){
   if(this.formulariobusqueda.value.filtro=='nada'){
          if(this.cartelera.length==0 && this.mejores.length==0){
            this.pagina=1
            this.mostrartitulopopulars=true;
            this.mostrarcartelera=true;
            this.mostrarmejores=true;
            this.mostrarmas=false
            this.serviciop.getPopulares().subscribe(data=>{
              this.peliculas=data;
            })
            this.serviciop.getCatelera().subscribe(data=>{
              this.cartelera=data
            })
            this.serviciop.getMejores().subscribe(data=>{
              this.mejores=data
            })
          }
          
   }else{
        this.serviciop.getGeneropelilist(this.formulariobusqueda.value.filtro).subscribe(resp=>{
          this.cartelera=[]
          this.mejores=[]
          this.peliculas=[]
          this.peliculas=resp
          this.mostrarmas=true
          this.mostrartitulopopulars=false;
          this.mostrarcartelera=false;
          this.mostrarmejores=false;
          this.pagina++
        }
     
        )
   }

  }
  

  cargarotraspelis(){
 
    if(this.busquedaquery){
      if(this.busquedaanterior==this.busquedaquery){
        return this.serviciop.getPeliculas(this.busquedaquery,this.paginabusqueda).subscribe(resp=>{
          for(var i=0; i<resp.length;i++){
            this.peliculas.push(resp[i])
          }
          this,this.busquedaanterior=''
          this.busquedaanterior=this.busquedaquery
          this.paginabusqueda++

        })
      }else{
   
        this.paginabusqueda=2
       return  this.serviciop.getPeliculas(this.busquedaquery,this.paginabusqueda).subscribe(resp=>{
          for(var i=0; i<resp.length;i++){
            this.peliculas.push(resp[i])
          }
          this.busquedaanterior=this.busquedaquery
          this.paginabusqueda++

        })
      }
     
    }else{
    
      if(this.filtroanterior==this.formulariobusqueda.value.filtro){
      
      }else{
        this.pagina=2
      }
      return this.serviciop.getGeneropelilist(this.formulariobusqueda.value.filtro,this.pagina).subscribe(resp=>{
        for(var i=0; i<resp.length;i++){
          this.peliculas.push(resp[i])
        }
        this.filtroanterior=this.formulariobusqueda.value.filtro
        this.pagina++
      })
    }

  }
}
