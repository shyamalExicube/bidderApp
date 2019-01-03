import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtemplatePage } from './addtemplate.page';

describe('AddtemplatePage', () => {
  let component: AddtemplatePage;
  let fixture: ComponentFixture<AddtemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtemplatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
