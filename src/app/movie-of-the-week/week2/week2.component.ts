import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Movie} from "../movie";
import { HttpService} from "../../http.service";

@Component({
  selector: 'app-week2',
  templateUrl: './week2.component.html',
  styleUrls: ['./week2.component.scss']
})
export class Week2Component implements OnInit {

    userWelcome= sessionStorage.getItem("user")
    title = "Schindler's List";
    description ="The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II."

    name:any;
    comment: String;

    array: Array<Movie> =[]
    storage= sessionStorage.getItem("comments2");
    comments : any;
    
    likes=sessionStorage.getItem("likes2");
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
    this.http.post("http://localhost:3000/comments-week-2", { firstName: this.name, comment: this.comment }).toPromise().then( 
      (data:any)=> {
        this.array.push(data)
        sessionStorage.setItem("comments2", JSON.stringify(this.array))
        this.getCommentsfromService()    
      }
    )
    this.comment="";
  }
  getCommentsfromService(){
    this.http_service.getComments2().subscribe( data =>{
      const dataString= JSON.stringify(data);
      sessionStorage.setItem("comments2", dataString)
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
    var number= Number(sessionStorage.getItem("likes2"));
    number++;
    sessionStorage.setItem("likes2", number.toString())
    this.contador= number;
  }
  mudaClasse(){
    this.funFact=1;
  }
}