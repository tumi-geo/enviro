import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eia } from './eia';

describe('Eia', () => {
  let component: Eia;
  let fixture: ComponentFixture<Eia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
