import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  isUpperCase: boolean = false;
  orderBy?: keyof Hero | '';

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: 'blue',
    },
    {
      name: 'Batman',
      canFly: false,
      color: 'black',
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: 'red',
    },
    {
      name: 'Robin',
      canFly: false,
      color: 'green',
    },
    {
      name: 'Lantern Green',
      canFly: true,
      color: 'green',
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
