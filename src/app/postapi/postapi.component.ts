import { Component, OnInit } from '@angular/core';
import { PostapiService } from '../postapi.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.scss']
})
export class PostapiComponent implements OnInit {
  //  showdata:any

  constructor(private postapiservice:PostapiService,private http:HttpClient) { } 
  onsubmit(data: any){
    this.http.post("https://jsonplaceholder.typicode.com/posts",data).subscribe(result=>{
      console.log("result",result)
    })
    console.log(data);
  
  }
  ngOnInit(): void {

    // this.postapiservice.getData().subscribe(data=>{
    //   this.showdata=data
    // })
    // this.postservice.getData().subscribe((res:any)=>{
    //   this.showdata=res
    // })
  }

}
