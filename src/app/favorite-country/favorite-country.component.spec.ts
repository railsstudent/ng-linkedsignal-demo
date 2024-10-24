import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCountryComponent } from './favorite-country.component';

describe('FavoriteCountryComponent', () => {
  let component: FavoriteCountryComponent;
  let fixture: ComponentFixture<FavoriteCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteCountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
