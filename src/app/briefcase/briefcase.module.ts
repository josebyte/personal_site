import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefcaseRoutingModule } from './briefcase-routing.module';
import { BriefcaseItemComponent } from './components/briefcase-item/briefcase-item.component';
import { BriefcaseComponent } from './containers/briefcase/briefcase.component';
import { ProjectComponent } from './components/project/project.component';


@NgModule({
  declarations: [BriefcaseItemComponent, BriefcaseComponent, ProjectComponent],
  imports: [
    CommonModule,
    BriefcaseRoutingModule
  ]
})
export class BriefcaseModule { }
