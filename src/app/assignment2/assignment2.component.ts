import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {
  userName = '';

  isUserNameEmpty() {
    return this.userName === '';
  }

  resetUserName() {
    this.userName = '';
  }
}
