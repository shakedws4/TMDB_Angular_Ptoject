import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { timer, zip } from 'rxjs';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})


export class SingleMovieComponent implements OnInit {

  showOverview(i:Number) {
    document.getElementById("overview"+i.toString()).className = "show";
  }
  hideOverview(i:Number) {
    document.getElementById("overview"+i.toString()).className = "hide";
  }

  movies:any =[];
  moviesQuery:any =[];
  constructor(private api: ApiService) {}

  getMovies() {
    var moviesResultsArray=[];
    var moviesArray=[];

    let imgPrefix = "https://image.tmdb.org/t/p/w200";
    //retrieving data from 4 different pages. (can be more) in order to get enough data to sort later by popularity
    zip(this.api.getMovies("1"),this.api.getMovies("2"),this.api.getMovies("3"),this.api.getMovies("4")).subscribe(data => {
      for(var pageResults of data){
        moviesArray.push(pageResults["results"])

      }
        moviesResultsArray =[].concat.apply([], moviesArray);
        //sorting according to popularity in a descending order
        moviesResultsArray.sort(function(a, b){
          return b.popularity-a.popularity
      })
      var arrayOf60 = moviesResultsArray.slice(0,60)
      for(var top60 of arrayOf60){ 
          this.movies.push({
            vote_average:  Math.round(top60.vote_average)/2,
            stars:  "../../../assets/"+(Math.round(top60.vote_average)/2).toString()+"star.PNG",
            id: top60.id,
            title: top60.title,
            release_date:top60.release_date,
            overview: top60.overview,
            poster_path: imgPrefix+ top60.poster_path
          });
        }
        this.exportArray(this.movies)
        
    });

  }
  //export to api.services for filtering the results later
  exportArray(movies:any){
    this.api.exportCalculatedData(movies)
  }


  ngOnInit() {
    this.getMovies()
  }

}
