import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  results: string[];
  


  ngOnInit(): void {
    // Making the HTTP Request
     this.http
     .get('https://api.themoviedb.org/3/tv/top_rated?api_key=103c028b356d737692dd605a25371b1b&language=en-US&page=1')
     .subscribe(data => {
      this.results = data['results'];
       console.log(data);
      
     })

};
}
