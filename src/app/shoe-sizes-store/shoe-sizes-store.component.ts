import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shoe-sizes-store',
  standalone: true,
  imports: [],
  template: `
    <p>
      shoe-sizes-store works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ShoeSizesStoreComponent {

}
