import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDatum } from 'src/app/interfaces/thefork.interface';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() type : string = ''

  @Input() props : IDatum | any = {
      id     : '',
      nombre : 'Nombre',
      src    : '/assets/restaurante.webp',
      tags   : ['Mediterráneo', 'Romántico'],
      nota   : 9.4,
      specs  : {
        insider : true,
        dyums   : true,
        pay     : true
      },
      offers  : {
        offer : 50,
        yums  : true
      },
      descripcion : 'Lorem Ipsum',
      direction : {
        street: 'Calle del Gral. Pardiñas, 70',
        cp: '28006',
        city: 'Madrid',
        country : 'España'
      },
      button      :{
        href  : '#',
        title : 'Reserva ya'
      }
  }

  id : string = ''

  constructor() { }
  
  ngOnInit(): void {
    this.id = this.props['_id']
  }

}
