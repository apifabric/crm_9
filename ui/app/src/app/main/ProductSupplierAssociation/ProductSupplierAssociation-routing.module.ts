import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSupplierAssociationHomeComponent } from './home/ProductSupplierAssociation-home.component';
import { ProductSupplierAssociationNewComponent } from './new/ProductSupplierAssociation-new.component';
import { ProductSupplierAssociationDetailComponent } from './detail/ProductSupplierAssociation-detail.component';

const routes: Routes = [
  {path: '', component: ProductSupplierAssociationHomeComponent},
  { path: 'new', component: ProductSupplierAssociationNewComponent },
  { path: ':id', component: ProductSupplierAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProductSupplierAssociation-detail-permissions'
      }
    }
  }
];

export const PRODUCTSUPPLIERASSOCIATION_MODULE_DECLARATIONS = [
    ProductSupplierAssociationHomeComponent,
    ProductSupplierAssociationNewComponent,
    ProductSupplierAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSupplierAssociationRoutingModule { }