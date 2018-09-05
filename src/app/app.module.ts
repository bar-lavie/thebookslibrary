import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

import { BooksLibraryComponent } from './books-library/books-library.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ErrorsComponent } from './errors/errors.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksLibraryComponent,
    EditBookComponent,
    ErrorsComponent,
    DeleteBookComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
