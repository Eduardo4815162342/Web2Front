/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JogadorCreateComponent } from './jogador-create.component';

describe('JogadorCreateComponent', () => {
  let component: JogadorCreateComponent;
  let fixture: ComponentFixture<JogadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogadorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
