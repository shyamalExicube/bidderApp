import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionsPage } from './add-options.page';

describe('AddOptionsPage', () => {
  let component: AddOptionsPage;
  let fixture: ComponentFixture<AddOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
