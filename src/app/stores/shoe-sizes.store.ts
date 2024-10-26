import { linkedSignal, signal } from '@angular/core';

const SHOE_SIZES = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
const SHOE_SIZES2 = [4, 5, 6, 7, 8, 9, 10, 11, 12];

const _shoeSizes = signal(SHOE_SIZES);
const _currentShoeSize = linkedSignal<number[], number>({
  source: _shoeSizes,
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

export const ShoeSizesStore = {
  shoeSizes: _shoeSizes.asReadonly(),
  currentShoeSize: _currentShoeSize.asReadonly(),
  updateShoeSize(value: number) {
    _currentShoeSize.set(value);
  },
  changeShoeSizes() {
    if (_shoeSizes()[0] === SHOE_SIZES2[0]) {
      _shoeSizes.set(SHOE_SIZES);
    } else {
      _shoeSizes.set(SHOE_SIZES2);
    }
  },
  updateLargestSize() {
    const largestSize = _shoeSizes().at(-1);
    if (typeof largestSize !== 'undefined') {
      this.updateShoeSize(largestSize);
    }
  }
}
