import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const trendsUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=834f7c841ff370684f1439aa122360a3&page='


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private _listners = new Subject<any>();

  array:any =[];
  type:any =[];
  filtered:any=[];


  getMovies(pagesNum: string){
    console.log("GET request sent")
    return this.http.get(trendsUrl+pagesNum)
  }

  filterResults(){
    return this.array.filter(movieObj => movieObj["title"].toLowerCase().includes(this.type.toLowerCase()))
  }

  listen(): Observable<any> {
      return this._listners.asObservable();
  }

  filterEvent(filterBy: string) {
    this.type=filterBy;
      this._listners.next(filterBy);
  }

  //get the movies after sorting and reducing to 60 from single-movie component
  exportCalculatedData(array){
    this.array=array
  }


}
