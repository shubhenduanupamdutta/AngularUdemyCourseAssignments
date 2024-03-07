import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrl: './assignment4.component.css',
})
export class Assignment4Component {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onEmitting(eventData: number) {
    if (eventData % 2 === 0) {
      this.evenNumbers.push(eventData);
    } else {
      this.oddNumbers.push(eventData);
    }
  }
}
