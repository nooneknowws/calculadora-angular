import { Component, OnInit } from '@angular/core';
import { SomaService, DivService, MultService, SubService } from '../services';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.css']
})
export class SomaComponent implements OnInit {
  private res: number =0;

  constructor(
    private somaService: SomaService, 
    private divService: DivService, 
    private subService: SubService, 
    private multService: MultService
    ){

  }
  
  ngOnInit(): void {

  }

    calcular(num1: string, num2: string, op: string): void {
      let n1: number;
      let n2: number;
      n1 = parseFloat(num1);
      n2 = parseFloat(num2);
      console.log(op)
      switch(op){
        case "soma":
        this.res = this.somaService.somar(n1, n2);
        break;
        case "sub":
        this.res = this.subService.subtrair(n1, n2);
        break;
        case "div":
        this.res = this.divService.dividir(n1, n2);
        break;
        case "mult":
        this.res = this.multService.multiplicar(n1, n2);
        break;

      }
    }

    get resultado(): string {
      return this.res.toString();
    }

}
