import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  valor : number = 0;
  cambioLibra : number = 0;
  cambioDolar : number = 0;
  cambioEuro : number = 0;
  resultado : string = '';


  Calcular(){
    var valorLibra : number = this.valor / this.cambioLibra;
    var valorDolar : number = this.valor / this.cambioDolar;
    var valorEuro : number = this.valor / this.cambioEuro;

    this.resultado = 'Libra: ' + valorLibra.toFixed(2) + '\nDólar: ' + valorDolar.toFixed(2) + '\nEuro: ' + valorEuro.toFixed(2);
  }
}
