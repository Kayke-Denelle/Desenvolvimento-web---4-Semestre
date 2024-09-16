import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculeMediaComponent } from './calcule-media.component';

describe('CalculeMediaComponent', () => {
  let component: CalculeMediaComponent;
  let fixture: ComponentFixture<CalculeMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculeMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculeMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
