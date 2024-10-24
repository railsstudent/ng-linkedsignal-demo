import { ChangeDetectionStrategy, Component, computed, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

const LAST_PAGE = 200;

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [FormsModule],
  template: `
     <h2>Update the shorthand version of the linked signal</h2>
    <div>
      <button (click)="pageNumber.set(1)">First</button>
      <button (click)="changePageNumber(-1)">Prev</button>    
      <button (click)="changePageNumber(1)">Next</button>
      <button (click)="pageNumber.set(lastPage)">Last</button>
      <p>Go to: <input type="number" [(ngModel)]="pageNumber" /></p>
    </div>
    <p>Page Number: {{ pageNumber() }}</p>
    <p>Current Page Number {{ currentPageNumber() }}</p>
    <p>Percentage of completion: {{ percentageOfCompletion() }}</p>
  `,
  styles: `
    div {
      display: flex;
      align-items: center;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PaginationComponent {
  lastPage = LAST_PAGE;
  pageNumber = signal(1)

  currentPageNumber = linkedSignal<number, number>({ 
    source: this.pageNumber,
    computation: (pageNumber, previous) => {
      if (!previous) {
        return pageNumber;
      }

      return (pageNumber < 1 || pageNumber > LAST_PAGE) ? previous.value : pageNumber
    }
  });

  percentageOfCompletion = computed(() => `${((this.currentPageNumber() * 1.0) * 100 / LAST_PAGE).toFixed(2)}%`);

  changePageNumber(offset: number) {
    this.pageNumber.update((value) => Math.max(1, Math.min(LAST_PAGE, value + offset)));
  }
}
