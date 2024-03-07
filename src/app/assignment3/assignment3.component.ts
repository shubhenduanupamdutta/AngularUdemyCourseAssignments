import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css',
})
export class Assignment3Component {
  shouldDisplaySecret = false;
  clickLog: string[] = []

  changeDisplay() {
    this.clickLog.push(new Date().toString());
    this.shouldDisplaySecret = !this.shouldDisplaySecret;
  }
}
