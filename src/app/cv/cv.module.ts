import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';

import { CvContainerComponent } from './containers/cv-container/cv-container.component';
import { CvElementComponent } from './components/cv-element/cv-element.component';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [CvContainerComponent, CvElementComponent],
    imports: [
        CommonModule,
        CvRoutingModule,
        TranslateModule
    ]
})
export class CvModule { }
