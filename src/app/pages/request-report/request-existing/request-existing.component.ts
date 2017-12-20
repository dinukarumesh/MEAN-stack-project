import { Component, OnInit } from '@angular/core';
import { RequestExistingService } from '../../../services/request-existing.service'
@Component({
  selector: 'app-request-existing',
  templateUrl: './request-existing.component.html'
})
export class RequestExistingComponent implements OnInit {
  itemType:String;
  itemName:String;
  itemId:Number;
 availability:Number;
 quantity:Number;
 userName:String;
  
  constructor(public requestexisting:RequestExistingService) { }

  ngOnInit() {
  }

  
  saverequestexistingdata(){   
  
  const requestexisting = {
    
    itemType:this.itemType,
    itemName:this.itemName,
    itemId:this.itemId,
   availability:this.availability,
   quantity:this.quantity,
   userName:this.userName
    
  };


   this.requestexisting.requestexistingdata(requestexisting).subscribe(res=>{
    console.log(res);
  }); 
    
  }
  getItem(){
    this.requestexisting.getItemData(this.itemName).subscribe(data=>{
      console.log(data);
     
    })
  }

}
