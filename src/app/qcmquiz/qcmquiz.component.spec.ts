import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcmquizComponent } from './qcmquiz.component';

describe('QcmquizComponent', () => {
  let component: QcmquizComponent;
  let fixture: ComponentFixture<QcmquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcmquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcmquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
