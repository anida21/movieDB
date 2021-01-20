import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { TvshowsComponent } from './tvshows/tvshows.component';


const routes: Routes = [
  {path: 'movie', component: MovieComponent},
  {path: 'tvshows', component: TvshowsComponent},
  {path: '',   redirectTo: '/tvshows', pathMatch: 'full' }, // redirect to `tvshows-component`


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
