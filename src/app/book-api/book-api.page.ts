import { Component, OnInit } from '@angular/core';
import {BooksService} from '../Services/books.service';


@Component({
  selector: 'app-book-api',
  templateUrl: './book-api.page.html',
  styleUrls: ['./book-api.page.scss'],
})
export class BookAPIPage implements OnInit {
  myBooks:any[]=[];

  constructor(private service:BooksService) { 
  }

  ngOnInit() {
    
}
ionViewWillEnter(){
  this.service.GetBookData().subscribe( //this will get the book data from services 
    (data)=>{
      this.myBooks = data.Search;
    }
  );
}

}


