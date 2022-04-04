import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegieComponent } from './regie.component';

describe('RegieComponent', () => {
  let component: RegieComponent;
  let fixture: ComponentFixture<RegieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
