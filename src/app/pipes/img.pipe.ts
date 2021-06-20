import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {
  url:string=""
  transform(value: string|null, ...args: unknown[]): unknown {
 
   if(value==null){
     return this.url="https://sinapsis.uao.edu.co/wp-content/uploads/sites/13/2020/04/0.png"
   }
  
     this.url=`https://image.tmdb.org/t/p/original${value}`
   
    return this.url;
  }

}
