import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent  implements OnInit {
  title = 'routing-app';
  

  constructor(private http: HttpClient) { }
  results: string[];
  


  ngOnInit(): void {
    // Making the HTTP Request
     this.http
     .get('https://api.themoviedb.org/3/movie/top_rated?api_key=103c028b356d737692dd605a25371b1b&language=en-US&page=1')
     .subscribe(data => {
      this.results = data['results'];
       console.log(data);
      
     })

};

   
 
  }


