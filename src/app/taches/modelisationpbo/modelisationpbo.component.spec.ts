import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelisationpboComponent } from './modelisationpbo.component';

describe('ModelisationpboComponent', () => {
  let component: ModelisationpboComponent;
  let fixture: ComponentFixture<ModelisationpboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelisationpboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelisationpboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
