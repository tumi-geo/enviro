import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteManagement } from './waste-management';

describe('WasteManagement', () => {
  let component: WasteManagement;
  let fixture: ComponentFixture<WasteManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasteManagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasteManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
