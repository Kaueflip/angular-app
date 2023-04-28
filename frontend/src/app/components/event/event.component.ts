import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  show: boolean = true;

  showMessage(): void {
    //this.show = false;
    this.show = !this.show; //toogle
  }
}
