import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtlComponent } from './vtl.component';

describe('VtlComponent', () => {
  let component: VtlComponent;
  let fixture: ComponentFixture<VtlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VtlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
