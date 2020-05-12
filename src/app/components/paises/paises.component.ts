import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
