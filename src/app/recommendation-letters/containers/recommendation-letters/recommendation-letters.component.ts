import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation-letters',
  templateUrl: './recommendation-letters.component.html',
  styleUrls: ['./recommendation-letters.component.sass']
})
export class RecommendationLettersComponent implements OnInit {

  letters = ['sanluis', 'forodigital'];

  constructor() { }

  ngOnInit(): void {
  }

}
