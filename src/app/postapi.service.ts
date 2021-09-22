import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostapiService {

  constructor(private http:HttpClient) { }

  onSubmit(data:any)
  {
    this.http.post("https://jsonplaceholder.typicode.com/posts",data);
    console.log(data);
  }

  // getData(){
  //   let url="https://jsonplaceholder.typicode.com/posts";
  //   return this.http.get(url);
  // }
}

