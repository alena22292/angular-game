import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  num:number = Math.floor(Math.random() * 10);
  date = new Date();

  // Constructor mostly using for server
  constructor() {
    setInterval(() => this.date = new Date(), 100);
  }
}
