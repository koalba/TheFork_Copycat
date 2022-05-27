import { Component, OnInit } from '@angular/core';
import { IResponse, ISlider } from 'src/app/interfaces/thefork.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  sliders_offer      : any = []
  sliders_restaurant : any = []
  sliders_city       : any = []

  openModal = false

  constructor( private api : ApiService ) { 
    api.getSliders('seleccion').subscribe(( data : IResponse ) => {
      this.sliders_offer = data.data
    })
    
    api.getSliders('restaurante').subscribe(( data : IResponse ) => {
      this.sliders_restaurant = data.data
    })

    api.getSliders('ciudad').subscribe(( data : IResponse ) => {
      this.sliders_city = data.data
    })
  }

  ngOnInit(): void {
  }

}
