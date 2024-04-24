import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuotesAPIService {

  constructor(private http: HttpClient) { }
  // set the URLs for the API
  randomurl: string = 'https://api.quotable.io/random';

  getQuote(): Observable<any> {
    return this.http.get(this.randomurl);
  }
}
