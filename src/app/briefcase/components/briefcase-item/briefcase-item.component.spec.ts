import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcaseItemComponent } from './briefcase-item.component';

describe('BriefcaseItemComponent', () => {
  let component: BriefcaseItemComponent;
  let fixture: ComponentFixture<BriefcaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefcaseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
