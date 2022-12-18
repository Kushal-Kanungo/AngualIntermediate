import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingBoxComponent } from './shipping-box.component';

describe('ShippingBoxComponent', () => {
  let component: ShippingBoxComponent;
  let fixture: ComponentFixture<ShippingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
