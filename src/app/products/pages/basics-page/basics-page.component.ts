import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``,
})
export class BasicsPageComponent {
  nameLower = 'fernando';
  nameUpper = 'FERNANDO';
  fullname = 'fErNanDo HeRReRa';

  customDate = new Date();
}
