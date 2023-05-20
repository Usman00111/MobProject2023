import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  myGenre:string = "";
  constructor(private storage:Storage,private navCtrl:NavController) { }

  ngOnInit() {
  }
  async onSave(){ // the on save method stores the genre type and shows on the home page through the variable calle genre
    await this.storage.create();
    await this.storage.set("Genre", this.myGenre)
    .then(
     ()=>{this.navCtrl.navigateBack('/home')}
    ).catch();
   }

}

