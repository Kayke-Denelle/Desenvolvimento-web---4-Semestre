import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio21Component } from './exercicio2.1.component';

describe('Exercicio21Component', () => {
  let component: Exercicio21Component;
  let fixture: ComponentFixture<Exercicio21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
