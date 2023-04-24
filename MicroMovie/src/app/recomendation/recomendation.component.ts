import { Component } from '@angular/core';
import { Movie, movies } from '../modeles/movie';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent {
  movie: Movie[];
  
  constructor() {
    this.movie = [];
  }

  ngOnInit(): void {
    this.movie = movies;
  }
}
