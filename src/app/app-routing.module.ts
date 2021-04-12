import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {TopRatedComponent} from "./top-rated/top-rated.component";
import {Week1Component} from "./movie-of-the-week/week1/week1.component";
import {Week2Component} from "./movie-of-the-week/week2/week2.component";
import {Week3Component} from "./movie-of-the-week/week3/week3.component";
import {ArticlesComponent} from "./articles/articles.component";


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "user", component: UserComponent},
  {path: "week1", component: Week1Component},
  {path: "week2", component: Week2Component},
  {path: "week3", component: Week3Component},
  {path: "top-rated", component: TopRatedComponent},
  {path: "articles", component:ArticlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
