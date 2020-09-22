import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendationLettersRoutingModule } from './recommendation-letters-routing.module';
import { RecommendationLettersComponent } from './containers/recommendation-letters/recommendation-letters.component';
import { LetterComponent } from './components/letter/letter.component';


@NgModule({
  declarations: [RecommendationLettersComponent, LetterComponent],
  imports: [
    CommonModule,
    RecommendationLettersRoutingModule
  ]
})
export class RecommendationLettersModule { }
