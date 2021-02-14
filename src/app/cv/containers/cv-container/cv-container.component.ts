import { Component, OnInit } from '@angular/core';
import * as EuropassParser from 'europass-parser';

import CVJoseba from '../../../../assets/jsonCV/josebaES.json';
import BooksJoseba from '../../../../assets/jsonCV/booksJosebaES.json';
import CoursesJoseba from '../../../../assets/jsonCV/coursesJosebaES.json';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.sass']
})
export class CvContainerComponent implements OnInit {

  sections;

  cv;
  books;
  courses;

  constructor(
  ) {
    this.cv = CVJoseba;
    this.books = BooksJoseba;
    this.courses = CoursesJoseba;

    this.sections = [
      {name: 'educationTrainings', items: this.cv.profile.educationTrainings},
      {name: 'complementaryTrainings', items: this.courses},
      {name: 'complementaryTrainings', items: this.books},
      {name: 'workExperiences', items: this.cv.profile.workExperiences},
      {name: 'organisationalSkills', items: this.cv.profile.organisationalSkills}
    ];
  }

  ngOnInit() {
/*
    EuropassParser('assets/pdf-cv/esnew.pdf');
    console.log(EuropassParser('assets/pdf-cv/esnew.pdf'));
*/
  }

  print(){
    window.print();
  }

}
