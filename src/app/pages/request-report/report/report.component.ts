import { NgModule,Component,Pipe,OnInit } from '@angular/core';
import { ReportItemService } from '../../../services/report-item.service'


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html'
})

export class ReportComponent implements OnInit {
  
  itemid:Number;
  typeofdefect:String;
  reportdescription:String;
  constructor(public reportservice:ReportItemService) { }


  

  ngOnInit() {
  }
  
  
  savereportdata(){   
  
  const reportitem = {
    itemid:this.itemid,
    typeofdefect:this.typeofdefect,
    reportdescription:this.reportdescription
  };


   this.reportservice.reportitemdata(reportitem).subscribe(res=>{
    console.log(res);
  }); 
    
  }

}
