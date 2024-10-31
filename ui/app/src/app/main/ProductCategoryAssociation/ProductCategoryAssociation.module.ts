import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PRODUCTCATEGORYASSOCIATION_MODULE_DECLARATIONS, ProductCategoryAssociationRoutingModule} from  './ProductCategoryAssociation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ProductCategoryAssociationRoutingModule
  ],
  declarations: PRODUCTCATEGORYASSOCIATION_MODULE_DECLARATIONS,
  exports: PRODUCTCATEGORYASSOCIATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductCategoryAssociationModule { }