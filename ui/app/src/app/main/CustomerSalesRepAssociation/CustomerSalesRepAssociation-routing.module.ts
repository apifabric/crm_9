import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerSalesRepAssociationHomeComponent } from './home/CustomerSalesRepAssociation-home.component';
import { CustomerSalesRepAssociationNewComponent } from './new/CustomerSalesRepAssociation-new.component';
import { CustomerSalesRepAssociationDetailComponent } from './detail/CustomerSalesRepAssociation-detail.component';

const routes: Routes = [
  {path: '', component: CustomerSalesRepAssociationHomeComponent},
  { path: 'new', component: CustomerSalesRepAssociationNewComponent },
  { path: ':id', component: CustomerSalesRepAssociationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CustomerSalesRepAssociation-detail-permissions'
      }
    }
  }
];

export const CUSTOMERSALESREPASSOCIATION_MODULE_DECLARATIONS = [
    CustomerSalesRepAssociationHomeComponent,
    CustomerSalesRepAssociationNewComponent,
    CustomerSalesRepAssociationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerSalesRepAssociationRoutingModule { }