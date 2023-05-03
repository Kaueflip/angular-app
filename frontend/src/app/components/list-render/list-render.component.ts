import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [];

  /*   animal: Animal = {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 4,
    description: 'Algum texto aqui.',
  }; */
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  animalDetails = '';
  showAge(animal: Animal): void {
    this.animalDetails = `O ${animal.name} tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal) {
    //console.log('Removendo animal');
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
