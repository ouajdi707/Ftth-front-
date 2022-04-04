import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationidmComponent } from './creationidm.component';

describe('CreationidmComponent', () => {
  let component: CreationidmComponent;
  let fixture: ComponentFixture<CreationidmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationidmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationidmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
