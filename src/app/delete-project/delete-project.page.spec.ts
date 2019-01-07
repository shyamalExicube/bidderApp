import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectPage } from './delete-project.page';

describe('DeleteProjectPage', () => {
  let component: DeleteProjectPage;
  let fixture: ComponentFixture<DeleteProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
