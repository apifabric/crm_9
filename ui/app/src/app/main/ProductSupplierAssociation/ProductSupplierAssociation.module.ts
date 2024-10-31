import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PRODUCTSUPPLIERASSOCIATION_MODULE_DECLARATIONS, ProductSupplierAssociationRoutingModule} from  './ProductSupplierAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProductSupplierAssociationRoutingModule
  ],
  declarations: PRODUCTSUPPLIERASSOCIATION_MODULE_DECLARATIONS,
  exports: PRODUCTSUPPLIERASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductSupplierAssociationModule { }