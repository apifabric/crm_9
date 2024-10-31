import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ProductCategoryAssociation-card.component.html',
  styleUrls: ['./ProductCategoryAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ProductCategoryAssociation-card]': 'true'
  }
})

export class ProductCategoryAssociationCardComponent {


}