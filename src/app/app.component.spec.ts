import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShippingBoxComponent } from './shipping-box/shipping-box.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DialogModule } from 'primeng/dialog';
import { PrefixPipe } from './prefix.pipe';
import { ProductsService } from './products.service';
import { VisibleDirective } from './visible.directive';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DialogModule,
        ReactiveFormsModule

        
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        ShippingBoxComponent,
        AddProductComponent,
        PrefixPipe,
        VisibleDirective
      ],
      providers:[ProductsService]
    }).compileComponents();
    let productService = TestBed.inject(ProductsService)
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('data should be passed here', ()=>{
    const appfixture = TestBed.createComponent(AppComponent) 
    const appComp = appfixture.componentInstance;
    let dataService = appfixture.debugElement.injector.get(ProductsService)
    appfixture.detectChanges();
    expect(dataService.products[0]).toEqual(appComp.products[0])
  })

});
