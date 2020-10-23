import { Component, OnInit } from '@angular/core';
import * as EuropassParser from 'europass-parser';

import CVJoseba from '../../../../assets/jsonCV/josebaES.json';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.sass']
})
export class CvContainerComponent implements OnInit {

  cv;

  constructor(
  ) {
    this.cv = CVJoseba;
  }

  ngOnInit() {
/*
    EuropassParser('assets/pdf-cv/esnew.pdf');
    console.log(EuropassParser('assets/pdf-cv/esnew.pdf'));
*/
  }

}
