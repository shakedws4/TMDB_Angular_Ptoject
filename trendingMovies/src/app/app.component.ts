import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@NgModule({
  imports: [
    BrowserModule, 
    HttpClientModule,
    HttpClient
  ],
  declarations:[AppComponent],
  bootstrap:[AppComponent],
  providers:[HttpClientModule, HttpClient]
})
export class AppComponent {
  constructor(private http: HttpClient, private xyz: ApiService) {}
  title = 'trendingMovies';
}


