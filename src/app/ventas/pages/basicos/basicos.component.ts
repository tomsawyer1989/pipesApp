import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'jorge';
  nombreUpper: string = 'JORGE';
  nombreCompleto: string = 'jOrGe lEoNaRdO';
  fecha: Date = new Date(); // Fecha actual del sistema.

  constructor() { }

  ngOnInit(): void {
  }

}
