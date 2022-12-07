import { Book } from './../model/book';
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  books: Book[] = [
    {_id: '1', title: 'Angular', category: 'PC', author: 'Igor'}
  ];

  displayedColumns = ['title', 'category', 'author'];

  constructor() {  }
}
