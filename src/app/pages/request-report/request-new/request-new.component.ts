import { Component, OnInit } from '@angular/core';
import { RequestNewService } from '../../../services/request-new.service'

@Component({
  selector: 'app-request-new',
  templateUrl: './request-new.component.html'
})
export class RequestNewComponent implements OnInit {
  itemName:String;
  itemType:String;
 itemsNeeded:Number;
  requestReason:String;

  constructor(public requestnew:RequestNewService) { }

  ngOnInit() {
  }
    saverequestnewdata(){
  const requestnew = {
    itemName:this.itemName,
    itemType:this.itemType,
    itemsNeeded:this.itemsNeeded,
    requestReason:this.requestReason
    
  };


   this.requestnew.requestnewdata(requestnew).subscribe(res=>{
    console.log(res);
  }); 
    
  }
  }

