import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { InsertItemsService } from '../../../../../services/insert-items.service';

@Component({
  selector: 'app-long-term-item',
  templateUrl: './long-term-item.component.html'
  
})
export class LongTermItem implements OnInit {
  itemName: string;
  //item_id: string;
  itemType: string;
  itemBrand: string;
  itemQuantity: string;
  invoiceNumber: string;
  itemDate : Date;
  warrantyType: string;
  warrantyQuantity: string;
  itemWarehouse : string;
  itemDescription : string;  
  
  constructor(
    //  private flashMessage:FlashMessagesService,
    private insertItemsService: InsertItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.itemDate = new Date();
  }

  onLongTermItemSubmit(){
    const longTermItem = {
      itemName: this.itemName,
      itemType: this.itemType,
      itemBrand: this.itemBrand,
      itemQuantity: this.itemQuantity,
      invoiceNumber: this.invoiceNumber,
      warrantyType: this.warrantyType,
      warrantyQuantity: this.warrantyQuantity,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription,
      itemDate: this.itemDate
    }
    
    this.insertItemsService.insertLongTermItem(longTermItem).subscribe(data => {
      if(data.success){
       // this.flashMessage.show('Item is now inserted', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/pages/forms/shortTermItemInsert']);
      } else {
       // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 7000});
        this.router.navigate(['dashboard']);
      }
    });


  }


}



