import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecomendationService {
  jsonDataResult: any;

  constructor(private http: HttpClient) { 
      this.http.get('assets/data/movie.json').subscribe((res) => {
        this.jsonDataResult = res;
        console.log('--- result :: ',  this.jsonDataResult);
      });
  }
}
