import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  @ViewChild ('showMenu') showMenu: ElementRef;
  @ViewChild ('showMoviesOfTheWeek') showMoviesOfTheWeek: ElementRef;

  ngOnInit(){

  }

  toggleMenu(){
    this.showMenu.nativeElement.classList.toggle('active')
  }
  toggleMoviesOfTheWeek(){
    this.showMoviesOfTheWeek.nativeElement.classList.toggle('active')
  }
}
