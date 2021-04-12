import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit {
  
  name:any;
  userWelcome= sessionStorage.getItem("user")!;
  welcome:any;

  @ViewChild ('toggle') toggle: ElementRef;
  @ViewChild ('login') login: ElementRef;
  @ViewChild ('login2') login2: ElementRef;
  @ViewChild ('hideArticles') hideArticles: ElementRef;
  @ViewChild ('textarea') textarea: ElementRef;

  btn="Write Article"

  submited:any;
  password:any;
  error:any;
  final:any;
  articles:any;
  post:any;
  title:any;
  id:any;
  loginName:any;
  loginPassword:any;
  loginError:any;

  deleteInput:any;
  constructor(private http: HttpClient) {
    
   }

  ngOnInit(): void {
    if(this.userWelcome){
      let storage= JSON.parse(sessionStorage.getItem("user")!);
      this.articles= storage.posts;
      this.loginName= storage.name;
      this.id= storage._id;
    }
  }

  novo(){
    
    if(this.btn==="Write Article"){
      this.btn= "Show articles"
    }else{
      this.btn="Write Article";
    }
    this.submited=null;
    this.hideArticles.nativeElement.classList.toggle('active');
    if(this.textarea){
      this.textarea.nativeElement.classList.toggle('active');
    }
  }
  newUser(){
    this.http.post("http://localhost:3000/users", {name: this.name, password: this.password, posts: []}).toPromise().then( (data:any)=>{
    if(data==="user já registado"){
        this.error= "user já registado"
      }else{
        this.login.nativeElement.classList.toggle('inactive')
        this.toggle.nativeElement.classList.toggle('active')
        this.welcome= this.name;
        return this.name;
      }
    })
  }

  change(){
    this.login.nativeElement.classList.toggle('inactive')
    this.toggle.nativeElement.classList.toggle('active')
  }

  logIn(){
    this.http.post("http://localhost:3000/login", {name: this.loginName, password: this.loginPassword}).toPromise().then( (data:any)=>{
      if(data==="invalid login"){
        this.loginError= data;
      }else{
        sessionStorage.setItem("user", JSON.stringify(data))
        this.name= data.name;
        this.toggle.nativeElement.classList.toggle('active')
        this.login2.nativeElement.classList.toggle('active')
      }
    })
  }

  newArticle(){
    let storage= JSON.parse(sessionStorage.getItem("user")!);
    var antigosPosts= storage.posts;
    antigosPosts.push({titulo: this.title, artigo: this.post})
    this.articles=antigosPosts;
    this.http.patch(`http://localhost:3000/users/${this.id}`, {posts : antigosPosts}).toPromise().then( (data:any)=>{
      sessionStorage.setItem("user", JSON.stringify(data))
    })
    let users= JSON.parse(sessionStorage.getItem("users")!);
    users.forEach( (user)=>{
      if(user._id===this.id){
        user.posts=antigosPosts;
      }
    })
    sessionStorage.setItem("users", JSON.stringify(users));
    this.textarea.nativeElement.classList.toggle('active')
    this.post=""
    this.deleteInput= this.post;
    this.submited=1;
  }
  getUser(){
    sessionStorage.setItem("user", this.name);
  }
  logOut(){
    sessionStorage.removeItem("user")
  }
}
