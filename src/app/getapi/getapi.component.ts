import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../getapi.service';
@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.scss']
})
export class GetapiComponent implements OnInit {
  showdata:any;

  constructor(private getapiservice:GetapiService) { }

  ngOnInit(): void {
    this.getapiservice.getData().subscribe((res:any)=>{
      this.showdata=res
    });
  }
}

