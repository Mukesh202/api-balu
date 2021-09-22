import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Demo2Service {

  constructor(private _http:HttpClient) { }

  getuserdata(){
    return this._http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
