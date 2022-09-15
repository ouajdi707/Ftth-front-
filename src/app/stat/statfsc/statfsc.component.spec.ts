import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatfscComponent } from './statfsc.component';

describe('StatfscComponent', () => {
  let component: StatfscComponent;
  let fixture: ComponentFixture<StatfscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatfscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatfscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
