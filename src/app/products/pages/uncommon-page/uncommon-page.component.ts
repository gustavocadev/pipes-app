import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export class UncommonPageComponent {
  // i18n select
  name: string = 'Fernando';
  gender: 'male' | 'female' = 'male';
  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Estefanya';
    this.gender = 'female';
  }

  // i18n plural
  clients = ['Fernando', 'Gustavo', 'Carlos', 'Estefanya', 'Luigy'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos personas esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient(): void {
    // delete last element
    this.clients.pop();
  }

  // key value pipe
  person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  // async pipe

  myObservableTimer = interval(2000).pipe(tap(console.log));

  promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved 🎭');
    }, 3500);
  });
}
