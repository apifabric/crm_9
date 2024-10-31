import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProductSupplierAssociation-card.component.html',
  styleUrls: ['./ProductSupplierAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProductSupplierAssociation-card]': 'true'
  }
})

export class ProductSupplierAssociationCardComponent {


}