import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeSizesComponent } from './shoe-sizes.component';

describe('ShoeSizesComponent', () => {
  let component: ShoeSizesComponent;
  let fixture: ComponentFixture<ShoeSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeSizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoeSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
