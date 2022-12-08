import { SharedModule } from './../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { BooksRoutingModule } from './books-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books/books.component';

@NgModule({
  imports: [CommonModule, BooksRoutingModule, AppMaterialModule, SharedModule],
  declarations: [BooksComponent],
  exports: [BooksComponent],
})
export class BooksModule {}
