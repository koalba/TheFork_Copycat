import { Component, Input, OnInit } from '@angular/core';
import { IYear } from 'src/app/interfaces/other.interface';
import { IDatum } from 'src/app/interfaces/thefork.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  meses : string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  year : IYear[] = []
  today : number = 0
  date : Date = new Date()

  number : number = 0

  @Input() restaurante : IDatum | any = {}

  constructor() { }

  ngOnInit(): void {
    this.today = this.date.getDate()
    this.calcMonths()
  }

  daysInMonth (month : number, year : number) {
    return new Date(year, month, 0).getDate();
  }

  calcMonths( ) : void {
    this.meses.map( ( mes , i ) => {
      if ( i >= this.date.getMonth()){
        this.year.push({
          month : mes,
          days : Array(this.daysInMonth( i + 1 , 2022 )),
          current : this.date.getMonth() === i ? true : false
        })
      }
    })
  }

  nextNumber() : void {
    this.number < this.year.length - 1 ? this.number ++ : ''
  }

  prevNumber() : void {
    this.number > 0 ? this.number -- : ''
  }

  setWidth() : string {
    return `${100 * this.year.length}%`
  }

  setGrid() : number{
    return this.year.length
  }

  moveSlider() : string {
    return `translateX(-${( 100 / this.year.length ) * this.number }%)`
  }
  
}
