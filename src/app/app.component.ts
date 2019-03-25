import { Component } from '@angular/core';
import { ValidateBarcodeService } from './validate-barcode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ValidateBarcodeService]
})
export class AppComponent {
  title = 'app';
  valid;
  result = false;
  constructor(private validateService: ValidateBarcodeService){}

  validateBarcode(barcode){
    this.result = true;
    this.valid  = this.validateService.validateBarCode(barcode.length, barcode);
  }

}

