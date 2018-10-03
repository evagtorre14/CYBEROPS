import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSingleChartPage } from './news-single-chart.page';

describe('NewsSingleChartPage', () => {
  let component: NewsSingleChartPage;
  let fixture: ComponentFixture<NewsSingleChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSingleChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSingleChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
