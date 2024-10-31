import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ProductSupplierAssociation-new',
  templateUrl: './ProductSupplierAssociation-new.component.html',
  styleUrls: ['./ProductSupplierAssociation-new.component.scss']
})
export class ProductSupplierAssociationNewComponent {
  @ViewChild("ProductSupplierAssociationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}