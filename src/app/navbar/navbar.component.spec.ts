import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { DialogModule } from 'primeng/dialog';
import { PrefixPipe } from '../prefix.pipe';
import { ReactiveFormsModule } from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[DialogModule, ReactiveFormsModule,],
      declarations: [ NavbarComponent, AddProductComponent, PrefixPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
