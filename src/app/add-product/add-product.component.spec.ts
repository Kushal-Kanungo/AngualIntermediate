import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { DialogModule } from 'primeng/dialog';
import { PrefixPipe } from '../prefix.pipe';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[DialogModule, ReactiveFormsModule,],
      declarations: [ AddProductComponent, PrefixPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a product', ()=>{
    expect(component.addUserHandle()).toBeTrue
  })
});
