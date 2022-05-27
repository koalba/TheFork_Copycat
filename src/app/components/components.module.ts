import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { TarjetaRegaloComponent } from './tarjeta-regalo/tarjeta-regalo.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { PromosComponent } from './promos/promos.component';
import { SliderComponent } from './slider/slider.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HowComponent } from './how/how.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './property/property.component';
import { BannerComponent } from './banner/banner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PopupWhereComponent } from './popup-where/popup-where.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TarjetaRegaloComponent,
    BuscadorComponent,
    PromosComponent,
    SliderComponent,
    SliderCardComponent,
    FooterComponent,
    HowComponent,
    AboutComponent,
    PropertyComponent,
    BannerComponent,
    CalendarComponent,
    RestaurantComponent,
    PopupWhereComponent
  ],
  exports : [
    HeaderComponent,
    TarjetaRegaloComponent,
    BuscadorComponent,
    PromosComponent,
    SliderComponent,
    FooterComponent,
    HowComponent,
    AboutComponent,
    PropertyComponent,
    BannerComponent,
    CalendarComponent,
    RestaurantComponent,
    PopupWhereComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class ComponentsModule { }
