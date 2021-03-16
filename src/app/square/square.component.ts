import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  // all elements that starts from @ - are decorators;
  @Input() value: 'X' | 'O';
}
