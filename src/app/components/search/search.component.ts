import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
  paises: any[] = [];
  loading: boolean;

  constructor(private paisesall: PaisesService) { }

  buscar(termino: string) {
    console.log(termino);

    this.loading = true;
    this.paisesall.getPaises( termino )
          .subscribe( (data: any) => {
            console.log(data);
            this.paises = data;
            this.loading = false;
          });
  }


}
