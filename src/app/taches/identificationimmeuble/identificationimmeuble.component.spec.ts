import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationimmeubleComponent } from './identificationimmeuble.component';

describe('IdentificationimmeubleComponent', () => {
  let component: IdentificationimmeubleComponent;
  let fixture: ComponentFixture<IdentificationimmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificationimmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationimmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
