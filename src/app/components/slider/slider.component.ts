import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IOffers } from 'src/app/interfaces/thefork.interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @HostListener( "window:resize" , ['$event'])
  redimensionar( e : any ) : void {
    this.anchoVentana = e.currentTarget.innerWidth
    console.log( this.anchoVentana )
    this.setResponsive()
  }

  @Input() restaurantes : any = []
  
  @Input() titulo      : string = ''
  @Input() type        : string = ''
  @Input() more        : boolean = false
  @Input() data        : string = ''

  modal : boolean = false
  clicked : any
  
  @Input() numVisibles : number = 4
  numVisiblesCalc      : number = 0

  anchoVentana : number = 0
  resultado    : number = 0
  numero       : number = 0

  constructor() { 
  }

  ngOnInit() : void {
    this.anchoVentana = window.innerWidth
    this.setResponsive()
  }

  aumentaNumero() : void {
    if( this.numero < this.resultado - 1 ){
      this.numero++
    }
  }

  disminuyeNumero() : void {
    if( this.numero > 0 ){
      this.numero--
    }
  }

  setNumero( value : number ) : void {
    this.numero = value
  }

  translate() : string {
    return `translateX(${ ( -100 / this.resultado ) * this.numero }%)`
  }

  setStyle() : Object {
    return {
      transform : `translateX(${ ( -100 / this.resultado ) * this.numero }%)`,
      width : `${ 100 * this.resultado}%`,
      'grid-template-columns' : `repeat(${this.restaurantes.length}, 1fr)`
    }
  }

  setResponsive() : void {
    
    if      ( this.anchoVentana > 900 ){ this.numVisiblesCalc = this.numVisibles } 
    else if ( this.anchoVentana < 900 && this.anchoVentana > 550) {
      
      if      ( this.numVisibles === 4 ){ this.numVisiblesCalc = 2 }
      else if ( this.numVisibles === 3 ){ this.numVisiblesCalc = 2 }
      else if ( this.numVisibles === 6 ){ this.numVisiblesCalc = 3 }

    } else if ( this.anchoVentana < 550 ){

      if   ( this.numVisibles   === 6 ){ this.numVisiblesCalc = 2 } 
      else { this.numVisiblesCalc = 1 }

    }

    this.resultado = this.restaurantes.length / this.numVisiblesCalc

  }

  openModal( res : IOffers ) : void {
    this.modal = true
    this.clicked = res
  }
}
