import { Component, OnInit } from '@angular/core';
import { IDatum } from 'src/app/interfaces/thefork.interface';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  menu : boolean = false
  number : number = 0
  tipo : string = 'restaurante'

  restaurants : any = [
    {
      nombre : 'Todos los Restaurantes'
    }
  ]

  // cities : any = [
  //   {
  //     direction : {
  //       city    : 'Madrid',
  //       country : 'España'
  //     }
  //   },
  //   {
  //     direction:{
  //       city    : 'Madridejos',
  //       country : 'España'
  //     }
  //   },
  //   {
  //     direction:{
  //       city    : 'Madrid',
  //       country : 'España',
  //       street  : 'Madrid-Barajas Adolfo Suárez Airport (MAD), Avenida de la Hispanidad'
  //     }
  //   }
  // ]

  cities : any = [
    {
      city : 'Madrid',
      country : 'España'
    },
    {
      city : 'Barcelona',
      country : 'España'
    },
    {
      city : 'Alicante',
      country : 'España'
    },
    {
      city : 'Cádiz',
      country : 'España'
    }
  ]


  genTypes : String[] = []
  types : any = []
    

  value : string = ''
  location : string = 'Madrid'

  constructor( private api : ApiService  ) {}

  ngOnInit(): void {

    this.api.getRestaurantes().subscribe( ( data : any ) => { 

      this.restaurants = data.data 

      this.restaurants.forEach( ( restaurant : IDatum ) => {
        if(restaurant.tags){
          this.genTypes = [...this.genTypes, ...restaurant.tags.filter( ( tag : string ) => !this.genTypes.includes( tag ))]
        }

        this.cities.push( restaurant.direction )
      })

    })

  }

  openMenu( value : number ) : void {
    this.number = value
    this.menu = !this.menu
  }

  checkRestaurants( r : IDatum ) : boolean {
    let pattern = `^${ this.value.toLowerCase() }`
    let regex = new RegExp(pattern, 'ig')

    if( this.value ){
      return regex.test( r.nombre )
    } else {
      return false
    }
  }

  checkType( t : string ) : boolean {
    let pattern = `^${ this.value.toLowerCase() }`
    let regex = new RegExp(pattern, 'ig')

    if( this.value ){
      return regex.test( t )
    } else {
      return false
    }
  }

  checkLocation( l : any ) : boolean {
    let pattern = `^${ this.location.toLowerCase() }`
    let regex = new RegExp(pattern, 'ig')

    if( this.location ){
      return regex.test( l.city ) ? true : regex.test( l.street ) ? true : regex.test( l.country ) ? true : false
    } else {
      return false
    }
  }

}
