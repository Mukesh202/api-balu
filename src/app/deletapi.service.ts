import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletapiService {

  constructor(private http:HttpClient) { }
  submit(data:any){
    this.http.post('ttps://jsonplaceholder.typicode.com/posts',data);
      console.log(data)
    
  }
}
