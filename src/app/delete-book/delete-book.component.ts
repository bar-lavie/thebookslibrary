import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;
  @Input() book_to_delete;
  @Output() deleted_book = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteBook() {
    this.closeModal.nativeElement.click();
    console.log(this.book_to_delete)
    this.deleted_book.emit(this.book_to_delete);
  }
}
