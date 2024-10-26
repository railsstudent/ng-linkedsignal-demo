import { Injectable, linkedSignal, signal } from '@angular/core';

const SHOE_SIZES = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
const SHOE_SIZES2 = [4, 5, 6, 7, 8, 9, 10, 11, 12]

// export const ShoeSizesStore = {
//   #shoeSizes: signal(SHOE_SIZES),
//   shoeSizes: #shoeSizes.asReadonly()

// }

@Injectable({
  providedIn: 'root'
})
export class ShoeSizesService {

  #shoeSizes = signal(SHOE_SIZES);
  shoeSizes = this.#shoeSizes.asReadonly();

  #currentShoeSize = linkedSignal<number[], number>({
    source: this.#shoeSizes,
    computation: (options, previous) => { 
      if (!previous) {
        // reset to the first size
        return options[0];        
      }

      // shoe size found in the new shoe size list
      // reset to the first shoe size because the new list does not contain the previous shoe size
      return options.includes(previous.value) ? previous.value : options[0];
    }
  });

  currentShoeSize = this.#currentShoeSize.asReadonly();

  updateShoeSize(value: number) {
    this.#currentShoeSize.set(value);
  }

  changeShoeSizes() {
    if (this.#shoeSizes()[0] === SHOE_SIZES2[0]) {
      this.#shoeSizes.set(SHOE_SIZES);
    } else {
      this.#shoeSizes.set(SHOE_SIZES2);
    }
  }

  updateLargestSize() {
    const largestSize = this.#shoeSizes().at(-1);
    if (typeof largestSize !== 'undefined') {
      this.updateShoeSize(largestSize);
    }
  }
}
