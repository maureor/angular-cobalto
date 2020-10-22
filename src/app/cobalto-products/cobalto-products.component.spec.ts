import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobaltoProductsComponent } from './cobalto-products.component';

describe('CobaltoProductsComponent', () => {
  let component: CobaltoProductsComponent;
  let fixture: ComponentFixture<CobaltoProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobaltoProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobaltoProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
