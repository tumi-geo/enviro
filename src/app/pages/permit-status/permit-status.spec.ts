import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitStatusComponent } from './permit-status';

describe('PermitStatusComponent', () => {
  let component: PermitStatusComponent;
  let fixture: ComponentFixture<PermitStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermitStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermitStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
