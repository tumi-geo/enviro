import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTrade } from './animal-trade';

describe('AnimalTrade', () => {
  let component: AnimalTrade;
  let fixture: ComponentFixture<AnimalTrade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalTrade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalTrade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
