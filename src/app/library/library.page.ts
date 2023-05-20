import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';// import browser

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  constructor() { }
//below are the links for the websites which are clickable button and upon clicking they will be redirected to the offical website 
  ngOnInit() {
  }
  async getlibrary(){
    await Browser.open({url: 'https://www.galway.ie/en/services/library/'})

  }
  ngOnInit1() {
  }
  async getlibrary1(){
    await Browser.open({url: 'https://www.galway.ie/en/services/library/'})

  }
  ngOnInit2() {
  }
  async getlibrary2(){
    await Browser.open({url: 'http://www.galway.ie/en/services/library/'})

  }
  ngOnInit3() {
  }
  async getlibrary3(){
    await Browser.open({url: 'https://library.gmit.ie/'})

  }
  ngOnInit4() {
  }
  async getlibrary4(){
    await Browser.open({url: 'https://library.nuigalway.ie/'})

  }
  

}
