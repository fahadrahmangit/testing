import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DeletebrandComponent } from './deletebrand/deletebrand.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { DeleteSubcategoryComponent } from './delete-subcategory/delete-subcategory.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { DeletevendorComponent } from './deletevendor/deletevendor.component';
import { ProducttabComponent } from './welcome/producttab/producttab.component';
import { VendortabComponent } from './welcome/vendortab/vendortab.component';
import { SuppliertabComponent } from './welcome/suppliertab/suppliertab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationComponent,
    WelcomeComponent,
    DeletebrandComponent,
    AddbrandComponent,
    DeleteSubcategoryComponent,
    AddSubcategoryComponent,
    DeleteSupplierComponent,
    AddsupplierComponent,
    SupplierComponent,
    ProductComponent,
    AddvendorComponent,
    DeletevendorComponent,
    ProducttabComponent,
    VendortabComponent,
    SuppliertabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
