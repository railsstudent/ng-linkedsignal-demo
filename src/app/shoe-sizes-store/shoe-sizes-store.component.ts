import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ShoeSizesService } from '../services/shoe-sizes.service';

@Component({
  selector: 'app-shoe-sizes-store',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Reset linked signal after updating source</h2>
    <p>Source: {{ shoeSizes() }}</p>
    <p>Shoe size: {{ currentShoeSize() }}</p>
    <p>Shoe index: {{ index() }}</p>
    <div>
      <button (click)="changeShoeSizes()">Update shoe size source</button>
      <button (click)="updateLargestSize()">Set to the largest size</button>
    </div>
    <label for="shoeSize">
      <span>Choose a shoe size: </span>
      <select id="shoeSize" name="shoeSize" [ngModel]="currentShoeSize()" (ngModelChange)="updateShoeSize($event)">
        @for (size of shoeSizes(); track size) {
          <option [ngValue]="size">{{ size }}</option>
        }
      </select>
    </label>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ShoeSizesStoreComponent {
  shoeSizesService = inject(ShoeSizesService);
  
  currentShoeSize = this.shoeSizesService.currentShoeSize;
  shoeSizes = this.shoeSizesService.shoeSizes;

  index = computed(() => this.shoeSizes().indexOf(this.currentShoeSize()));

  constructor() {
    this.updateShoeSize(5);
  }

  updateShoeSize(value: number) {
    this.shoeSizesService.updateShoeSize(value);
  }

  changeShoeSizes() {
    this.shoeSizesService.changeShoeSizes();
  }

  updateLargestSize() {
    this.shoeSizesService.updateLargestSize();
  }
}
