import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getUsers();
  }

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `Tha pet name is ${animal.name} and  ${
      animal.age ?? 1
    } years`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

  getUsers(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
