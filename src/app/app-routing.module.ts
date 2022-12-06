import { BooksComponent } from './books/books/books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksModule } from './books/books.module';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'books'
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
