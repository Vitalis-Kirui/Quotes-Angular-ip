import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QoutesParentComponent } from './qoutes-parent.component';

describe('QoutesParentComponent', () => {
  let component: QoutesParentComponent;
  let fixture: ComponentFixture<QoutesParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QoutesParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QoutesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
