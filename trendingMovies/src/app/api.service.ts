import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const trendsUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=834f7c841ff370684f1439aa122360a3&page='


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  array:any =[];
  type:any =[];
  filtered:any=[];


  getMovies(pagesNum: string){
    console.log("GET request sent")
    return this.http.get(trendsUrl+pagesNum)
  }

  filterResults(char:string){
    //filter by movie's name according to user input
    this.type=char; 
    return this.array.filter(movieObj => movieObj["title"].toLowerCase().includes(this.type.toLowerCase()))
  }

  exportCalculatedData(array){
    //get the movies after sorting and reducing to 60 from single-movie component
    this.array=array
  }


}
