import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { BooksService } from './../services/books.service';
import { Book } from './../model/book';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  books$: Observable<Book[]>;

  displayedColumns = ['title', 'category', 'author'];

  constructor(private service: BooksService, public dialog: MatDialog) {
    this.books$ = this.service.list().pipe(
      catchError((error) => {
        this.onError("Coudn't load books");
        return of([]);
      })
    );
  }
  onError(errorMsg: string): void {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
