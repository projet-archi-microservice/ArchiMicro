import { Component } from '@angular/core';
import { Movie} from '../modeles/movie';
import { RecomendationService } from '../recomendation.service';

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
    this.movies = this.recommandationService.getJsonDataResult();
    console.log(this.movies)
  }
}
