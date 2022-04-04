import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsadirahComponent } from './creationsadirah.component';

describe('CreationsadirahComponent', () => {
  let component: CreationsadirahComponent;
  let fixture: ComponentFixture<CreationsadirahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationsadirahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsadirahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
