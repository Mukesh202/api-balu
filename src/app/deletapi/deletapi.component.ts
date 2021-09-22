import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-deletapi',
  templateUrl: './deletapi.component.html',
  styleUrls: ['./deletapi.component.scss']
})
export class DeletapiComponent implements OnInit {

  constructor(private http:HttpClient) { }

  submit(data:any){

this.http.post("https://jsonplaceholder.typicode.com/posts",data).subscribe(result=>{
  console.log("result",result);
  
})  
console.log (data)
   }

  ngOnInit(): void {
    
  }

}
