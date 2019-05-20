import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaPage } from './formula.page';

describe('FormulaPage', () => {
  let component: FormulaPage;
  let fixture: ComponentFixture<FormulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
