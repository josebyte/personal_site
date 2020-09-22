import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvElementComponent } from './cv-element.component';

describe('CvElementComponent', () => {
  let component: CvElementComponent;
  let fixture: ComponentFixture<CvElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
