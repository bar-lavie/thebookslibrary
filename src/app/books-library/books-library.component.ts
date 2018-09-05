import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.css']
})
export class BooksLibraryComponent implements OnInit {

  books: any[];
  errors: string;

  constructor(private BooksService: BooksService) { }

  ngOnInit() {

    this.BooksService.getBooks()
      .subscribe(
        response => {
          this.books = response['items'].map(e => {
            return {
              id: e.id,
              authors: e.volumeInfo.authors[0],
              title: e.volumeInfo.title,
              published: new Date(e.volumeInfo.publishedDate).getFullYear(),
              img: e.volumeInfo.imageLinks ? e.volumeInfo.imageLinks.thumbnail : ''
            }
          })
        },
        (error: Response) => {
          if (error.status == 404) {
            this.errors = "There was a problem to load the books list..."
          } else {
            console.log(error)
          }
        });

  }


  editedBook(data) {
    let i = this.books.findIndex((
      obj => obj.id == data.id
    ));

    this.books[i].authors = data.authors
    this.books[i].title = data.title
    this.books[i].img = data.img
    this.books[i].published = data.published
  }

  deleteBook(i) {
    this.books.splice(i, 1)
  }

  addBook(data) {
    let new_book = {
      id: this.makeid(10),
      authors: data.authors,
      title: data.title,
      published: data.published,
      img: data.book_img_url
    }
    this.books.push(new_book)
  }



  makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
