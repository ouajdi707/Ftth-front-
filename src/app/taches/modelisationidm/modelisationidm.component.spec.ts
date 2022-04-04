import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelisationidmComponent } from './modelisationidm.component';

describe('ModelisationidmComponent', () => {
  let component: ModelisationidmComponent;
  let fixture: ComponentFixture<ModelisationidmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelisationidmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelisationidmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
