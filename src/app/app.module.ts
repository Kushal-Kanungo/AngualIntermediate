import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { ShippingBoxComponent } from './shipping-box/shipping-box.component';
import { RedBgDirective } from './red-bg.directive';
import { VisibleDirective } from './visible.directive';
import { ScaleDirective } from './scale.directive';
import { AddProductComponent } from './add-product/add-product.component';

@NgModule({
  declarations: [AppComponent, BoxComponent, ShippingBoxComponent, RedBgDirective, VisibleDirective, ScaleDirective, AddProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    TimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
