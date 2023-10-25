import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSixteenUpdatesComponent } from './angular-sixteen-updates.component';

describe('AngularSixteenUpdatesComponent', () => {
  let component: AngularSixteenUpdatesComponent;
  let fixture: ComponentFixture<AngularSixteenUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularSixteenUpdatesComponent]
    });
    fixture = TestBed.createComponent(AngularSixteenUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
