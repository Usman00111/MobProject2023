//imports 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  GetBookData(): Observable<any> {
    return this.http.get('https://jsonblob.com/api/1108439830991486976'); // this function fetches the API website 
  }
}

