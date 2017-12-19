import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../../services/validate.service';

import { Router } from '@angular/router';
import { InsertItemsService } from '../../../../../services/insert-items.service';

@Component({
  selector: 'app-short-term-item',
  templateUrl: './short-term-item.component.html',
})
export class ShortTermItem implements OnInit {
  itemName: string;
  //item_id: string;
  itemType: string;
  itemQuntity : string;
  //item_date : string;
  itemWarehouse : string;
  itemDescription : string;  

  constructor(
    //private flashMessage:FlashMessagesService,
    private insertItemsService: InsertItemsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onShortTermItemSubmit(){
    const shortTermItem = {
      itemName: this.itemName,
      itemType: this.itemType,
      itemQuntity: this.itemQuntity,
      itemWarehouse: this.itemWarehouse,
      itemDescription: this.itemDescription

    }

  // //  Required Fields
  //   if(!this.ValidateService.validateItem(shortTermItem)){
  //     this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
  //     return false;
  //   }

  //  Insert Short Term Item
      
    this.insertItemsService.insertShortTermItem(shortTermItem).subscribe(data => {
      if(data.success){
       // this.flashMessage.show('Item is now inserted', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/pages/forms/middleTermItemInsert']);
      } else {
       // this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 7000});
        this.router.navigate(['dashboard']);
      }
    });

  }


}
