import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.sass']
})
export class CvContainerComponent implements OnInit {

  blocks = [
    'acedemic',
    'complementary',
    'books',
    'jobs',
    'knowledge',
    'others',
    'langs'
  ];

  constructor() { }

  ngOnInit() {
  }

}
