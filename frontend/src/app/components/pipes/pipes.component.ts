import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  someText: string = 'Algum outro texto usando um dado.';
  todayDate = Date();
  real: number = 5.05;
}
