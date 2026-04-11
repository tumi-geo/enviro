import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitingComponent } from './permiting';

describe('PermitingComponent', () => {
  let component: PermitingComponent;
  let fixture: ComponentFixture<PermitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermitingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
