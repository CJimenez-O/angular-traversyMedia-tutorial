import { Component } from '@angular/core';

@Component({
  // selector index.html
  selector: 'app-root',
  // file in app folder
  templateUrl: './app.component.html',
  // style url
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties and methods
  title: string = 'Property';

  funcFromApp(){
    console.log('from app')
  }
}
