import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RecomendationService {
  jsonDataResult: any;

  constructor(private http: HttpClient) {
      this.http.get('http://127.0.0.1:8000/').subscribe((res) => {
        this.jsonDataResult = res;
        console.log('--- result :: ',  this.jsonDataResult);
      });
  }

  public getJsonDataResult(){
    return this.jsonDataResult;
  }
}
