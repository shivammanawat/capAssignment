import { Component, OnInit } from '@angular/core';
import {Mobile} from '../mobile';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  mobile : Mobile[] = [];
  term : String;

  constructor( private Service : MobileService) {
  this.mobile = this.Service.getMobile();
  console.log("monile is", JSON.stringify(this.mobile));
   }

  ngOnInit() {
   
  }



  onDelete(id)
  {
    this.Service.onDel(id);
  }
  

}
