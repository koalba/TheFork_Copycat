import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footer : any = [
      {
        title : '¿Quiénes somos?',
        url : '#'
      },
      {
        title : 'Programa Yums',
        url : '#'
      },
      {
        title : 'Información de contacto',
        url : '#'
      },
      {
        title : 'Condiciones de uso',
        url : '#'
      },
      {
        title : '¿Tienes un restaurante?',
        url : '#'
      },
      {
        title : 'Declaración de Privacidad y Cookies',
        url : '#'
      },
      {
        title : 'Preguntas frecuentes',
        url : '#'
      },
      {
        title : 'Aceptación de cookies',
        url : '#'
      },
      {
        title : 'Trabaja con nosotros',
        url : '#'
      },
      {
        title : 'Blog',
        url : '#'
      },
      {
        title : 'Colaboración Guía MICHELIN',
        url : '#'
      },
      {
        title : 'Tarjeta Regalo TheFork',
        url : '#'
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
