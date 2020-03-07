import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private api: ApiService) { }

  filterByName(){
    let char = (<HTMLInputElement>document.getElementById("filterByName")).value; //casting
    let filtered =this.api.filterResults(char)
    console.log(filtered)

  }

  ngOnInit() {
  }

}
