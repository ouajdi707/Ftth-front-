import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GccreateComponent } from './gccreate.component';

describe('GccreateComponent', () => {
  let component: GccreateComponent;
  let fixture: ComponentFixture<GccreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GccreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GccreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
