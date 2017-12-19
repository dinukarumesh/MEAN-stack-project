import { NgModule,Component,Pipe,OnInit,OnChanges,SimpleChanges} from '@angular/core';
import { ReportItemService } from '../../../services/report-item.service'


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})

export class ReportComponent implements OnInit{

data:any;
  warrenty:any;
  itemId:Number;
  itemName:String;
  reportDescription:String;

  constructor(public reportservice:ReportItemService) { }


  

  ngOnInit() {
  }
  
    savereportdata(){   
  
  const reportitem = {
    itemId:this.itemId,
    itemName:this.itemName,
    reportDescription:this.reportDescription
  };


   this.reportservice.reportitemdata(reportitem).subscribe(res=>{
    console.log(res);
  }); 
    
  }

  getItem(){
    this.reportservice.getItemData(this.itemId).subscribe(data=>{
      console.log(data);
     
    })
  }

}
