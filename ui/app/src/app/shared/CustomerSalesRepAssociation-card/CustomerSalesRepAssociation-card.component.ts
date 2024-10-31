import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CustomerSalesRepAssociation-card.component.html',
  styleUrls: ['./CustomerSalesRepAssociation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CustomerSalesRepAssociation-card]': 'true'
  }
})

export class CustomerSalesRepAssociationCardComponent {


}