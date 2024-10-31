import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CUSTOMERSALESREPASSOCIATION_MODULE_DECLARATIONS, CustomerSalesRepAssociationRoutingModule} from  './CustomerSalesRepAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CustomerSalesRepAssociationRoutingModule
  ],
  declarations: CUSTOMERSALESREPASSOCIATION_MODULE_DECLARATIONS,
  exports: CUSTOMERSALESREPASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomerSalesRepAssociationModule { }