import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { CvContainerComponent } from './containers/cv-container/cv-container.component';
import { CvElementComponent } from './components/cv-element/cv-element.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [CvContainerComponent, CvElementComponent, HeaderComponent],
    imports: [
      CommonModule,
      CvRoutingModule,
      TranslateModule,
      SharedModule
    ]
})
export class CvModule { }
