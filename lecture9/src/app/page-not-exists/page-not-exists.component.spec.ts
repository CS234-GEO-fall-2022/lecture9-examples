import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotExistsComponent } from './page-not-exists.component';

describe('PageNotExistsComponent', () => {
  let component: PageNotExistsComponent;
  let fixture: ComponentFixture<PageNotExistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotExistsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
