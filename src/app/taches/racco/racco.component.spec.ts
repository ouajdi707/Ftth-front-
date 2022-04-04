import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaccoComponent } from './racco.component';

describe('RaccoComponent', () => {
  let component: RaccoComponent;
  let fixture: ComponentFixture<RaccoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaccoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
