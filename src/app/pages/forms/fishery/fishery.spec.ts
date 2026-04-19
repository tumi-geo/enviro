import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fishery } from './fishery';

describe('Fishery', () => {
  let component: Fishery;
  let fixture: ComponentFixture<Fishery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fishery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fishery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
