import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Kauê Felipe';
  userData = {
    street: 'Servidão Plácido Ferreira da Rocha',
    number: 229,
    complement: 'casa 05',
  };
  title = 'curso-angular';
}
