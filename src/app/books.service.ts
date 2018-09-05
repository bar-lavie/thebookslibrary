import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  private url = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=30';

  getBooks() {
    return this.http.get(this.url)
  }
}
