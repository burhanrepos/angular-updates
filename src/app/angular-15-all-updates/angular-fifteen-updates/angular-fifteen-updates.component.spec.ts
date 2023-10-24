import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFifteenUpdatesComponent } from './angular-fifteen-updates.component';

describe('AngularFifteenUpdatesComponent', () => {
  let component: AngularFifteenUpdatesComponent;
  let fixture: ComponentFixture<AngularFifteenUpdatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularFifteenUpdatesComponent]
    });
    fixture = TestBed.createComponent(AngularFifteenUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
