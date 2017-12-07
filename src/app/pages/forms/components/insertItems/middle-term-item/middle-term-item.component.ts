import { Component, OnInit } from '@angular/core';
//import { ValidateService } from '../../../services/validate.service';
//import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
//import { InsertItemsService } from '../../../services/insert-items.service';

@Component({
  selector: 'app-middle-term-item',
  templateUrl: './middle-term-item.component.html'
  
})
export class MiddleTermItem implements OnInit {
  itemName: string;
  //item_id: string;
  itemType: string;
  itemBrand: string;
  itemQuantity: string;
  invoiceNumber: string;
  //item_date : string;
  warrantyType: string;
  warrantyQuantity: string;
  referenceId: string;
  itemWarehouse : string;
  itemDescription : string;  
  
  constructor(
  //  private flashMessage:FlashMessagesService,
  //  private insertItemsService: InsertItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onMiddleTermItemSubmit(){
    const middleTermItem = {
      itemName: this.itemName,
      itemType: this.itemType,
      itemBrand: this.itemBrand,
      itemQuantity: this.itemQuantity,
      invoiceNumber: this.invoiceNumber,
      warrantyType: this.warrantyType,
      warrantyQuantity: this.warrantyQuantity,
      referenceId: this.referenceId,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription
    }
    
    // this.insertItemsService.insertMiddleTermItem(middleTermItem).subscribe(data => {
    //   if(data.success){
    //     this.flashMessage.show('Item is now inserted', {cssClass: 'alert-success', timeout: 5000});
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000});
    //     this.router.navigate(['/shortTermItem']);
    //   }
    // });

  }


}
