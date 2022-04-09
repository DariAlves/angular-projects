import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Renzo', type: 'Dog' },
    { name: 'Margarete', type: 'Cat' },
    { name: 'Frida', type: 'Dog' },
    { name: 'Dog', type: 'Dog' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
