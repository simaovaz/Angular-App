import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  
  getTopMovies(){
    return this._http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c245d5f986538a3a8bb8c188a67c85b4")
  }
  getComments1(){
    return this._http.get("http://localhost:3000/comments-week-1")
  }
  getComments2(){
    return this._http.get("http://localhost:3000/comments-week-2")
  }
  getComments3(){
    return this._http.get("http://localhost:3000/comments-week-3")
  }
  getUsers(){
    return this._http.get("http://localhost:3000/users");
  }
}
