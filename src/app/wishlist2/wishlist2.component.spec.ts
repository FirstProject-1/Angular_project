import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wishlist2Component } from './wishlist2.component';

describe('Wishlist2Component', () => {
  let component: Wishlist2Component;
  let fixture: ComponentFixture<Wishlist2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wishlist2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wishlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
