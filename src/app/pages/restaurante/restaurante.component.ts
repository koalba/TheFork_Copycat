import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss']
})
export class RestauranteComponent implements OnInit {

  restaurante : any = {}

  constructor( 
    private route : ActivatedRoute,
    private api : ApiService 
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.api.getRestauranteById(id).subscribe( (data : any) => {this.restaurante = data.data} )
  }

}
