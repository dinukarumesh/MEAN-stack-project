import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ItemAllocationService {
  itemallocation:any;
  constructor(
    private http:Http
  ) { }

  itemallocationdata(itemallocation){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post("http://localhost:3000/itemAllocation",itemallocation,{headers:headers}).map(res=>res.json());
  }

  getItemData(itemId:Number){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    const body={"itemId":itemId};
    console.log(body);
    return this.http.post("http://localhost:3000/itemAllocation/allocateiteminfo",body,{headers:headers}).map(res=>res.json());
  }
  
}


