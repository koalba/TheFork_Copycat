import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOffers } from 'src/app/interfaces/thefork.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-popup-where',
  templateUrl: './popup-where.component.html',
  styleUrls: ['./popup-where.component.scss']
})
export class PopupWhereComponent implements OnInit {

  ciudades : string[] = []
  value    : string = ''

  @Input() open  : boolean = false
  @Input() offer : any

  @Output() cModal = new EventEmitter<void>()

  constructor( private api : ApiService ) { }

  ngOnInit(): void {
    this.api.getCity().subscribe( ( data : any ) => { 
      data.data.map( (ciudad : any) => { this.ciudades.push( ciudad.nombre )})
    })
  }

  filterCities( c : string ) : boolean {
    let pattern = new RegExp( `^${this.value}` , 'i' )
    return pattern.test( c )
  }

  closeModal() : void {
    this.open = false
    this.cModal.emit()
  }

}
