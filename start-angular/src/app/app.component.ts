import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Vegeta';

  userData = {
    email: 'vegeta@dbz.com',
    role: 'Admin',
  };

  title = 'start-angular';
}
