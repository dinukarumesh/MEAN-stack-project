import { NgModule,Component,Pipe,OnInit,OnChanges,SimpleChanges} from '@angular/core';
import { ItemAllocationService } from '../../../services/item-allocation.service'

@Component({
  selector: 'app-allocation',
  templateUrl: './allocation.component.html'
})
export class AllocationComponent implements OnInit {

  constructor(public itemallocationservice:ItemAllocationService) { }
  itemId:Number;
  itemName:String;
  userId:Number;
  userName:String;
  ngOnInit() {
  }
  saveallocationdata(){   
    
    const allocateitem = {
      itemId:this.itemId,
      itemName:this.itemName,
      userId:this.userId,
      userName:this.userName
    };
  
  
     this.itemallocationservice.itemallocationdata(allocateitem).subscribe(res=>{
      console.log(res);
    }); 
      
    }
  
    getItem(){
      this.itemallocationservice.getItemData(this.itemId).subscribe(data=>{
        console.log(data);
       
      })
    }

    
}

