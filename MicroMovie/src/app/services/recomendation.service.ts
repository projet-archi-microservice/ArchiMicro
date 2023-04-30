import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _movies from '../modeles/movie.json';
import { Movie } from '../modeles/movie';
@Injectable({
  providedIn: 'root'
})
export class RecomendationService {
  jsonDataResult : Movie[];

  constructor(private http: HttpClient) {
    this.jsonDataResult = [];
  }

  public async getJsonDataResult(){
    await this.http.get('http://127.0.0.1:8000/').subscribe((res) => {
      Object.values(res)[1].forEach((mov: any) => {
        this.jsonDataResult.push(mov as Movie)
      });
      console.log(this.jsonDataResult)
    });

    console.log(this.jsonDataResult);
    return this.jsonDataResult;
  }
}
