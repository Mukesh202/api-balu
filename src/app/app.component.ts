import { Component } from '@angular/core';
import { GetapiService } from './getapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apicall';
  showdata:any;
  constructor(private getapiservice: GetapiService){
    this.getapiservice.getData().subscribe(data=>{
      console.log(data)
    })
  }
}
