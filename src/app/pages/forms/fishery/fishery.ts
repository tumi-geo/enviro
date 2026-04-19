import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-fishery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input class="form-control mb-3"
      [(ngModel)]="data.vesselName"
      name="vesselName"
      placeholder="Vessel Name"
      required />

    <input class="form-control mb-3"
      [(ngModel)]="data.fishingArea"
      name="fishingArea"
      placeholder="Fishing Area"
      required />
  `
})
export class FisheryForm {
  @Input() data: any;
}
