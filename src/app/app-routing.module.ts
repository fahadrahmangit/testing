import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { DeletebrandComponent } from './deletebrand/deletebrand.component';
import { AddbrandComponent } from './addbrand/addbrand.component';
import { DeleteSubcategoryComponent } from './delete-subcategory/delete-subcategory.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { DeleteSupplierComponent } from './delete-supplier/delete-supplier.component';
import { AddsupplierComponent } from './addsupplier/addsupplier.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductComponent } from './product/product.component';
import { DeletevendorComponent } from './deletevendor/deletevendor.component';
import { AddvendorComponent } from './addvendor/addvendor.component';
import { ProducttabComponent } from './welcome/producttab/producttab.component';
import { VendortabComponent } from './welcome/vendortab/vendortab.component';
import { SuppliertabComponent } from './welcome/suppliertab/suppliertab.component';

const routes: Routes = [
  {path: '' , redirectTo: 'welcome' , pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'deletebrand', component: DeletebrandComponent},
  {path: 'addbrand', component: AddbrandComponent},
  {path: 'deletesubcategory', component: DeleteSubcategoryComponent},
  {path: 'addsubcategory', component: AddSubcategoryComponent},
  {path: 'deletesupplier', component: DeleteSupplierComponent},
  {path: 'addsupplier', component: AddsupplierComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'product', component: ProductComponent},
  {path: 'deletevendor', component: DeletevendorComponent},
  {path: 'addvendor', component: AddvendorComponent},
  {path: 'producttab', component: ProducttabComponent},
  {path: 'vendortab', component: VendortabComponent},
  {path: 'suppliertab', component: SuppliertabComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
