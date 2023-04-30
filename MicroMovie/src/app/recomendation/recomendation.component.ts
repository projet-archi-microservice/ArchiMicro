import { Component } from '@angular/core';
import { Movie, movies} from '../modeles/movie';
import { RecomendationService } from '../services/recomendation.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent {
  movies: Movie[];

  constructor(public recommandationService: RecomendationService) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.movies = movies;
    console.log(this.movies)
  }
}
