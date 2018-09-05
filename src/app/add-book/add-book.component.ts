import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  @Output() newBook = new EventEmitter();
  @ViewChild('closeModal') closeModal: ElementRef;
  @ViewChild('title') title: ElementRef;

  fixedTitle: string = '';
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
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

  addBook(form) {
    if (!this.form.valid) {
      this.form.setErrors({
        invalidDetails: true
      })
    } else {
      this.closeModal.nativeElement.click();
      this.newBook.emit(form.value);
      form.reset();
    }
  }

}
