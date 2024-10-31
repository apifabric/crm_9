import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CustomerSalesRepAssociation-new',
  templateUrl: './CustomerSalesRepAssociation-new.component.html',
  styleUrls: ['./CustomerSalesRepAssociation-new.component.scss']
})
export class CustomerSalesRepAssociationNewComponent {
  @ViewChild("CustomerSalesRepAssociationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}