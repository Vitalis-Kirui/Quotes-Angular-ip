import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesDetailsComponent } from './qoutes-details.component';

describe('QoutesDetailsComponent', () => {
  let component: QoutesDetailsComponent;
  let fixture: ComponentFixture<QoutesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
