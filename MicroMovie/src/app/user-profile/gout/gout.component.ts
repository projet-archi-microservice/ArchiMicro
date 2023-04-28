import { Component } from '@angular/core';
import { Movie } from 'src/app/modeles/movie';

@Component({
  selector: 'app-gout',
  templateUrl: './gout.component.html',
  styleUrls: ['./gout.component.css']
})
export class GoutComponent {
  moviesVus: Movie[] = []
  movieEnCours: Movie = {"name":"erreur", "adult":false, "genres":[],"poster_path":""}
  numeroMovieEnCours: number =0;

  ngOnInit(): void {
    this.moviesVus = []
    // this.moviesVus = getAllMoviesVuesParLeUser()
    if (this.moviesVus.length==0) {
      //panik pas de film
    } else {
      this.movieEnCours = this.moviesVus[0];      
    }

  }

  filmPrecedant(){
    if (this.numeroMovieEnCours==0) {
      this.numeroMovieEnCours = this.moviesVus.length
    } else {
      this.numeroMovieEnCours--
      this.numeroMovieEnCours = this.numeroMovieEnCours%this.moviesVus.length  
    }
    this.movieEnCours = this.moviesVus[this.numeroMovieEnCours]
  }
  filmSuivant(){
    this.numeroMovieEnCours++
    this.numeroMovieEnCours = this.numeroMovieEnCours%this.moviesVus.length
    this.movieEnCours = this.moviesVus[this.numeroMovieEnCours]
  }

}
