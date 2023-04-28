import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Kauê';
  age: number = 33;
  job: string = 'Desenvolvedor Web Full Stack';
  hobbies = ['Surf', 'Skate', 'programar'];
  car = {
    name: 'Strada',
    company: 'Fiat',
    year: '2021',
  };
}
