import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAPIPage } from './book-api.page';

const routes: Routes = [
  {
    path: '',
    component: BookAPIPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAPIPageRoutingModule {}
