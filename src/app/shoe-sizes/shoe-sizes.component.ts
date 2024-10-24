import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

const SHOE_SIZES = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
const SHOE_SIZES2 = [4, 5, 6, 7, 8, 9, 10, 11, 12]

@Component({
  selector: 'app-shoe-sizes',
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
      <select id="shoeSize" name="shoeSize" [(ngModel)]="currentShoeSize">
        @for (size of shoeSizes(); track size) {
          <option [ngValue]="size">{{ size }}</option>
        }
      </select>
    </label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ShoeSizesComponent {
  shoeSizes = signal(SHOE_SIZES);
  currentShoeSize = linkedSignal<number[], number>({
    source: this.shoeSizes,
    computation: (options, previous) => { 
      if (!previous) {
        // reset to the first size
        return options[0];        
      }

      // shoe size found in the new shoe size list
      if (options.includes(previous.value)) {
        return previous.value;
      }

      // reset to the first shoe size because the new list does not contain the previous shoe size
      return options[0]; 
    }
  });

  index = computed(() => this.shoeSizes().indexOf(this.currentShoeSize()));

  changeShoeSizes() {
    if (this.shoeSizes()[0] === SHOE_SIZES2[0]) {
      this.shoeSizes.set(SHOE_SIZES);
    } else {
      this.shoeSizes.set(SHOE_SIZES2);
    }
  }

  updateLargestSize() {
    const largestSize = this.shoeSizes().at(-1);
    if (typeof largestSize !== 'undefined') {
      this.currentShoeSize.set(largestSize); 
    }
  }
}
