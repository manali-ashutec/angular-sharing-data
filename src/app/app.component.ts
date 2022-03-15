import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  foodItems = [
    {
      id: 1,
      name: 'Samosa',
      price: '18',
    },
    {
      id: 2,
      name: 'pau bhagi',
      price: '18',
    },
    {
      id: 3,
      name: 'Dabeli',
      price: '18',
    },
  ];
}
