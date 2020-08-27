import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesServicesComponent } from './examples-services.component';

describe('ExamplesServicesComponent', () => {
  let component: ExamplesServicesComponent;
  let fixture: ComponentFixture<ExamplesServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplesServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
