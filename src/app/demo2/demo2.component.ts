import { Component, OnInit } from '@angular/core';
import { Demo2Service } from '../demo2.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  showdata: any;

  constructor(private demoservice2:Demo2Service) {
   
   }

  ngOnInit(): void {
    this.demoservice2.getuserdata().subscribe ((data:any)=>{
      this.showdata=data
    })
  }

}
