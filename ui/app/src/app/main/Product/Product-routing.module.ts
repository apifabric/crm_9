import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './home/Product-home.component';
import { ProductNewComponent } from './new/Product-new.component';
import { ProductDetailComponent } from './detail/Product-detail.component';

const routes: Routes = [
  {path: '', component: ProductHomeComponent},
  { path: 'new', component: ProductNewComponent },
  { path: ':id', component: ProductDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Product-detail-permissions'
      }
    }
  },{
    path: ':product_id/Inventory', loadChildren: () => import('../Inventory/Inventory.module').then(m => m.InventoryModule),
    data: {
        oPermission: {
            permissionId: 'Inventory-detail-permissions'
        }
    }
},{
    path: ':product_id/OrderItem', loadChildren: () => import('../OrderItem/OrderItem.module').then(m => m.OrderItemModule),
    data: {
        oPermission: {
            permissionId: 'OrderItem-detail-permissions'
        }
    }
},{
    path: ':product_id/ProductCategoryAssociation', loadChildren: () => import('../ProductCategoryAssociation/ProductCategoryAssociation.module').then(m => m.ProductCategoryAssociationModule),
    data: {
        oPermission: {
            permissionId: 'ProductCategoryAssociation-detail-permissions'
        }
    }
},{
    path: ':product_id/ProductSupplierAssociation', loadChildren: () => import('../ProductSupplierAssociation/ProductSupplierAssociation.module').then(m => m.ProductSupplierAssociationModule),
    data: {
        oPermission: {
            permissionId: 'ProductSupplierAssociation-detail-permissions'
        }
    }
}
];

export const PRODUCT_MODULE_DECLARATIONS = [
    ProductHomeComponent,
    ProductNewComponent,
    ProductDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }