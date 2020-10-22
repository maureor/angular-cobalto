import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobaltoAboutComponent } from './cobalto-about.component';

describe('CobaltoAboutComponent', () => {
  let component: CobaltoAboutComponent;
  let fixture: ComponentFixture<CobaltoAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobaltoAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobaltoAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
