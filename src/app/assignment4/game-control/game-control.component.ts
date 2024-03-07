import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  @Output() emittedEvent = new EventEmitter<number>();
  count = 0;
  myInterval;

  startEmitting() {
    this.myInterval = setInterval(() => {
      this.count++;
      this.emittedEvent.emit(this.count);
      console.log(this.count);
    }, 1000);
  }

  stopEmitting() {
    clearInterval(this.myInterval);
  }
}
