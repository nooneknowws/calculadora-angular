import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultService {

  constructor() { }

  multiplicar(num1: number, num2: number) : number {
    let result: number;
    
    result = num1 * num2;
    return result;
  }
}
