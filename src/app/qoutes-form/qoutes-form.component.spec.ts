import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesFormComponent } from './qoutes-form.component';

describe('QoutesFormComponent', () => {
  let component: QoutesFormComponent;
  let fixture: ComponentFixture<QoutesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
