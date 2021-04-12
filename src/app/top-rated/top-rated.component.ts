import { Component, OnInit } from '@angular/core';
import { HttpService} from "../http.service";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  userWelcome= sessionStorage.getItem("user");
  storage= sessionStorage.getItem("top-rated");
  users: any;
  fullTop:any;
  buttonTopMessage: any;
  buttonTop:any;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    if(this.userWelcome){
      let storage= JSON.parse(sessionStorage.getItem("user")!);
      this.userWelcome= storage.name;
    }
    this.checkUsers()
  }

  getMovies(){
    this.http.getTopMovies().subscribe( data =>{
      const dataString= JSON.stringify(data);
      var dataObj= JSON.parse(dataString)
      this.users=dataObj.results;
      this.fullTop=this.users;
      this.buttonTopMessage= "See more";
      this.users=this.users.slice(1,11)
      this.buttonTop=1;
      sessionStorage.setItem("top-rated", dataString)
    })
  }  

    checkUsers(): any {
      if(this.users){
        return this.users;
      }else{
        this.getMovies()
      }
    }
    mudaTop(){
      if(this.buttonTop===1){
        this.buttonTopMessage= "See Less";
        this.users=this.fullTop;
        this.buttonTop=0;
      }else if(this.buttonTop===0 && this.storage){
        this.buttonTopMessage="See More"
        this.users=this.users.slice(1,11)
        this.buttonTop=1;
      }
    }
}
