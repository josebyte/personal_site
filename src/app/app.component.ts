import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'josebamadrigal';

  constructor(
    public translate: TranslateService
  ) {
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
}
