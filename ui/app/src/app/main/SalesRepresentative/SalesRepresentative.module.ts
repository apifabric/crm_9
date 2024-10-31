import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SALESREPRESENTATIVE_MODULE_DECLARATIONS, SalesRepresentativeRoutingModule} from  './SalesRepresentative-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SalesRepresentativeRoutingModule
  ],
  declarations: SALESREPRESENTATIVE_MODULE_DECLARATIONS,
  exports: SALESREPRESENTATIVE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SalesRepresentativeModule { }