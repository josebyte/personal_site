import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.sass']
})
export class BriefcaseComponent implements OnInit {

  projects = ['forodigitale', 'lifezona', 'sailingzona', 'fitnesszona', 'outletzona', 'bikezona', 'bikezona.tv', 'canalciclismo', 'canalchic'];

  constructor() { }

  ngOnInit(): void {
  }

}
