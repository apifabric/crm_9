import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesRepresentativeHomeComponent } from './home/SalesRepresentative-home.component';
import { SalesRepresentativeNewComponent } from './new/SalesRepresentative-new.component';
import { SalesRepresentativeDetailComponent } from './detail/SalesRepresentative-detail.component';

const routes: Routes = [
  {path: '', component: SalesRepresentativeHomeComponent},
  { path: 'new', component: SalesRepresentativeNewComponent },
  { path: ':id', component: SalesRepresentativeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SalesRepresentative-detail-permissions'
      }
    }
  },{
    path: ':sales_rep_id/CustomerSalesRepAssociation', loadChildren: () => import('../CustomerSalesRepAssociation/CustomerSalesRepAssociation.module').then(m => m.CustomerSalesRepAssociationModule),
    data: {
        oPermission: {
            permissionId: 'CustomerSalesRepAssociation-detail-permissions'
        }
    }
}
];

export const SALESREPRESENTATIVE_MODULE_DECLARATIONS = [
    SalesRepresentativeHomeComponent,
    SalesRepresentativeNewComponent,
    SalesRepresentativeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRepresentativeRoutingModule { }