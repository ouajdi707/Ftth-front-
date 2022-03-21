import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FscdisplayComponent } from './fscdisplay.component';

describe('FscdisplayComponent', () => {
  let component: FscdisplayComponent;
  let fixture: ComponentFixture<FscdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FscdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FscdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
