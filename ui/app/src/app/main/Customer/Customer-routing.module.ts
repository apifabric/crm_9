import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './home/Customer-home.component';
import { CustomerNewComponent } from './new/Customer-new.component';
import { CustomerDetailComponent } from './detail/Customer-detail.component';

const routes: Routes = [
  {path: '', component: CustomerHomeComponent},
  { path: 'new', component: CustomerNewComponent },
  { path: ':id', component: CustomerDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Customer-detail-permissions'
      }
    }
  },{
    path: ':customer_id/Address', loadChildren: () => import('../Address/Address.module').then(m => m.AddressModule),
    data: {
        oPermission: {
            permissionId: 'Address-detail-permissions'
        }
    }
},{
    path: ':customer_id/Contact', loadChildren: () => import('../Contact/Contact.module').then(m => m.ContactModule),
    data: {
        oPermission: {
            permissionId: 'Contact-detail-permissions'
        }
    }
},{
    path: ':customer_id/CustomerSalesRepAssociation', loadChildren: () => import('../CustomerSalesRepAssociation/CustomerSalesRepAssociation.module').then(m => m.CustomerSalesRepAssociationModule),
    data: {
        oPermission: {
            permissionId: 'CustomerSalesRepAssociation-detail-permissions'
        }
    }
},{
    path: ':customer_id/Order', loadChildren: () => import('../Order/Order.module').then(m => m.OrderModule),
    data: {
        oPermission: {
            permissionId: 'Order-detail-permissions'
        }
    }
}
];

export const CUSTOMER_MODULE_DECLARATIONS = [
    CustomerHomeComponent,
    CustomerNewComponent,
    CustomerDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }