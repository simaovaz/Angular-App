import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import {Movie} from "../movie";
import { HttpService} from "../../http.service";


@Component({
  selector: 'app-week1',
  templateUrl: './week1.component.html',
  styleUrls: ['./week1.component.scss']
})
export class Week1Component implements OnInit {

    userWelcome= sessionStorage.getItem("user")
    title = "The Godfather";
    description ="The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding. Michael, Vito's youngest son and a decorated WW II Marine is also present at the wedding. Michael seems to be uninterested in being a part of the family business. Vito is a powerful man, and is kind to all those who give him respect but is ruthless against those who do not. But when a powerful and treacherous rival wants to sell drugs and needs the Don's influence for the same, Vito refuses to do it. What follows is a clash between Vito's fading old values and the new ways which may cause Michael to do the thing he was most reluctant in doing and wage a mob war against all the other mafia families which could tear the Corleone family apart."

    name=this.userWelcome;
    comment: String;
    array: Array<Movie> =[]
    storage= sessionStorage.getItem("comments");
    comments : any;
    
    likes=sessionStorage.getItem("likes")
    contador:any;
    funFact!:number;
    pressed:any;

    pressMessage:any;
    @ViewChild ('vote') vote: ElementRef;

  constructor(private http:HttpClient, private http_service: HttpService) { }

  ngOnInit(): void {
    console.log(this.pressed)
    if(this.userWelcome){
      let storage= JSON.parse(sessionStorage.getItem("user")!);
      this.userWelcome= storage.name;
      this.name= storage.name;
    }
    this.check()
    setTimeout( ()=>{
      this.mudaClasse()
    },5000)
    
  }
  postComment(){
    this.http.post("http://localhost:3000/comments-week-1", { firstName: this.name, comment: this.comment }).toPromise().then( 
      (data:any)=> {
        this.array.push(data)
        sessionStorage.setItem("comments", JSON.stringify(this.array))
        this.getCommentsfromService()
      })
    this.comment="";
  }
  getCommentsfromService(){
    this.http_service.getComments1().subscribe( data =>{
      const dataString= JSON.stringify(data);
      sessionStorage.setItem("comments", dataString)
      this.comments=JSON.parse(dataString)
    })
  }
  
  check(): any {
    if(this.comments){
      return this.comments;
    }else{
      this.getCommentsfromService()
    }
    if(this.contador){
      return this.contador
    }else{
      this.contaLikes()
    }
  }

  contaLikes(){
    var number= Number(sessionStorage.getItem("likes"));
    number++;
    sessionStorage.setItem("likes", number.toString())
    this.contador= number;
    this.pressed=1;
    this.pressMessage="Thank you for your vote!"
  }

  mudaClasse(){
    this.funFact=1;
  }
}
