import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ShippingBoxComponent } from './shipping-box/shipping-box.component';
import { RedBgDirective } from './red-bg.directive';
import { VisibleDirective } from './visible.directive';
import { ScaleDirective } from './scale.directive';
import { AddProductComponent } from './add-product/add-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrefixPipe } from './prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ShippingBoxComponent,
    RedBgDirective,
    VisibleDirective,
    ScaleDirective,
    AddProductComponent,
    NavbarComponent,
    PrefixPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    TimelineModule,
    BrowserAnimationsModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
