import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Demo1Service {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

}
