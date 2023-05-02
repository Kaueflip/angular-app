import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    {
      name: 'Eva',
      type: 'Cat',
      age: 7,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, deserunt.',
    },
    {
      name: 'Chico',
      type: 'Cat',
      age: 6,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, deserunt.',
    },
    {
      name: 'Bob',
      type: 'Dog',
      age: 11,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, deserunt.',
    },
    {
      name: 'Pé de Pano',
      type: 'Horse',
      age: 9,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, deserunt.',
    },
  ];

  animalDetails = '';
  showAge(animal: Animal): void {
    this.animalDetails = `O ${animal.name} tem ${animal.age} anos.`;
  }
}
