import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countdownArray= ["3", "2", "1", "Action! "]
  userWelcome= sessionStorage.getItem("user")
  i:number=0;
  message:any;

  images = ["http://image.tmdb.org/t/p/w300/69Sns8WoET6CfaYlIkHbla4l7nC.jpg",
    "http://image.tmdb.org/t/p/w300/bJ4h4TY6IOPpgZh9wtbPOgYrh4.jpg",
    "http://image.tmdb.org/t/p/w300/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
    "http://image.tmdb.org/t/p/w300/uiXKlDtaDvrrOLy0XULcfc12flu.jpg",
    "http://image.tmdb.org/t/p/w300/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg",
    "http://image.tmdb.org/t/p/w300/7sf9CgJz30aXDvrg7DYYUQ2U91T.jpg",
    "http://image.tmdb.org/t/p/w300/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
    "http://image.tmdb.org/t/p/w300/dvEggyDTTIBDvrUNjTEa9depT0f.jpg",
    "http://image.tmdb.org/t/p/w300/uq2u8HgtLFJkjNq2kHb2jvipIPT.jpg",
    "http://image.tmdb.org/t/p/w300/cCx2Ead8KoZhHofsAAr7tyrjfDo.jpg",
    "http://image.tmdb.org/t/p/w300/qcF8qt8toajvQllOMVRCUqZCxjV.jpg"
  ]

  @ViewChild ('toggle') toggle: ElementRef;
  @ViewChild ('imagem') escondeImagem: ElementRef;

  
  constructor() { }

  ngOnInit(): void {
    if(this.userWelcome){
      let storage= JSON.parse(sessionStorage.getItem("user")!);
      this.userWelcome= storage.name;
    }
    this.countdown()
    setTimeout( ()=>{
      this.showScreen()
    },4600)
  }


  showScreen(){
    this.toggle.nativeElement.classList.toggle('active')
  }

  temporizaCountdown(){
    setTimeout( ()=>{
      this.countdown()
    },1200)
  }

  countdown(){
    if(this.i<4){
      this.message=this.countdownArray[this.i]
    this.i++
    this.temporizaCountdown()
    if(this.i===4){
      this.escondeImagem.nativeElement.classList.toggle('active');
    }
    }else{
      this.message=this.countdownArray[this.i]
      this.i=0;
    }
  }
}
