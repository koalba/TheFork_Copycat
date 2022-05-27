import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  fakeMenu : any = [
    {
      name        : 'Ensalada Rusa',
      description : 'Con mayonesa de huevo casera y gambas blancas.',
      price       : 6
    },
    {
      name        : 'Ensalada Picasso',
      description : 'Con tomate de temporada, cebolla morada, tofu, granada, rúcula y chips de boniato.',
      price       : 8
    },
    {
      name        : 'Cambembert Frito',
      description : 'Triangulitos de queso cambembert rebozado con chutney de fresa casero.',
      price       : 7.5
    }
  ]

  @Input() restaurante : any = {}

  constructor() { }

  ngOnInit(): void {}

}
