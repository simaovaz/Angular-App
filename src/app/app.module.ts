import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import{ BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { Week1Component } from './movie-of-the-week/week1/week1.component';
import { Week2Component } from './movie-of-the-week/week2/week2.component';
import { Week3Component } from './movie-of-the-week/week3/week3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesComponent } from './articles/articles.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TopRatedComponent,
    Week1Component,
    Week2Component,
    Week3Component,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
