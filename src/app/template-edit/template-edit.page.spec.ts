import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEditPage } from './template-edit.page';

describe('TemplateEditPage', () => {
  let component: TemplateEditPage;
  let fixture: ComponentFixture<TemplateEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
