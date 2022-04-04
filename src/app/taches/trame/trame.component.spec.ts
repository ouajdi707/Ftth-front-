import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrameComponent } from './trame.component';

describe('TrameComponent', () => {
  let component: TrameComponent;
  let fixture: ComponentFixture<TrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
