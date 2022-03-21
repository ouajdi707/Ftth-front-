import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcupdateComponent } from './gcupdate.component';

describe('GcupdateComponent', () => {
  let component: GcupdateComponent;
  let fixture: ComponentFixture<GcupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
