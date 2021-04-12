import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Movie} from "../movie";
import { HttpService} from "../../http.service";

@Component({
  selector: 'app-week3',
  templateUrl: './week3.component.html',
  styleUrls: ['./week3.component.scss']
})
export class Week3Component implements OnInit {

  userWelcome= sessionStorage.getItem("user")
    title = "12 Angry Men";
    description ="The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other."

    name = this.userWelcome;
    comment: String;

    array: Array<Movie> =[]
    storage= sessionStorage.getItem("comments3");
    comments : any;

    likes=sessionStorage.getItem("likes3");
    contador:any;
    funFact!:number;
      
  constructor(private http:HttpClient, private http_service: HttpService) { }

  ngOnInit(): void {
    if(this.userWelcome){
      let storage= JSON.parse(sessionStorage.getItem("user")!);
      this.userWelcome= storage.name;
      this.name= storage.name;
    }
    this.check();
    setTimeout( ()=>{
      this.mudaClasse()
    },5000)
  }
  postComment(){
    this.http.post("http://localhost:3000/comments-week-3", { firstName: this.name, comment: this.comment }).toPromise().then( 
      (data:any)=> {
        this.array.push(data)
        sessionStorage.setItem("comments3", JSON.stringify(this.array))
        this.getCommentsfromService()    
      }
    )
    this.comment="";
  }
  getCommentsfromService(){
    this.http_service.getComments3().subscribe( data =>{
      const dataString= JSON.stringify(data);
      sessionStorage.setItem("comments3", dataString)
      this.comments=JSON.parse(dataString)
    })
  }
  
  
  check(): any {
    if(this.comments){
      return this.comments;
    }else{
      this.getCommentsfromService()
    }if(this.contador){
      return this.contador;
    }else{
      this.contaLikes()
    }
  }

  contaLikes(){
    var number= Number(sessionStorage.getItem("likes3"));
    number++;
    sessionStorage.setItem("likes3", number.toString())
    this.contador= number;
  }

  mudaClasse(){
    this.funFact=1;
  }

}