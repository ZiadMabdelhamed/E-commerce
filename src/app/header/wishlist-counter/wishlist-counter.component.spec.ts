import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistCounterComponent } from './wishlist-counter.component';

describe('WishlistCounterComponent', () => {
  let component: WishlistCounterComponent;
  let fixture: ComponentFixture<WishlistCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
