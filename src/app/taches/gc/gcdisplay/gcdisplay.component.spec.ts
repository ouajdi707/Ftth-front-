import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcdisplayComponent } from './gcdisplay.component';

describe('GcdisplayComponent', () => {
  let component: GcdisplayComponent;
  let fixture: ComponentFixture<GcdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
