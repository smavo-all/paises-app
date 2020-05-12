import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) {
    console.log('PaisesApi Service Listo');
    
  }

  getQuery( query: string){
    const url = `https://restcountries.eu/rest/v2/${ query }`;

    return this.http.get(url);
  }
  
  
  getPaisesEn() {

    return this.getQuery('lang/es')
              .pipe( map( data => data));
      

  }



}
