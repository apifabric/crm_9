import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCategoryAssociationHomeComponent } from './home/ProductCategoryAssociation-home.component';
import { ProductCategoryAssociationNewComponent } from './new/ProductCategoryAssociation-new.component';
import { ProductCategoryAssociationDetailComponent } from './detail/ProductCategoryAssociation-detail.component';

const routes: Routes = [
  {path: '', component: ProductCategoryAssociationHomeComponent},
  { path: 'new', component: ProductCategoryAssociationNewComponent },
  { path: ':id', component: ProductCategoryAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ProductCategoryAssociation-detail-permissions'
      }
    }
  }
];

export const PRODUCTCATEGORYASSOCIATION_MODULE_DECLARATIONS = [
    ProductCategoryAssociationHomeComponent,
    ProductCategoryAssociationNewComponent,
    ProductCategoryAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryAssociationRoutingModule { }