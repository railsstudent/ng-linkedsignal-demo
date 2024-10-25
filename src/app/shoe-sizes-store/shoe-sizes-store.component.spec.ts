import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeSizesStoreComponent } from './shoe-sizes-store.component';

describe('ShoeSizesStoreComponent', () => {
  let component: ShoeSizesStoreComponent;
  let fixture: ComponentFixture<ShoeSizesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeSizesStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeSizesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
