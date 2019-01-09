import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedetailsPage } from './templatedetails.page';

describe('TemplatedetailsPage', () => {
  let component: TemplatedetailsPage;
  let fixture: ComponentFixture<TemplatedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
