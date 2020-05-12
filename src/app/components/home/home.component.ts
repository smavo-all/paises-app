import { Component} from '@angular/core';
import { PaisesService } from '../../services/paises.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  
  PaisesEn: any [] =[];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private paises: PaisesService) { 

  this.loading = true;
  this.error = false;

  this.paises.getPaisesEn()
      .subscribe( (data: any) => {
        this.PaisesEn = data;
        console.log(data);
        this.loading = false;
      }, ( errorServicio ) => {

        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
        

      });

  }

}
