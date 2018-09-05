import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Output() edited_book = new EventEmitter();
  @ViewChild('closeModal') closeModal: ElementRef;
  @ViewChild('title') title: ElementRef;
  @Input() book_to_edit;

  fixedTitle: string = '';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      authors: new FormControl('', Validators.required),
      img: new FormControl(''),
      published: new FormControl('', [Validators.required, Validators.max((new Date()).getFullYear()), Validators.min(1000), Validators.pattern(/^\d+$/)])
    })
  }

  ngOnInit() { }

  bookTitleFix(e) {
    this.title.nativeElement.value = this.title.nativeElement.value.replace(/[^\w\s\][^,]/gi, '')
    this.fixedTitle = e.target.value
      .toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
  }

  ngOnChanges() {
    if (this.book_to_edit) {
      this.form.setValue({
        id: this.book_to_edit.id,
        title: this.book_to_edit.title,
        authors: this.book_to_edit.authors,
        img: this.book_to_edit.img ? this.book_to_edit.img : '',
        published: this.book_to_edit.published
      });
    }
  }

  updateBook(form) {
    if (!this.form.valid) {
      this.form.setErrors({
        invalidDetails: true
      })
    } else {
      this.closeModal.nativeElement.click();
      console.log(form.value)
      this.edited_book.emit(form.value);
    }
  }

}
