import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() onFilter: EventEmitter<any> = new EventEmitter();

  constructor(private api: ApiService) { }

    //get the user input and call to filter service
     filterByName():void {
         let char = (<HTMLInputElement>document.getElementById("filterByName")).value; //casting
         this.api.filterEvent(char);
     }

  ngOnInit() {
  }

}
