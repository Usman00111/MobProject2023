import { Component } from '@angular/core';
import {Storage} from '@ionic/storage-angular'; //import for storage 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myCategory:any="";
  constructor(private storage:Storage) {}
  
  async ionViewWillEnter(){
    this.myCategory = await this.storage.get("Genre"); //this will dispaly the genre that have been selected by user on the home pg
  }
  
}
