import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor() { }

  subtrair(num1: number, num2: number) : number {
    let result: number;
    
    result = num1 - num2;
    return result;
  }
}
