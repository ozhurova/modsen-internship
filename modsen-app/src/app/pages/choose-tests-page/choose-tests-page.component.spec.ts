import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTestsPageComponent } from './choose-tests-page.component';

describe('ChooseTestsPageComponent', () => {
  let component: ChooseTestsPageComponent;
  let fixture: ComponentFixture<ChooseTestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseTestsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
