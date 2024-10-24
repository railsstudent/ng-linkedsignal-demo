import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-country',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Update source of Linked Signal Demo</h2>
    <p>Your input: <input [(ngModel)]="favoriteCountry" /></p>
    <button (click)="reset()">Reset</button>
    <button (click)="changeCountry()">Update source and linked signal</button>
    <p>Favorite Country: {{ favoriteCountry() }}</p>
    <p>Reversed Country: {{ reversedFavoriteCountry() }}</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class FavoriteCountryComponent {
  country = signal('United State of America')

  favoriteCountry = linkedSignal({
    source: this.country,
    computation: (options) => options
  });

  reversedFavoriteCountry = computed(() => this.favoriteCountry().split('').toReversed().join(''));

  changeCountry() {
    // update the source of the linked signal
    this.country.set('Canada');

    // updated the linked signal because it is a writable signal
    this.favoriteCountry.update((c) => c.toUpperCase());
  }

  reset() {
    this.country.set('United States of America');
  }
}
