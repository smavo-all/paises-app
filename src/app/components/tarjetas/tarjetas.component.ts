import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }


  verPaisesEn( item: any ) {

    let paisesId;

    if ( item.type === 'paises' ) {
      paisesId = item.id;
    } else {
      paisesId = item;
    }

    this.router.navigate([ '/paises', paisesId  ]);

  }


}
