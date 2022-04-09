import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  show: boolean = false;
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  showOrHideMessage(): void {
    this.show = !this.show;
    this.counter = this.counter + 1;
  }
}
