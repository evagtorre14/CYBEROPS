import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News2Page } from './news2.page';

describe('News2Page', () => {
  let component: News2Page;
  let fixture: ComponentFixture<News2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
