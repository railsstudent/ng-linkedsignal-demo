import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favorite-country',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Update the shorthand version of the linked signal. Set and update the signal</h2>
    <p>Update country: <input [(ngModel)]="country" /></p>
    <p>Update favorite country: <input [(ngModel)]="favoriteCountry" /></p>
    <button (click)="country.set('United States of America')">Reset</button>
    <button (click)="changeCountry()">Update source and linked signal</button>
    <p>Country: {{ country() }}</p>
    <p>Favorite Country: {{ favoriteCountry() }}</p>
    <p>Reversed Country: {{ reversedFavoriteCountry() }}</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class FavoriteCountryComponent {
  country = signal('United States of America')

  favoriteCountry = linkedSignal(() => this.country());
  reversedFavoriteCountry = computed(() => this.favoriteCountry().split('').toReversed().join(''));

  changeCountry() {
    // update the source of the linked signal
    this.country.set('Canada');

    // updated the linked signal because it is a writable signal
    this.favoriteCountry.update((c) => c.toUpperCase());
  }
}
