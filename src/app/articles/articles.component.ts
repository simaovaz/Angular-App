import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  userStorage= sessionStorage.getItem("users");
  users:any;
  userWelcome:any;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    if(this.userStorage){
      let storage= JSON.parse(sessionStorage.getItem("user")!);
      this.userWelcome= storage.name;
      this.getArticles();
    }else{
      this.getArticles()
    }
  }

  getArticles(){
    this.http.getUsers().subscribe( (data)=>{
      sessionStorage.setItem("users", JSON.stringify(data))
      this.users= data;
    })
  }
}
