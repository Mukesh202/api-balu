import { Component, OnInit } from '@angular/core';
import { Demo1Service } from '../demo1.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {



  showdata:any
  constructor(private demoservice:Demo1Service) { }

  ngOnInit(): void {
   this.demoservice.getdata().subscribe((res:any)=>{
     this.showdata=res;
   });
  }



}
