import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAPIPageRoutingModule } from './book-api-routing.module';

import { BookAPIPage } from './book-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAPIPageRoutingModule
  ],
  declarations: [BookAPIPage]
})
export class BookAPIPageModule {}
