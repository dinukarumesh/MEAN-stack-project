import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InsertItemsService {
  shortTermItem: any;
  middleTermItem: any;
  longTermItem: any;

  constructor(private http:Http) { }

  insertShortTermItem(shortTermItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/itemInsert/shortTermInsert', shortTermItem,{headers: headers})
      .map(res => res.json());
  }

  insertMiddleTermItem(middleTermItem){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/itemInsert/middleTermInsert', middleTermItem,{headers: headers})
      .map(res => res.json());
  }


}
