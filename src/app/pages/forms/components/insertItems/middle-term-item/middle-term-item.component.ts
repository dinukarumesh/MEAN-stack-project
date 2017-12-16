import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../../services/validate.service';
import { FlashMessagesModule  } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { InsertItemsService } from '../../../../../services/insert-items.service';



@Component({
  selector: 'app-middle-term-item',
  templateUrl: './middle-term-item.component.html',
 
        

})
export class MiddleTermItem implements OnInit {
  
  itemName: string;
  //item_id: string;
  itemType: string;
  itemBrand: string;
  itemQuantity: number;
  invoiceNumber: string;
  warrantyType: string;
  warrantyQuantity: string;
  referenceId: string;
  itemWarehouse: string;
  itemDescription: string;
  itemDate: Date;
  
  constructor(
    private flashMessage:FlashMessagesModule,
    private insertItemsService: InsertItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.itemDate = new Date();
  }

  isRegistrationFailed: boolean = false;
  
  onMiddleTermItemSubmit() {
    const middleTermItem = {
      itemName: this.itemName,
      itemType: this.itemType,
      itemBrand: this.itemBrand,
      //itemQuantity: this.itemQuantity,
      invoiceNumber: this.invoiceNumber,
      warrantyType: this.warrantyType,
      warrantyQuantity: this.warrantyQuantity,
      referenceId: this.referenceId,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription,
      itemDate: this.itemDate
      
    }

    
    this.insertItemsService.insertMiddleTermItem(middleTermItem).subscribe(data => {
      if (data.success) {
        // this.flashMessage.show('Item is now inserted', {cssClass: 'alert-success', timeout: 5000});
        this.isRegistrationFailed = false;
        this.router.navigate(['/pages/forms/shortTermItemInsert']);
      } else {
        // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 7000});
        this.isRegistrationFailed = true;
        this.router.navigate(['dashboard']);
      }
    });


  }
  
  onMiddleTermItemMultipleSubmit() {
      
    const middleTermItem = {
      itemName: this.itemName,
      itemType: this.itemType,
      itemBrand: this.itemBrand,
      //itemQuantity: this.itemQuantity,
      invoiceNumber: this.invoiceNumber,
      warrantyType: this.warrantyType,
      warrantyQuantity: this.warrantyQuantity,
      referenceId: this.referenceId,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription,
      itemDate: this.itemDate
    }
      
      this.itemQuantity--;
      this.insertItemsService.insertMiddleTermItem(middleTermItem).subscribe(data => {
        if (data.success) {
          // this.flashMessage.show('Item is now inserted', {cssClass: 'alert-success', timeout: 5000});
          if(this.itemQuantity==0){
            this.router.navigate(['/pages/forms/shortTermItemInsert']);
          }else{}

        } else {
          // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 7000});
          this.router.navigate(['dashboard']);
        }
      });
    



  }

  

}
