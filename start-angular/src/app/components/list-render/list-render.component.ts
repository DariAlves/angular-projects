import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Renzo', type: 'Dog', age: 4 },
    { name: 'Margarete', type: 'Cat' },
    { name: 'Frida', type: 'Dog' },
    { name: 'Dog', type: 'Dog', age: 10 },
  ];

  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `Tha pet name is ${animal.name} and  ${
      animal.age ?? 1
    } years`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
