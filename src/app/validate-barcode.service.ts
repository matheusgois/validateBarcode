import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateBarcodeService {

  constructor() { }

  validateBarCode(length: number, barcode: number[]): boolean {
    if (length >= 8) {
      let initialMultiplication = length % 2 ? 1 : 3;
      let subjectMultiplication = (initialMultiplication == 1) ? 3 : 1;

      let n = 0;
      let i = 0;
      let sum = 0;
      let digVerif = 0;
      for (const iterator of barcode) {
        i++;
        n = iterator * ((i % 2) ? initialMultiplication : subjectMultiplication);
        if (i !== length)
          sum += n;
        else
          digVerif = Number(iterator);
      }
      return (((sum + digVerif) % 10) == 0);
    }
    else
      return false;
  }
}