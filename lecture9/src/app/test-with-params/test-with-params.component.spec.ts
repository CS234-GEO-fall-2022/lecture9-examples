import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWithParamsComponent } from './test-with-params.component';

describe('TestWithParamsComponent', () => {
  let component: TestWithParamsComponent;
  let fixture: ComponentFixture<TestWithParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestWithParamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestWithParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
