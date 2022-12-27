import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShippingBoxComponent } from './shipping-box/shipping-box.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DialogModule } from 'primeng/dialog';
import { PrefixPipe } from './prefix.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DialogModule
        
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        ShippingBoxComponent,
        AddProductComponent,
        PrefixPipe,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
